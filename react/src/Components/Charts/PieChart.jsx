import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import Chart from "react-apexcharts";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../axios";

export default function Example({ bagian }) {
    const [chartData, setChartData] = useState([]);
    
    const fetchData = async () => {
        try {
            const response = await axiosClient.get('/data-pegawai/piechart?keyword=pangkat&bagian=' + bagian);
            const filteredData = response.data.filter(item => item.pangkat !== null);
            const formattedData = filteredData.map(item => ({
                x: item.pangkat,
                y: item.total
            }));
            setChartData(formattedData)
            return formattedData;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('Failed to fetch data');
        }
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ['pegawai-piechart-pangkat', bagian],
        queryFn: fetchData,
        initialData: [{x: 'Dimuat', y: 'Load'}, {x: 'Dimuat', y: 'Load'}, {x: 'Dimuat', y: 'Load'}],
    });

    
    if (isError) {
        return <p>Error fetching data</p>;
    }

    const chartConfig = {
        type: "pie",
        width: 320,
        height: 320,
        series: data.map(data => data.y),
        options: {
            labels: data.map(data => data.x + ' : ' + data.y),
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
        },
    };

    return (
        <Card>
            <h1>{bagian}</h1>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
                <div className="w-max rounded-lg bg-black p-3 text-white font-bold">
                    <AcademicCapIcon className="h-10 w-10" />
                </div>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Pangkat
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="max-w-sm font-normal"
                    >
                        Jumlah Pangkat
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="mt-4 grid place-items-center px-2">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
}
