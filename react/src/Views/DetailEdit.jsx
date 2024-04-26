import {
    ArrowLeftIcon,
    InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import axiosClient from "../axios";
import { useQuery } from "@tanstack/react-query";

function DetailEdit() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const nrp = params.get("nrp");
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false); // State untuk status edit
    const [isPangkatDisabled, setIsPangkatDisabled] = useState(true); // State untuk status input pangkat
    const [formData, setFormData] = useState([]); // State untuk menyimpan nilai input-an
    const [nama, setNama] = useState();
    const [nrpf, setNrpf] = useState();
    const [dikum, setDikum] = useState();
    const [dikpol, setDikpol] = useState();
    const [pangkat, setPangkat] = useState();
    const [diklat, setDiklat] = useState();
    const [dikbangspes, setDikbangspes] = useState();
    const [fungsi, setFungsi] = useState();
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
    const [id, setId] = useState();

    const fetchData = async () => {
        const pegawai = await axiosClient.get(`/detail-pegawai/${nrp}`);
        console.log(pegawai.data);
        setNama(pegawai.data.nama);
        setDikum(pegawai.data.dikum);
        setDikpol(pegawai.data.dikpol);
        setPangkat(pegawai.data.pangkat);
        setDiklat(pegawai.data.diklat);
        setDikbangspes(pegawai.data.dikbangspes);
        setFungsi(pegawai.data.fungsi_polair);
        setNrpf(pegawai.data.nrp);
        setId(pegawai.data.id);
        return pegawai.data;
    };

    const { data, isPending, isError } = useQuery({
        queryKey: ["detailPegawai", nama],
        queryFn: fetchData,
    });

    const handleReset = () => {
        setFormData({
            nama: "Muhammad Cino",
            nrp: "1234567",
            pangkat: "Siswa PKL",
            dikum: "SMK 12",
            dikpol: "Unknown",
            fungsi: "Unknown",
            diklat: "Unknown",
            "lain-lain": "Unknown",
        });
    };

    const onSubmit = (ev) => {
        confirm("Apakah anda yakin ingin mengubah data ini?");
        ev.preventDefault();

        
        const member = {
            id: id,
            nama: nama,
            nrp: nrpf,
            dikum: dikum,
            dikpol: dikpol,
            diklat: diklat,
            fungsi_polair: fungsi,
            dikbangspes: dikbangspes,
        };
        axiosClient.post("/detail-pegawai/update", member)
        // eslint-disable-next-line no-unused-vars
        .then(response => {
            Toast.fire({
                icon: "success",
                title: "Data berhasil diubah",
            });
            setIsEditing(false)
        })
        .catch(err => {
            const response = err.response;
            Toast.fire({
                icon: "error",
                title: "Terjadi kesalahan: " + response.data.message,
            });
        });
    };

    if (isPending) {
        return <p>Loading..</p>;
    }
    return (
        <div className="flex w-full">
            <a className={`${isEditing ? "hidden" : ""} absolute`}>
                <IconButton
                    variant="text"
                    className="hover:bg-biru hover:text-white"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeftIcon className="w-7" strokeWidth={2} />
                </IconButton>
            </a>
            <div className="mx-20 w-full">
                <div className="title flex gap-3">
                    <div className="desc">
                        <h2 className="text-lg font-semibold leading-7 text-gray-900">
                            {isEditing ? "Ubah" : "Detail"} data personel divisi{" "}
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            {isEditing ? "Ubah data" : "Detail"} personel divisi{" "}
                        </p>
                    </div>
                </div>
                <ul></ul>
                <form>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="nama"
                                className="block text-sm font-medium leading-6 text-gray-900 -mt-2"
                            >
                                Nama
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="nama"
                                    id="nama"
                                    disabled={!isEditing ? "true" : ""}
                                    value={nama}
                                    onChange={ev => setNama(ev.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="nrp"
                                className="block text-sm font-medium leading-6 text-gray-900 -mt-2"
                            >
                                NRP
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="nrp"
                                    id="nrp"
                                    value={nrpf}
                                    onChange={ev => setNrpf(ev.target.value)}
                                    disabled={!isEditing ? "true" : ""}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className={`mt-2 -mb-1 flex items-center gap-1 font-normal ${
                                        isEditing ? "" : "hidden"
                                    }`}
                                >
                                    <InformationCircleIcon
                                        className="w-4"
                                        strokeWidth={2}
                                    ></InformationCircleIcon>
                                    Bagian ini hanya dapat diisi dengan angka
                                </Typography>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="pangkat"
                                className="block text-sm font-medium leading-6 text-gray-900 -mt-2"
                            >
                                Pangkat
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="pangkat"
                                    id="pangkat"
                                    value={pangkat}
                                    disabled
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className={`mt-2 -mb-1 flex items-center gap-1 font-normal ${
                                        isEditing ? "" : "hidden"
                                    }`}
                                >
                                    <InformationCircleIcon
                                        className="w-4"
                                        strokeWidth={2}
                                    ></InformationCircleIcon>
                                    Bagian ini hanya dapat diubah di menu Mutasi
                                </Typography>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="dikum"
                                className="block text-sm font-medium leading-6 text-gray-900 -mt-2"
                            >
                                Dikum
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="dikum"
                                    id="dikum"
                                    value={dikum}
                                    onChange={ev => setDikum(ev.target.value)}
                                    disabled={!isEditing ? "true" : ""}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="dikpol"
                                className="block text-sm font-medium leading-6 text-gray-900 -mt-2"
                            >
                                Dikpol
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="dikpol"
                                    id="dikpol"
                                    value={dikpol}
                                    onChange={ev => setDikpol(ev.target.value)}
                                    disabled={!isEditing ? "true" : ""}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="fungsi"
                                className="block text-sm font-medium leading-6 text-gray-900 -mt-2"
                            >
                                Fungsi
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="fungsi"
                                    id="fungsi"
                                    value={fungsi}
                                    onChange={ev => setFungsi(ev.target.value)}
                                    disabled={!isEditing ? "true" : ""}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="diklat"
                                className="block text-sm font-medium leading-6 text-gray-900 -mt-2"
                            >
                                Diklat
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="diklat"
                                    id="diklat"
                                    value={diklat}
                                    onChange={ev => setDiklat(ev.target.value)}
                                    disabled={!isEditing ? "true" : ""}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="lain-lain"
                                className="block text-sm font-medium leading-6 text-gray-900 -mt-2"
                            >
                                Lain-lain
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="lain-lain"
                                    id="lain-lain"
                                    value={dikbangspes}
                                    onChange={ev => setDikbangspes(ev.target.value)}
                                    disabled={!isEditing ? "true" : ""}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="button flex gap-4 justify-end mt-10">
                        {isEditing ? (
                            <>
                                <button
                                    onClick={() => {
                                        setIsEditing(false);
                                        setIsPangkatDisabled(true);
                                        handleReset();
                                    }}
                                    type="reset"
                                    className="outline outline-black outline-2 text-base px-6 py-1 font-bold rounded-sm hover:scale-105 duration-200 transition-all bg-red-500 text-white hover:text-white active:scale-100 active:bg-red-600"
                                >
                                    Batal
                                </button>
                                <button
                                    type="button"
                                    onClick={onSubmit}
                                    className="outline outline-black outline-2 text-base px-6 py-1 font-bold rounded-sm hover:scale-105 duration-200 transition-all bg-blue-500 text-white active:scale-100 active:bg-blue-600"
                                >
                                    Perbarui
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => navigate(-1)}
                                    type="reset"
                                    className="outline outline-black outline-2 text-base px-6 py-1 font-bold rounded-sm hover:scale-105 duration-200 transition-all active:scale-100"
                                >
                                    Kembali
                                </button>
                                <button
                                    type="button"
                                    className="outline outline-black outline-2 text-base px-6 py-1 font-bold rounded-sm hover:scale-105 duration-200 transition-all bg-blue-500 text-white active:scale-100 active:bg-blue-600"
                                    onClick={() => {
                                        setIsEditing(true);
                                        setIsPangkatDisabled(true);
                                    }}
                                >
                                    Ubah
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DetailEdit;
