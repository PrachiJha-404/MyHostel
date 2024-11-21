import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentLogin.css"; // Import the CSS file

export default function StuLog({ login }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            email: username,
            password: password
        };

        try {
            const response = await fetch("http://localhost:3000/student-login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Call the login function from props to update authentication state
                login();
                // Redirect to student dashboard instead of laundry
                navigate("/student-dashboard");
            } else {
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

                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    );
}