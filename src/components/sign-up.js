import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function SignUpPage() {
    const navigate = useNavigate();
    const handleSubmit = async(event) => {
        event.preventDefault(); // Prevent page refresh

        // Access form data using the form.elements property
        const form = event.target;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const phone = form.elements.phone.value;
        const hostel = form.elements.hostel.value;  // Get hostel value
        const passwd = form.elements.passwd.value;  // Get password value

        const userData = { name, email, phone, passwd, hostel };

        alert(`Welcome, ${name}! Your details have been submitted:\nEmail: ${email}\nPhone: ${phone}`);

        try {
            // Send POST request to your API endpoint to save the user data (replace with actual API URL)
            const response = await fetch('http://localhost:3000/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Failed to create account');
            }

            // Show a success alert (optional)
            const errorMessage = await response.text();
            alert('Account created successfully!');

            // Redirect to the student-login page after successful submission
            navigate('/student-login');
        } catch (error) {
            // Handle any errors that occur during the API request
            alert('Error: ' + error.message);
        }

        // Optionally clear the form fields
        form.reset();
    };


    return (
        <div className="signin-page">
            <div className="signin-form">
                <h2>Sign In</h2>
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

                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

// Export the SignUpPage component as default
export default SignUpPage;
