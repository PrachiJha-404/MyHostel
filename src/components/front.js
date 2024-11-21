import React from "react";
import { useNavigate } from "react-router-dom";
import "./front.css"; // Assuming you have styles in this file

function OpeningPage() {
    const navigate = useNavigate();

    return (
        <div className="opening-page">
            <header className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Welcome to <span className="highlight">MyHostel</span>
                    </h1>
                    <p className="hero-subtitle">
                        Simplifying Hostel Management for a Better Tomorrow
                    </p>
                    <div className="hero-buttons">
                        {/* Navigate to Student Login */}
                        <button
                            className="btn-secondary"
                            onClick={() => navigate("/student-login")}
                        >
                            Student Login
                        </button>

                        {/* Navigate to Warden Login */}
                        <button
                            className="btn-secondary"
                            onClick={() => navigate("/warden-login")}
                        >
                            Warden Login
                        </button>

                        {/* Navigate to Sign-In */}
                        <button
                            className="btn-secondary"
                            onClick={() => navigate("/sign-up")}
                        >
                            Sign In
                        </button>

                        {/* Navigate to Contact Us */}
                        <button
                            className="btn-secondary"
                            onClick={() => navigate("/contact")}
                        >
                            Contact Us
                        </button>

                        {/* Navigate to Feedback Form */}
                        <button
                            className="btn-secondary"
                            onClick={() => navigate("/feedback")}
                        >
                            Feedback Form
                        </button>
                    </div>
                </div>
            </header>

            <main className="about-section">
                <div className="about-container">
                    <h2>About <span className="highlight">MyHostel</span></h2>
                    <p>
                        MyHostel is designed to revolutionize hostel management, offering an efficient and intuitive solution for students, wardens, and administrators.
                        From room assignments to real-time updates, we ensure your experience is smooth and stress-free.
                    </p>
                    <div className="feature-list">
                        <div className="feature-item">
                            <span className="feature-icon">📋</span>
                            <h3>Seamless Room Management</h3>
                            <p>Assign and manage rooms effortlessly.</p>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">📡</span>
                            <h3>Real-Time Updates</h3>
                            <p>Stay updated with live notifications.</p>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">🔒</span>
                            <h3>Secure & Reliable</h3>
                            <p>Experience the best in data security.</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <p>© 2024 <span className="highlight">MyHostel</span> | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default OpeningPage;