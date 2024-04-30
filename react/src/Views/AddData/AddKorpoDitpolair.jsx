import {
    ArrowLeftIcon,
    InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AutoComplete, Tag, ConfigProvider } from "antd";
import Swal from "sweetalert2";
import axiosClient from "../../axios";

function AddKorpolairud({bagian}) {
    const navigate = useNavigate();

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
            { value: "ATT I" },
            { value: "ATT II" },
            { value: "ATT III" },
            { value: "ATT V" },
            { value: "DPMKN II" },
            { value: "DPMKN III" },
            { value: "DPDKN II" },
            { value: "DPDKN III" },
        ],
        dikpol: [
            { value: "SEBA" },
            { value: "SBP" },
            { value: "SETUKPA" },
            { value: "SEPA" },
            { value: "SEKBANG TNI" },
            { value: "AKPL" },
            { value: "PTIK" },
            { value: "SESKO AU" },
            { value: "SESKO AL" },
            { value: "SESPIMMA" },
            { value: "SESPIMMEN" },
            { value: "PIM TK I" },
            { value: "PIM TK II" },
            { value: "PKA" },
            { value: "SESPIMTI" },
            { value: "LEMHANAS" },
            { value: "PAG PA" },
            { value: "PAG BA" },
            { value: "PAG TA" },
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
    const [inputValuePangkat, setInputValuePangkat] = useState("");
    const [inputValueDikpol, setInputValueDikpol] = useState(""); // Tambahkan state untuk dikpol
    const [inputValueFungsi, setInputValueFungsi] = useState(""); // Tambahkan state untuk fungsi polair
    const [inputValueLain, setInputValueLain] = useState(""); // Tambahkan state untuk lain-lain

    const [nrp, setNrp] = useState();
    const [selectedValuesDiklat, setSelectedValuesDiklat] = useState([]);
    const [selectedValuesDikum, setSelectedValuesDikum] = useState([]);
    const [selectedPangkat, setSelectedPangkat] = useState([]);
    const [selectedValuesDikpol, setSelectedValuesDikpol] = useState([]); // Tambahkan state untuk dikpol
    const [selectedValuesFungsi, setSelectedValuesFungsi] = useState([]); // Tambahkan state untuk fungsi polair
    const [selectedValuesLain, setSelectedValuesLain] = useState([]); // Tambahkan state untuk lain-lain
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

    const onSubmit = () => {

        if (
            !nama ||
            !nrp ||
            selectedPangkat.length === 0 ||
            selectedValuesDikum.length === 0       
        ) {
            Toast.fire({
                icon: "warning",
                title: "Harap lengkapi semua input sebelum mengirimkan data",
            });
            return; // Menghentikan pengiriman data jika validasi gagal
        }

        const member = {
            nama: nama,
            pangkat: Array.isArray(selectedPangkat) ? selectedPangkat.join(', ') : selectedPangkat,
            nrp: nrp,
            dikum: Array.isArray(selectedValuesDikum) ? selectedValuesDikum.join(', ') : selectedValuesDikum,
            diklat: Array.isArray(selectedValuesDiklat) ? selectedValuesDiklat.join(', ') : selectedValuesDiklat,
            dikpol: Array.isArray(selectedValuesDikpol) ? selectedValuesDikpol.join(', ') : selectedValuesDikpol,
            fungsi_polair: Array.isArray(selectedValuesFungsi) ? selectedValuesFungsi.join(', ') : selectedValuesFungsi,
            fungsi_poludara: '',
            dikbangspes: Array.isArray(selectedValuesLain) ? selectedValuesLain.join(', ') : selectedValuesLain,
            bagian: bagian
        }
        
                                
        axiosClient.post("/detail-pegawai/store", member).then(() => {
            Toast.fire({
                icon: "success",
                title: "Data berhasil ditambahkan",
            })
            setNama("");
            setNrp("");
            setSelectedPangkat([]);
            setSelectedValuesDikum([]);
            setSelectedValuesDiklat([]);
            setSelectedValuesDikpol([]);
            setSelectedValuesFungsi([]);
            setSelectedValuesLain([]);
            setInputValueDikum([]);
            setInputValuePangkat([]);
            setInputValueDiklat([]);
            setInputValueDikum([]);
            setInputValueLain([]);
            setInputValueDikpol([]);
        }).catch(error => {
            Toast.fire({
                icon: "error",
                title: error,
            })}
        );
    }
    

    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    borderRadius: 5,
                    controlHeight: 36,
                    colorPrimary: "#000000",
                },
            }}
        >
            {" "}
            <a className="absolute">
                <IconButton
                    variant="text"
                    className="hover:bg-biru hover:text-white"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeftIcon className="w-7" strokeWidth={2} />
                </IconButton>
            </a>
            <div className="mx-20">
                <div className="title flex gap-3">
                    <div className="desc">
                        <h2 className="text-lg font-semibold leading-7 text-gray-900">
                            Tambahkan data personel {bagian}
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Isi input di bawah ini dengan sesuai untuk
                            menambahkan data personel {bagian}
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
                                    required
                                    value={nama}
                                    onChange={(ev) => setNama(ev.target.value)}
                                    placeholder="Masukkan Nama"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 placeholder:font-light placeholder:opacity-40 placeholder:text-sm "
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
                                    required
                                    max="10000000"
                                    value={nrp}
                                    onChange={(ev) => setNrp(ev.target.value)}
                                    placeholder="Masukkan NRP"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 placeholder:font-light placeholder:opacity-40 placeholder:text-sm"
                                />
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="mt-2 -mb-1 flex items-center gap-1 font-normal"
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
                                <AutoComplete
                                    className="w-full"
                                    id="dikum"
                                    options={options.pangkat}
                                    value={inputValuePangkat}
                                    placeholder="Pilih Pangkat"
                                    filterOption={(inputValue, option) =>
                                        option.value
                                            .toUpperCase()
                                            .indexOf(
                                                inputValue.toUpperCase()
                                            ) !== -1
                                    }
                                    onChange={handleInputChangePangkat}
                                    onSelect={handleSelectPangkat}
                                />
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
                                        <div className="w-32 truncate">
                                            {value}
                                        </div>{" "}
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
                                        <div className="w-32 truncate">
                                            {value}
                                        </div>{" "}
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
                                        <div className="w-32 truncate">
                                            {value}
                                        </div>{" "}
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
                                        <div className="w-32 truncate">
                                            {value}
                                        </div>{" "}
                                    </Tag>
                                ))}
                            </div>
                        </div>
                    </div>
                </form>
                <div className="button flex gap-4 justify-end mt-10">
                    <button
                        onClick={() => navigate(-1)}
                        type="reset"
                        className="outline outline-black outline-2 text-base px-6 py-1 font-bold rounded-sm hover:scale-105 duration-200 transition-all bg-red-500 text-white hover:text-white active:scale-100 active:bg-red-600"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        onClick={onSubmit}
                        className="outline outline-black outline-2 text-base px-6 py-1 font-bold rounded-sm hover:scale-105 duration-200 transition-all bg-blue-500 text-white active:scale-100 active:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </ConfigProvider>
    );
}

export default AddKorpolairud;
