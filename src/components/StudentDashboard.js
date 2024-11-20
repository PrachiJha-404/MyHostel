// src/components/StudentDashboard.js
import React, { useState } from 'react';
import Food from './Food';
import Laundry from './laundry';
import LostAndFound from './LostAndFound';
import BusSchedule from './BusSchedule';
import './StudentDashboard.css';

const StudentDashboard = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('food');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1>Your room, your rules, your dashboard</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'food' ? 'active' : ''}`}
          onClick={() => handleTabChange('food')}
        >
          View Menu
        </button>
        <button
          className={`tab-button ${activeTab === 'laundry' ? 'active' : ''}`}
          onClick={() => handleTabChange('laundry')}
        >
          Laundry Services
        </button>
        <button
          className={`tab-button ${activeTab === 'lostAndFound' ? 'active' : ''}`}
          onClick={() => handleTabChange('lostAndFound')}
        >
          Lost and Found
        </button>
        <button
          className={`tab-button ${activeTab === 'busSchedule' ? 'active' : ''}`}
          onClick={() => handleTabChange('busSchedule')}
        >
          Bus Schedule
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'food' && <Food />}
        {activeTab === 'laundry' && <Laundry />}
        {activeTab === 'lostAndFound' && <LostAndFound />}
        {activeTab === 'busSchedule' && <BusSchedule />}
      </div>
    </div>
  );
};

export default StudentDashboard;
