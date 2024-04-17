import { useState } from "react";
import Card from "../Components/Card/CardDashboard";
import TableDashboard from "../Components/Table/TableDashboard";
import TabsChart from "../Components/TabsChart/Tabs";
import { useStateContext } from "../Context/AuthContext";

export default function Dashboard() {
    return (
        <DefaultPage />
    )
}

function DefaultPage(){
    const { user, token } = useStateContext();
     
    return (
        <div className="w-full gap-y-4 flex flex-col">            
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Card />
            <TabsChart />
            <TableDashboard />
        </div>
    );
}
