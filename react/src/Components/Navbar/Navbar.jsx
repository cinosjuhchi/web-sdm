import Search from "../Button/Search";
import { PlusIcon } from "@heroicons/react/24/outline";

function Navbar() {
    return (
        <div className="nav flex bg-biru px-4 py-3 text-white font-bold justify-between items-center">
            <div className="title flex gap-4">
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                        />
                    </svg>
                </button>
                <h4 className="text-xl">Sistem Kwaldik</h4>
            </div>

            <div className="right flex gap-4">
                <div className="search">
                    <Search></Search>
                </div>
                <button
                    className="px-4 bg-jingga rounded-md text-md flex items-center gap-1"
                    type="submit"
                >
                    <PlusIcon className="w-5" strokeWidth={3} />
                    Tambah
                </button>
            </div>
        </div>
    );
}

export default Navbar;
