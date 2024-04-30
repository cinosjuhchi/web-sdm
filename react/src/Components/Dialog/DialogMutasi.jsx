import React, { useState } from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import DropdownMutasi from "../Dropdown/DropdownMutasi";
import axiosClient from "../../axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

export default function DialogMutasi({ nrp }) {
    const [open, setOpen] = React.useState(false);
    const [nama, setNama] = useState();
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        iconColor: "green",
        customClass: {
            popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    });
    const pangkat = [
        {
            namaPangkat: "Irjen Pol",
            value: "IRJEN",
        },
        {
            namaPangkat: "Brijen Pol",
            value: "BRIGJEN",
        },
        {
            namaPangkat: "Kombes Pol",
            value: "KOMPOL",
        },
        {
            namaPangkat: "KBP",
            value: "KBP",
        },
        {
            namaPangkat: "AKBP",
            value: "AKBP",
        },
        {
            namaPangkat: "AKP",
            value: "AKP",
        },
        {
            namaPangkat: "IPDA",
            value: "IPDA",
        },
        {
            namaPangkat: "AIPTU",
            value: "AIPTU",
        },
        {
            namaPangkat: "AIPDA",
            value: "AIPDA",
        },
        {
            namaPangkat: "BRIPKA",
            value: "BRIPKA",
        },
        {
            namaPangkat: "BRIGADIR",
            value: "BRIGADIR",
        },
        {
            namaPangkat: "BRIPTU",
            value: "BRIPTU",
        },
        {
            namaPangkat: "BRIPDA",
            value: "BRIPDA",
        },
        {
            namaPangkat: "ABRIP",
            value: "ABRIP",
        },
        {
            namaPangkat: "ABRIPTU",
            value: "ABRIPTU",
        },
        {
            namaPangkat: "ABRIPDA",
            value: "ABRIPDA",
        },
        {
            namaPangkat: "BHARAKA",
            value: "BHARAKA",
        },
        {
            namaPangkat: "BHARATU",
            value: "BHARATU",
        },
        {
            namaPangkat: "BHARADA",
            value: "BHARADA",
        },
        {
            namaPangkat: "PNS IV",
            value: "PNS IV",
        },
        {
            namaPangkat: "PNS III",
            value: "PNS III",
        },
        {
            namaPangkat: "PNS II",
            value: "PNS II",
        },
        {
            namaPangkat: "PNS I",
            value: "PNS I",
        },
        {
            namaPangkat: "CPNS",
            value: "CPNS",
        },
    ];

    const [pangkatLama, setPangkatLama] = useState();
    const [pangkatBaru, setPangkatBaru] = useState();
    const [nrpf, setNrp] = useState();

    const handleOpen = () => setOpen(!open);
    const fetchData = async () => {
        const pegawai = await axiosClient.get(`/detail-pegawai/${nrp}`);
        setPangkatLama(pegawai.data.pangkat);
        setNama(pegawai.data.nama);
        setNrp(pegawai.data.nrp)
        return pegawai
    };

    const { data, isPending, isError } = useQuery({
        queryKey: ["detailPegawai", nrp],
        queryFn: fetchData,
    });
    const onSubmit = () => {
        if(!pangkatBaru || pangkatBaru == pangkatLama){
            alert("Tidak ada mutasi data yang dilakukan")
            return;
        }
        const member = {
            nrp: nrpf,
            pangkat_lama: pangkatLama,
            pangkat_baru: pangkatBaru
        }

        axiosClient.post("/detail-pegawai/mutasi", member).then(() => {
            Toast.fire({
                icon: "success",
                title: "Mutasi anggota berhasil",
            })
            handleOpen()
        }).catch(error => {
            Toast.fire({
                icon: "error",
                title: error,
            })
        })

    }
    return (
        <>
            <Tooltip content="Mutasikan pangkat" placement="top-end">
                <button
                    onClick={handleOpen}
                    className="px-4 py-2 bg-biru font-bold text-white rounded-md hover:bg-blue-400 hover:scale-105 duration-150 transition-all active:scale-100"
                >
                    Mutasi
                </button>
            </Tooltip>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader className="font-jakarta flex justify-between">
                    <h1>Mutasikan data pangkat</h1>

                    <IconButton
                        variant="text"
                        color="black"
                        onClick={handleOpen}
                    >
                        <XMarkIcon className="w-5" strokeWidth={2} />
                    </IconButton>
                </DialogHeader>
                <hr />
                <DialogBody className="font-jakarta text-black">
                    <div className="profile mb-4">
                        <p className="text-sm">NRP : 1234567</p>
                        <h1 className="text-2xl font-bold">{nama}</h1>
                    </div>

                    <h1 className="mb-2 font-medium">Mutasikan personel</h1>
                    <div className="aksi flex items-center justify-evenly">
                        <div className="old">
                            <p className="text-sm">Pangkat lama :</p>
                            <h1 className="text-lg font-bold">{pangkatLama}</h1>
                        </div>
                        <div className="old">
                            <ArrowRightIcon
                                className="w-10 text-green-500"
                                strokeWidth={2}
                            ></ArrowRightIcon>
                        </div>
                        <div className="new w-6/12">
                            <p className="text-sm">Pangkat baru :</p>
                            <form className="mx-auto mt-2">
                                <select
                                    className="bg-white font-medium border-black border-2 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) =>
                                        setPangkatBaru(e.target.value)
                                    }
                                >
                                    <option selected>Pilih pangkat baru</option>

                                    {pangkat.map((pangkat, index) => {
                                        return (
                                            <option
                                                value={pangkat.value}
                                                key={index}
                                            >
                                                {pangkat.namaPangkat}
                                            </option>
                                        );
                                    })}
                                </select>
                            </form>
                        </div>
                    </div>
                </DialogBody>
                <hr />
                <DialogFooter className="font-jakarta flex gap-3 text-black">
                    <button
                        onClick={handleOpen}
                        type="reset"
                        className="outline outline-black outline-2 text-base px-6 py-1 font-bold rounded-sm hover:scale-105 duration-200 transition-all bg-red-500 text-white hover:text-white active:scale-100 active:bg-red-600"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        className="outline outline-black outline-2 text-base px-6 py-1 font-bold rounded-sm hover:scale-105 duration-200 transition-all bg-blue-500 text-white active:scale-100 active:bg-blue-600"
                        onClick={onSubmit}
                    >
                        Submit
                    </button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
