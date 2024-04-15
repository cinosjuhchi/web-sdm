import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = [
    "NRP",
    "Nama",
    "Pangkat",
    "Dikum",
    "Dikpol",
    "Fungsi Polri",
    "Diklat",
    "Dikbangpes",
    "Aksi",
];

const TABLE_ROWS = [
    {
        nrp: "123456789",
        nama: "John Michael Lorem Ipsum",
        pangkat: "Brada",
        dikum: "S2",
        dikpol: "Unknown",
        fungsi: "Unknown",
        diklat: "Unknown",
        dikbangpes: "Unknown",
        date: "23/04/18",
    },
    {
        nrp: "123456788",
        nama: "John Michael",
        pangkat: "Brada",
        dikum: "S2",
        dikpol: "Unknown",
        fungsi: "Unknown",
        diklat: "Unknown",
        dikbangpes: "Unknown",
        date: "23/04/18",
    },
    {
        nrp: "123456788",
        nama: "John Michael",
        pangkat: "Brada",
        dikum: "S2",
        dikpol: "Unknown",
        fungsi: "Unknown",
        diklat: "Unknown",
        dikbangpes: "Unknown",
        date: "23/04/18",
    },
    {
        nrp: "123456788",
        nama: "John Michael",
        pangkat: "Brada",
        dikum: "S2",
        dikpol: "Unknown",
        fungsi: "Unknown",
        diklat: "Unknown",
        dikbangpes: "Unknown",
        date: "23/04/18",
    },
    {
        nrp: "123456788",
        nama: "John Michael",
        pangkat: "Brada",
        dikum: "S2",
        dikpol: "Unknown",
        fungsi: "Unknown",
        diklat: "Unknown",
        dikbangpes: "Unknown",
        date: "23/04/18",
    },
];

export default function TableDashboard() {
    return (
        <Card className="h-full w-full rounded-md">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold text-black">
                            Data Baru Ditambahkan
                        </h1>
                        <p color="gray" className="mt-1 font-normal">
                            Informasi data yang baru saja ditambahkan
                        </p>
                    </div>
                    <div className="flex shrink-0 gap-2 flex-row justify-end">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={
                                    <MagnifyingGlassIcon className="h-5 w-5" />
                                }
                            />
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <p className="flex items-center justify-between gap-2 font-normal leading-none text-sm text-black">
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon
                                                strokeWidth={2}
                                                className="h-4 w-4"
                                            />
                                        )}
                                    </p>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            (
                                {
                                    nrp,
                                    nama,
                                    pangkat,
                                    dikum,
                                    diklat,
                                    dikpol,
                                    dikbangpes,
                                    fungsi,
                                },
                                index
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={nrp}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <div className="flex flex-col">
                                                    <p className="font-normal text-sm text-black">
                                                        {nrp}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <p className="font-normal text-sm text-black">
                                                    {nama}
                                                </p>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <p className="font-normal text-sm text-black">
                                                    {pangkat}
                                                </p>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <p className="font-normal text-sm text-black">
                                                {dikum}
                                            </p>
                                        </td>
                                        <td className={classes}>
                                            <p className="font-normal text-sm text-black">
                                                {dikpol}
                                            </p>
                                        </td>
                                        <td className={classes}>
                                            <p className="font-normal text-sm text-black">
                                                {fungsi}
                                            </p>
                                        </td>
                                        <td className={classes}>
                                            <p className="font-normal text-sm text-black">
                                                {diklat}
                                            </p>
                                        </td>
                                        <td className={classes}>
                                            <p className="font-normal text-sm text-black">
                                                {dikbangpes}
                                            </p>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
