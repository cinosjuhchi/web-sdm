import { useContext } from "react";
import { SidebarK } from "../../Context/SidebarContext";
import Search from "../Button/Search";
import { PlusIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
    const { open, setOpen } = useContext(SidebarK);

    return (
        <div className="nav flex bg-biru px-4 py-3 text-white font-bold justify-between items-center sticky top-0 z-50">
            <div className="title flex gap-3 ml-2">
                <button className="duration-300">
                    {open ? (
                        <XMarkIcon
                            className="w-8 transition-transform transform rotate-0"
                            strokeWidth={2.5}
                            onClick={() => setOpen(!open)}
                        />
                    ) : (
                        <Bars3Icon
                            className="w-8 transition-transform transform rotate-0"
                            strokeWidth={2.5}
                            onClick={() => setOpen(!open)}
                        />
                    )}
                </button>
                <h4 className="text-xl">
                    Sistem Kualifikasi Pendidikan Korpolairud
                </h4>
            </div>

            <div className="right flex gap-4">
                <div className="search">
                    <Search></Search>
                </div>
                <a
                    href="/tambah_data"
                    className="px-4 bg-jingga rounded-md text-md flex items-center gap-1"
                >
                    <PlusIcon className="w-5" strokeWidth={3} />
                    Tambah
                </a>
            </div>
        </div>
    );
}

export default Navbar;
