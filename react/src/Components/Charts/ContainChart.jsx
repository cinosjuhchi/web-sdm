import Skeleton from "react-loading-skeleton";
import Example from "./PieChart";
import Dikum from "./PieChartDikum";
import Fungsi from "./PieChartFungsi";

function ContainChart({ bagian }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-full p-0 mt-0 rounded-lg"></Skeleton>
            <Example bagian={bagian}></Example>
            <Dikum bagian={bagian}></Dikum>
            <Fungsi bagian={bagian}></Fungsi>
        </div>
    );
}

export default ContainChart;
