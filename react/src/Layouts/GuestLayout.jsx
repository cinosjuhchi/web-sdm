import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingIndicator from "../Components/loading/LoadingIndicator";
import { useStateContext } from "../Context/AuthContext";

export default function GuestLayout() {
    
    const {user, token} = useStateContext();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Logika untuk memuat data atau sumber daya lainnya
        // Setelah selesai memuat, atur loading menjadi false
        setTimeout(() => {
            setLoading(false); 
            
        },[]); // Contoh, ganti dengan logika memuat yang sesuai
    }, []);
    
    if(token){
        return <Navigate to='/'/>
    }
    return <div>{loading ? <LoadingIndicator /> : <Outlet />}</div>;
}
