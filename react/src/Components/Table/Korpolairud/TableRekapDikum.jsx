import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import axiosClient from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const TABLE_HEAD = [
    "PANGKAT",
    "SD",
    "SMP",
    "SMA/SMK/STM",
    "D3",
    "D4",
    "S1",
    "S2",
    "S3",
];

const sm = [
    {
        pangkat: "IRJEN POL",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "",
        s2: "",
        s3: "",
    },
    {
        pangkat: "BRIGJEN POL",
        sd: "12",
        smp: "12",
        sma: "",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "KBP",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "AKBP",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "KOMPOL",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "AKP",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "IPTU",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "IPDA",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "AIPTU",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "AIPDA",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "BRIPKA",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "BRIGADIR",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "BRIPTU",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "BRIPDA",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "ABRIP",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "ABRIPDA",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "BHARAKA",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "BHRAPTU",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "BHARAPDA",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "PNS IV",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "PNS III",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "PNS II",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "PNS I",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "CPNS",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
    {
        pangkat: "JUMLAH",
        sd: "12",
        smp: "12",
        sma: "1080",
        d3: "1080",
        d4: "1080",
        s1: "1080",
        s2: "1080",
        s3: "1080",
    },
];

export default function TableRekapKorpolairud() {
    return (
        <Card className="h-full w-full grid grid-cols-1">
            <CardHeader
                floated={false}
                shadow={false}
                className="rounded-none font-jakarta"
            >
                <div className="flex items-center justify-between gap-8">
                    <div>
                        <h1 className="text-xl font-bold text-black">
                            Data Rekapitulasi Dikum
                        </h1>
                        <p color="gray" className="mt-1 font-normal">
                            Informasi data rekapitulasi dikum
                        </p>
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
                                        {index !== TABLE_HEAD.length && (
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
                        {sm.map((pegawai, index) => {
                            const isLast = index === pegawai.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={pegawai.pangkat}>
                                    <td className={classes}>
                                        <div className="flex items-center">
                                            <div className="flex flex-col">
                                                <p className="font-normal text-sm text-black group-hover:text-white">
                                                    {pegawai.pangkat}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black group-hover:text-white">
                                                {pegawai.sd}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-black group-hover:text-white">
                                                {pegawai.smp}
                                            </p>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white ">
                                            {pegawai.sma}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.d3}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.d4}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.s1}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.s2}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-normal text-sm text-black group-hover:text-white  ">
                                            {pegawai.s3}
                                        </p>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}
