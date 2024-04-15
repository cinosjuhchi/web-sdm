import { useContext } from "react";
import {
    ArrowLeftStartOnRectangleIcon,
    HomeIcon,
    Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import LogoKor from "../../assets/logo/logoKorpolairud.png";
import LogoDit from "../../assets/logo/logoPolAir.png";
import LogoUdara from "../../assets/logo/logoPolUdara.png";
import { SidebarK } from "../../Context/SidebarContext";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import axiosClient from "../../axios";
import { useStateContext } from "../../Context/AuthContext";

function Sidebar() {
    const { open } = useContext(SidebarK);
    const { setUser, setToken } = useStateContext();
    const location = useLocation(); // Initialize useLocation
    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout").then(() => setToken(null));
    };

    const Menus = [
        { title: "Dashboard", link: "/", icon: <HomeIcon className="w-8" /> },
        {
            title: "Korpolairud",
            link: "/view",
            icon: <img src={LogoKor} width={32} className="scale-100" />,
        },
        {
            title: "Ditpolairud",
            link: "/view",
            icon: <img src={LogoDit} width={32} className="scale-100" />,
        },
        {
            title: "Ditpoludara",
            link: "/view",
            icon: <img src={LogoUdara} width={32} className="scale-100" />,
        },
        {
            title: "Mutasi",
            link: "/view",
            icon: <Square3Stack3DIcon className="w-8" />,
        },
    ];

    return (
        <div
            className={`${
                open ? "w-72" : "w-20"
            } h-[calc(100vh-4rem)] bg-white duration-300 px-4 sticky top-16 z-50`}
        >
            <ul className="py-2">
                {Menus.map((menu, index) => (
                    <a
                        key={index}
                        href={menu.link}
                        onClick={menu.left ? { onLogout } : null}
                    >
                        <li
                            key={index}
                            className={`${!open ? "px-2 py-2" : "px-3 py-2"} ${
                                location.pathname === menu.link
                                    ? "bg-biru text-white rounded-md"
                                    : ""
                            } ${
                                menu.left ? "hover:bg-red-400" : "hover:bg-biru"
                            } flex items-center gap-3 cursor-pointer hover:bg-biru hover:text-white transition-all hover:rounded-md mt-2`}
                        >
                            <div className="scale-100">{menu.icon}</div>
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-300`}
                            >
                                {menu.title}
                            </span>
                        </li>
                    </a>
                ))}
                <a onClick={onLogout}>
                    <li className="px-2 py-2  hover:bg-red-400 flex items-center gap-3 cursor-pointer hover:bg-biru hover:text-white transition-all hover:rounded-md mt-2">
                        <div className="scale-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                                className="w-8"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                                ></path>
                            </svg>
                        </div>
                        <span className="hidden origin-left duration-300">
                            Keluar
                        </span>
                    </li>
                </a>
            </ul>
        </div>
    );
}

export default Sidebar;
