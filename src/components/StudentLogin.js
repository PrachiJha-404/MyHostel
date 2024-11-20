import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./StudentLogin.css";

export default function StuLog({ login }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // To store error message

    

    const navigate = useNavigate(); // Initialize navigate

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data to send to the backend
        const loginData = {
            email: username,  // 'username' corresponds to the email field
            password: password
        };

    
        try {
            const response = await fetch("http://localhost:3000/student-login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData), // Use email and password
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Redirect to Laundry or any other page upon success
                alert("Login")
                navigate("/laundry");
            } else {
                // Display error message from the server
                setError(data.message || "Invalid credentials");
            }
        } catch (error) {
            setError("Something went wrong. Please try again later.");
        }
    };
    

    return (
        <div className="stulogin">
            <div className="stulogin-container">
                <h2>Student Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="stulogin-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>

                {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error if invalid credentials */}
            </div>
        </div>
    );
}
