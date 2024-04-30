<?php

namespace App\Models;

use App\Models\Pegawai;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Mutasi extends Model
{
    use HasFactory;
    protected $guarded = ['id'];    
    
    public function pegawai(): BelongsTo
    {
        return $this->belongsTo(Pegawai::class, 'nrp', 'nrp');
    }

}
