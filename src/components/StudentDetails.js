import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentDetails.css";

function StudentDetails() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/students", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });

                setStudents(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch students");
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    if (loading) return <div>Loading students...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="student-details">
            <h1>Student Details</h1>
            {students.length === 0 ? (
                <p>No students found</p>
            ) : (
                <>
                    <div className="student-summary">
                        <h2>Overview</h2>
                        <p>Total Students: {students.length}</p>
                        <p>Unique Hostels: {new Set(students.map(s => s.hostel)).size}</p>
                    </div>

                    <table className="student-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Hostel</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student._id}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.hostel}</td>
                                    <td>{student.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}

export default StudentDetails;