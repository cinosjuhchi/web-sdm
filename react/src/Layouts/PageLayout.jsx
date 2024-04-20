import { Outlet } from "react-router-dom";
import "../Layouts/css/PageLayout.css";

export default function PageLayout() {
    return (
        <div className="mx-4 my-6">
            <Outlet />
        </div>
    );
}
