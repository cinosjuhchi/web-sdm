<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PegawaiResource extends JsonResource
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
            'nama' => $this->nama,
            'pangkat' => $this->pangkat,
            'kantor_bagian' => $this->bagian,
            'fungsi_polair' => $this->fungsi_polair,
            'fungsi_poludara' => $this->fungsi_poludara,
            'dikpol' => $this->dikpol,
            'dikum' => $this->dikum,
            'diklat' => $this->diklat,
            'dikbangspes' => $this->dikbangspes,
        ];
    }
}
