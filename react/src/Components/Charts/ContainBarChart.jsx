import BarChart from "./BarChart";
import Example from "./PieChart";

function ContainChartRekap({ bagian }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <BarChart></BarChart>
            </div>
            <Example bagian={bagian}></Example>
        </div>
    );
}

export default ContainChartRekap;
