import React, { useState } from "react";
import "./BusScheduleEdit.css";

export default function BusScheduleEdit() {
    const [busRoutes, setBusRoutes] = useState([
        { id: 1, drop: "7:30", pickup: "1:20" },
        { id: 2, drop: "7:45", pickup: "2:30" },
        { id: 3, drop: "8:15", pickup: "3:30" },
        { id: 4, drop: "", pickup: "4:20" },
        { id: 5, drop: "", pickup: "5:20" },
        { id: 6, drop: "", pickup: "6:15" },
    ]);

    const [editingRow, setEditingRow] = useState(null); // Track the row being edited
    const [editDrop, setEditDrop] = useState("");
    const [editPickup, setEditPickup] = useState("");

    const handleEdit = (bus) => {
        setEditingRow(bus.id);
        setEditDrop(bus.drop);
        setEditPickup(bus.pickup);
    };

    const handleSave = async (id) => {
        // Update bus route in local state
        setBusRoutes((prevRoutes) =>
            prevRoutes.map((bus) =>
                bus.id === id ? { ...bus, drop: editDrop, pickup: editPickup } : bus
            )
        );

        // Make API request to update bus route in database
        try {
            const response = await fetch('http://localhost:3000/api/bus-routes/${id}', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    drop: editDrop,
                    pickup: editPickup,
                }),
            });

            if (response.ok) {
                console.log("Bus route updated successfully");
            } else {
                console.error("Failed to update bus route");
            }
        } catch (error) {
            console.error("Error while updating bus route:", error);
        }

        setEditingRow(null); // Exit edit mode
    };

    return (
        <div className="container">
            <h2>Bus Schedule</h2>
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