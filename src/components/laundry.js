// src/components/Laundry.js
import React, { useState } from 'react';
import './Laundry.css';

const Laundry = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputCount, setInputCount] = useState('');
  const [washingCount, setWashingCount] = useState(0); // start with 0 for washing
  const [dryingCount, setDryingCount] = useState(0);   // start with 0 for drying

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const count = parseInt(inputCount, 10);

    if (!isNaN(count) && selectedOption) {
      if (selectedOption === 'Kept for washing') {
        setWashingCount(washingCount + count);
      } else if (selectedOption === 'Kept for drying') {
        setDryingCount(dryingCount + count);
      }else if (selectedOption === 'Collected') {
        setDryingCount(dryingCount - count);
      }
      // Clear input after submission
      setInputCount('');
    } else {
      alert('Please select an option and enter a valid number of clothes.');
    }
  };

  return (
    <div className="laundry-page">
      {/* Left Section: Profile and Laundry Form */}
      <div className="laundry-left">
        <div className="profile">
          <img src="\profile-icon-9.png" alt="Profile" />
          <button>My profile</button>
        </div>

        <h2>My Laundry</h2>
        <form className="laundry-form" onSubmit={handleSubmit}>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="">Select one option</option>
            <option value="Kept for washing">Kept for washing</option>
            <option value="Kept for drying">Kept for drying</option>
            <option value="Collected">Collected</option>
          </select>
          <input
            type="number"
            min="0"
            value={inputCount}
            onChange={(e) => setInputCount(e.target.value)}
            placeholder="Enter count"
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>

      {/* Right Section: Laundry Status */}
      <div className="laundry-right">
        <h2>At the laundry area:</h2>
        <p>Number of clothes currently:</p>

        <div className="status">
          <div>
            <img src="\washing_machine.png" alt="Washing Machine" />
            <p>Kept for washing: <span>{washingCount}</span></p>
          </div>
          <div>
            <img src="\drying_rackk.png" alt="Drying Rack" />
            <p>Kept for drying: <span>{dryingCount}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laundry;
