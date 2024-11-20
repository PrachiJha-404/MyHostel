import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function SignUpPage() {
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page refresh

        const form = event.target;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const phone = form.elements.phone.value;
        const hostel = form.elements.hostel.value;
        const passwd = form.elements.passwd.value;

        const userData = { name, email, phone, passwd, hostel };

        alert(`Welcome, ${name}! Your details have been submitted:\nEmail: ${email}\nPhone: ${phone}`);

        try {
            const response = await fetch('http://localhost:3000/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                // If response is not ok, throw an error with a message from response
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create account');
            }

            // If everything is successful, reset form and redirect
            form.reset();
            alert('Account created successfully!');
            navigate('/student-login');
        } catch (error) {
            alert('Error: ' + error.message); // Show the error message from the catch block
        }
    };

    return (
        <div className="signin-page">
            <div className="signin-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

                    <label htmlFor="hostel">Hostel:</label>
                    <input type="text" id="hostel" name="hostel" placeholder="Enter your hostel name" required />

                    <label htmlFor="passwd">Password:</label>
                    <input type="password" id="passwd" name="passwd" placeholder="Enter your password" required />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;
