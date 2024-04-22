import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import ContainChart from "../Charts/ContainChart";

export default function TabsChart() {
    const data = [
        {
            label: "Korpolairud",
            value: "korpolairud",
            desc: <ContainChart bagian="KORPOLAIRUD"/>,
        },
        {
            label: "Ditpolairud",
            value: "ditpolairud",
            desc: <ContainChart bagian="DITPOLAIR"/>,
        },

        {
            label: "Ditpoludara",
            value: "ditpoludara",
            desc: <ContainChart bagian="DITPOLUDARA"/>,
        },
    ];

    return (
        <Tabs id="custom-animation" value="korpolairud">
            <TabsHeader>
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody
                animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                }}
            >
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value} className="p-0 pt-4">
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
