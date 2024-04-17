import { useState } from "react";
import axiosClient, { fetchData } from "../axios";
import Card from "../Components/Card/CardDashboard";
import TableDashboard from "../Components/Table/TableDashboard";
import TabsChart from "../Components/TabsChart/Tabs";
import { useStateContext } from "../Context/AuthContext";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
    return (
        <DefaultPage />
    )
}

function DefaultPage(){
    const { user, token } = useStateContext();
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['pegawais'],
        queryFn: fetchData
    });
    {console.log(data)}
    if (isPending) {
        return <span>Loading...</span>;
    }
    if (isError) {
        return <span>Error: {error.message}</span>;
    }
    
    return (
        <div className="w-full gap-y-4 flex flex-col">            
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Card />
            <TabsChart />
            <TableDashboard data={data.data} />
        </div>
    );
}
