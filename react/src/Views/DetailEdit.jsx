import {
    ArrowLeftIcon,
    InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

    const fetchData = async () => {
        const pegawai = await axiosClient.get(`/detail-pegawai/${nrp}`);
        // console.log(pegawai.data)
        setFormData(pegawai.data);
        return pegawai.data;
    };

    const { isLoading, isError, data } = useQuery({
        queryKey: ["detailPegawai"],
        queryFn: fetchData,
        initialData: formData,
    });

    console.log(formData);

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

    const handleSubmit = () => {
        // Simpan nilai yang diubah atau lakukan operasi penyimpanan data sesuai kebutuhan
        console.log("Data yang diubah:", formData);
    };

    // const input = [
    //     {
    //         title: "Nama",
    //         type: "text",
    //         nama: "nama",
    //         id: "nama",
    //         placholder: "contoh",
    //         note: "",
    //         noteicon: false,
    //         disable: true,
    //     },
    //     {
    //         title: "NRP",
    //         type: "number",
    //         nama: "nrp",
    //         id: "nrp",
    //         placholder: "contoh",
    //         note: "Hanya dapat diisi dengan angka",
    //         noteicon: true,
    //         disable: true,
    //     },
    //     {
    //         title: "Pangkat",
    //         type: "text",
    //         nama: "pangkat",
    //         id: "pangkat",
    //         placholder: "contoh",
    //         note: "Bagian ini hanya dapat diubah di menu Mutasi",
    //         noteicon: true,
    //         disable: true,
    //     },
    //     {
    //         title: "Dikum",
    //         type: "text",
    //         nama: "dikum",
    //         id: "dikum",
    //         placholder: "contoh",
    //         note: "",
    //         noteicon: false,
    //         disable: true,
    //     },
    //     {
    //         title: "Dikpol",
    //         type: "text",
    //         nama: "dikpol",
    //         id: "dikpol",
    //         placholder: "contoh",
    //         note: "",
    //         noteicon: false,
    //         disable: true,
    //     },
    //     {
    //         title: "Fungsi",
    //         type: "text",
    //         nama: "fungsi",
    //         id: "fungsi",
    //         placholder: "contoh",
    //         note: "",
    //         noteicon: false,
    //         disable: true,
    //     },
    //     {
    //         title: "Diklat",
    //         type: "text",
    //         nama: "diklat",
    //         id: "diklat",
    //         placholder: "contoh",
    //         note: "",
    //         noteicon: false,
    //         disable: true,
    //     },
    //     {
    //         title: "Lain-lain",
    //         type: "text",
    //         nama: "lain-lain",
    //         id: "lain-lain",
    //         placholder: "contoh",
    //         note: "",
    //         noteicon: false,
    //         disable: true,
    //     },
    // ];

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
                                value={"Halo"}
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
                                onClick={handleSubmit}
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
            </div>
        </div>
    );
}

export default DetailEdit;
