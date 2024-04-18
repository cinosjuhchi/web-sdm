import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query'
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
import { useState } from "react";

import axiosClient from "../../axios";

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

TableDashboard.propTypes = {
    data: PropTypes.array.isRequired,
  };

export default function TableDashboard() {
    const [currPage , setCurr] = useState();
    const [lastPage , setLast] = useState();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const fetchData = async () => {
        const pegawai = await axiosClient.get('/data-pegawai?page=' + currPage) 
        console.log(pegawai.data.links)
        setCurr(pegawai.data.meta.current_page)
        setLast(pegawai.data.meta.last_page)
        

        return pegawai
        
      }

      const handleNext = () => {
        setIsButtonDisabled(true);
        setTimeout(() => {
            setCurr(currPage + 1);
            setIsButtonDisabled(false);
        }, 1000);
        return console.log(currPage)
      }
      const handlePrev = () => {
        setIsButtonDisabled(true);
        setTimeout(() => {
            setCurr(currPage - 1);
            setIsButtonDisabled(false);
        }, 1000);
        return console.log(currPage)
      }

      
      
    const { isPending, isError, data, error,  } = useQuery({
        queryKey: ['pegawais', currPage],
        queryFn: fetchData,

    });
    

    if (isPending) {
        return <span>Loading...</span>;
    }
    if (isError) {
        return <span>Error: {error.message}</span>;
    }
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
                        {data.data.data.map((pegawai, index) => {
                            const isLast = index === pegawai.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={pegawai.id}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex flex-col">
                                                <p className="font-normal text-sm text-black">
                                                    {pegawai.nrp}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black">
                                                {pegawai.nama}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black">
                                                {pegawai.pangkat}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black">
                                            {pegawai.dikum}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black">
                                            {pegawai.dikpol}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black">
                                            {pegawai.fungsi}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black">
                                            {pegawai.diklat}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black">
                                            {pegawai.dikbangspes}
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
                    <Button variant="outlined" onClick={handlePrev} disabled={isButtonDisabled || currPage === 1} size="sm">
                        Previous
                    </Button>
                    
                    <Button variant="outlined" onClick={handleNext} disabled={isButtonDisabled || currPage === lastPage} size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

