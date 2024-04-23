import TablePerincianKorpolairud from "../../Components/Table/Korpolairud/TablePerincianKorpolairud";
import { FilterContextProvider } from "../../Context/FilterContext";

function PerincianKorpolairud() {
    return (
        <div className="w-full gap-y-4 flex flex-col">
            <FilterContextProvider>
                <TablePerincianKorpolairud bagian="KORPOLAIRUD"/>
            </FilterContextProvider>
        </div>
    );
}

export default PerincianKorpolairud;
