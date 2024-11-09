// src/LaundryPage.js
import React from 'react';
import './LaundryPage.css'; // Import the CSS file


const LaundryPage = () => {
  return (
    <div className="laundry-page">
      <h1>Welcome to the Laundry Page</h1>
      <p>Here you can view and manage your laundry services.</p>

      <div className="laundry-services">
        <h2>Available Services</h2>
        <ul>
          <li>Washing</li>
          <li>Drying</li>
          <li>Ironing</li>
        </ul>
      </div>

      <div className="laundry-booking">
        <h2>Book a Service</h2>
        <form>
          <label>
            Select Service:
            <select>
              <option value="wash">Washing</option>
              <option value="dry">Drying</option>
              <option value="iron">Ironing</option>
            </select>
          </label>
          <br />
          <label>
            Quantity:
            <input type="number" name="quantity" min="1" />
          </label>
          <br />
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default LaundryPage;
