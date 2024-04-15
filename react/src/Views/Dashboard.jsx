import { useState } from "react";
import axiosClient from "../axios";
import Card from "../Components/Card/CardDashboard";
import TableDashboard from "../Components/Table/TableDashboard";
import TabsChart from "../Components/TabsChart/Tabs";
import { useStateContext } from "../Context/AuthContext";


export default function Dashboard() {

    const { user, token } = useStateContext();
    const [nama, setNama] = useState('');

    axiosClient.get('/me')
    .then(function (response) {
        console.log(response.data)
        setNama(response.data.nama)
    })
    .catch(err => {
        const response = err.response;
        if(response && response.status == 422){
          console.log(response.data.errors);
        }
      })
    return (
        <div className="w-full gap-y-4 flex flex-col">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Card />
            <TabsChart />
            <TableDashboard />
        </div>
    );
}
