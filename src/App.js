// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import LostAndFound from './components/LostAndFound';
import Food from './components/Food';
import FoodEditor from './components/FoodEditor';
import BusSchedule from './components/BusSchedule';
import Laundry from './components/laundry';
import BusScheduleEdit from './components/BusScheduleEdit';
import StudentLogin from './components/StudentLogin';



function App() {
  // State to manage authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to log the user in
  const login = () => setIsAuthenticated(true);

  // Function to log the user out
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
      <div className="App">
        {/* Navigation links */}
        <nav>
          <Link to="/">Lost and Found</Link>
          <Link to="/food">View Menu</Link>
          <Link to="/food-editor">Edit Menu</Link>
          <Link to="/laundry">Laundry Services</Link>
          <Link to="/bus-schedule">Bus Schedule</Link>
          <Link to="/bus-schedule-edit">Edit Bus Schedule</Link>
          {isAuthenticated && <button onClick={logout}>Logout</button>}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/student-login" element={<StudentLogin login={login} />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={isAuthenticated ? <LostAndFound /> : <Navigate to="/student-login" />}
          />
          <Route
            path="/food"
            element={isAuthenticated ? <Food /> : <Navigate to="/student-login" />}
          />
          <Route
            path="/food-editor"
            element={isAuthenticated ? <FoodEditor /> : <Navigate to="/student-login" />}
          />
          <Route
            path="/laundry"
            element={isAuthenticated ? <Laundry /> : <Navigate to="/student-login" />}
          />
          <Route
            path="/bus-schedule"
            element={isAuthenticated ? <BusSchedule /> : <Navigate to="/student-login" />}
          />
          <Route
            path="/bus-schedule-edit"
            element={isAuthenticated ? <BusScheduleEdit /> : <Navigate to="/student-login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
