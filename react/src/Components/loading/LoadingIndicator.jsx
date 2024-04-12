import SyncLoader from "react-spinners/RiseLoader";
import { TypeAnimation } from "react-type-animation";
import { Typography } from "@material-tailwind/react";
const LoadingIndicator = () => {
    return (
        <div className="bg-light-blue-100 h-screen flex flex-column justify-center items-center">
            <Typography variant="h3" className="font-jakarta text-center">
                <SyncLoader color="#fff" size={36} className="mb-16" />
                <div>
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                            200,
                            "Selamat Datang di Web Kwaldik", // initially rendered starting point
                            500,
                            "Tunggu Beberapa Saat...",
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
            </Typography>
        </div>
    );
};

export default LoadingIndicator;
