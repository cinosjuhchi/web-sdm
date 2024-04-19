import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";

function AddKorpolairud() {
    return (
        <div className="flex w-full">
            <a href="/">
                <IconButton
                    variant="text"
                    className="hover:bg-biru hover:text-white"
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
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="first-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Nama
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="last-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            NRP
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="nrp"
                                id="nrp"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddKorpolairud;
