import React, { useContext } from 'react';
import './feedback.css'
function FeedbackForm() {
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      alert("Feedback Saved!"); // Show the alert box
    };
  
    return (
      <div className="feedback-page">
        <header className="hero-section">
          <h1 className="hero-title">We Value Your Feedback</h1>
          
        </header>
        <main className="form-container">
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                id="feedback"
                rows="5"
                placeholder="Write your feedback here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Submit</button>
          </form>
        </main>
        
      </div>
    );
  }
  
  
  export default FeedbackForm;