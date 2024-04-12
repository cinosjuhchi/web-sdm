import React from "react";
import { Input, Button } from "@material-tailwind/react";

export default function InputButton() {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);

    return (
        <div className="relative flex w-full max-w-[34rem] text-whit">
            <Input
                type="text"
                label="Cari di Sistem Kwaldik"
                value={email}
                onChange={onChange}
                className="pr-40 bg-white"
                containerProps={{
                    className: "min-w-0",
                }}
            />
            <Button
                size="sm"
                color={email ? "orange" : "gray"}
                className="!absolute right-1 top-1 rounded mr-1"
            >
                Cari
            </Button>
        </div>
    );
}
