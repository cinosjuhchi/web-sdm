import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import ContainBarChart from "../Charts/ContainBarChart";

export default function TabsRekap() {
    const data = [
        {
            label: "Korpolairud",
            value: "korpolairud",
            desc: <ContainBarChart bagian="korpo"/>,
        },
        {
            label: "Ditpolairud",
            value: "ditpolairud",
            desc: <ContainBarChart bagian="ditpolair"/>,
        },

        {
            label: "Ditpoludara",
            value: "ditpoludara",
            desc: <ContainBarChart bagian="ditpolud"/>,
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
