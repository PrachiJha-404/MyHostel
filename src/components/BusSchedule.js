// src/components/BusSchedule.js

import React, { useState, useEffect } from "react";
import "./BusSchedule.css"; // Import the CSS file

export default function BusSchedule() {
    const [busRoutes, setBusRoutes] = useState([
        { id: 1, drop: "7:30", pickup: "1:20" },
        { id: 2, drop: "7:45", pickup: "2:30" },
        { id: 3, drop: "8:15", pickup: "3:30" },
        { id: 4, drop: "", pickup: "4:20" },
        { id: 5, drop: "", pickup: "5:20" },
        { id: 6, drop: "", pickup: "6:15" },
    ]);

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
                            <td className="td">{bus.drop || ""}</td>
                            <td className="td">{bus.pickup || ""}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}