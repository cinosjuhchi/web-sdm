import { Input } from "@material-tailwind/react";
import ContainChartRekap from "../../Components/Charts/ContainBarChart";
import TabsRekapKorpo from "../../Components/TabsChart/TabsRekapKorpo";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DropMonthRekap from "../../Components/Dropdown/DropdownMonthRekap";
import DropYearRekap from "../../Components/Dropdown/DropdownYearRekap";

function RekapKorpolairud() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">
                Halaman Rekap Divisi Korpolairud
            </h1>
            <ContainChartRekap></ContainChartRekap>

            <div className="table w-full mt-6">
                <div className="title bg-white flex justify-between p-4 rounded-lg items-center">
                    <div className="desc">
                        <h1 className="text-2xl font-bold">
                            Table Rekapitulasi Korpolairud
                        </h1>
                        <p className="">
                            Informasi tentang rekapitulasi korpolairud
                        </p>
                    </div>

                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={
                                    <MagnifyingGlassIcon className="h-5 w-5" />
                                }
                            />
                        </div>
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
