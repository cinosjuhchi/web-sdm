import { Outlet } from "react-router-dom";
import ComplexNavbar from "../Components/Navbar/Navbar";
import MultiLevelSidebar from "../Components/Sidebar/Sidebar";

export default function DefaultLayout() {
    return (
        <div className="flex bg-blue-gray-100">
            <div className="">
                <MultiLevelSidebar />
            </div>
            <div className="w-full px-4 my-4">
                <ComplexNavbar />
                <Outlet />
            </div>
        </div>
    );
}
