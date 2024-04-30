import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import axiosClient from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelectedMonth } from "../../../Context/SelectedMonthContext";

const TABLE_HEAD = [
     "Pangkat",
     "SEBA",
     "SBP",
     "SETUKPA",
     "SEPA",
     "SEKBANG TNI",
     "AKPL",
     "PTIK",
     "SESKO AU",
     "SESKO AL",
     "SESPIMMA",
     "SESPIMMEN",
     "PIM TK I",
     "PIM TK II",
     "PKA",
     "SESPIMTI",
     "LEMHANAS",
     "PAG PA",
     "PAG BA",
     "PAG TA",
];

export default function TableRekapKorpolairud({bagian}) {
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
        queryKey: ["pegawais-rekap-dikpol", selectedMonth, selectedYear],
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
                <table className="w-full table-auto text-center printable-area">
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
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black group-hover:text-white">
                                                {pegawai.SEBA}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black group-hover:text-white">
                                                {pegawai.SBP}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white ">
                                            {pegawai.SETUKPA}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.SEPA}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.SEKBANG_TNI}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.AKPL}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.PTIK}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.SESKOAU}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.SESKOAL}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.SESPIMMA}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.SESPIMMEN}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.PIM_TK_I}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.PIM_TK_II}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.PKA}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.SESPIMTI}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.LEMHANAS}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.PAGPA}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.PAGBA}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.PAGTA}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  "></p>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}
