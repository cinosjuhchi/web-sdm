import React from "react";
import { Drawer, Button, IconButton } from "@material-tailwind/react";
import {
    AdjustmentsHorizontalIcon,
    ArrowLeftIcon,
} from "@heroicons/react/24/outline";

import { ThemeProvider } from "@material-tailwind/react";

export default function Filter() {
    const theme = {
        drawer: {
            defaultProps: {
                size: 400,
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

    const [openRight, setOpenRight] = React.useState(false);

    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    return (
        <ThemeProvider value={theme}>
            <Button
                variant="outlined"
                className="flex gap-2 items-center text"
                size="sm"
                onClick={openDrawerRight}
            >
                <AdjustmentsHorizontalIcon
                    className="w-5"
                    strokeWidth={2}
                ></AdjustmentsHorizontalIcon>
                Filter
            </Button>

            <Drawer
                placement="right"
                x
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4"
            >
                <div className="text-black">
                    <div className="flex items-center gap-1">
                        <IconButton
                            variant="text"
                            color="black"
                            onClick={closeDrawerRight}
                        >
                            <ArrowLeftIcon
                                className="w-5"
                                strokeWidth={2}
                            ></ArrowLeftIcon>
                        </IconButton>
                        <h1 className="text-lg font-bold">Filter</h1>
                    </div>

                    <div className="filt">
                        <h4 className="text-lg mt-4 mb-2">Dikum</h4>
                        <div className="grid grid-cols-4 gap-2">
                            <Button variant="outlined">Halo</Button>
                            <Button variant="outlined">Halo</Button>
                            <Button>Halo</Button>
                            <Button>Halo</Button>
                            <Button>Halo</Button>
                        </div>
                    </div>
                </div>
            </Drawer>
        </ThemeProvider>
    );
}
