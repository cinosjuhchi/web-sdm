import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function AddKorpolairud() {
    const navigate = useNavigate();

    const input = [
        {
            title: "Nama",
            type: "text",
            nama: "nama",
            id: "nama",
            placholder: "contoh",
            note: "",
            noteicon: false,
        },
        {
            title: "NRP",
            type: "number",
            nama: "nrp",
            id: "nrp",
            placholder: "contoh",
            note: "Hanya dapat diisi dengan angka",
            noteicon: true,
        },
        {
            title: "Pangkat",
            type: "text",
            nama: "pangkat",
            id: "pangkat",
            placholder: "contoh",
            note: "",
            noteicon: false,
        },
        {
            title: "Dikum",
            type: "text",
            nama: "dikum",
            id: "dikum",
            placholder: "contoh",
            note: "",
            noteicon: false,
        },
        {
            title: "Dikpol",
            type: "text",
            nama: "dikpol",
            id: "dikpol",
            placholder: "contoh",
            note: "",
            noteicon: false,
        },
        {
            title: "Fungsi Polair",
            type: "text",
            nama: "fungsi",
            id: "fungsi",
            placholder: "contoh",
            note: "",
            noteicon: false,
        },
        {
            title: "Diklat",
            type: "text",
            nama: "diklat",
            id: "diklat",
            placholder: "contoh",
            note: "",
            noteicon: false,
        },
        {
            title: "Lain-lain",
            type: "text",
            nama: "lain-lain",
            id: "lain-lain",
            placholder: "contoh",
            note: "",
            noteicon: false,
        },
    ];

    return (
        <div className="flex w-full">
            <a>
                <IconButton
                    variant="text"
                    className="hover:bg-biru hover:text-white"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeftIcon className="w-7" strokeWidth={2} />
                </IconButton>
            </a>
            <div className="ml-16 mr-20 w-full">
                <div className="">
                    <div className="title flex gap-3">
                        <div className="desc">
                            <h2 className="text-lg font-semibold leading-7 text-gray-900">
                                Tambahkan data personel Korpolairud
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Silakan isi formulir di bawah ini untuk
                                menambahkan data personel Korpolairud.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {input.map((input, index) => (
                        <div className="sm:col-span-3" key={index}>
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-medium leading-6 text-gray-900 -mt-2"
                            >
                                {input.title}
                            </label>
                            <div className="mt-2">
                                <input
                                    type={input.type}
                                    name={input.nama}
                                    id={input.id}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                                />
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="mt-2 -mb-1 flex items-center gap-1 font-normal"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className={` ${
                                            input.noteicon
                                                ? "-mt-px h-4 w-4"
                                                : "hidden"
                                        }`}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {input.note}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="button flex gap-4 justify-end mt-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="outline outline-black outline-2 text-base px-6 py-1 font-bold rounded-sm hover:scale-105 duration-200 transition-all bg-red-500 text-white hover:text-white active:scale-100 active:bg-red-600"
                    >
                        Batal
                    </button>
                    <button className="outline outline-black outline-2 text-base px-6 py-1 font-bold rounded-sm hover:scale-105 duration-200 transition-all bg-blue-500 text-white active:scale-100 active:bg-blue-600">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddKorpolairud;
