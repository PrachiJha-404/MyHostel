// src/components/BusScheduleEdit.js

import React, { useContext, useState } from "react";
import { BusScheduleContext } from "../context/BusScheduleContext";
import "./BusScheduleEdit.css";

export default function BusScheduleEdit() {
    const { busRoutes, setBusRoutes } = useContext(BusScheduleContext);
    const [editedRoutes, setEditedRoutes] = useState([...busRoutes]); // Keep track of edits

    const handleUpdateRoute = (id, field, value) => {
        const updatedRoutes = editedRoutes.map((route) =>
            route.id === id ? { ...route, [field]: value } : route
        );
        setEditedRoutes(updatedRoutes);
    };

    const handleSave = () => {
        setBusRoutes(editedRoutes); // Save edits to context
    };

    const handleReset = () => {
        setEditedRoutes([...busRoutes]); // Reset edits to original values
    };

    return (
        <div className="container">
            <h2>Edit Bus Schedule</h2>
            {editedRoutes.map((bus) => (
                <div key={bus.id} className="edit-row">
                    <label className="label">
                        Drop:
                        <input
                            type="text"
                            value={bus.drop}
                            onChange={(e) => handleUpdateRoute(bus.id, "drop", e.target.value)}
                            className="input"
                        />
                    </label>
                    <label className="label">
                        Pickup:
                        <input
                            type="text"
                            value={bus.pickup}
                            onChange={(e) => handleUpdateRoute(bus.id, "pickup", e.target.value)}
                            className="input"
                        />
                    </label>
                </div>
            ))}
            <button onClick={handleSave} className="button save-button">Save</button>
            <button onClick={handleReset} className="button reset-button">Reset</button>
        </div>
    );
}
