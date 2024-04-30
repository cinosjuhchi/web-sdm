import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import TableRekapDikum from "../Table/Korpolairud/TableRekapDikum";
import TableRekapDikpol from "../Table/Korpolairud/TableRekapDikpol"
import TableRekapDiklat from "../Table/Korpolairud/TableRekapDiklat"
import TableRekapFungsi from "../Table/Korpolairud/TableRekapFungsi"
import TableRekapLain from "../Table/Korpolairud/TableRekapLain"
import { useSelectedMonth } from "../../Context/SelectedMonthContext";

export default function TabsRekapKorpo({bagian}) {
    const data = [
        {
            label: "Dikum",
            value: "dikum",
            desc: <TableRekapDikum bagian={bagian}/>,
        },
        {
            label: "Dikpol",
            value: "dikpol",
            desc: <TableRekapDikpol bagian={bagian}/>,
        },
        {
            label: "Fungsi " + bagian,
            value: "fungsi",
            desc: <TableRekapFungsi bagian={bagian}/>,
        },
        {
            label: "Diklat",
            value: "diklat",
            desc: <TableRekapDiklat bagian={bagian}/>,
        },
        {
            label: "Lain-lain",
            value: "lain-lain",
            desc: <TableRekapLain bagian={bagian}/>,
        },
    ];

    const { selectedMonth } = useSelectedMonth(); // Menggunakan useSelectedMonth untuk mendapatkan selectedMonth

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
