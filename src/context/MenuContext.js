// src/context/MenuContext.js
import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState({
        vegetarian: { breakfast: "", lunch: "", dinner: "" },
        nonVegetarian: { breakfast: "", lunch: "", dinner: "" },
    });

    return (
        <MenuContext.Provider value={{ menu, setMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
