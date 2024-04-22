import React from "react";
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

export default function DialogMutasi() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

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
                        <h1 className="text-2xl font-bold">Asep Junior</h1>
                    </div>

                    <h1 className="mb-2 font-medium">Mutasikan personel</h1>
                    <div className="aksi flex items-center justify-evenly">
                        <div className="old">
                            <p className="text-sm">Pangkat lama :</p>
                            <h1 className="text-lg font-bold">Irjen Pol</h1>
                        </div>
                        <div className="old">
                            <ArrowRightIcon
                                className="w-10 text-green-500"
                                strokeWidth={2}
                            ></ArrowRightIcon>
                        </div>
                        <div className="new w-6/12">
                            <p className="text-sm">Pangkat baru :</p>
                            <DropdownMutasi></DropdownMutasi>
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
                    >
                        Submit
                    </button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
