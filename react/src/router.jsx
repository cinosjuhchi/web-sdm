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
import AddKorpoDitpolair from "./Views/AddData/AddKorpoDitpolair";
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
                element: <PerincianKorpolairud bagian="KORPOLAIRUD"/>,
            },
            {
                path: "/rekap-korpolairud",
                element: <RekapKorpolairud bagian="KORPOLAIRUD"/>,
            },

            // Ditpolairud
            {
                path: "/perincian-ditpolairud",
                element: <PerincianKorpolairud bagian="DITPOLAIR"/>,
            },
            {
                path: "/rekap-ditpolairud",
                element: <RekapKorpolairud bagian="DITPOLAIR"/>,
            },

            // Ditpoludara
            {
                path: "/perincian-ditpoludara",
                element: <PerincianKorpolairud bagian="DITPOLUDARA"/>,
            },
            {
                path: "/rekap-ditpoludara",
                element: <RekapKorpolairud bagian="DITPOLUDARA"/>,
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
                element: <AddKorpoDitpolair bagian="KORPOLAIRUD"/>,
            },
            {
                path: "/tambah-data-ditpolairud",
                element: <AddKorpoDitpolair bagian="DITPOLAIRUD"/>,
            },
            {
                path: "/tambah-data-ditpoludara",
                element: <AddDitpoludara bagian="DITPOLUDARA"/>,
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
