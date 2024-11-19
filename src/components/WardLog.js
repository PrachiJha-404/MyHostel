import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WardLog.css';

function WardLog({ login }) {
    const navigate = useNavigate();

    const [error, setError] = useState('');

    // Hardcoded Warden Credentials
    const wardenCredentials = [
        { username: 'warden1', password: 'password1' },
        { username: 'warden2', password: 'password2' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const password = form.password.value;

        // Validate credentials
        const isValid = wardenCredentials.some(
            (warden) => warden.username === username && warden.password === password
        );

        if (isValid) {
            setError('');
            login(); // Call the login function
            navigate('/warden-dashboard'); // Redirect to Warden Dashboard
        } else {
            setError('Invalid username or password.');
        }

        form.reset();
    };

    return (
        <div className="Wardlogin">
            <div className="Wardlogin-container">
                <h2>Warden Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="Wardlogin-group">
                        <label>Username</label>
                        <input type="text" name="username" required />
                        <label>Password</label>
                        <input type="password" name="password" required />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default WardLog;
