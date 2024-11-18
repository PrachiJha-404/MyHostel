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
import Front from './components/front'; // Import the Front component
import './App.css'; // Import App styles
import SignUpPage from "./components/sign-up";    // Import your sign-up page

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [student, setStudent] = useState({ name: "John Doe", profilePic: "https://via.placeholder.com/50" });

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  // Protected Route Wrapper
  const ProtectedRoute = ({ isAuthenticated, redirectTo }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  };

  return (
    <Router>
      <div className="App">
        {/* Show header only after authentication */}
        {isAuthenticated && (
          <header className="App-header">
            <div className="profile-container">
              <img
                src={student.profilePic}
                alt="Profile"
                className="profile-pic"
              />
              <span className="student-name">{student.name}</span>
              <button className="logout-button" onClick={logout}>
                Logout
              </button>
            </div>
          </header>
        )}

        {/* Show navigation links only after authentication */}
        {isAuthenticated && (
          <nav className="App-nav">
            <Link to="/lost-and-found">Lost and Found</Link>
            <Link to="/food">View Menu</Link>
            <Link to="/food-editor">Edit Menu</Link>
            <Link to="/laundry">Laundry Services</Link>
            <Link to="/bus-schedule">Bus Schedule</Link>
            <Link to="/bus-schedule-edit">Edit Bus Schedule</Link>
          </nav>
        )}

        <Routes>
          {/* Default route is the Front page */}
          <Route path="/" element={<Front />} />

          {/* Route to Student Login */}
          <Route path="/student-login" element={<StudentLogin login={login} />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} redirectTo="/student-login" />}>
            <Route path="/lost-and-found" element={<LostAndFound />} />
            <Route path="/food" element={<Food />} />
            <Route path="/food-editor" element={<FoodEditor />} />
            <Route path="/laundry" element={<Laundry />} />
            <Route path="/bus-schedule" element={<BusSchedule />} />
            <Route path="/bus-schedule-edit" element={<BusScheduleEdit />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
