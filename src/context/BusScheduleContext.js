// src/context/BusScheduleContext.js

import React, { createContext, useState } from "react";

// Create a context
export const BusScheduleContext = createContext();

export function BusScheduleProvider({ children }) {
    const [busRoutes, setBusRoutes] = useState([
        { id: 1, drop: "7:30", pickup: "1:20" },
        { id: 2, drop: "7:45", pickup: "2:30" },
        { id: 3, drop: "8:15", pickup: "3:30" },
        { id: 4, drop: "", pickup: "4:20" },
        { id: 5, drop: "", pickup: "5:20" },
        { id: 6, drop: "", pickup: "6:15" },
    ]);

    return (
        <BusScheduleContext.Provider value={{ busRoutes, setBusRoutes }}>
            {children}
        </BusScheduleContext.Provider>
    );
}
