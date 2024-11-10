// src/components/BusSchedule.js

import React, { useContext } from "react";
import { BusScheduleContext } from "../context/BusScheduleContext";
import "./BusSchedule.css";

export default function BusSchedule() {
    const { busRoutes } = useContext(BusScheduleContext);

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
                            <td className="td">{bus.drop || "N/A"}</td>
                            <td className="td">{bus.pickup || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
