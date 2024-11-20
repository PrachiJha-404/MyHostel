// src/components/StudentDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentDetails.css";

function StudentDetails() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch students data from the server
    useEffect(() => {
        axios
            .get("http://localhost:3000/api/students")
            .then((response) => {
                setStudents(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch student data", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="student-details">
            <h1>Student Details</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="student-list">
                {students.map((student) => (
                    <div key={student._id} className="student-card">
                        
                        <h3>{student.name}</h3>
                        <p>email: {student.email}</p>
                        <p>Hostel: {student.hostel}</p>
                        <p>phone: {student.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudentDetails;
