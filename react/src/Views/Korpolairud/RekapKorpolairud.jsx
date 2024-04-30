import { Input } from "@material-tailwind/react";
import ContainChartRekap from "../../Components/Charts/ContainBarChart";
import TabsRekapKorpo from "../../Components/TabsChart/TabsRekapKorpo";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DropMonthRekap from "../../Components/Dropdown/DropdownMonthRekap";
import DropYearRekap from "../../Components/Dropdown/DropdownYearRekap";
import EksporDialog from "../../Components/Dialog/Ekspor";
import { SelectedMonthProvider} from "../../Context/SelectedMonthContext";

function RekapKorpolairud({bagian}) {

    return (
        <>
            <SelectedMonthProvider> {/* Memastikan bahwa SelectedMonthProvider diatur di atas komponen yang menggunakan konteks */}                
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
                            <EksporDialog></EksporDialog>
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
