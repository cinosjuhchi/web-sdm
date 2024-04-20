import { useContext, useState } from "react";
import {
    ArrowLeftStartOnRectangleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    HomeIcon,
    Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import LogoKor from "../../assets/logo/logoKorpolairud.png";
import LogoDit from "../../assets/logo/logoPolAir.png";
import LogoUdara from "../../assets/logo/logoPolUdara.png";
import { SidebarK } from "../../Context/SidebarContext";
import { useLocation } from "react-router-dom";
import axiosClient from "../../axios";
import { useStateContext } from "../../Context/AuthContext";

function Sidebar() {
    const { open, setOpen } = useContext(SidebarK);
    const { setUser, setToken } = useStateContext();

    const [dropdownOpen, setDropdownOpen] = useState({
        korpolairud: false,
        ditpolairud: false,
        ditpoludara: false,
    });

    const location = useLocation();

    const toggleDropdown = (dropdown) => {
        setDropdownOpen((prev) => ({
            ...Object.fromEntries(
                Object.entries(prev).map(([key, value]) => [
                    key,
                    key === dropdown ? !value : false, // Close other dropdowns
                ])
            ),
        }));
    };

    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout").then(() => setToken(null));
    };

    const Menus = [
        { title: "Dashboard", link: "/", icon: <HomeIcon className="w-8" /> },
        {
            title: "Korpolairud",
            icon: (
                <img
                    src={LogoKor}
                    width={32}
                    height={32}
                    className="scale-100"
                />
            ),
            drop: true,
            dropdownItems: [
                {
                    title: "Rekapitulasi Korpolairud",
                    link: "/rekap-korpolairud",
                },
                {
                    title: "Perincian Korpolairud",
                    link: "/perincian-korpolairud",
                },
            ],
            dropdownType: "korpolairud",
        },
        {
            title: "Ditpolairud",
            icon: (
                <img
                    src={LogoDit}
                    width={32}
                    height={32}
                    className="scale-100"
                />
            ),
            drop: true,
            dropdownItems: [
                {
                    title: "Rekapitulasi Ditpolairud",
                    link: "/rekap-ditpolairud",
                },
                {
                    title: "Perincian Ditpolairud",
                    link: "/perincian-ditpolairud",
                },
            ],
            dropdownType: "ditpolairud",
        },
        {
            title: "Ditpoludara",
            icon: <img src={LogoUdara} width={32} className="scale-100" />,
            drop: true,
            dropdownItems: [
                {
                    title: "Rekapitulasi Ditpoludara",
                    link: "/rekap-ditpoludara",
                },
                {
                    title: "Perincian Ditpoludara",
                    link: "/perincian-ditpoludara",
                },
            ],
            dropdownType: "ditpoludara",
        },
        {
            title: "Mutasi",
            link: "/mutasi",
            icon: <Square3Stack3DIcon className="w-8" />,
        },
    ];

    return (
        <div
            className={`${
                open ? "w-72" : "w-20"
            } h-[calc(100vh-4rem)] bg-white duration-300 px-4 sticky top-16 z-50 select-none`}
        >
            <ul className="py-2">
                {Menus.map((menu, index) => (
                    <a
                        key={index}
                        href={menu.link}
                        onClick={() => {
                            if (!open && menu.drop) {
                                setOpen(true);
                                toggleDropdown(menu.dropdownType);
                            } else if (menu.drop) {
                                toggleDropdown(menu.dropdownType);
                            }
                        }}
                    >
                        <li
                            key={index}
                            className={`${!open ? "px-2 py-2" : "px-3 py-2"} ${
                                location.pathname === menu.link ||
                                (menu.dropdownItems &&
                                    menu.dropdownItems.find(
                                        (item) =>
                                            item.link === location.pathname
                                    ))
                                    ? "bg-biru text-white rounded-md"
                                    : ""
                            } ${
                                menu.left ? "hover:bg-red-400" : "hover:bg-biru"
                            } flex items-center justify-between gap-3 cursor-pointer hover:bg-biru hover:text-white transition-all hover:rounded-md mt-2`}
                        >
                            <div className="link flex gap-3 items-center">
                                <div className="scale-100">{menu.icon}</div>
                                <span
                                    className={`${
                                        !open && "hidden"
                                    } origin-left duration-300`}
                                >
                                    {menu.title}
                                </span>
                            </div>
                            <ChevronDownIcon
                                className={`${!open ? "hidden" : "w-4"} ${
                                    menu.drop ? "" : "hidden"
                                } ${
                                    dropdownOpen[menu.dropdownType]
                                        ? "transform rotate-180"
                                        : ""
                                } justify-end duration-300`}
                                strokeWidth={3}
                            />
                        </li>
                        {/* Dropdown */}
                        {menu.drop && dropdownOpen[menu.dropdownType] && (
                            <ul
                                className={`mt-2 duration-300 text-sm ${
                                    dropdownOpen[menu.dropdownType]
                                        ? "block"
                                        : ""
                                } ${!open ? "hidden" : "block"}`}
                            >
                                {menu.dropdownItems.map((item, idx) => (
                                    <a href={item.link} key={idx}>
                                        <li className="px-4 py-3 flex gap-2 hover:bg-biru hover:text-white rounded-md">
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="w-4"
                                            />
                                            {item.title}
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        )}
                        {/* End Dropdown */}
                    </a>
                ))}
                <a onClick={onLogout}>
                    <li
                        className={`${
                            !open ? "hover:bg-red-400" : "hover:bg-red-400"
                        } flex items-center gap-3 cursor-pointer px-3 py-2 hover:text-white transition-all hover:rounded-md mt-2`}
                    >
                        <div className="scale-100">
                            <ArrowLeftStartOnRectangleIcon className="w-8" />
                        </div>
                        <span
                            className={`${
                                !open && "hidden"
                            } origin-left duration-300`}
                        >
                            Keluar
                        </span>
                    </li>
                </a>
            </ul>
        </div>
    );
}

export default Sidebar;
