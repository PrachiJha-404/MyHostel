import React, { createContext, useState, useEffect } from "react";

export const BusScheduleContext = createContext();

export const BusScheduleProvider = ({ children }) => {
    const [busRoutes, setBusRoutes] = useState([]);

    useEffect(() => {
        // Fetch initial bus routes from the server
        const fetchBusRoutes = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/bus-routes");
                if (response.ok) {
                    const data = await response.json();
                    setBusRoutes(data);
                } else {
                    console.error("Failed to fetch bus routes");
                }
            } catch (error) {
                console.error("Error fetching bus routes:", error);
            }
        };

        fetchBusRoutes();
    }, []);

    return (
        <BusScheduleContext.Provider value={{ busRoutes, setBusRoutes }}>
            {children}
        </BusScheduleContext.Provider>
    );
};
