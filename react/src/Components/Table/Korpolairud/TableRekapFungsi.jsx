import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import axiosClient from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelectedMonth } from "../../../Context/SelectedMonthContext";

export default function TableRekapKorpolairud({ bagian }) {
    let TABLE_HEAD = [
        "Pangkat",
        "SAR",
        "DSPA",
        "PANK",
        "PATK",
        "PAIDK",
        "PA LAKA LAUT",
        "BA LAKA LAUT",
        "DSBPA",
        "BANK",
        "BATK",
        "DSTPA",
        "KMLK",
        "BAIDIK",
        "HARWAT KAPAL",
        "JURI MUDI KAPAL TYPE C",
        "SELAM",
        "KOMANDAN KAPAL TYPE B",
        "KOMANDAN KAPAL TYPE C",
    ];

    // Periksa nilai bagian

    if (bagian === "DITPOLUDARA") {
        TABLE_HEAD = [
            "Pangkat",
            "SEKOLAH PENERBANGAN TNI AU",
            "TRANSISI PNB HELI ENSTROM 480B",
            "TIPE RATING HELI NBO-150",
            "MEKANIK UDARA",
            "CAPTAINCY HELI NBO-150",
            "AVITION AND AIRPORT SECURITY",
            "KONVESI LAN",
            "KONVESI LAN NBO 105",
            "KONVESI LAN NBO 2000",
            "STAND BY FORCE",
            "SAR AU",
            "CONVERSI CASSA",
            "INSPECTOR",
            "APPU",
            "CRM",
            "SUBDIT KATROF",
            "PROGKOMP",
            "IGITAP",
            "FAN COURSE 105",
            "KOTENJENSI KEAMANAN",
            "KDT",
            "MEKUD",
            "ATA",
            "HAUPINAS 365",
            "CASA 212",
            "ELEMENTARY",
            "PRAMUGARI",
            "NEGOSIATOR",
            "TYPE RATING HELI 412",
            "COMERCIAL PILOT LICENSE",
            "PENDIDIKAN DAN PELATIHAN FLIGHT",
            "GUDANG",
        ];
    }

    const [member, setMember] = useState([]);
    const { selectedMonth, selectedYear } = useSelectedMonth(); // Menggunakan useSelectedMonth untuk mendapatkan selectedMonth
    const fetchData = async () => {
        const pegawai = await axiosClient.get(
            `/rekap-pegawai?month=${selectedMonth}&year=${selectedYear}&bagian=${bagian}`
        );
        setMember(pegawai.data); // Memperbaiki bagian ini
        return pegawai;
    };

    const { isPending, isError, data, error } = useQuery({
        queryKey: ["pegawais-rekap-fungsi", selectedMonth, selectedYear],
        queryFn: fetchData,
    });
    return (
        <Card className="h-full w-full grid grid-cols-1">
            <CardHeader
                floated={false}
                shadow={false}
                className="rounded-none font-jakarta"
            >
                <style>
                    {`
                @media print {
                    /* Rules for printing */
                    body * {
                    visibility: hidden;
                    }
                    .printable-area, .printable-area * {
                    visibility: visible;                                        
                    box-sizing: border-box; 
                    }
                }
                @page {
                    size: landscape; /* Atur ukuran kertas, contoh: A4 */
                    margin: 0; /* Hilangkan margin */
                    scale: 0.5; /* Skala cetak, contoh: 80% */
                  }
                `}
                </style>
                <div className="flex items-center justify-between gap-8">
                    <div>
                        <h1 className="text-xl font-bold text-black">
                            Data Rekapitulasi Dikum
                        </h1>
                        <p color="gray" className="mt-1 font-normal">
                            Informasi data rekapitulasi dikpol
                        </p>
                    </div>
                    <button
                        onClick={() => window.print()}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        Print
                    </button>
                </div>
            </CardHeader>
            <CardBody className="overflow-auto px-0">
                <table className="w-full table-auto text-left printable-area">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <p className="flex items-center justify-between gap-2 font-normal leading-none text-sm text-black">
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length && (
                                            <ChevronUpDownIcon
                                                strokeWidth={2}
                                                className="h-4 w-4"
                                            />
                                        )}
                                    </p>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody
                        className={`${
                            isPending ? "animate-pulse bg-gray-200" : ""
                        }`}
                    >
                        {member.map((pegawai, index) => {
                            const isLast = index === pegawai.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={pegawai.pangkat}>
                                    <td className={classes}>
                                        <div className="flex items-center">
                                            <div className="flex flex-col">
                                                <p className="font-normal text-sm text-black group-hover:text-white">
                                                    {pegawai.pangkat}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    {bagian === "DITPOLUDARA" ? (
                                        <>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {
                                                        pegawai.SEKOLAH_PENERBANGAN_TNI_AU
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {
                                                        pegawai.TRANSISI_PNB_HELI_ENSTROM_480B
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {
                                                        pegawai.TIPE_RATING_HELI_NBO_150
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.MEKANIK_UDARA}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {
                                                        pegawai.CAPTAINCY_HELI_NBO_150
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {
                                                        pegawai.AVITION_AND_AIRPORT_SECURITY
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.KONVESI_LAN}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {
                                                        pegawai.KONVESI_LAN_NBO_105
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {
                                                        pegawai.KONVESI_LAN_NBO_2000
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.STAND_BY_FORCE}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.SAR_AU}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.CONVERSI_CASSA}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.INSPECTOR}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.APPU}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.CRM}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.SUBDIT_KATROF}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.PROGKOMP}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.IGITAP}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.FAN_COURSE_105}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {
                                                        pegawai.KOTENJENSI_KEAMANAN
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.KDT}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.MEKUD}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.ATA}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.HAUPINAS_365}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.CASA_212}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.ELEMENTARY}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.PRAMUGARI}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.NEGOSIATOR}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {
                                                        pegawai.TYPE_RATING_HELI_412
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {
                                                        pegawai.COMERCIAL_PILOT_LICENSE
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {
                                                        pegawai.PENDIDIKAN_DAN_PELATIHAN_FLIGHT
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.GUDANG}
                                                </p>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <p className="font-normal text-sm text-black group-hover:text-white">
                                                        {pegawai.SAR}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <p className="font-normal text-sm text-black group-hover:text-white">
                                                        {pegawai.DSPA}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white ">
                                                    {pegawai.PANK}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.PATK}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.PAIDK}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.PA_LAKA_LAUT}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.BA_LAKA_LAUT}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.DSBPA}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.BANK}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.BATK}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.DSTPA}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.KMLK}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.BAIDIK}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.HARWAT_KAPAL}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {
                                                        pegawai.JURU_MUDI_KAPAL_TYPE_C
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {pegawai.SELAM}
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {
                                                        pegawai.KOMANDAN_KAPAL_TYPE_B
                                                    }
                                                </p>
                                            </td>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white  ">
                                                    {
                                                        pegawai.KOMANDAN_KAPAL_TYPE_C
                                                    }
                                                </p>
                                            </td>
                                            
                                        </>
                                    )}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}
