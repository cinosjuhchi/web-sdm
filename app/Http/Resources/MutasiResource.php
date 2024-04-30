<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MutasiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nrp' => $this->nrp,
            'pangkat_lama' => $this->pangkat_lama,
            'pangkat_baru' => $this->pangkat_baru,
            'nama' => $this->pegawai->nama,
            'divisi' => $this->pegawai->bagian,
            'ditambahkan' => $this->created_at->format('H:i, d M Y'),
        ];
    }
}
