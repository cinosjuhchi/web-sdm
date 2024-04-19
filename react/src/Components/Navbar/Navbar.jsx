import { useContext } from "react";
import { SidebarK } from "../../Context/SidebarContext";
import {
    PlusIcon,
    XMarkIcon,
    Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";

function Navbar() {
    const { open, setOpen } = useContext(SidebarK);

    return (
        <div className="nav flex bg-biru px-4 py-3 text-white font-bold justify-between items-center sticky top-0 z-50">
            <div className="title flex gap-3 ml-2">
                <button className="duration-300">
                    {open ? (
                        <Tooltip
                            content="Tutup Sidebar"
                            className="bg-white text-black"
                            placement="right"
                        >
                            <XMarkIcon
                                className="w-8 transition-transform transform rotate-0"
                                strokeWidth={2.5}
                                onClick={() => setOpen(!open)}
                            />
                        </Tooltip>
                    ) : (
                        <Tooltip
                            content="Buka Sidebar"
                            className="bg-white text-black"
                            placement="right"
                        >
                            <Bars3BottomLeftIcon
                                className="w-8 transition-transform transform rotate-0"
                                strokeWidth={2.5}
                                onClick={() => setOpen(!open)}
                            />
                        </Tooltip>
                    )}
                </button>
                <h4 className="text-xl">
                    Sistem Kualifikasi Pendidikan Korpolairud
                </h4>
            </div>

            <div className="right flex gap-4">
                <Tooltip
                    content="Tambahkan data baru"
                    className="bg-white text-black"
                    placement="bottom-start"
                >
                    <a
                        href="/opsi-tambahkan"
                        className="px-4 py-2 bg-jingga rounded-md text-md flex items-center gap-1 hover:bg-yellow-800 hover:scale-105 duration-300 active:scale-100 transition-all"
                    >
                        <PlusIcon className="w-5" strokeWidth={3} />
                        Tambah
                    </a>
                </Tooltip>
            </div>
        </div>
    );
}

export default Navbar;
