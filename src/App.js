// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LostAndFound from './components/LostAndFound';
import Food from './components/Food';
import FoodEditor from './components/FoodEditor';
import BusSchedule from './components/BusSchedule';
import { LaundryProvider } from './context/laundry_context';
import { BusScheduleProvider } from './context/BusScheduleContext';
import Laundry from './components/laundry';
import BusScheduleEdit from './components/BusScheduleEdit';

function App() {
  return (
    <LaundryProvider>
      <BusScheduleProvider>
        <Router>
          <div className="App">
            {/* Navigation Links */}
            <nav>
              <Link to="/">Lost and Found</Link>
              <Link to="/food">View Menu</Link>
              <Link to="/food-editor">Edit Menu</Link>
              <Link to="/laundry">Laundry Services</Link>
              <Link to="/bus-schedule">Bus Schedule</Link>
              <Link to="/bus-schedule-edit">Edit Bus Schedule</Link>
            </nav>

            {/* Route Definitions */}
            <Routes>
              <Route path="/" element={<LostAndFound />} />
              <Route path="/food" element={<Food />} />
              <Route path="/food-editor" element={<FoodEditor />} />
              <Route path="/laundry" element={<Laundry />} />
              <Route path="/bus-schedule" element={<BusSchedule />} />
              <Route path="/bus-schedule-edit" element={<BusScheduleEdit />} />
            </Routes>
          </div>
        </Router>
      </BusScheduleProvider>
    </LaundryProvider>
  );
}

export default App;
