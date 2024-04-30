<?php

namespace App\Models;

use App\Models\Mutasi;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pegawai extends Model
{
    use HasFactory;
    protected $table = 'pegawais';
    protected $guarded = ['id'];    
    public function mutasi(): HasMany
    {
        return $this->hasMany(Mutasi::class, 'nrp');
    }
}
