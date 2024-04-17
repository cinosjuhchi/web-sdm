<?php

namespace Database\Seeders;

use App\Models\Pegawai;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PegawaiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [                
                "nrp"=> 67120531,
                "nama"=> "MOHAMMAD YASSIN KOSASIH, S.I.K., M.Si., M.Tr.Opsla.",
                "pangkat"=> "IRJEN POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL, PTIK,SESKO AL,LEMHANAS",
                "dikum"=> "S2(2004)",
                "diklat"=> null,
                "dikbangspes" => "INTEL, BRIMOB,, VIP PROTECTION USA"
            ],
            [                
                "nrp"=> null,
                "nama"=> null,
                "pangkat"=> "BRIJEN POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> null,
                "dikum"=> null,
                "diklat"=> null,
                "dikbangspes" => null
            ],
            [                
                "nrp"=> 66070599,
                "nama"=> "BUDI SANTOSO, S.H., M. M.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> "PA DAS POLAIR(1995),",
                "dikpol"=> "SEPA(1991), SELAPA(2006), SESPIM(2009)",
                "dikum"=> "S2(2013)",
                "diklat"=> null,
                "dikbangspes" => "PA IDIK PERAIRAN(1996)"
            ],
            [                
                "nrp"=> 72020475,
                "nama"=> "EDWARD INDHARMAWAN EKA CHANDRA, S.I.K., M.H.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKABRI(1996), PTIK(2004), SESPIMMEN(2013), SESPIMTI(2021)",
                "dikum"=> " S2(2006)",
                "diklat"=> null,
                "dikbangspes" => " RESERSE(1996), BAHASA INGGRIS(1997)"
            ],
            [                
                "nrp"=> 70110330,
                "nama"=> "HERI SULISTYA BUDI SANTOSO, S.I.K., M. Hum.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL(1994), PTIK(2003), SESPIM(2012), LEMHANAS(2022)",
                "dikum"=> " S2(2011)",
                "diklat"=> null,
                "dikbangspes" => " BRIMOB(1996), BHS INGGRIS(1998), KIBI PAJA AKPOL(2001), IDIK TP NARKOBA(2004), SISPAMOBVIT(2021)"
            ],
            [                
                "nrp"=> 68060363,
                "nama"=> "I WAYAN SUPARTHA YADNYA, S.I.K.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> "PA IDIK POLAIR(1993),DASPA POLAIR(1995),DASPA POLAIR(1997)",
                "dikpol"=> "AKPOL(TH.1990), PTIK(2001), SESPIM 2005, PKN TK I(2020)",
                "dikum"=> " S1  (2001)",
                "diklat"=> null,
                "dikbangspes" => "KIBI HANKAM(2002),"
            ],
            [                
                "nrp"=> 75020376,
                "nama"=> "PUJI HENDRO WIBOWO, S.H., S.I.K.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL(1996), PTIK(2005), SESPIMMEN(2013), SESPIMTI(2021)",
                "dikum"=> "S1(2002)",
                "diklat"=> null,
                "dikbangspes" => " SERSE(1997), KIBI PAJA AKPOL(1997),  PA TIPITER(2000) IDIK TP NARKOBA(2005)"
            ],
            [                
                "nrp"=> 69060420,
                "nama"=> "MOCHAMAD ZAINUL, S.I.K., M.H.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL(1992), PTIK(2007), SESPIMMEN(2010), SESKOAL(2023)",
                "dikum"=> "S2(2014)",
                "diklat"=> null,
                "dikbangspes" => null
            ],
            [                
                "nrp"=> 69060169,
                "nama"=> "RUDY SUHENDRA PARAPAT",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL(1990), SELAPA(2004), SESPIM(2008)",
                "dikum"=> "SMA(1987)",
                "diklat"=> null,
                "dikbangspes" => "PENGGALANGAN INTELIJEN(1992), INTELIJEN(1994), SERSE (1994) PROPAM(2015)"
            ],
            [                
                "nrp"=> 71120461,
                "nama"=> "SADES OLOAN MARULI PARDEDE, S.I.K.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKABRI (1995), PTIK(2005), PIM TK II(2016)",
                "dikum"=> "S1  (2005)",
                "diklat"=> null,
                "dikbangspes" => " INTEL(2005),  BHS. PERANCIS(2006),  BHS. INGGRIS FT. RESKRIM(2008)"
            ],
            [                
                "nrp"=> 69020272,
                "nama"=> "ANDY KIRNANDA WIJAYA, S.H.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKABRI(1991), SELAPA(2002), SESPIM(2008)",
                "dikum"=> " S1(2008)",
                "diklat"=> null,
                "dikbangspes" => "DI PUSDIK RESINTEL(1998), BHS INGGRIS(2000), PUSDIK MIN(2006), "
            ],
            [                
                "nrp"=> 75081004,
                "nama"=> "AGUSMAN, S.I.K.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL(1997)",
                "dikum"=> "S1(2006)",
                "diklat"=> null,
                "dikbangspes" => null
            ],
            [                
                "nrp"=> 66040663,
                "nama"=> "HARUN ROSYID, S.I.K.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL(1993), PTIK(2006), PIM II(2015)",
                "dikum"=> "S1 (2006)",
                "diklat"=> null,
                "dikbangspes" => null
            ],
            [                
                "nrp"=> 72040509,
                "nama"=> "GIUSEPPE REINHARD GULTOM, S.SoS., S.I.K.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL(1994), PTIK(2003), SESPIMMEN(2009), SESKOAL(2023)",
                "dikum"=> "S1(1998)",
                "diklat"=> null,
                "dikbangspes" => null
            ],
            [                
                "nrp"=> 73050614,
                "nama"=> "SURYO AJI, S.I.K.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "SESKOAL(2023)",
                "dikum"=> "S1 (2006)",
                "diklat"=> null,
                "dikbangspes" => null
            ],
            [                
                "nrp"=> 71100498,
                "nama"=> "R. DJAROT AGUNG RIADI, S.I.K., M.Si.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL(1995), PTIK(2005), SESPIMMEN(2010), LEMHANAS (2023)",
                "dikum"=> "S2(2021)",
                "diklat"=> null,
                "dikbangspes" => null
            ],
            [                
                "nrp"=> 70080440,
                "nama"=> "EKO IRIANTO S.I.K.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL(1995), PTIK(2004), SESPIMMEN(2013), LEMHANAS (2023)",
                "dikum"=> "S1 (2004)",
                "diklat"=> null,
                "dikbangspes" => null
            ],
            [                
                "nrp"=> 74020324,
                "nama"=> "NURODIN, S.I.K., M.H.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL(1995), PTIK(2004), SESPIMMEN(2011), LEMHANAS (2023)",
                "dikum"=> "S1 (2004)",
                "diklat"=> null,
                "dikbangspes" => null
            ],
            [                
                "nrp"=> 76101098,
                "nama"=> "Dr. DEDY TABRANI, S.I.K., M. Si",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKPOL (1999), PTIK(2006), SESPIMMEN (2016), SESPIMTI (2024)",
                "dikum"=> " S2(2011)",
                "diklat"=> null,
                "dikbangspes" => null
            ],
            [                
                "nrp"=> 76070950,
                "nama"=> "MARSDIANTO, S.H., S.I.K.",
                "pangkat"=> "KOMBES POL",
                "bagian"=> "KORPOLAIRUD",
                "fungsi_polair"=> null,
                "dikpol"=> "AKABRI (1998), PTIK(2006), SESPIMMEN(2012), SESPIMTI(2024)",
                "dikum"=> " S1(2003)",
                "diklat"=> null,
                "dikbangspes" => "KIBI PAJA AKPOL(1999),  RESKRIM(1999),  BHS. INGGRIS (2000)"
            ],
        ];
        foreach ($data as $pegawai) {
            Pegawai::create($pegawai);
        }
    }
}
