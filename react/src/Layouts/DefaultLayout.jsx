/* eslint-disable no-unused-vars */
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import SidebarContextProvider from "../Context/SidebarContext";
import { useStateContext } from "../Context/AuthContext";
import axiosClient from "../axios";
import { useState } from "react";

export default function DefaultLayout() {
    const { user, token } = useStateContext();
    const [nama, setNama] = useState('');
    if (!token) {
        return <Navigate to="/login" />;
    }

    axiosClient.get('/me')
    .then(function (response) {
        console.log(response.data)
        setNama(response.data.nama)
    })
    .catch(err => {
        const response = err.response;
        if(response && response.status == 422){
          console.log(response.data.errors);
        }
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
                        <h3>Hello {nama}</h3>
                        <Outlet />
                    </div>
                </div>
            </SidebarContextProvider>
        </div>
    );
}
