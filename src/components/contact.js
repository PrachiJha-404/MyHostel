import React from "react";
import "./contact.css"

function ContactUsPage() {
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        alert("Your message has been submitted successfully!"); // Display the alert message
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We’d love to hear from you! Reach out to us using the form below or through the provided contact details.</p>
            </div>
            <div className="contact-content">
                {/* Left Section: Contact Information */}
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Email: <a href="mailto:support@myhostel.com">support@myhostel.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
                    <p>Address: PES Living space</p>

                </div>
                {/* Right Section: Contact Form */}
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;