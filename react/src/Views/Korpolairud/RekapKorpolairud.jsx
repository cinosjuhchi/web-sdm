import { Input } from "@material-tailwind/react";
import ContainChartRekap from "../../Components/Charts/ContainBarChart";
import TabsRekapKorpo from "../../Components/TabsChart/TabsRekapKorpo";
import {
    ArrowPathIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import DropMonthRekap from "../../Components/Dropdown/DropdownMonthRekap";
import DropYearRekap from "../../Components/Dropdown/DropdownYearRekap";
import EksporDialog from "../../Components/Dialog/Ekspor";
import { SelectedMonthProvider } from "../../Context/SelectedMonthContext";
import axiosClient from "../../axios";
import { useState } from "react";

function RekapKorpolairud({ bagian }) {
    const [isSyncing, setIsSyncing] = useState(false);
    const onSync = async () => {
        setIsSyncing(true); // Mengatur status menjadi sinkronisasi sedang berlangsung
        try {
            await axiosClient.get("/pegawai/sinkron-rekap") // Melakukan refetch pada query dengan key "rekap-query"
            alert("Data berhasil di sinkronkan");
            console.log("hello");
        } catch (error) {
            alert(error);
        } finally {
            setIsSyncing(false); // Mengatur status kembali setelah sinkronisasi selesai, baik berhasil atau gagal
        }
    };
    return (
        <>
            <SelectedMonthProvider>
                {" "}
                {/* Memastikan bahwa SelectedMonthProvider diatur di atas komponen yang menggunakan konteks */}
                <h1 className="text-2xl font-bold mb-4">
                    Halaman Rekap Divisi {bagian}
                </h1>
                {/* <ContainChartRekap bagian="KORPOLAIRUD"></ContainChartRekap> */}
                <div className="table w-full mt-6 rounded-lg bg-white">
                    <div className="title p-4 ">
                        <div className="desc flex justify-between items-center">
                            <div className="desc">
                                <h1 className="text-2xl font-bold">
                                    Table Rekapitulasi {bagian}
                                </h1>
                                <p className="">
                                    Informasi tentang rekapitulasi {bagian}
                                </p>
                            </div>
                            <div className="w-full md:w-72">
                                <Input
                                    label="Search"
                                    icon={
                                        <MagnifyingGlassIcon className="h-5 w-5" />
                                    }
                                />
                            </div>
                        </div>

                        <div className="bot flex justify-between items-center mt-6">
                            <div className="flex">
                                <button
                                    className={`bg-green-600 px-2 me-2 flex gap-2 items-center rounded-md text-bold text-white text-sm ${
                                        isSyncing &&
                                        "bg-gray-400 cursor-not-allowed"
                                    }`}
                                    onClick={onSync}
                                    disabled={isSyncing}
                                >
                                    <ArrowPathIcon className="w-6 h-6 font-bold" />
                                </button>
                                <EksporDialog></EksporDialog>
                            </div>
                            <div className="dropdown flex gap-2">
                                <DropMonthRekap></DropMonthRekap>
                                <DropYearRekap></DropYearRekap>
                            </div>
                        </div>
                    </div>
                    <TabsRekapKorpo bagian={bagian}></TabsRekapKorpo>
                </div>
            </SelectedMonthProvider>
        </>
    );
}

export default RekapKorpolairud;
