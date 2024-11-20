import React, { useState, useEffect } from "react";
import "./BusSchedule.css";

export default function BusSchedule() {
    const defaultBusRoutes = [
        { id: 1, drop: "7:30", pickup: "1:20" },
        { id: 2, drop: "7:45", pickup: "2:30" },
        { id: 3, drop: "8:15", pickup: "3:30" },
        { id: 4, drop: "9:00", pickup: "4:20" },
        { id: 5, drop: "9:30", pickup: "5:20" },
        { id: 6, drop: "10:00", pickup: "6:15" },
    ];

    const [busRoutes, setBusRoutes] = useState(defaultBusRoutes);

    useEffect(() => {
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
        <div className="container">
            <h2>Bus Schedule</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">Drop</th>
                        <th className="th">Pickup</th>
                    </tr>
                </thead>
                <tbody>
                    {busRoutes.map((bus) => (
                        <tr key={bus.id}>
                            <td className="td">{bus.drop || "Not set"}</td>
                            <td className="td">{bus.pickup || "Not set"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
