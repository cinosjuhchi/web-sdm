import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from "@material-tailwind/react";

export default function DropYearRekap() {
    return (
        <Menu>
            <MenuHandler>
                <button className="px-4 py-2 outline outline-2 outline-black rounded-md flex items-center gap-2">
                    Tahun 2024
                    <ChevronDownIcon className="w-4"></ChevronDownIcon>
                </button>
            </MenuHandler>
            <MenuList className="font-jakarta text-black">
                <MenuItem>2022</MenuItem>
                <MenuItem>2023</MenuItem>
                <MenuItem className="active bg-biru text-white">2024</MenuItem>
            </MenuList>
        </Menu>
    );
}
