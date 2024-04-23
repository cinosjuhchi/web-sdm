import Card from "../Components/Card/CardDashboard";
import CardSkeleton from "../Components/Card/CardSkeleton";
import TableDashboard from "../Components/Table/TableDashboard";
import TabsChart from "../Components/TabsChart/Tabs";

export default function Dashboard() {
    return <DefaultPage />;
}

function DefaultPage() {
    return (
        <div className="w-full gap-y-4 flex flex-col">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <CardSkeleton></CardSkeleton>
            <Card />
            <TabsChart />
            <TableDashboard />
        </div>
    );
}
