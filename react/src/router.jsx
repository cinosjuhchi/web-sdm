import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../src/Layouts/GuestLayout";
import SignIn from "./Views/SignIn";
import { Navigate } from "react-router-dom";
import DefaultLayout from "../src/Layouts/DefaultLayout";
import Dashboard from "./Views/Dashboard";
import SignUp from "./Views/SignUp";
import PerincianKorpolairud from "./Views/Korpolairud/PerincianKorpolairud";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/" />,
            },
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/perincian-korpolairud",
                element: <PerincianKorpolairud />,
            },
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
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
]);
export default router;
