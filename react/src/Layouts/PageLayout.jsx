import { Navigate, Outlet } from "react-router-dom";
import "../Layouts/css/PageLayout.css";
import { useState } from "react";
import { useStateContext } from "../Context/AuthContext";
import axiosClient from "../axios";
import { useQuery } from "@tanstack/react-query";



export default function PageLayout() {
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
        <div className="mx-4 my-6">
            <Outlet />
        </div>
    );
}
