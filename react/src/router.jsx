import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./Components/GuestLayout";
import SignIn from "./Views/SignIn";
import { Navigate } from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout";
import Dashboard from "./Views/Dashboard";
import PageLayout from "./Components/PageLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/" />
            },
            {
                path: "/",
                element: <Dashboard />,
            }
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <SignIn />,
            },
        ],
    },
]);
export default router;
