import { useState } from "react";
import {
    ArrowLeftStartOnRectangleIcon,
    HomeIcon,
    Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import LogoKor from "../../assets/logo/logoKorpolairud.png";
import LogoDit from "../../assets/logo/logoPolAir.png";
import LogoUdara from "../../assets/logo/logoPolUdara.png";

function Sidebar() {
    const [open, setOpen] = useState(true);
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
        {
            title: "Keluar",
            link: "/login",
            icon: <ArrowLeftStartOnRectangleIcon className="w-8" />,
        },
    ];
    return (
        <div
            className={`${
                open ? "w-72" : "w-20"
            } h-screen bg-white duration-300 px-4`}
        >
            <ul className="py-2">
                {Menus.map((menu, index) => (
                    <a key={index} href={menu.link}>
                        <li
                            key={index}
                            className={`${
                                !open ? "px-2 py-2" : "px-3 py-2"
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
            </ul>
        </div>
    );
}

export default Sidebar;
