import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from "@material-tailwind/react";
import { SelectedMonthContext } from '../../Context/SelectedMonthContext';
import { useContext } from "react";

export default function DropYearRekap() {
    const { selectedYear, handleYearSelect } = useContext(SelectedMonthContext);

    // Buat array tahun dari 2021 hingga tahun saat ini
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: currentYear - 2023}, (_, index) => (currentYear - index).toString());

    return (
        <Menu>
            <MenuHandler>
                <button className="px-4 py-2 outline outline-2 outline-black rounded-md flex items-center gap-2">
                    Tahun {selectedYear}
                    <ChevronDownIcon className="w-4"></ChevronDownIcon>
                </button>
            </MenuHandler>
            <MenuList className="font-jakarta text-black">
                {years.map(year => (
                    <MenuItem key={year} onClick={() => handleYearSelect(year)}>{year}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
