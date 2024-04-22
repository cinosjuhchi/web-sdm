import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
    ClockIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Tooltip,
} from "@material-tailwind/react";
import axiosClient from "../../axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../Dialog/Filter";
import EksporDialog from "../Dialog/Ekspor";
import DialogMutasi from "../Dialog/DialogMutasi";
import DialogRiwayat from "../Dialog/DialogRiwayatMutasi";

const TABLE_HEAD = ["NRP", "Nama", "Pangkat", "Divisi", "Aksi"];

const sm = [
    {
        id: 1,
        nrp: 67120531,
        nama: "MOHAMMAD YASSIN KOSASIH, S.I.K., M.Si., M.Tr.Opsla.",
        pangkat: "IRJEN POL",
        divisi: "Korpolairud",
    },
];

export default function TablePerincianKorpolairud() {
    const [bagian, setBagian] = useState(["KORPOLAIRUD"]);
    const [divisi] = useState("Korpolairud");

    const fetchData = async () => {
        const bagianParam = bagian.join(",");
        console.log(bagianParam);
        const pegawai = await axiosClient.get(
            `/data-pegawai/filter?bagian=${bagianParam}&dikum=SMA&dikpol=`
        );
        console.log(pegawai.data);
        return pegawai.data;
    };

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["pegawais"],
        queryFn: fetchData,
    });

    return (
        <Card className="h-full w-full grid grid-cols-1">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <h1 className="text-xl font-bold text-black">
                            Mutasi personel anggota
                        </h1>
                        <p color="gray" className="mt-1 font-normal">
                            Halaman mutasi untuk personel
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
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <EksporDialog></EksporDialog>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <DialogRiwayat></DialogRiwayat>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-auto px-0">
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
                                        <Link to={`/detail?divisi=${divisi}`}>
                                            <div className="flex items-center">
                                                <div className="flex flex-col">
                                                    <p className="font-normal text-sm text-black group-hover:text-white">
                                                        {pegawai.nrp}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black group-hover:text-white">
                                                {pegawai.nama}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black group-hover:text-white">
                                                {pegawai.pangkat}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black group-hover:text-white">
                                                {pegawai.divisi}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <DialogMutasi></DialogMutasi>
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
                    {/* Page {currPage} of {lastPage} */}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant="outlined"
                        // onClick={handlePrev}
                        // disabled={isButtonDisabled || currPage === 1}
                        size="sm"
                    >
                        Awal
                    </Button>
                    <Button
                        variant="outlined"
                        // onClick={handlePrev}
                        // disabled={isButtonDisabled || currPage === 1}
                        size="sm"
                    >
                        Sebelumnya
                    </Button>

                    <Button
                        variant="outlined"
                        // onClick={handleNext}
                        // disabled={isButtonDisabled || currPage === lastPage}
                        size="sm"
                    >
                        Selanjutnya
                    </Button>
                    <Button
                        variant="outlined"
                        // onClick={handleNext}
                        // disabled={isButtonDisabled || currPage === lastPage}
                        size="sm"
                    >
                        Akhir
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
