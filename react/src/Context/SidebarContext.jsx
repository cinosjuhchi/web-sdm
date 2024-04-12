// // SidebarContext.js
// import React, { createContext, useContext, useState } from "react";

// const SidebarContext = createContext();

// export const useSidebarContext = () => useContext(SidebarContext);

// export const SidebarProvider = ({ children }) => {
//     const [open, setOpen] = useState(true);

//     return (
//         <SidebarContext.Provider value={{ open, setOpen }}>
//             {children}
//         </SidebarContext.Provider>
//     );
// };
