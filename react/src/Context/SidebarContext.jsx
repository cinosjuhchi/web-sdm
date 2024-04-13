/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
    const [open, setOpen] = useState(true);

    return (
        <SidebarContext.Provider value={{ open, setOpen }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const SidebarK = SidebarContext;
export default SidebarContextProvider;
