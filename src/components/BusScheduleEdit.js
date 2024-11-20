// BusScheduleEdit.js
import React, { useState } from "react";
import { useBusSchedule } from "./BusScheduleContext";
import "./BusScheduleEdit.css";

export default function BusScheduleEdit() {
    const { busRoutes, updateBusRoute } = useBusSchedule();
    const [editingRow, setEditingRow] = useState(null);
    const [editDrop, setEditDrop] = useState("");
    const [editPickup, setEditPickup] = useState("");

    const handleEdit = (bus) => {
        setEditingRow(bus.id);
        setEditDrop(bus.drop);
        setEditPickup(bus.pickup);
    };

    const handleSave = (id) => {
        updateBusRoute(id, editDrop, editPickup);
        setEditingRow(null);
    };

    return (
        <div className="container">
            <h2>Bus Schedule Editor</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">Drop</th>
                        <th className="th">Pickup</th>
                        <th className="th">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {busRoutes.map((bus) => (
                        <tr key={bus.id}>
                            <td className="td">
                                {editingRow === bus.id ? (
                                    <input
                                        type="text"
                                        value={editDrop}
                                        onChange={(e) => setEditDrop(e.target.value)}
                                    />
                                ) : (
                                    bus.drop || ""
                                )}
                            </td>
                            <td className="td">
                                {editingRow === bus.id ? (
                                    <input
                                        type="text"
                                        value={editPickup}
                                        onChange={(e) => setEditPickup(e.target.value)}
                                    />
                                ) : (
                                    bus.pickup || ""
                                )}
                            </td>
                            <td className="td">
                                {editingRow === bus.id ? (
                                    <button onClick={() => handleSave(bus.id)}>Save</button>
                                ) : (
                                    <button onClick={() => handleEdit(bus)}>Edit</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}