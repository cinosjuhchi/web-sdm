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
        $keyword = $request->query('keyword');
        if($keyword == 'pangkat')
        {
        $pangkatCounts = Pegawai::select('pangkat', DB::raw('COUNT(*) as total'))
        ->where('bagian', 'KORPOLAIRUD')
        ->groupBy('pangkat')
        ->get();
        return response()->json($pangkatCounts);
        }
        if($keyword == 'dikum')
        {
        $dikumCounts = Pegawai::select(
        DB::raw("CASE 
                    WHEN dikum LIKE '%SMA%' THEN 'SMA'
                    WHEN dikum LIKE '%D3%' THEN 'D3'
                    WHEN dikum LIKE '%S1%' THEN 'S1'
                    WHEN dikum LIKE '%S2%' THEN 'S2'
                    WHEN dikum LIKE '%S3%' THEN 'S3'
                    ELSE 'Lainnya' 
                    END as dikum_group"),
            DB::raw('COUNT(*) as total')
        )
        ->where('bagian', 'KORPOLAIRUD')
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
                            WHEN fungsi_polair LIKE '%BA IDIK%' OR fungsi_polair LIKE '%POLAIR%' THEN 'BAIDIK'
                            WHEN fungsi_polair LIKE '%JURU MUDI%' THEN 'JURU MUDI'
                            ELSE 'LAINNYA'
                            END as fungsi_group"),
                DB::raw('COUNT(*) as total')
            )
            ->where('bagian', 'KORPOLAIRUD')
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
        $pegawai = $pegawai->where('bagian', 'DITPOLUDARA')->orderBy('created_at', 'desc');
        $pegawai = $pegawai->paginate(700);

        return PegawaiResource::collection($pegawai);   
    }

    public function total()
    {
        $pegawai = Pegawai::all()->count();
        $korpo = Pegawai::where('bagian', 'KORPOLAIRUD')->count();
        $ditpol = Pegawai::where('bagian', 'DITPOLUDARA')->count();
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pegawai $pegawai)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pegawai $pegawai)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pegawai $pegawai)
    {
        //
    }
}
