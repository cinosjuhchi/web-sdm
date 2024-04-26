<?php

namespace App\Http\Controllers\Api;

use App\Models\Pegawai;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
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
        
        $pegawai = $pegawai->paginate(20);

        return PegawaiResource::collection($pegawai);   
    }

    public function total()
    {
        $pegawai = Pegawai::all()->count();
        $korpo = Pegawai::where('bagian', 'KORPOLAIRUD')->count();
        $ditpol = Pegawai::where('bagian', 'DITPOLAIR')->count();
        $polair = Pegawai::where('bagian', 'POLAIR')->count();
        $bagian = [
            'all_personel'=> $pegawai, 
            'korpo'=> $korpo,
            'ditpol'=> $ditpol,
            'polair'=> $polair
            
        ];
        return response()->json($bagian);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validated();
        Pegawai::create([
            'pangkat' => $data['pangkat'],
            'nama' => $data['nama'],
            'nrp' => $data['nrp'],
            'dikum' => $data['dikum'],
            'diklat' => $data['diklat'],
            'dikpol' => $data['dikpol'],
            'dikbangspes' => $data['dikbangspes'],
            'fungsi_polair' => $data['fungsi_polair'],
            'bagian' => $data['bagian'],
        ]);
        return response()->json('Data Berhasil Ditambah', 200);
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
