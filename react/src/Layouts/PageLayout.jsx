import { Outlet } from "react-router-dom";
import "../Layouts/css/PageLayout.css";

export default function PageLayout() {
    return (
        <div className="m-4">
            <Outlet />
        </div>
    );
}
