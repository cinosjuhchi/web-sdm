<?php

namespace App\Http\Controllers\Api;

use App\Models\Rekap;
use App\Exports\RekapExports;
use App\Models\Mutasi;
use App\Models\Pegawai;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Excel;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\MutasiResource;
use App\Http\Resources\PegawaiResource;

class PegawaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $pegawai = Pegawai::query();
        if($request->query('keyword')) {
            $search = $request->query('keyword');
            $pegawai->where('nrp', 'like', $search.'%');
        }
        $pegawai = $pegawai->latest()->paginate(10);        
        return PegawaiResource::collection($pegawai);
    }
    public function export(Excel $excel)
    {
        return $excel->download(new RekapExports, 'pegawai.xlsx');
    }

    public function dataMutasi(Request $request)
    {
        $mutasi = Mutasi::query();
        $mutasi->with('pegawai')->get();
        if($request->query('keyword')){
            $search = $request->query('keyword');
            $mutasi->where('nrp', 'like', $search.'%');
        }
        $mutasi = $mutasi->latest()->paginate(10);
        return MutasiResource::collection($mutasi);
    }

    public function piechart(Request $request)
    {
        $bagian = $request->query('bagian');
        $keyword = $request->query('keyword');
        if($keyword == 'pangkat')
        {
        $pangkatCounts = Pegawai::select('pangkat', DB::raw('COUNT(*) as total'))
        ->where('bagian', $bagian)
        ->groupBy('pangkat')
        ->get();
        return response()->json($pangkatCounts);
        }
        if($keyword == 'dikum')
        {
        $dikumCounts = Pegawai::select(
        DB::raw("CASE 
                    WHEN dikum LIKE '%SMA%' OR dikum LIKE '%SMK%' OR dikum LIKE '%SMU%' THEN 'SMA'
                    WHEN dikum LIKE '%D3%' THEN 'D3'
                    WHEN dikum LIKE '%S1%' THEN 'S1'
                    WHEN dikum LIKE '%S2%' THEN 'S2'
                    WHEN dikum LIKE '%S3%' THEN 'S3'
                    ELSE 'Lainnya' 
                    END as dikum_group"),
            DB::raw('COUNT(*) as total')
        )
        ->where('bagian', $bagian)
        ->groupBy('dikum_group')
        ->get();
        return response()->json($dikumCounts);
        }
        if($keyword == 'fungsi')
        {
            $fungsiCounts = Pegawai::select(
                DB::raw("CASE 
                            WHEN fungsi_polair LIKE '%KOMLEK%' THEN 'KMLK'
                            WHEN fungsi_polair LIKE '%PA SAR%' THEN 'SAR'
                            WHEN fungsi_polair LIKE '%DASPA%' THEN 'DSPA'
                            WHEN fungsi_polair LIKE '%PA NAUTIKA%' THEN 'PANK'
                            WHEN fungsi_polair LIKE '%PATK%' THEN 'PATK'
                            WHEN fungsi_polair LIKE '%PA IDIK%' THEN 'PAIDK'
                            WHEN fungsi_polair LIKE '%PA LAKA%' THEN 'PAAKA LAU'
                            WHEN fungsi_polair LIKE '%DASBA%' THEN 'DSBPA'
                            WHEN fungsi_polair LIKE '%BA NAUTIKA%' THEN 'BANK'
                            WHEN fungsi_polair LIKE '%BA HARWAT KAPAL%' THEN 'BATK'
                            WHEN fungsi_polair LIKE '%DASTA%' THEN 'DSTPA'
                            WHEN fungsi_polair LIKE '%SELAM%' THEN 'SELAM'
                            WHEN fungsi_polair LIKE '%BA IDIK%' OR fungsi_polair LIKE '%POLAIR%' THEN 'BAIDIK'
                            WHEN fungsi_polair LIKE '%TIPE C%' OR fungsi_polair LIKE '%TYPE C%' THEN 'JURU MUDI'
                            ELSE 'LAINNYA'
                            END as fungsi_group"),
                DB::raw('COUNT(*) as total')
            )
            ->where('bagian', $bagian)
            ->whereNotNull('fungsi_polair')
            ->groupBy('fungsi_group')
            ->get();
            return response()->json($fungsiCounts);
        }
         
    }

    
    public function filter(Request $request)
    {
        $pegawai = Pegawai::query();
        $dikum = explode(',', $request->query('dikum'));
        $dikpol = explode(',', $request->query('dikpol'));
        $bagian = explode(',', $request->query('bagian'));            
        
        
            
        if ($request->query('dikum')) {
            $dikumValues = explode(',', $request->query('dikum'));
            $pegawai = $pegawai->where('dikum', 'like', '%'.$dikumValues[0].'%'); // Gunakan nilai pertama sebagai filter awal
            for ($i = 1; $i < count($dikumValues); $i++) {
                $pegawai = $pegawai->orWhere('dikum', 'like', '%'.$dikumValues[$i].'%'); // Tambahkan query 'orWhere' untuk nilai selanjutnya
            }
        }
        
        if ($request->query('dikpol')) {
            $dikpolValues = explode(',', $request->query('dikpol'));
            $pegawai = $pegawai->where('dikpol', 'like', '%'.$dikpolValues[0].'%');
            for ($i = 1; $i < count($dikpolValues); $i++) {
                $pegawai = $pegawai->orWhere('dikpol', 'like', '%'.$dikpolValues[$i].'%');
            }
        }
        if ($request->query('fungsi')) {
            $fValues = explode(',', $request->query('fungsi'));
            $pegawai = $pegawai->where('fungsi_polair', 'like', '%'.$fValues[0].'%');
            for ($i = 1; $i < count($fValues); $i++) {
                $pegawai = $pegawai->orWhere('fungsi_polair', 'like', '%'.$fValues[$i].'%');
            }
        }
        if ($request->query('diklat')) {
            $diklatValues = explode(',', $request->query('diklat'));
            $pegawai = $pegawai->where('diklat', 'like', '%'.$diklatValues[0].'%');
            for ($i = 1; $i < count($diklatValues); $i++) {
                $pegawai = $pegawai->orWhere('diklat', 'like', '%'.$diklatValues[$i].'%');
            }
        }

        if($request->query('keyword')) {
            $search = $request->query('keyword');
            $pegawai->where('nrp', 'like', $search.'%');
        }
        
        $pegawai = $pegawai->paginate(20);

        return PegawaiResource::collection($pegawai);   
    }

    public function total()
    {
        $pegawai = Pegawai::all()->count();
        $korpo = Pegawai::where('bagian', 'KORPOLAIRUD')->count();
        $ditpol = Pegawai::where('bagian', 'DITPOLAIR')->count();
        $polair = Pegawai::where('bagian', 'DITPOLUDARA')->count();
        $bagian = [
            'all_personel'=> $pegawai, 
            'korpo'=> $korpo,
            'ditpol'=> $ditpol,
            'ditpoludara'=> $polair
            
        ];
        return response()->json($bagian);
    }

    public function getTotalByPangkat(Request $request)
    {
    $bulanIni = date('m');
    $tahunIni = date('Y');



    // Periksa apakah ada data rekaps untuk bulan dan tahun yang diminta
    $isDataExists = Rekap::whereMonth('created_at', $bulanIni)
                        ->whereYear('created_at', $tahunIni)
                        ->exists();

    // Jika tidak ada data rekaps untuk bulan dan tahun yang diminta
    if (!$isDataExists) {
        // Ambil semua data pegawai
        $pegawai = Pegawai::all();

        // Looping untuk setiap pegawai dan masukkan ke dalam tabel rekaps
        foreach ($pegawai as $peg) {
            Rekap::create([
                'pangkat' => $peg->pangkat,
                'nama' => $peg->nama,
                'nrp' => $peg->nrp,
                'dikum' => $peg->dikum,
                'diklat' => $peg->diklat,
                'dikpol' => $peg->dikpol,
                'dikbangspes' => $peg->dikbangspes,
                'fungsi_polair' => $peg->fungsi_polair,
                'bagian' => $peg->bagian,
                'fungsi_poludara' => $peg->fungsi_poludara,
                // Tambahkan field lainnya sesuai kebutuhan
            ]);
        }
        }

        $bagian = $request->query('bagian');
        $bulan = $request->query('month');
        $tahun = $request->query('year');



        $totals = DB::table('rekaps as p1')
            ->select('p1.pangkat',
            DB::raw('SUM(CASE WHEN p1.dikum LIKE "%SMP%" THEN 1 ELSE 0 END) as SMP'),
            DB::raw('SUM(CASE WHEN p1.dikum LIKE "%SMA%" OR p1.dikum LIKE "%SMU%" OR p1.dikum LIKE "%SMK%" THEN 1 ELSE 0 END) as SMA'),
            DB::raw('SUM(CASE WHEN p1.dikum LIKE "%D4%" THEN 1 ELSE 0 END) as D4'),
            DB::raw('SUM(CASE WHEN p1.dikum LIKE "%D3%" THEN 1 ELSE 0 END) as D3'),
            DB::raw('SUM(CASE WHEN p1.dikum LIKE "%D2%" THEN 1 ELSE 0 END) as D2'),
            DB::raw('SUM(CASE WHEN p1.dikum LIKE "%D1%" THEN 1 ELSE 0 END) as D1'),
            DB::raw('SUM(CASE WHEN p1.dikum LIKE "%S3%" THEN 1 ELSE 0 END) as S3'),
            DB::raw('SUM(CASE WHEN p1.dikum LIKE "%S2%" THEN 1 ELSE 0 END) as S2'),
            DB::raw('SUM(CASE WHEN p1.dikum LIKE "%S1%" THEN 1 ELSE 0 END) as S1'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%ANT I%" OR p1.diklat LIKE "%ANT - I%" THEN 1 ELSE 0 END) as ANT_I'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%ANT II%" OR p1.diklat LIKE "%ANT - II%" THEN 1 ELSE 0 END) as ANT_II'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%ANT III%" OR p1.diklat LIKE "%ANT - III%" THEN 1 ELSE 0 END) as ANT_III'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%ANT IV%" OR p1.diklat LIKE "%ANT - IV%" THEN 1 ELSE 0 END) as ANT_IV'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%ANT V%" OR p1.diklat LIKE "%ANT - V%" THEN 1 ELSE 0 END) as ANT_V'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%ATT I%" OR p1.diklat LIKE "%ATT - I%" THEN 1 ELSE 0 END) as ATT_I'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%ATT II%" OR p1.diklat LIKE "%ATT - II%" THEN 1 ELSE 0 END) as ATT_II'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%ATT III%" OR p1.diklat LIKE "%ATT - III%" THEN 1 ELSE 0 END) as ATT_III'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%ATT V%" OR p1.diklat LIKE "%ATT - V%" THEN 1 ELSE 0 END) as ATT_V'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%DPMKN II%" OR p1.diklat LIKE "%DPMKN - II%" THEN 1 ELSE 0 END) as DPMKN_II'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%DPMKN III%" OR p1.diklat LIKE "%DPMKN - III%" THEN 1 ELSE 0 END) as DPMKN_III'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%DPDKN II%" OR p1.diklat LIKE "%DPDKN - II%" THEN 1 ELSE 0 END) as DPDKN_II'),
            DB::raw('SUM(CASE WHEN p1.diklat LIKE "%DPDKN III%" OR p1.diklat LIKE "%DPDKN - III%" THEN 1 ELSE 0 END) as DPDKN_III'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%SEBA%" THEN 1 ELSE 0 END) as SEBA'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%SBP%" THEN 1 ELSE 0 END) as SBP'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%SETUKPA%" THEN 1 ELSE 0 END) as SETUKPA'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%SEPA%" THEN 1 ELSE 0 END) as SEPA'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%SEKBANG TNI%" THEN 1 ELSE 0 END) as SEKBANG_TNI'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%AKPL%" THEN 1 ELSE 0 END) as AKPL'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%PTIK%" THEN 1 ELSE 0 END) as PTIK'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%SESKO AU%" OR p1.dikpol LIKE "%SESKOAU%" THEN 1 ELSE 0 END) as SESKOAU'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%SESKOAL%" OR p1.dikpol LIKE "%SESKO AL%" THEN 1 ELSE 0 END) as SESKOAL'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%SESKO AL%" OR p1.dikpol LIKE "%SESKO AL%" THEN 1 ELSE 0 END) as SESKOAL'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%SESPIM%" OR p1.dikpol LIKE "%SESPIMMA%" THEN 1 ELSE 0 END) as SESPIMMA'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%SESPIMMEN%" OR p1.dikpol LIKE "%SESPIMEN%" THEN 1 ELSE 0 END) as SESPIMMEN'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%PIM TK I%" OR p1.dikpol LIKE "%PIM TIK - I%" THEN 1 ELSE 0 END) as PIM_TK_I'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%PIM TK II%" OR p1.dikpol LIKE "%PIM TIK - II%" THEN 1 ELSE 0 END) as PIM_TK_II'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%SESPIMTI%" THEN 1 ELSE 0 END) as SESPIMTI'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%PKA%" THEN 1 ELSE 0 END) as PKA'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%LEMHANAS%" THEN 1 ELSE 0 END) as LEMHANAS'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%PAG PA%" THEN 1 ELSE 0 END) as PAGPA'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%PAG BA%" THEN 1 ELSE 0 END) as PAGBA'),
            DB::raw('SUM(CASE WHEN p1.dikpol LIKE "%PAG TA%" THEN 1 ELSE 0 END) as PAGTA'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%SAR%" THEN 1 ELSE 0 END) as SAR'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%DASPA%" OR p1.fungsi_polair LIKE "%DSPA%" THEN 1 ELSE 0 END) as DSPA'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%PA NAUTIKA%" OR p1.fungsi_polair LIKE "%PANK%" THEN 1 ELSE 0 END) as PANK'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%PATK%" THEN 1 ELSE 0 END) as PATK'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%PA IDIK%" OR p1.fungsi_polair LIKE "%PAIDK%" THEN 1 ELSE 0 END) as PAIDK'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%PA LAKA%" OR p1.fungsi_polair LIKE "%PA LAKA LAUT%" THEN 1 ELSE 0 END) as PA_LAKA_LAUT'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%BA LAKA%" OR p1.fungsi_polair LIKE "%BA LAKA LAUT%" THEN 1 ELSE 0 END) as BA_LAKA_LAUT'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%DASBA%" OR p1.fungsi_polair LIKE "%DSBPA%" THEN 1 ELSE 0 END) as DSBPA'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%BA NAUTIKA%" OR p1.fungsi_polair LIKE "%PANK%" THEN 1 ELSE 0 END) as BANK'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%BATK%" THEN 1 ELSE 0 END) as BATK'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%DASTA%" OR p1.fungsi_polair LIKE "%DSTPA%" THEN 1 ELSE 0 END) as DSTPA'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%KOMLEK%" OR p1.fungsi_polair LIKE "%KMLK%" THEN 1 ELSE 0 END) as KMLK'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%BA IDIK%" OR p1.fungsi_polair LIKE "%BAIDIK%" THEN 1 ELSE 0 END) as BAIDIK'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%HARWAT KAPAL%" THEN 1 ELSE 0 END) as HARWAT_KAPAL'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%JURI MUDI KAPAL TYPE C%" THEN 1 ELSE 0 END) as JURI_MUDI_KAPAL_TYPE_C'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%SELAM%" THEN 1 ELSE 0 END) as SELAM'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%KOMANDAN KAPAL TYPE B%" THEN 1 ELSE 0 END) as KOMANDAN_KAPAL_TYPE_B'),
            DB::raw('SUM(CASE WHEN p1.fungsi_polair LIKE "%KOMANDAN KAPAL TYPE C%" THEN 1 ELSE 0 END) as KOMANDAN_KAPAL_TYPE_C'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%INTEL%" THEN 1 ELSE 0 END) as INTEL'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%SERSE%" THEN 1 ELSE 0 END) as SERSE'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%PROPAM%" THEN 1 ELSE 0 END) as PROPAM'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%LOGISTIK%" THEN 1 ELSE 0 END) as LOGISTIK'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%KEUANGAN%" THEN 1 ELSE 0 END) as KEUANGAN'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%BHS INGGRIS%" THEN 1 ELSE 0 END) as BHS_INGGRIS'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%BHS FRANCIS%" THEN 1 ELSE 0 END) as BHS_FRANCIS'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%BHS ARAB%" THEN 1 ELSE 0 END) as BHS_ARAB'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%BHS MANDARIN%" THEN 1 ELSE 0 END) as BHS_MANDARIN'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%BARANG DAN JASA%" THEN 1 ELSE 0 END) as BARANG_DAN_JASA'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%SATPAM GADA PRATAMA%" THEN 1 ELSE 0 END) as SATPAM_GADA_PRATAMA'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%SDM%" THEN 1 ELSE 0 END) as SDM'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%TP. LUNDUP%" THEN 1 ELSE 0 END) as TP_LUNDUP'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%TP. KORUPSI%" THEN 1 ELSE 0 END) as TP_KORUPSI'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%TP. ILLEGAL FISHING%" THEN 1 ELSE 0 END) as TP_ILLEGAL_FISHING'),
            DB::raw('SUM(CASE WHEN p1.dikbangspes LIKE "%TP. ILLEGAL NARKOBA%" THEN 1 ELSE 0 END) as TP_ILLEGAL_NARKOBA'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%SEKOLAH PENERBANGAN TNI AU%" THEN 1 ELSE 0 END) as SEKOLAH_PENERBANGAN_TNI_AU'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%TRANSISI PNB HELI ENSTROM 480B%" THEN 1 ELSE 0 END) as TRANSISI_PNB_HELI_ENSTROM_480B'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%TIPE RATING HELI NBO-150%" THEN 1 ELSE 0 END) as TIPE_RATING_HELI_NBO_150'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%MEKANIK UDARA%" THEN 1 ELSE 0 END) as MEKANIK_UDARA'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%CAPTAINCY HELI NBO-150%" THEN 1 ELSE 0 END) as CAPTAINCY_HELI_NBO_150'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%AVITION AND AIRPORT SECURITY%" THEN 1 ELSE 0 END) as AVITION_AND_AIRPORT_SECURITY'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%KONVESI LAN%" THEN 1 ELSE 0 END) as KONVESI_LAN'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%KONVESI LAN NBO 105%" THEN 1 ELSE 0 END) as KONVESI_LAN_NBO_105'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%KONVESI LAN NBO 2000%" THEN 1 ELSE 0 END) as KONVESI_LAN_NBO_2000'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%STAND BY FORCE%" THEN 1 ELSE 0 END) as STAND_BY_FORCE'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%SAR AU%" THEN 1 ELSE 0 END) as SAR_AU'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%CONVERSI CASSA%" THEN 1 ELSE 0 END) as CONVERSI_CASSA'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%INSPECTOR%" THEN 1 ELSE 0 END) as INSPECTOR'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%APPU%" THEN 1 ELSE 0 END) as APPU'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%CRM%" THEN 1 ELSE 0 END) as CRM'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%SUBDIT KATROF%" THEN 1 ELSE 0 END) as SUBDIT_KATROF'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%PROGKOMP%" THEN 1 ELSE 0 END) as PROGKOMP'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%IGITAP%" THEN 1 ELSE 0 END) as IGITAP'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%FAN COURSE 105%" THEN 1 ELSE 0 END) as FAN_COURSE_105'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%KOTENJENSI KEAMANAN%" THEN 1 ELSE 0 END) as KOTENJENSI_KEAMANAN'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%KDT%" THEN 1 ELSE 0 END) as KDT'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%MEKUD%" THEN 1 ELSE 0 END) as MEKUD'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%ATA%" THEN 1 ELSE 0 END) as ATA'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%HAUPINAS 365%" THEN 1 ELSE 0 END) as HAUPINAS_365'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%CASA 212%" THEN 1 ELSE 0 END) as CASA_212'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%ELEMENTARY%" THEN 1 ELSE 0 END) as ELEMENTARY'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%PRAMUGARI%" THEN 1 ELSE 0 END) as PRAMUGARI'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%NEGOSIATOR%" THEN 1 ELSE 0 END) as NEGOSIATOR'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%TYPE RATING HELI 412%" THEN 1 ELSE 0 END) as TYPE_RATING_HELI_412'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%COMERCIAL PILOT LICENSE%" THEN 1 ELSE 0 END) as COMERCIAL_PILOT_LICENSE'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%PENDIDIKAN DAN PELATIHAN FLIGHT%" THEN 1 ELSE 0 END) as PENDIDIKAN_DAN_PELATIHAN_FLIGHT'),
            DB::raw('SUM(CASE WHEN p1.fungsi_poludara LIKE "%GUDANG%" THEN 1 ELSE 0 END) as GUDANG')
            )
            ->whereMonth('p1.created_at', $bulan)
            ->whereYear('p1.created_at', $tahun)
            ->whereRaw('p1.created_at = (SELECT MAX(created_at) FROM rekaps WHERE nrp = p1.nrp)')
            ->where('bagian', $bagian)            
            ->groupBy('p1.pangkat')
            ->orderByRaw("
                CASE
                    WHEN p1.pangkat = 'IRJEN' THEN 1
                    WHEN p1.pangkat = 'BRIGJEN' THEN 2
                    WHEN p1.pangkat = 'KBP' THEN 3
                    WHEN p1.pangkat = 'AKBP' THEN 4
                    WHEN p1.pangkat = 'KOMPOL' THEN 5
                    WHEN p1.pangkat = 'AKP' THEN 6
                    WHEN p1.pangkat = 'IPTU' THEN 7
                    WHEN p1.pangkat = 'IPDA' THEN 8
                    WHEN p1.pangkat = 'AIPTU' THEN 9
                    WHEN p1.pangkat = 'AIPDA' THEN 10
                    WHEN p1.pangkat = 'BRIPKA' THEN 11
                    WHEN p1.pangkat = 'BRIGADIR' THEN 12
                    WHEN p1.pangkat = 'BRIPTU' THEN 13
                    WHEN p1.pangkat = 'BRIPDA' THEN 14
                    WHEN p1.pangkat = 'ABRIP' THEN 15
                    WHEN p1.pangkat = 'ABRIPTU' THEN 16
                    WHEN p1.pangkat = 'ABRIPDA' THEN 17
                    WHEN p1.pangkat = 'BHARAKA' THEN 18
                    WHEN p1.pangkat = 'BHARATU' THEN 19
                    WHEN p1.pangkat = 'BHARADA' THEN 20
                    WHEN p1.pangkat = 'PNS IV' THEN 21
                    WHEN p1.pangkat = 'PNS III' THEN 22
                    WHEN p1.pangkat = 'PNS II' THEN 23
                    WHEN p1.pangkat = 'PNS I' THEN 24
                    WHEN p1.pangkat = 'CPNS' THEN 25
                    ELSE 26
                END
            ")
            ->get();
        return response()->json($totals);
    }

    public function mutasi(Request $request)
    {
        $data = $request->validate([
            'nrp' => 'required',
            'pangkat_lama' => 'required|string',
            'pangkat_baru' => 'required|string'
        ]);

        $pegawai = Pegawai::where('nrp', $data['nrp'])->first();
        $rekap = new Rekap();

        // Pastikan pegawai ditemukan sebelum memperbarui atributnya
        if ($pegawai) {
            // Perbarui atribut pangkat pegawai
            $pegawai->pangkat = $data['pangkat_baru'];
            $pegawai->save();
            $rekap->nama = $pegawai->nama;
            $rekap->pangkat = $pegawai->pangkat;
            $rekap->nrp = $pegawai->nrp;
            $rekap->dikum = $pegawai->dikum;
            $rekap->dikpol = $pegawai->dikpol;
            $rekap->diklat = $pegawai->diklat;
            $rekap->fungsi_polair = $pegawai->fungsi_polair;
            $rekap->dikbangspes = $pegawai->dikbangspes;
            $rekap->bagian = $pegawai->bagian;
            $rekap->save();
    
            // Simpan informasi mutasi ke dalam database
            $mutasi = new Mutasi();
            $mutasi->pangkat_lama = $data['pangkat_lama'];
            $mutasi->pangkat_baru = $data['pangkat_baru'];
            $mutasi->nrp = $data['nrp'];
            $mutasi->save();
            
            // Kirim respon berhasil jika proses berhasil
            return response()->json(['message' => 'Mutasi berhasil.']);
        } else {
            // Kirim respon gagal jika pegawai tidak ditemukan
            return response()->json(['message' => 'Pegawai dengan NRP tersebut tidak ditemukan.'], 404);
        }

    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([                        
            'pangkat' => 'required|string|max:255',
            'nrp' => 'required|max:255',
            'nama' => 'required|string|max:255',
            'dikum' => 'nullable|string|max:255',
            'dikpol' => 'nullable|string|max:255',
            'diklat' => 'nullable|string|max:255',
            'fungsi_polair' => 'nullable|string|max:255',
            'fungsi_poludara' => 'nullable|string|max:255',
            'dikbangspes' => 'nullable|string|max:255',
            'bagian' => 'required',
        ]);
        Pegawai::create([
            'pangkat' => $data['pangkat'],
            'nama' => $data['nama'],
            'nrp' => $data['nrp'],
            'dikum' => $data['dikum'],
            'diklat' => $data['diklat'],
            'dikpol' => $data['dikpol'],
            'dikbangspes' => $data['dikbangspes'],
            'fungsi_polair' => $data['fungsi_polair'],
            'fungsi_poludara' => $data['fungsi_poludara'],
            'bagian' => $data['bagian'],
        ]);
        Rekap::create([
            'pangkat' => $data['pangkat'],
            'nama' => $data['nama'],
            'nrp' => $data['nrp'],
            'dikum' => $data['dikum'],
            'diklat' => $data['diklat'],
            'dikpol' => $data['dikpol'],
            'dikbangspes' => $data['dikbangspes'],
            'fungsi_polair' => $data['fungsi_polair'],
            'fungsi_poludara' => $data['fungsi_poludara'],
            'bagian' => $data['bagian'],
        ]);
        return response()->json(["message" => "Update berhasil"], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($nrp)
    {
        $data = $nrp;
        $pegawai = Pegawai::where('nrp', $data)->first();
        return response()->json($pegawai);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $data = $request->validate([            
            'id' => 'required',
            'nrp' => 'nullable|max:255',
            'nama' => 'nullable|string|max:255',
            'dikum' => 'nullable|string|max:255',
            'dikpol' => 'nullable|string|max:255',
            'diklat' => 'nullable|string|max:255',
            'fungsi_polair' => 'nullable|string|max:255',
            'fungsi_poludara' => 'nullable|string|max:255',
            'dikbangspes' => 'nullable|string|max:255',
        ]);
        $id = $data['id'];
        $pegawai = Pegawai::find($id);
        $pegawai->update([
            'nrp' => $request->nrp,
            'nama' => $request->nama,
            'dikum' => $request->dikum,
            'dikpol' => $request->dikpol,
            'diklat' => $request->diklat,
            'fungsi_polair' => $request->fungsi_polair,
            'fungsi_poludara' => $request->fungsi_poludara,
            'dikbangspes' => $request->dikbangspes,
            // tambahkan field lainnya sesuai kebutuhan
        ]);        
        $rekap = Rekap::where('nrp', $data['nrp'])->first();
        $rekap->create([
            'nrp' => $request->nrp,
            'pangkat' => $request->pangkat,
            'nama' => $request->nama,
            'dikum' => $request->dikum,
            'dikpol' => $request->dikpol,
            'diklat' => $request->diklat,
            'fungsi_polair' => $request->fungsi_polair,
            'dikbangspes' => $request->dikbangspes,
            // tambahkan field lainnya sesuai kebutuhan
        ]);     
        return response()->json(["message" => "Update berhasil"], 200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pegawai $pegawai)
    {
        //
    }
}
