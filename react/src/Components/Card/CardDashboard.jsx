import { UserGroupIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { SidebarK } from "../../Context/SidebarContext";
import LogoKor from "../../assets/logo/logoKorpolairud.png";
import LogoDit from "../../assets/logo/logoPolAir.png";
import LogoUdara from "../../assets/logo/logoPolUdara.png";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../axios";

export function CardDashboard() {
    const { open } = useContext(SidebarK);
    const [total, setTotal] = useState("");
    const fetchData = async () => {
        const pegawai = await axiosClient.get("/data-pegawai/total");
        setTotal(pegawai.data);
        return pegawai.data;
    };
    const { isPending, data, isError, error } = useQuery({
        queryKey: ["totalPegawai"],
        queryFn: fetchData,
    });

    const Menus = [
        {
            link: "/",
            icon: <UserGroupIcon />,
            title: "Total Personel Polri",
            desc: total,
        },
        {
            link: "/rekap-korpolairud",
            icon: <img src={LogoKor} />,
            title: "Total Personel Korpolairud",
            desc: "404.738",
        },
        {
            link: "/rekap-ditpolairud",
            icon: <img src={LogoDit} />,
            title: "Total Personel Ditpolairud",
            desc: "404.738",
        },
        {
            link: "/rekap-ditpoludara",
            icon: <img src={LogoUdara} className="scale-110" />,
            title: "Total Personel Ditpoludara",
            desc: "404.738",
        },
    ];

    return (
        <div className="wrapper grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center gap-4">
            {Menus.map((menu, index) => (
                <a
                    key={index}
                    href={menu.link}
                    className="card rounded-md px-4 py-4 bg-white hover:bg-biru hover:scale-105 active:scale-100 transition-all duration-300 group max-h-min h-24 flex"
                >
                    <div
                        className="card-body flex gap-3 items-center"
                        key={index}
                    >
                        <div className="w-12 object-contain group-hover:text-white">
                            {menu.icon}
                        </div>
                        <div className="title text-black group-hover:text-white">
                            <h1 className={`${!open ? "text-sm" : "text-xs"}`}>
                                {menu.title}
                            </h1>
                            <h1 className="font-extrabold text-2xl">
                                {menu.desc}
                            </h1>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
export default CardDashboard;
