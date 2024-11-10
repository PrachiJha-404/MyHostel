// src/components/StudentLogin.js
import React, { useState } from "react";
import "./StudentLogin.css";

export default function StuLog({ login }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // To store error message

    // Dummy credentials for testing
    const validUsername = "student123";
    const validPassword = "password123";

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the credentials are correct
        if (username === validUsername && password === validPassword) {
            // Call login function passed via props
            login();
        } else {
            // Show error message if credentials are incorrect
            setError("Invalid username or password");
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
