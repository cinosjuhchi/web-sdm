import { Card, Input, Button, Typography } from "@material-tailwind/react";
import LogoKorpolairud from "../assets/logo/logoKorpolairud.png";
import LogoSdm from "../assets/logo/logoSdm.png";
import LogoPolri from "../assets/logo/logoPolri.png";

export default function SimpleRegistrationForm() {
    return (
        <div className="flex">
            <div className="test w-5/12 h-screen bg-biru text-putih300 flex items-center justify-center flex-col gap-4">
                <div className="title text-center">
                    <Typography variant="h5" className="font-jakarta">
                        SISTEM KWALDIK PERSONEL
                        <br />
                        KORPOLAIRUD BAHARKAM POLRI
                    </Typography>
                </div>
                <div className="logo flex gap-4">
                    <img src={LogoSdm} alt="" width={128} />
                    <img src={LogoPolri} alt="" width={128} />
                    <img src={LogoKorpolairud} alt="" width={128} />
                </div>
            </div>
            <div className="m-auto">
                <Card
                    color="transparent"
                    shadow={false}
                    className="py-8 px-6 shadow-2xl"
                >
                    <img
                        src={LogoKorpolairud}
                        alt=""
                        width={78}
                        className="m-auto"
                    />
                    <Typography
                        variant="h5"
                        className="mt-4 font-jakarta text-center font-bold"
                    >
                        Masuk sebagai Admin
                    </Typography>
                    <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3 font-jakarta"
                            >
                                Nomor Registrasi Pokok (NRP)
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="contoh: 12345678"
                                className=" !border-t-blue-gray-200 focus:!border-biru font-jakarta"
                                labelProps={{
                                    className:
                                        "before:content-none after:content-none",
                                }}
                            />
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="-mb-3 font-jakarta"
                            >
                                Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-biru font-jakarta"
                                labelProps={{
                                    className:
                                        "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <Button
                            className="mt-6 bg-biru text-md font-jakarta"
                            fullWidth
                        >
                            Masuk
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
