import Search from "../Button/Search";
import { PlusIcon, Bars3Icon } from "@heroicons/react/24/outline";

function Navbar() {
    return (
        <div className="nav flex bg-biru px-4 py-3 text-white font-bold justify-between items-center sticky">
            <div className="title flex gap-3">
                <button>
                    <Bars3Icon className="w-6" strokeWidth={2.5} />
                </button>
                <h4 className="text-xl">Sistem Kwaldik</h4>
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
