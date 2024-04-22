import React from "react";
import { Button, Dialog, IconButton } from "@material-tailwind/react";
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
    ClockIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    Input,
    Typography,
    CardBody,
    CardFooter,
    Tooltip,
} from "@material-tailwind/react";

export default function DialogRiwayat() {
    const TABLE_HEAD = [
        "NRP",
        "Nama",
        "Pangkat lama",
        "Pangkat baru",
        "Divisi",
        "Waktu",
    ];

    const sm = [
        {
            id: 1,
            nrp: 67120531,
            nama: "MOHAMMAD YASSIN KOSASIH, S.I.K., M.Si., M.Tr.Opsla.",
            pangkatLama: "IRJEN POL",
            pangkatBaru: "BRIGJEN POL",
            divisi: "Korpolairud",
            waktu: "4/21/2024 22.40",
        },
    ];
    const [size, setSize] = React.useState(null);

    const handleOpen = (value) => setSize(value);

    return (
        <>
            <Button
                variant="outlined"
                className="flex gap-2 items-center text"
                size="sm"
                onClick={() => handleOpen("xxl")}
            >
                <ClockIcon className="w-5"></ClockIcon>
                Riwayat
            </Button>
            <Dialog
                open={size === "xxl"}
                size={size || "md"}
                handler={handleOpen}
                className="w-full gap-y-4 flex flex-col"
            >
                <Card className="w-full grid grid-cols-1 rounded-none shadow-none">
                    <div className="flex items-center justify-between mx-4 mt-4">
                        <div className="flex gap-4">
                            <div className="title">
                                <h1 className="text-xl font-bold text-black">
                                    Riwayat mutasi anggota personel
                                </h1>
                                <p color="gray" className="mt-1 font-normal">
                                    Informasi riwayat mutasi personel
                                </p>
                            </div>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <div className="w-full flex gap-4">
                                <Input
                                    label="Search"
                                    icon={
                                        <MagnifyingGlassIcon className="h-5 w-5" />
                                    }
                                />
                                <div className="close">
                                    <Tooltip
                                        content="Tutup Riwayat"
                                        placement="bottom-end"
                                    >
                                        <IconButton
                                            variant="text"
                                            color="black"
                                            onClick={handleOpen}
                                        >
                                            <XMarkIcon
                                                className="w-6"
                                                strokeWidth={2}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                                {index !==
                                                    TABLE_HEAD.length && (
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
                                                <div className="flex items-center">
                                                    <div className="flex flex-col">
                                                        <p className="font-normal text-sm text-black group-hover:text-white">
                                                            {pegawai.nrp}
                                                        </p>
                                                    </div>
                                                </div>
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
                                                        {pegawai.pangkatLama}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <p className="font-normal text-sm text-black group-hover:text-white">
                                                        {pegawai.pangkatBaru}
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
                                                <div className="flex flex-col">
                                                    <p className="font-normal text-sm text-black group-hover:text-white">
                                                        {pegawai.waktu}
                                                    </p>
                                                </div>
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
            </Dialog>
        </>
    );
}
