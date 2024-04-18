import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../src/Layouts/GuestLayout";
import SignIn from "./Views/SignIn";
import { Navigate } from "react-router-dom";
import DefaultLayout from "../src/Layouts/DefaultLayout";
import Dashboard from "./Views/Dashboard";
import SignUp from "./Views/SignUp";
import PerincianKorpolairud from "./Views/Korpolairud/PerincianKorpolairud";
import RekapKorpolairud from "./Views/Korpolairud/RekapKorpolairud";
import PerincianDitpolairud from "./Views/Ditpolairud/PerincianDitpolairud";
import RekapDitpolairud from "./Views/Ditpolairud/RekapDitpolairud";
import PerincianDitpolaudara from "./Views/Ditpoludara/PerincianDitpoludara";
import RekapDitpoludara from "./Views/Ditpoludara/RekapDitpoludara";
import Mutasi from "./Views/Mutasi";

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
            {
                path: "/rekap-korpolairud",
                element: <RekapKorpolairud />,
            },
            {
                path: "/perincian-ditpolairud",
                element: <PerincianDitpolairud />,
            },
            {
                path: "/rekap-ditpolairud",
                element: <RekapDitpolairud />,
            },
            {
                path: "/perincian-ditpoludara",
                element: <PerincianDitpolaudara />,
            },
            {
                path: "/rekap-ditpoludara",
                element: <RekapDitpoludara />,
            },
            {
                path: "/mutasi",
                element: <Mutasi />,
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
