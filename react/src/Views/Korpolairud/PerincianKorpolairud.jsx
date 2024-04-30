import TablePerincianKorpolairud from "../../Components/Table/Korpolairud/TablePerincianKorpolairud";
import { FilterContextProvider } from "../../Context/FilterContext";

function PerincianKorpolairud({bagian}) {
    return (
        <div className="w-full gap-y-4 flex flex-col">
            <FilterContextProvider>
                <TablePerincianKorpolairud bagian={bagian}/>
            </FilterContextProvider>
        </div>
    );
}

export default PerincianKorpolairud;
