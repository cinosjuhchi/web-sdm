import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function DefaultLayout() {
    return (
        <div className="wrap">
            <Navbar />
            <div className="flex bg-blue-gray-100">
                <div>
                    <Sidebar />
                </div>
                <div className="w-full px-4 mb-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
