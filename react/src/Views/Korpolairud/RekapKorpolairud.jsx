import { Input } from "@material-tailwind/react";
import ContainChartRekap from "../../Components/Charts/ContainBarChart";
import TabsRekapKorpo from "../../Components/TabsChart/TabsRekapKorpo";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DropMonthRekap from "../../Components/Dropdown/DropdownMonthRekap";
import DropYearRekap from "../../Components/Dropdown/DropdownYearRekap";
import EksporDialog from "../../Components/Dialog/Ekspor";

function RekapKorpolairud() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">
                Halaman Rekap Divisi Korpolairud
            </h1>
            <ContainChartRekap bagian="KORPOLAIRUD"></ContainChartRekap>

            <div className="table w-full mt-6 rounded-lg bg-white">
                <div className="title p-4 ">
                    <div className="desc flex justify-between items-center">
                        <div className="desc">
                            <h1 className="text-2xl font-bold">
                                Table Rekapitulasi Korpolairud
                            </h1>
                            <p className="">
                                Informasi tentang rekapitulasi korpolairud
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
                <TabsRekapKorpo></TabsRekapKorpo>
            </div>
        </>
    );
}

export default RekapKorpolairud;
