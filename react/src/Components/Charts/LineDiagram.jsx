import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const chartConfig = {
    type: "pie",
    width: 320,
    height: 320,
    series: [40, 55, 13, 43, 22, 20],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: [
            "#020617",
            "#ff8f00",
            "#00897b",
            "#1e88e5",
            "#d81b60",
            "#fff000",
        ],
        legend: {
            show: true,
        },
        labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6"],
    },
};

export default function Example() {
    return (
        <Card>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
                <div className="w-max rounded-lg bg-biru p-3 text-white font-bold">
                    <AcademicCapIcon className="h-10 w-10" />
                </div>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Pie Chart
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="max-w-sm font-normal"
                    >
                        Visualize your data in a simple way using the
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="mt-4 grid place-items-center px-2">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
}
