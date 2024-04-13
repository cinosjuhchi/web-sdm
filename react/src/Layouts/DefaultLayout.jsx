import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import SidebarContextProvider from "../Context/SidebarContext";

export default function DefaultLayout() {
    return (
        <div className="wrap">
            <SidebarContextProvider>
                <Navbar className="fixed" />
                <div className="flex bg-blue-gray-100">
                    <div className="Sidebar">
                        <Sidebar />
                    </div>
                    <div className="main-content w-full p-4 mb-4">
                        <Outlet />
                    </div>
                </div>
            </SidebarContextProvider>
        </div>
    );
}
