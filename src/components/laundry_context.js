// src/context/LaundryContext.js
import React, { createContext, useState } from 'react';

export const LaundryContext = createContext();

export const LaundryProvider = ({ children }) => {
    const [laundry] = useState({
        washing: { days: 'Mon, Wed, Fri', price: '$5 per load' },
        drying: { days: 'Tue, Thu', price: '$3 per load' },
        ironing: { days: 'Everyday', price: '$2 per item' },
    });

    return (
        <LaundryContext.Provider value={{ laundry }}>
            {children}
        </LaundryContext.Provider>
    );
};
