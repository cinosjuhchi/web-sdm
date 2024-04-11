import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LoadingIndicator from "../Components/loading/LoadingIndicator";

export default function GuestLayout() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Logika untuk memuat data atau sumber daya lainnya
        // Setelah selesai memuat, atur loading menjadi false
        setTimeout(() => {
            setLoading(false);
        }, 10000); // Contoh, ganti dengan logika memuat yang sesuai
    }, []);

    return <div>{loading ? <LoadingIndicator /> : <Outlet />}</div>;
}
