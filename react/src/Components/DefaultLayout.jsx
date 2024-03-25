import { Outlet } from "react-router-dom";
import ComplexNavbar from "./Navbar/Navbar";
import SimpleFooter from "./Footer/Footer";
import MultiLevelSidebar from "./Sidebar/Sidebar";

export default function DefaultLayout() {
    return (
        <div className="flex">
            <div className="flex-auto">
                <MultiLevelSidebar />
            </div>
            <div className="flex-auto px-4">
                <ComplexNavbar />
                <Outlet />
                <SimpleFooter />
            </div>
        </div>
    );
}
