import Skeleton from "react-loading-skeleton";
import BarChart from "./BarChart";
import Example from "./PieChart";

function ContainChartRekap({ bagian }) {
    return (
        <div className="grid grid-cols-3 gap-4">                        
            <Example bagian={bagian}></Example>
        </div>
    );
}

export default ContainChartRekap;
