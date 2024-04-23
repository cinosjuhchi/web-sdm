/* eslint-disable no-unused-vars */
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import SidebarContextProvider from "../Context/SidebarContext";
import { useStateContext } from "../Context/AuthContext";
import axiosClient from "../axios";
import { useState } from "react";
import "../Layouts/css/Default.css";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

export default function DefaultLayout() {
    const { user, token } = useStateContext();
    const [nama, setNama] = useState("");
    if (!token) {
        return <Navigate to="/login" />;
    }

    const fetchData = async () => {
        const $pegawai = await axiosClient
        .get("/me")
        console.log($pegawai.data)
        setNama($pegawai.data.nama)

        return $pegawai
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isPending, isError } = useQuery({
        queryKey: ['user', nama],
        queryFn: fetchData
    })



    
    return (
        <div className="wrap box-border">
            <SidebarContextProvider>
                <Navbar className="fixed" />
                <div className="flex bg-blue-gray-100">
                    <div className="Sidebar">
                        <Sidebar />
                    </div>
                    <div className="main-content w-full p-4 mb-4">
                        <h3>{isPending ? (
                            <Skeleton className="w-32 h-5"></Skeleton>
                        ) : (
                            'Hello '+nama
                        )}</h3>
                        <Outlet />
                    </div>
                </div>
            </SidebarContextProvider>
        </div>
    );
}
