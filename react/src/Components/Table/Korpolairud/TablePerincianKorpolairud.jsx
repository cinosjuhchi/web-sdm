import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    IconButton,
    Tooltip,
    useTabs,
} from "@material-tailwind/react";
import Filter from "../../Dialog/Filter";
import EksporDialog from "../../Dialog/Ekspor";
import axiosClient from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const TABLE_HEAD = [
    "NRP",
    "Nama",
    "Pangkat",
    "Dikum",
    "Dikpol",
    "Fungsi Polair",
    "Diklat",
    "Dikbangpes",
    "Aksi",
];

const sm = [
    {
        id: 1,
        nrp: 67120531,
        nama: "MOHAMMAD YASSIN KOSASIH, S.I.K., M.Si., M.Tr.Opsla.",
        pangkat: "IRJEN POL",
        kantor_bagian: "KORPOLAIRUD",
        fungsi: null,
        dikpol: "AKPOL, PTIK,SESKO AL,LEMHANAS",
        dikum: "S2(2004)",
        diklat: null,
        dikbangspes: "INTEL, BRIMOB,, VIP PROTECTION USA",
    },
];

export default function TablePerincianKorpolairud() {
    const [bagian, setBagian] = useState(["KORPOLAIRUD", "DITPOLUDARA"]);

    const fetchData = async () => {
        const bagianParam = bagian.join(",");
        console.log(bagianParam);
        const pegawai = await axiosClient.get(
            `/data-pegawai/filter?bagian=${bagianParam}&dikum=S2,SMA`);
        console.log(pegawai.data);
        return pegawai.data;
    };

    const { isPending, isError, data, error } = useQuery({
        queryKey: ["pegawais"],
        queryFn: fetchData,
    });

    return (
        <Card className="h-full w-full grid grid-cols-1">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <h1 className="text-xl font-bold text-black">
                            Data Perincian Korpolairud
                        </h1>
                        <p color="gray" className="mt-1 font-normal">
                            Informasi data Personel Korpolairud
                        </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={
                                    <MagnifyingGlassIcon className="h-5 w-5" />
                                }
                            />
                        </div>
                        <a href="/tambah-data-korpolairud">
                            <Button
                                className="flex h-full items-center gap-3"
                                size="sm"
                            >
                                <UserPlusIcon
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                />{" "}
                                Tambah
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <EksporDialog></EksporDialog>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Filter></Filter>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <p className="flex items-center justify-between gap-2 font-normal leading-none text-sm text-black">
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
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
                    <tbody>
                        {sm.map((pegawai, index) => {
                            const isLast = index === pegawai.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={pegawai.id}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex flex-col">
                                                <p className="font-normal text-sm text-black">
                                                    {pegawai.nrp}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black">
                                                {pegawai.nama}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black">
                                                {pegawai.pangkat}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black">
                                            {pegawai.dikum}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black">
                                            {pegawai.dikpol}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black">
                                            {pegawai.fungsi}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black">
                                            {pegawai.diklat}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black">
                                            {pegawai.dikbangspes}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <Tooltip content="Edit User">
                                            <IconButton variant="text">
                                                <PencilIcon className="h-4 w-4" />
                                            </IconButton>
                                        </Tooltip>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
