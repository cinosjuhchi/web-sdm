import Skeleton from "react-loading-skeleton";
import BarChart from "./BarChart";
import Example from "./PieChart";

function ContainChartRekap({ bagian }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-72">
                <Skeleton className="h-full rounded-xl"></Skeleton>
            </div>
            <Skeleton className="h-full rounded-xl"></Skeleton>

            <div className="col-span-2">
                <BarChart></BarChart>
            </div>
            <Example bagian={bagian}></Example>
        </div>
    );
}

export default ContainChartRekap;
