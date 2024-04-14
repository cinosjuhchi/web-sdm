import SimpleCard from "../Components/Card/CardDashboard";
import { MembersTable } from "../Components/Table/TableDashboard";
import TabsChart from "../Components/TabsChart/Tabs";

export default function Dashboard() {
    return (
        <div className="w-full gap-y-4 flex flex-col">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <SimpleCard></SimpleCard>
            <TabsChart />
            <MembersTable></MembersTable>
        </div>
    );
}
