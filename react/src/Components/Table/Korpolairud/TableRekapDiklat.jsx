import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import axiosClient from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelectedMonth } from "../../../Context/SelectedMonthContext";

const TABLE_HEAD = [
     "Pangkat",
     "ANT I",
     "ANT II",
     "ANT III",
     "ANT IV",
     "ANT V",
     "ATT I",
     "ATT II",
     "ATT III",
     "ATT V",
     "DPMKN II",
     "DPMKN III",
     "DPDKN II",
     "DPDKN III",     
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
        queryKey: ["pegawais-rekap-diklat", selectedMonth, selectedYear],
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
                            Data Rekapitulasi DiKLAT
                        </h1>
                        <p color="gray" className="mt-1 font-normal">
                            Informasi data rekapitulasi diklat
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
                                                {pegawai.ANT_I}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black group-hover:text-white">
                                            {pegawai.ANT_II}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white ">
                                        {pegawai.ANT_III}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                        {pegawai.ANT_IV}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                        {pegawai.ANT_V}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                        {pegawai.ATT_I}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                        {pegawai.ATT_II}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                        {pegawai.ATT_III}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                        {pegawai.ATT_V}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                        {pegawai.DPMKN_II}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                        {pegawai.DPMKN_III}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                        {pegawai.DPDKN_II}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                        {pegawai.DPDKN_III}
                                        </p>
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
