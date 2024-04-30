import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
    ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
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
import Filter from "../../Dialog/Filter";
import EksporDialog from "../../Dialog/Ekspor";
import axiosClient from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../Context/FilterContext";
import Skeleton from "react-loading-skeleton";

const sm = [
    {
        id: 1,
        nrp: 67120531,
        nama: "MOHAMMAD YASSIN KOSASIH, S.I.K., M.Si., M.Tr.Opsla.",
        pangkat: "IRJEN POL",
        kantor_bagian: "KORPOLAIRUD",
        fungsi: null,
        dikpol: "AKPOL, PTIK,SESKO AL,LEMHANAS",
        dikum: "S2(2004)",
        diklat: null,
        dikbangspes: "INTEL, BRIMOB,, VIP PROTECTION USA",
    },
];

export default function TablePerincianKorpolairud({ bagian }) {
    let TABLE_HEAD = [
        "NRP",
        "Nama",
        "Pangkat",
        "Dikum",
        "Dikpol",
        "Fungsi Polair",
        "Diklat",
        "Dikbangpes",
        "Aksi",
    ];

    if (bagian == "DITPOLUDARA") {
        TABLE_HEAD = [
            "NRP",
            "Nama",
            "Pangkat",
            "Dikum",
            "Dikpol",
            "Fungsi Poludara",
            "Diklat",
            "Dikbangpes",
            "Aksi",
        ];
    }

    const [divisi] = useState("Korpolairud");
    const [search, setSearch] = useState("");
    const [member, setMember] = useState([]);
    const [currPage, setCurr] = useState();
    const [lastPage, setLast] = useState();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { selectedDikum, selectedDikpol, selectedFungsi, selectedDiklat } =
        useStateContext();
    const fetchData = async () => {
        const dikum = selectedDikum.join(",");
        const dikpol = selectedDikpol.join(",");
        const fungsi = selectedFungsi.join(",");
        const diklat = selectedDiklat.join(",");
        const pegawai = await axiosClient.get(
            `/data-pegawai/filter?bagian=${bagian}&dikum=${dikum}&dikpol=${dikpol}&fungsi=${fungsi}&diklat=${diklat}&page=${currPage}&keyword=${search}`
        );
        setMember(pegawai.data.data);
        setCurr(pegawai.data.meta.current_page);
        setLast(pegawai.data.meta.last_page);
        return pegawai.data.data;
    };

    const { isPending, isError, data, error } = useQuery({
        queryKey: [
            "filter",
            currPage,
            bagian,
            selectedDikum,
            selectedDikpol,
            selectedFungsi,
            selectedDiklat,
            search,
        ],
        queryFn: fetchData,
        initialData: sm,
    });

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };
    const handleFirst = () => {
        setIsButtonDisabled(true);
        setTimeout(() => {
            setCurr(1);
            setIsButtonDisabled(false);
        }, 1000);
        return console.log(currPage);
    };
    const handleLast = () => {
        setIsButtonDisabled(true);
        setTimeout(() => {
            setCurr(lastPage);
            setIsButtonDisabled(false);
        }, 1000);
        return console.log(currPage);
    };
    const handleNext = () => {
        setIsButtonDisabled(true);
        setTimeout(() => {
            setCurr(currPage + 1);
            setIsButtonDisabled(false);
        }, 1000);
        return console.log(currPage);
    };
    const handlePrev = () => {
        setIsButtonDisabled(true);
        setTimeout(() => {
            setCurr(currPage - 1);
            setIsButtonDisabled(false);
        }, 1000);
        return console.log(currPage);
    };

    return (
        <Card className="h-full w-full grid grid-cols-1">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <h1 className="text-xl font-bold text-black">
                            Data Perincian {bagian}
                        </h1>
                        <p color="gray" className="mt-1 font-normal">
                            Informasi data Personel {bagian}
                        </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <div className="w-full md:w-72">
                            <Input
                                onChange={handleSearch}
                                label="Search NRP"
                                type="number"
                                value={search}
                                icon={
                                    <MagnifyingGlassIcon className="h-5 w-5" />
                                }
                            />
                        </div>
                        <a href="/tambah-data-korpolairud">
                            <Button
                                className="flex h-full items-center gap-3"
                                size="sm"
                            >
                                <UserPlusIcon
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                />{" "}
                                Tambah
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <EksporDialog></EksporDialog>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Filter></Filter>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-auto px-0">
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
                    <tbody
                        className={`${
                            isPending ? "animate-pulse bg-gray-200" : ""
                        }`}
                    >
                        {member.map((pegawai, index) => {
                            const isLast = index === pegawai.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={pegawai.id}>
                                    <td className={classes}>
                                        <Link to={`/detail?divisi=${divisi}`}>
                                            <div className="flex items-center">
                                                <div className="flex flex-col">
                                                    <p className="font-normal text-sm text-black group-hover:text-white">
                                                        {pegawai.nrp}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black group-hover:text-white truncate w-36">
                                                {pegawai.nama}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black group-hover:text-white truncate w-20">
                                                {pegawai.pangkat}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white truncate w-20">
                                            {pegawai.dikum}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white truncate w-32">
                                            {pegawai.dikpol}
                                        </p>
                                    </td>
                                    {bagian == "DITPOLUDARA" ? (
                                        <>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white truncate w-32">
                                                    {pegawai.fungsi_poludara}
                                                </p>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td className={classes}>
                                                <p className="font-normal text-sm text-black group-hover:text-white truncate w-32">
                                                    {pegawai.fungsi_polair}
                                                </p>
                                            </td>
                                        </>
                                    )}

                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white truncate w-32">
                                            {pegawai.diklat}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white truncate w-32">
                                            {pegawai.dikbangspes}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex">
                                            <Tooltip
                                                content="Lihat atau ubah Data"
                                                placement="top-end"
                                            >
                                                <Link
                                                    to={`/detail?nrp=${pegawai.nrp}`}
                                                >
                                                    <IconButton
                                                        variant="text"
                                                        className="group-hover:bg-white"
                                                    >
                                                        <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                                                    </IconButton>
                                                </Link>
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    Page {currPage} of {lastPage}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant="outlined"
                        onClick={handleFirst}
                        disabled={isButtonDisabled || currPage === 1}
                        size="sm"
                    >
                        Awal
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handlePrev}
                        disabled={isButtonDisabled || currPage === 1}
                        size="sm"
                    >
                        Sebelumnya
                    </Button>

                    <Button
                        variant="outlined"
                        onClick={handleNext}
                        disabled={isButtonDisabled || currPage === lastPage}
                        size="sm"
                    >
                        Selanjutnya
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleLast}
                        disabled={isButtonDisabled || currPage === lastPage}
                        size="sm"
                    >
                        Akhir
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
