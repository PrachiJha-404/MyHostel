import React from "react";
import { useNavigate } from "react-router-dom";
import "./front.css"; // Assuming you have styles in this file

function OpeningPage() {
    const navigate = useNavigate(); // Initialize the navigate hook

    return (
        <div className="opening-page">
            <header className="header">
                <h1 className="header-title">MyHostel</h1>
                <p className="header-subtitle">Simplifying Hostel Management</p>
            </header>
            <main className="main-content">
                <section className="left-section">
                    <div className="welcome-text">
                        <h2>Welcome to MyHostel</h2>
                        <p>
                            Your one-stop solution for seamless hostel management. Whether
                            you're a student, warden, or administrator, MyHostel makes managing
                            hostels efficient, intuitive, and stress-free.
                        </p>
                    </div>
                    <div className="button-group">
                        <button
                            className="btn1"
                            onClick={() => navigate("/student-login")} // Navigate to the student login page
                        >
                            Student Login
                        </button>
                        <button
                            className="btn1"
                            onClick={() => navigate("/warden-login")} // Navigate to the warden login page (if you have it)

                        >
                            Warden Login
                        </button>
                        <button
                            className="btn1"
                            onClick={() => navigate("/sign-in")} // Navigate to sign-in page
                        >
                            Sign In
                        </button>
                        <button
                            className="btn1"
                            onClick={() => navigate("/contact")} // Navigate to contact page
                        >
                            Contact Us
                        </button>
                    </div>
                </section>
                <section className="right-section">
                    <div className="about-section">
                        <h2>About Us</h2>
                        <p>
                            At MyHostel, we aim to revolutionize hostel management by
                            providing an easy-to-use platform for everyone involved. Our system
                            handles everything from room assignments to real-time updates,
                            making the process smooth and hassle-free.
                        </p>
                        <img
                            className="hostelimg1"
                            src="/hostel1-jpg.webp"
                            alt="Hostel Management System"
                        />
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>© 2024 MyHostel | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default OpeningPage;
