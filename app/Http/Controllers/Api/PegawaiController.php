<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PegawaiResource;
use App\Models\Pegawai;
use Illuminate\Http\Request;

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
        $pegawai = $pegawai->paginate(10);
        return PegawaiResource::collection($pegawai);
    }

    
    public function filter(Request $request)
    {
        $pegawai = Pegawai::all();
        $bagian = explode(',', $request->query('bagian'));
        if($request->query('bagian')) {
            $pegawai = $pegawai->whereIn('bagian', $bagian);
        }

        if ($request->query('dikum')) {
            $dikum = explode(',', $request->query('dikum'));
            
            $pegawai = $pegawai->where(function($query) use ($dikum){
                foreach ($dikum as $value) {
                    $query->orWhere('dikum', 'like', '%'.$value.'%');
                }
            });
        }

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
