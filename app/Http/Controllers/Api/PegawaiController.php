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
    public function index()
    {
        $pegawai = Pegawai::paginate(10);
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
            $dikumArray = [];
            foreach ($dikum as $value) {
                $dikumArray = '%' .$value. '%';
            }
            $pegawai = $pegawai->where(function($query) use ($dikumArray){
                foreach ($dikumArray as $value) {
                    $query->orWhere('dikum', 'like', $value);
                }
            });
        }

        return PegawaiResource::collection($pegawai);   
    }

    public function total()
    {
        $pegawai = Pegawai::all()->count();
        return response()->json($pegawai);
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
