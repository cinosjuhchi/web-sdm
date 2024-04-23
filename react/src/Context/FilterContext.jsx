import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext({});

export const FilterContextProvider = ({ children }) => {
    const [selectedDikum, setSelectedDikum] = useState([]);
    const [selectedDikpol, setSelectedDikpol] = useState([]);
    const [selectedFungsi, setSelectedFungsi] = useState([]);
    const [selectedDiklat, setSelectedDiklat] = useState([]);

    // Membuat fungsi untuk mengisi nilai ke state yang dipilih
    const handleSetSelected = (category, option) => {
        switch (category) {
            case 'Dikum':
                if (selectedDikum.includes(option)) {
                    setSelectedDikum(selectedDikum.filter(item => item !== option));
                } else {
                    setSelectedDikum([...selectedDikum, option]);
                }
                break;
            case 'Dikpol':
                if (selectedDikpol.includes(option)) {
                    setSelectedDikpol(selectedDikpol.filter(item => item !== option));
                } else {
                    setSelectedDikpol([...selectedDikpol, option]);
                }
                break;
            case 'Fungsi Polair':
                if (selectedFungsi.includes(option)) {
                    setSelectedFungsi(selectedFungsi.filter(item => item !== option));
                } else {
                    setSelectedFungsi([...selectedFungsi, option]);
                }
                break;
            case 'Diklat':
                if (selectedDiklat.includes(option)) {
                    setSelectedDiklat(selectedDiklat.filter(item => item !== option));
                } else {
                    setSelectedDiklat([...selectedDiklat, option]);
                }
                break;
            default:
                break;
        }
    };
    

    return (
        <StateContext.Provider value={{ 
            selectedDikum, 
            selectedDikpol, 
            selectedFungsi, 
            selectedDiklat, 
            handleSetSelected 
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
