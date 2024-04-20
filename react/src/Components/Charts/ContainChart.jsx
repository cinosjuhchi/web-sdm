import Example from "./PieChart";

function ContainChart(bagian) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Example bagian={bagian}></Example>
            <Example bagian={bagian}></Example>
            <Example bagian={bagian}></Example>
        </div>
    );
}

export default ContainChart;
