import {
    ArrowLeftIcon,
    InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AutoComplete, Tag, ConfigProvider } from "antd";
import Swal from "sweetalert2";

import axiosClient from "../axios";
import { useQuery } from "@tanstack/react-query";

function DetailEdit() {
    const options = {
        pangkat: [
            { value: "IRJEN" },
            { value: "BRIGJEN" },
            { value: "KBP" },
            { value: "AKBP" },
            { value: "KOMPOL" },
            { value: "AKP" },
            { value: "IPTU" },
            { value: "IPDA" },
            { value: "AIPTU" },
            { value: "AIPDA" },
            { value: "BRIPKA" },
            { value: "BRIGADIR" },
            { value: "BRIPTU" },
            { value: "BRIPDA" },
            { value: "ABRIP" },
            { value: "ABRIPTU" },
            { value: "ABRIPDA" },
            { value: "BHARAKA" },
            { value: "BHARATU" },
            { value: "BHARADA" },
            { value: "PNS IV" },
            { value: "PNS III" },
            { value: "PNS II" },
            { value: "PNS I" },
            { value: "CPNS" },
        ],
        dikum: [
            { value: "SD" },
            { value: "SMP" },
            { value: "SMA" },
            { value: "D3" },
            { value: "S1" },
            { value: "S2" },
            { value: "S3" },
        ],
        diklat: [
            { value: "ANT I" },
            { value: "ANT II" },
            { value: "ANT III" },
            { value: "ANT V" },
            { value: "ATT 1" },
            { value: "ATT 2" },
            { value: "ATT 3" },
            { value: "ATT 5" },
            { value: "DPMKN TK 2" },
            { value: "DPMKN TK 3" },
            { value: "DPDKN TK 2" },
            { value: "DPDKN TK 3" },
        ],
        dikpol: [
            { value: "SEBA" },
            { value: "SBP" },
            { value: "SETUKPA" },
            { value: "SEPA" },
            { value: "SEKBANG TNI" },
            { value: "AKPL" },
            { value: "PTIK" },
            { value: "SESKOAU" },
            { value: "SESKOAL" },
            { value: "SESPIMMA" },
            { value: "SESPMEN" },
            { value: "PMTIK 1" },
            { value: "PMTIK 2" },
            { value: "PKA" },
            { value: "SESPATI" },
            { value: "LEMHANAS" },
            { value: "PAG PA" },
            { value: "PAG BA" },
        ],
        fungsi: [
            { value: "SAR" },
            { value: "DSPA" },
            { value: "PANK" },
            { value: "PATK" },
            { value: "PAIDK" },
            { value: "PA LAKA LAUT" },
            { value: "BA LAKA LAUT" },
            { value: "DSBPA" },
            { value: "BANK" },
            { value: "BATK" },
            { value: "DSTPA" },
            { value: "KMLK" },
            { value: "BAIDIK" },
            { value: "HARWAT KAPAL" },
            { value: "JURI MUDI KAPAL TYPE C" },
            { value: "SELAM" },
            { value: "KOMANDAN KAPAL TYPE B" },
            { value: "KOMANDAN KAPAL TYPE C" },
        ],
        lain: [
            { value: "INTEL" },
            { value: "SERSE" },
            { value: "PROPAM" },
            { value: "LOGISTIK" },
            { value: "KEUANGAN" },
            { value: "BHS INGGRIS" },
            { value: "BHS FRANCIS" },
            { value: "BHS ARAB" },
            { value: "BHS MANDARIN" },
            { value: "BARANG DAN JASA" },
            { value: "SATPAM GADA PRATAMA" },
            { value: "SDM" },
            { value: "TP. LUNDUP" },
            { value: "TP. KORUPSI" },
            { value: "TP. ILLEGAL FISHING" },
            { value: "TP. ILLEGAL NARKOBA" },
        ],
    };

    const [inputValueDiklat, setInputValueDiklat] = useState("");
    const [inputValueDikum, setInputValueDikum] = useState("");
    const [inputValueDikpol, setInputValueDikpol] = useState(""); // Tambahkan state untuk dikpol
    const [inputValueFungsi, setInputValueFungsi] = useState(""); // Tambahkan state untuk fungsi polair
    const [inputValueLain, setInputValueLain] = useState(""); // Tambahkan state untuk lain-lain

    const [selectedValuesDiklat, setSelectedValuesDiklat] = useState([]);
    const [selectedValuesDikum, setSelectedValuesDikum] = useState([]);
    const [selectedValuesDikpol, setSelectedValuesDikpol] = useState([]); // Tambahkan state untuk dikpol
    const [selectedValuesFungsi, setSelectedValuesFungsi] = useState([]); // Tambahkan state untuk fungsi polair
    const [selectedValuesLain, setSelectedValuesLain] = useState([]); // Tambahkan state untuk lain-lain

    const handleInputChangeDiklat = (value) => {
        setInputValueDiklat(value);
    };

    const handleInputChangeDikum = (value) => {
        setInputValueDikum(value);
    };

    const handleInputChangePangkat = (value) => {
        setInputValuePangkat(value);
    };

    const handleInputChangeDikpol = (value) => {
        setInputValueDikpol(value);
    }; // Tambahkan handleInputChangeDikpol

    const handleInputChangeFungsi = (value) => {
        setInputValueFungsi(value);
    }; // Tambahkan handleInputChangeFungsi

    const handleInputChangeLain = (value) => {
        setInputValueLain(value);
    }; // Tambahkan handleInputChangeLain

    const handleSelectDiklat = (value, option) => {
        setSelectedValuesDiklat([...selectedValuesDiklat, value]);
        setInputValueDiklat(""); // Clear input value after selecting an option
    };

    const handleSelectDikum = (value, option) => {
        setSelectedValuesDikum(value);
    };

    const handleSelectPangkat = (value) => {
        setSelectedPangkat(value);
    };

    const handleSelectDikpol = (value, option) => {
        setSelectedValuesDikpol([...selectedValuesDikpol, value]);
        setInputValueDikpol(""); // Clear input value after selecting an option
    }; // Tambahkan handleSelectDikpol

    const handleSelectFungsi = (value, option) => {
        setSelectedValuesFungsi([...selectedValuesFungsi, value]);
        setInputValueFungsi(""); // Clear input value after selecting an option
    }; // Tambahkan handleSelectFungsi

    const handleSelectLain = (value, option) => {
        setSelectedValuesLain([...selectedValuesLain, value]);
        setInputValueLain(""); // Clear input value after selecting an option
    }; // Tambahkan handleSelectLain

    const handleRemoveDiklat = (value) => {
        setSelectedValuesDiklat(
            selectedValuesDiklat.filter((val) => val !== value)
        );
    };

    const handleRemoveDikpol = (value) => {
        setSelectedValuesDikpol(
            selectedValuesDikpol.filter((val) => val !== value)
        );
    }; // Tambahkan handleRemoveDikpol

    const handleRemoveFungsi = (value) => {
        setSelectedValuesFungsi(
            selectedValuesFungsi.filter((val) => val !== value)
        );
    }; // Tambahkan handleRemoveFungsi

    const handleRemoveLain = (value) => {
        setSelectedValuesLain(
            selectedValuesLain.filter((val) => val !== value)
        );
    }; // Tambahkan handleRemoveLain

    const handleBlurDiklat = () => {
        // Check if inputValue ends with comma and add the value to selectedValues
        if (inputValueDiklat && inputValueDiklat.endsWith(",")) {
            const valueToAdd = inputValueDiklat.slice(0, -1); // Remove the comma
            setSelectedValuesDiklat([...selectedValuesDiklat, valueToAdd]);
            setInputValueDiklat(""); // Clear input value
        }
    };

    // Tambahkan handleBlurDikpol
    const handleBlurDikpol = () => {
        // Check if inputValueDikpol ends with comma and add the value to selectedValuesDikpol
        if (inputValueDikpol && inputValueDikpol.endsWith(",")) {
            const valueToAdd = inputValueDikpol.slice(0, -1); // Remove the comma
            setSelectedValuesDikpol([...selectedValuesDikpol, valueToAdd]);
            setInputValueDikpol(""); // Clear input value
        }
    };

    // Tambahkan handleBlurFungsi
    const handleBlurFungsi = () => {
        // Check if inputValueFungsi ends with comma and add the value to selectedValuesFungsi
        if (inputValueFungsi && inputValueFungsi.endsWith(",")) {
            const valueToAdd = inputValueFungsi.slice(0, -1); // Remove the comma
            setSelectedValuesFungsi([...selectedValuesFungsi, valueToAdd]);
            setInputValueFungsi(""); // Clear input value
        }
    };

    // Tambahkan handleBlurLain
    const handleBlurLain = () => {
        // Check if inputValueLain ends with comma and add the value to selectedValuesLain
        if (inputValueLain && inputValueLain.endsWith(",")) {
            const valueToAdd = inputValueLain.slice(0, -1); // Remove the comma
            setSelectedValuesLain([...selectedValuesLain, valueToAdd]);
            setInputValueLain(""); // Clear input value
        }
    };


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
        <ConfigProvider theme={{
            token: {
                // Seed Token
                borderRadius: 5,
                controlHeight: 36,
                colorPrimary: "#000000",
            },
        }}>
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
                                    <AutoComplete
                                        className="w-full"
                                        id="dikum"
                                        options={options.dikum}
                                        value={inputValueDikum}
                                        disabled={!isEditing ? "true" : ""}
                                        placeholder="Pilih Dikum"
                                        filterOption={(inputValue, option) =>
                                            option.value
                                                .toUpperCase()
                                                .indexOf(
                                                    inputValue.toUpperCase()
                                                ) !== -1
                                        }
                                        onChange={handleInputChangeDikum}
                                        onSelect={handleSelectDikum}
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
                                    <AutoComplete
                                        className="w-full"
                                        id="dikpol"
                                        options={options.dikpol}
                                        disabled={!isEditing ? "true" : ""}
                                        value={inputValueDikpol}
                                        placeholder="Pilih Dikpol"
                                        filterOption={(inputValue, option) =>
                                            option.value
                                                .toUpperCase()
                                                .indexOf(
                                                    inputValue.toUpperCase()
                                                ) !== -1
                                        }
                                        onChange={handleInputChangeDikpol}
                                        onSelect={handleSelectDikpol}
                                        onBlur={handleBlurDikpol}
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-y-2 mt-2">
                                    {selectedValuesDikpol.map((value) => (
                                        <Tag
                                            key={value}
                                            closable
                                            onClose={() =>
                                                handleRemoveDikpol(value)
                                            }
                                            className="text-sm flex justify-between"
                                        >
                                            {value}
                                        </Tag>
                                    ))}
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="fungsi"
                                    className="block text-sm font-medium leading-6 text-gray-900 -mt-2"
                                >
                                    Fungsi Polair
                                </label>
                                <div className="mt-2">
                                    <AutoComplete
                                        className="w-full"
                                        id="fungsi"
                                        disabled={!isEditing ? "true" : ""}
                                        options={options.fungsi}
                                        value={inputValueFungsi}
                                        placeholder="Pilih Fungsi Polair"
                                        filterOption={(inputValue, option) =>
                                            option.value
                                                .toUpperCase()
                                                .indexOf(
                                                    inputValue.toUpperCase()
                                                ) !== -1
                                        }
                                        onChange={handleInputChangeFungsi}
                                        onSelect={handleSelectFungsi}
                                        onBlur={handleBlurFungsi}
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-y-2 mt-2">
                                    {selectedValuesFungsi.map((value) => (
                                        <Tag
                                            key={value}
                                            closable
                                            onClose={() =>
                                                handleRemoveFungsi(value)
                                            }
                                            className="text-sm flex justify-between"
                                        >
                                            {value}
                                        </Tag>
                                    ))}
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
                                    <AutoComplete
                                        className="w-full"
                                        id="diklat"
                                        disabled={!isEditing ? "true" : ""}
                                        options={options.diklat}
                                        value={inputValueDiklat}
                                        placeholder="Pilih Diklat"
                                        filterOption={(inputValue, option) =>
                                            option.value
                                                .toUpperCase()
                                                .indexOf(
                                                    inputValue.toUpperCase()
                                                ) !== -1
                                        }
                                        onChange={handleInputChangeDiklat}
                                        onSelect={handleSelectDiklat}
                                        onBlur={handleBlurDiklat}
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-y-2 mt-2">
                                    {selectedValuesDiklat.map((value) => (
                                        <Tag
                                            key={value}
                                            closable
                                            onClose={() =>
                                                handleRemoveDiklat(value)
                                            }
                                            className="text-sm flex justify-between"
                                        >
                                            {value}
                                        </Tag>
                                    ))}
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
                                    <AutoComplete
                                        className="w-full"
                                        id="lain-lain"
                                        options={options.lain}
                                        disabled={!isEditing ? "true" : ""}
                                        value={inputValueLain}
                                        placeholder="Pilih Lain-lain"
                                        filterOption={(inputValue, option) =>
                                            option.value
                                                .toUpperCase()
                                                .indexOf(
                                                    inputValue.toUpperCase()
                                                ) !== -1
                                        }
                                        onChange={handleInputChangeLain}
                                        onSelect={handleSelectLain}
                                        onBlur={handleBlurLain}
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-y-2 mt-2">
                                    {selectedValuesLain.map((value) => (
                                        <Tag
                                            key={value}
                                            closable
                                            onClose={() => handleRemoveLain(value)}
                                            className="text-sm flex justify-between"
                                        >
                                            {value}
                                        </Tag>
                                    ))}
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
        </ConfigProvider>
    );
}

export default DetailEdit;
