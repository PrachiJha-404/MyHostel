import React from "react";
import { Link } from "react-router-dom";
import "./WardenDashboard.css";

function WardenDashboard() {
    return (
        <div className="warden-dashboard">
            <h1>Welcome, Warden!</h1>
            <p>Select an action:</p>
            <div className="warden-links">
                <Link to="/lost-and-found">Lost and Found</Link>
                <Link to="/food-editor">Edit Food Menu</Link>
                <Link to="/laundry">Manage Laundry</Link>
                <Link to="/bus-schedule-edit">Edit Bus Schedule</Link>
                <Link to="/student-details">View Student Details</Link> 
            </div>
        </div>
    );
}

export default WardenDashboard;
