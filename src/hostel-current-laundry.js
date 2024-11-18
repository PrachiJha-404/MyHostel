import React, { useState } from 'react';
import './LaundryStatus.css'; // Import your CSS file for styling

const LaundryStatus = () => {
  const [washingCount, setWashingCount] = useState(40);
  const [dryingCount, setDryingCount] = useState(32);
  const [recentUsers, setRecentUsers] = useState(['Prachi', 'Pragathi', 'Palak']);

  const addUser = (name) => {
    setRecentUsers((prevUsers) => [name, ...prevUsers.slice(0, 3)]); // Keep only the last 4 users
  };

  return (
    <div className="laundry-status">
      <header>
        <h2>Current Laundry Area Status:</h2>
      </header>
      <div className="status">
        <p>Number of clothes kept for:</p>
        <div>
          <span>Washing - <strong>{washingCount}</strong></span>
          <span>Drying - <strong>{dryingCount}</strong></span>
        </div>
      </div>
      <div className="recent-users">
        <h3>People who have most recently used the facility:</h3>
        <div className="clothesline">
          {recentUsers.map((user, index) => (
            <div key={index} className="shirt">
              <p>{user}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => addUser('New User')}>Add Random User</button>
    </div>
  );
};

export default LaundryStatus;
