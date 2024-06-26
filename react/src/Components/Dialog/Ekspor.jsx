import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    IconButton,
} from "@material-tailwind/react";
import {
    DocumentArrowUpIcon,
    DocumentChartBarIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import axiosClient from "../../axios";

export default function EksporDialog() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    const handleEkspor = () => {
        axiosClient.get('/pegawai/export', { responseType: 'blob' })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'pegawai.xlsx');
                document.body.appendChild(link);
                link.click();
                alert('File berhasil diunduh');
            })
            .catch((error) => {
                console.error('Gagal mengunduh file:', error);
                alert('Terjadi kesalahan saat mengunduh file');
            });
    };

    return (
        <>
            <Button
                variant="outlined"
                className="flex gap-2 items-center text"
                size="sm"
                onClick={handleOpen}
            >
                <DocumentArrowUpIcon
                    className="w-5"
                    strokeWidth={2}
                ></DocumentArrowUpIcon>
                Ekspor
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader className="flex font-jakarta justify-between">
                    <h1>Ekspor data sebagai</h1>
                    <IconButton
                        variant="text"
                        color="black"
                        onClick={handleOpen}
                    >
                        <XMarkIcon className="w-5" strokeWidth={2} />
                    </IconButton>
                </DialogHeader>
                <DialogBody className="grid grid-cols-1 px-6 -mt-2">
                    <button onClick={handleEkspor} className="h-28 flex justify-center items-center gap-2 outline outline-2 outline-black text-black font-bold rounded-sm text-2xl hover:bg-green-600 hover:text-white duration-200 transition-all hover:scale-105 hover:outline-1">
                        <DocumentChartBarIcon
                            className="w-8  "
                            strokeWidth={2}
                        ></DocumentChartBarIcon>
                        Excel
                    </button>
                </DialogBody>
            </Dialog>
        </>
    );
}
