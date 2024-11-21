import React, { useState } from "react";
import { useBusSchedule } from "./BusScheduleContext";
import axios from "axios";
import "./BusScheduleEdit.css";

export default function BusScheduleEdit() {
    const { busRoutes, setBusRoutes } = useBusSchedule();
    const [editingRow, setEditingRow] = useState(null);
    const [editDrop, setEditDrop] = useState("");
    const [editPickup, setEditPickup] = useState("");

    const handleEdit = (bus) => {
        setEditingRow(bus.id);
        setEditDrop(bus.drop);
        setEditPickup(bus.pickup);
    };

    const handleSave = async (id) => {
        try {
            const response = await axios.put(
                `http://localhost:3000/api/bus-routes/${id}`,
                { drop: editDrop, pickup: editPickup }
            );
            
            // Update the bus route in the state after successful update
            setBusRoutes((prevRoutes) => 
                prevRoutes.map((bus) =>
                    bus.id === id ? { ...bus, drop: editDrop, pickup: editPickup } : bus
                )
            );
            
            setEditingRow(null);  // Close the editing row
        } catch (error) {
            console.error('Error updating bus route:', error);
        }
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
