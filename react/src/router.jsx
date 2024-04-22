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
import OptioinAdd from "./Views/AddData/OptionAdd";
import AddKorpolairud from "./Views/AddData/AddKorpolairud";
import AddDitpolairud from "./Views/AddData/AddDitpolairud";
import AddDitpoludara from "./Views/AddData/AddDitpoludara";
import PageLayout from "./Layouts/PageLayout";
import DetailEdit from "./Views/DetailEdit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/" />,
            },
            // Dashboard
            {
                path: "/",
                element: <Dashboard />,
            },

            // Korpolairud
            {
                path: "/perincian-korpolairud",
                element: <PerincianKorpolairud />,
            },
            {
                path: "/rekap-korpolairud",
                element: <RekapKorpolairud />,
            },

            // Ditpolairud
            {
                path: "/perincian-ditpolairud",
                element: <PerincianDitpolairud />,
            },
            {
                path: "/rekap-ditpolairud",
                element: <RekapDitpolairud />,
            },

            // Ditpoludara
            {
                path: "/perincian-ditpoludara",
                element: <PerincianDitpolaudara />,
            },
            {
                path: "/rekap-ditpoludara",
                element: <RekapDitpoludara />,
            },

            // Mutasi
            {
                path: "/mutasi",
                element: <Mutasi />,
            },
        ],
    },

    {
        path: "/",
        element: <PageLayout />,
        children: [
            // AddData
            {
                path: "/opsi-tambahkan",
                element: <OptioinAdd />,
            },
            {
                path: "/tambah-data-korpolairud",
                element: <AddKorpolairud />,
            },
            {
                path: "/tambah-data-ditpolairud",
                element: <AddDitpolairud />,
            },
            {
                path: "/tambah-data-ditpoludara",
                element: <AddDitpoludara />,
            },
            {
                path: "/detail",
                element: <DetailEdit />,
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
