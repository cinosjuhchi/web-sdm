import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import SidebarContextProvider from "../Context/SidebarContext";
import { useStateContext } from "../Context/AuthContext";

export default function DefaultLayout() {
    const { user, token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }
    return (
        <div className="wrap box-border">
            <SidebarContextProvider>
                <Navbar className="fixed" />
                <div className="flex bg-blue-gray-100">
                    <div className="Sidebar">
                        <Sidebar />
                    </div>
                    <div className="main-content w-full p-4 mb-4">
                        <h3>Hello {user.nama}</h3>
                        <Outlet />
                    </div>
                </div>
            </SidebarContextProvider>
        </div>
    );
}
