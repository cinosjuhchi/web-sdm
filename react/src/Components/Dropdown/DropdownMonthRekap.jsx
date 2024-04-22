import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

export default function DropMonthRekap() {
    return (
        <Menu>
            <MenuHandler>
                <button className="px-4 py-2 outline outline-2 outline-black rounded-md flex items-center gap-2">
                    Bulan April
                    <ChevronDownIcon className="w-4"></ChevronDownIcon>
                </button>
            </MenuHandler>
            <MenuList className="font-jakarta text-black">
                <MenuItem>Januari</MenuItem>
                <MenuItem>Februari</MenuItem>
                <MenuItem>Maret</MenuItem>
                <MenuItem className="active bg-biru text-white">April</MenuItem>
            </MenuList>
        </Menu>
    );
}




