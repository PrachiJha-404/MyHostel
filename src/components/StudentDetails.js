import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentDetails.css";

function StudentDetails() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                console.log('Fetching students...'); // Debug log
                const response = await axios.get("http://localhost:3000/api/students", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    withCredentials: true
                });

                console.log('Response:', response); // Debug log

                if (response.data) {
                    console.log('Fetched students:', response.data);
                    setStudents(response.data);
                } else {
                    setError("No student data received");
                }
            } catch (err) {
                console.error('Error details:', err.response || err); // Enhanced error logging
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

    if (loading) {
        return (
            <div className="student-details">
                <h1>Student Details</h1>
                <div className="loading-spinner">Loading student data...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="student-details">
                <h1>Student Details</h1>
                <div className="error-message">
                    <p>Error: {error}</p>
                    <button onClick={() => window.location.reload()}>Retry</button>
                    <p className="error-help">
                        Make sure your server is running on port 3000 and MongoDB is connected.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="student-details">
            <h1>Student Details</h1>
            {students.length === 0 ? (
                <div className="no-students">
                    <p>No students found in the database.</p>
                    <p>Try adding some students through the registration form.</p>
                </div>
            ) : (
                <div className="student-list">
                    {students.map((student) => (
                        <div key={student._id} className="student-card">
                            <h3>{student.name}</h3>
                            <div className="student-info">
                                <p><strong>Email:</strong> {student.email}</p>
                                <p><strong>Hostel:</strong> {student.hostel}</p>
                                <p><strong>Phone:</strong> {student.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default StudentDetails;