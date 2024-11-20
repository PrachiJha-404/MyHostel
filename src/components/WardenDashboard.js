import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./WardenDashboard.css";

function WardenDashboard() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/students", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });

                if (response.data) {
                    setStudents(response.data);
                } else {
                    setError("No student data received");
                }
            } catch (err) {
                setError(
                    err.response?.data?.message || 
                    "Failed to fetch student data. Please ensure the server is running."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="warden-dashboard">
            <div> <h1> Warden Dashboard </h1></div>
            
            {loading && <div className="loading">Loading students...</div>}
            {error && <div className="error">{error}</div>}

            <div className="student-summary">
                <h2>Student Overview</h2>
                <div className="summary-stats">
                    <p>Total Students: {students.length}</p>
                    <p>Unique Hostels: {new Set(students.map(s => s.hostel)).size}</p>
                </div>
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Hostel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student._id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.hostel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WardenDashboard;