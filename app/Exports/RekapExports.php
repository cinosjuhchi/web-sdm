<?php

namespace App\Exports;

use App\Models\Pegawai;
use Maatwebsite\Excel\Concerns\FromCollection;

class RekapExports implements FromCollection
{
    public function collection()
    {
        return Pegawai::all();
    }
}
