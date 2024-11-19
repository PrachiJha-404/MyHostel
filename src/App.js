import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, Outlet } from 'react-router-dom';
import LostAndFound from './components/LostAndFound';
import Food from './components/Food';
import FoodEditor from './components/FoodEditor';
import BusSchedule from './components/BusSchedule';
import Laundry from './components/laundry';
import BusScheduleEdit from './components/BusScheduleEdit';
import StudentLogin from './components/StudentLogin';
import ContactUsPage from './components/contact';
import Front from './components/front';
import WardLog from './components/WardLog';
import WardenDashboard from './components/WardenDashboard';
import './App.css';
import SignUpPage from './components/sign-up';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Student authentication
  const [student, setStudent] = useState({ name: 'John Doe', profilePic: 'https://via.placeholder.com/50' });
  const [isWardenAuthenticated, setIsWardenAuthenticated] = useState(false); // Warden authentication

  // Login and Logout Functions
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const wardenLogin = () => setIsWardenAuthenticated(true);
  const wardenLogout = () => setIsWardenAuthenticated(false);

  // Protected Route Wrapper
  const ProtectedRoute = ({ isAuthenticated, redirectTo }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  };

  return (
    <Router>
      <div className="App">
        {/* Student Header */}
        {isAuthenticated && (
          <header className="App-header">
            <div className="profile-container">
              <img src={student.profilePic} alt="Profile" className="profile-pic" />
              <span className="student-name">{student.name}</span>
              <button className="logout-button" onClick={logout}>Logout</button>
            </div>
          </header>
        )}

        {/* Warden Header */}
        {isWardenAuthenticated && (
          <header className="App-header">
            <h2>Warden Portal</h2>
            <button className="logout-button" onClick={wardenLogout}>Logout</button>
          </header>
        )}

        {/* Common Navigation */}
        {(isAuthenticated || isWardenAuthenticated) && (
          <nav className="App-nav">
            <Link to="/lost-and-found">Lost and Found</Link>
            <Link to="/laundry">Laundry Services</Link>
            {isAuthenticated && (
              <>
                <Link to="/food">View Menu</Link>
              </>
            )}
            {isWardenAuthenticated && (
              <>
                <Link to="/food-editor">Edit Menu</Link>
                <Link to="/bus-schedule-edit">Edit Bus Schedule</Link>
              </>
            )}
            <Link to="/bus-schedule">Bus Schedule</Link>
          </nav>
        )}

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Front />} />
          <Route path="/student-login" element={<StudentLogin login={login} />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/warden-login" element={<WardLog login={wardenLogin} />} />

          {/* Warden Routes */}
          <Route path="/warden-dashboard" element={isWardenAuthenticated ? <WardenDashboard logout={wardenLogout} /> : <Navigate to="/warden-login" />} />

          {/* Common Routes for both Students and Warden */}
          <Route path="/lost-and-found" element={<LostAndFound />} />
          <Route path="/laundry" element={<Laundry />} />

          {/* Student Protected Routes */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} redirectTo="/student-login" />}>
            <Route path="/food" element={<Food />} />
          </Route>

          {/* Warden Protected Routes */}
          <Route element={<ProtectedRoute isAuthenticated={isWardenAuthenticated} redirectTo="/warden-login" />}>
            <Route path="/food-editor" element={<FoodEditor />} />
            <Route path="/bus-schedule-edit" element={<BusScheduleEdit />} />
          </Route>

          {/* Bus Schedule - Accessible by both Warden and Student */}
          <Route path="/bus-schedule" element={<BusSchedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
