import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import TableRekapKorpolairud from "../Table/Korpolairud/TableRekapDikum";

export default function TabsRekapKorpo() {
    const data = [
        {
            label: "Dikum",
            value: "dikum",
            desc: <TableRekapKorpolairud />,
        },
        {
            label: "Dikpol",
            value: "dikpol",
            desc: <TableRekapKorpolairud />,
        },
        {
            label: "Fungsi Polair",
            value: "fungsi",
            desc: <TableRekapKorpolairud />,
        },
        {
            label: "Diklat",
            value: "diklat",
            desc: <TableRekapKorpolairud />,
        },
        {
            label: "Lain-lain",
            value: "lain-lain",
            desc: <TableRekapKorpolairud />,
        },
    ];

    return (
        <Tabs id="custom-animation" value="dikum" className="mt-4">
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
