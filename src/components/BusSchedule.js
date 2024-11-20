import React from "react";
import { useBusSchedule } from "./BusScheduleContext";
import "./BusSchedule.css";

export default function BusSchedule() {
    const { busRoutes } = useBusSchedule();

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
