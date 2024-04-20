import { useState } from "react";
import { Drawer, Button, IconButton } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import {
    AdjustmentsHorizontalIcon,
    ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function Filter() {
    const theme = {
        drawer: {
            defaultProps: {
                size: 500,
                overlay: true,
                placement: "left",
                overlayProps: undefined,
                className: "",
                dismiss: undefined,
                onClose: undefined,
                transition: {
                    type: "tween",
                    duration: 0.3,
                },
            },
            styles: {
                base: {
                    drawer: {
                        position: "fixed",
                        zIndex: "z-[9999]",
                        pointerEvents: "pointer-events-auto",
                        backgroundColor: "bg-white",
                        boxSizing: "box-border",
                        width: "w-full",
                        boxShadow: "shadow-2xl shadow-blue-gray-900/10",
                    },
                    overlay: {
                        position: "absolute",
                        inset: "",
                        width: "w-full",
                        height: "h-full",
                        pointerEvents: "pointer-events-auto",
                        zIndex: "z-[9995]",
                        backgroundColor: "bg-black",
                        backgroundOpacity: "bg-opacity-60",
                        backdropBlur: "backdrop-blur-sm",
                    },
                },
            },
        },
    };

    const categories = [
        {
            title: "Pangkat",
            options: [
                "IRJEN",
                "BRIGJEN",
                "KBP",
                "AKBP",
                "KOMPOL",
                "AKP",
                "IPTU",
                "IPDA",
                "AIPTU",
                "AIPDA",
                "BRIPKA",
                "BRIGADIR",
                "BRIPTU",
                "BRIPDA",
                "ABRIP",
                "ABRIPTU",
                "ABRIPDA",
                "BHARAKA",
                "BHARATU",
                "BHARADA",
                "PNS IV",
                "PNS III",
                "PNS II",
                "PNS I",
                "CPNS",
            ],
            selected: null,
        },
        {
            title: "Dikum",
            options: ["SD", "SMP", "SMA", "D3", "S1", "S2", "S3"],
            selected: null,
        },
        {
            title: "Dikpol",
            options: [
                "SEBA",
                "SBP",
                "SETUKPA",
                "SEPA",
                "SEKBANG TNI",
                "AKPL",
                "PTIK",
                "SESKOAU",
                "SESKOAL",
                "SESPIMMA",
                "SESPMEN",
                "PMTIK 1",
                "PMTIK 2",
                "PKA",
                "SESPATI",
                "LEMHANAS",
                "SAG PA",
                "SAG BA",
            ],
            selected: null,
        },
        {
            title: "Fungsi Polair",
            options: [
                "SAR",
                "DSPA",
                "PANK",
                "PATK",
                "PAIDK",
                "PAAKA LAU",
                "DSBPA",
                "BANK",
                "BATK",
                "DSTPA",
                "KMLK",
                "BAIDIK",
            ],
            selected: null,
        },
        {
            title: "Diklat",
            options: [
                "ANT 1",
                "ANT 2",
                "ANT 3",
                "ANT 5",
                "DPDKN",
                "ATT 1",
                "ATT 2",
                "ATT 3",
                "ATT 5",
                "DPMKN TK 1",
                "DPMKN TK 2",
                "DPDKN TK 1",
                "DPDKN TK 2",
            ],
            selected: null,
        },
        {
            title: "Lain-lain",
            options: [
                "INTEL",
                "SERSE",
                "PROPAM",
                "LOGISTIK",
                "KEUANGAN",
                "SAR",
                "BHS INGGRIS",
                "BHS FRANCIS",
                "BHS ARAB",
                "BHS MANDARIN",
                "BARANG DAN JASA",
                "SATPAM GADA PRATAMA",
                "SDM",
                "TP. LUNDUP",
                "TP. KORUPSI",
                "TP. ILLEGAL FISHING",
                "TP. ILLEGAL NARKOBA",
            ],
            selected: null,
        },
    ];

    const [openDrawer, setOpenDrawer] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState(
        categories.map((category) => ({ ...category }))
    );

    const openDrawerRight = () => setOpenDrawer(true);
    const closeDrawerRight = () => {
        // Reset semua opsi yang dipilih saat menutup drawer
        setSelectedCategories(categories.map((category) => ({ ...category })));
        setOpenDrawer(false);
    };

    const handleClick = (categoryIndex, option) => {
        const updatedCategories = [...selectedCategories];
        const selectedCategory = updatedCategories[categoryIndex];

        // Jika opsi sudah terpilih sebelumnya, hapus seleksinya
        if (selectedCategory.selected === option) {
            selectedCategory.selected = null;
        } else {
            selectedCategory.selected = option; // Jika tidak terpilih sebelumnya, pilih opsi tersebut
        }

        setSelectedCategories(updatedCategories);

        // Cetak nilai button yang aktif ke console
        console.log("Button yang aktif:", option);
    };

    return (
        <ThemeProvider value={theme}>
            <Button
                variant="outlined"
                className="flex gap-2 items-center text"
                size="sm"
                onClick={openDrawerRight}
            >
                <AdjustmentsHorizontalIcon className="w-5" strokeWidth={2} />
                Filter
            </Button>

            <Drawer
                placement="right"
                open={openDrawer}
                onClose={closeDrawerRight}
                className="p-4 overflow-auto max-h-max"
            >
                <div className="text-black">
                    <div className="flex items-center gap-1">
                        <IconButton
                            variant="text"
                            color="black"
                            onClick={closeDrawerRight}
                        >
                            <ArrowLeftIcon className="w-5" strokeWidth={2} />
                        </IconButton>
                        <h1 className="text-lg font-bold">Filter</h1>
                    </div>

                    {selectedCategories.map((category, index) => (
                        <div key={index} className="filt">
                            <hr className="h-px my-4 border-gray-300 border-1" />
                            <h4 className="text-lg mt-2 mb-2 font-bold">
                                {category.title}
                            </h4>
                            <div className="grid grid-cols-4 gap-3 text-sm">
                                {category.options.map((option) => (
                                    <button
                                        key={option}
                                        className={`py-1 rounded-sm font-semibold hover:bg-blue-500 transition-all duration-200 hover:text-white ${
                                            category.selected === option
                                                ? "bg-blue-500 text-white outline-black outline-2 outline"
                                                : "outline-black outline-2 outline"
                                        }`}
                                        onClick={() =>
                                            handleClick(index, option)
                                        }
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="submit mt-12 gap-3 flex justify-end">
                        <button
                            type="reset"
                            className="outline outline-2 outline-black px-4 py-1 rounded-sm font-bold   duration-200 transition-all hover:scale-105 active:scale-100"
                            onClick={closeDrawerRight}
                        >
                            Kembali
                        </button>
                        <button
                            type="submit"
                            className="outline outline-2 outline-black px-4 py-1 rounded-sm font-bold bg-blue-500 hover:bg-blue-600 text-white duration-200 transition-all hover:scale-105 active:scale-100"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </Drawer>
        </ThemeProvider>
    );
}
