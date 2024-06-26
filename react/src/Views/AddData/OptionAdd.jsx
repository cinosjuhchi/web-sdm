import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import LogoKor from "../../assets/logo/logoKorpolairud.png";
import LogoDit from "../../assets/logo/logoPolAir.png";
import LogoUdara from "../../assets/logo/logoPolUdara.png";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom"; // Perbaikan cara mengimpor useHistory

function OptionAdd() {
    // const history = useHistory();
    const navigate = useNavigate()
    
    return (

        <div className="wrap select-none">
            <div className="title flex items-center">
                <a className="absolute">
                    <IconButton
                        variant="text"
                        className="hover:bg-biru hover:text-white"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeftIcon className="w-7" strokeWidth={2} />
                    </IconButton>
                </a>
                <h1 className="m-auto align-middle text-xl font-bold">
                    Tambahkan Data Baru
                </h1>
            </div>
            <div className="body flex flex-col justify-center items-center h-[calc(100vh-8rem)] gap-4">
                <h1 className="text-center self-center font-medium text-lg mb-2">
                    Pilih untuk melanjutkan
                </h1>
                <div className="flex gap-4">
                    <a href="/tambah-data-korpolairud">
                        <div className="card flex flex-col justify-center items-center w-72 h-72 rounded-md bg-biru bg-opacity-50 hover:bg-biru duration-300 transition-all hover:scale-105">
                            <img src={LogoKor} alt="" className="w-36" />
                            <h1 className="mt-4 text-lg font-medium">
                                Korpolairud
                            </h1>
                        </div>
                    </a>
                    <a href="/tambah-data-ditpolairud">
                        <div className="card flex flex-col justify-center items-center w-72 h-72 rounded-md bg-biru bg-opacity-50 hover:bg-biru duration-300 transition-all hover:scale-105">
                            <img src={LogoDit} alt="" className="w-40" />
                            <h1 className="mt-4 text-lg font-medium">
                                Ditpolairud
                            </h1>
                        </div>
                    </a>
                    <a href="/tambah-data-ditpoludara">
                        <div className="card flex flex-col justify-center items-center w-72 h-72 rounded-md bg-biru bg-opacity-50 hover:bg-biru duration-300 transition-all hover:scale-105">
                            <img src={LogoUdara} alt="" className="w-40" />
                            <h1 className="mt-4 text-lg font-medium">
                                Ditpoludara
                            </h1>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default OptionAdd;
