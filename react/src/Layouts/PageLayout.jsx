import { Outlet } from "react-router-dom";

export default function PageLayout() {
    return (
        <div className="m-4">
            <Outlet />
        </div>
    );
}
