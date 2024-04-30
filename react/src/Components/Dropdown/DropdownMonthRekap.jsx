import { useContext } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { SelectedMonthContext } from '../../Context/SelectedMonthContext';

export default function DropMonthRekap() {    
    const { selectedMonth, handleMonthSelect, selectedMonthName } = useContext(SelectedMonthContext);

    return (
        <Menu>
            <MenuHandler>
                <button className="px-4 py-2 outline outline-2 outline-black rounded-md flex items-center gap-2">
                    {selectedMonth ? `Bulan ${selectedMonthName}` : "Pilih Bulan"}
                    <ChevronDownIcon className="w-4"></ChevronDownIcon>
                </button>
            </MenuHandler>
            <MenuList className="font-jakarta text-black">
                <MenuItem onClick={() => handleMonthSelect("Januari")}>Januari</MenuItem>
                <MenuItem onClick={() => handleMonthSelect("Februari")}>Februari</MenuItem>
                <MenuItem onClick={() => handleMonthSelect("Maret")}>Maret</MenuItem>
                <MenuItem onClick={() => handleMonthSelect("April")}>April</MenuItem>
                <MenuItem onClick={() => handleMonthSelect("Mei")}>Mei</MenuItem>
                <MenuItem onClick={() => handleMonthSelect("Juni")}>Juni</MenuItem>
                <MenuItem onClick={() => handleMonthSelect("Juli")}>Juli</MenuItem>
                <MenuItem onClick={() => handleMonthSelect("Agustus")}>Agustus</MenuItem>
                <MenuItem onClick={() => handleMonthSelect("September")}>September</MenuItem>
                <MenuItem onClick={() => handleMonthSelect("Oktober")}>Oktober</MenuItem>
                <MenuItem onClick={() => handleMonthSelect("November")}>November</MenuItem>
                <MenuItem onClick={() => handleMonthSelect("Desember")}>Desember</MenuItem>
            </MenuList>
        </Menu>
    );
}
