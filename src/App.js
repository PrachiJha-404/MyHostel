import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import LostAndFound from "./components/LostAndFound";
import Food from "./components/Food";
import FoodEditor from "./components/FoodEditor";
import BusSchedule from "./components/BusSchedule";
import Laundry from "./components/laundry";
import BusScheduleEdit from "./components/BusScheduleEdit";
import StudentLogin from "./components/StudentLogin";
import ContactUsPage from "./components/contact";
import Front from "./components/front";
import WardLog from "./components/WardLog";
import WardenDashboard from "./components/WardenDashboard";
import SignUpPage from "./components/sign-up";
import StudentDashboard from "./components/StudentDashboard";
import StudentDetails from "./components/StudentDetails";
import { MenuProvider } from "./context/MenuContext"; // Context for Food Menu
import FeedbackForm from "./components/feedback";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Student authentication
  const [isWardenAuthenticated, setIsWardenAuthenticated] = useState(false); // Warden authentication

  // Login/Logout handlers
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const wardenLogin = () => setIsWardenAuthenticated(true);
  const wardenLogout = () => setIsWardenAuthenticated(false);

  // Protected Route Component
  const ProtectedRoute = ({ isAuthenticated, redirectTo, children }) => {
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };

  return (
    <MenuProvider>
      <Router>
        <div className="App">
          {/* Student Header */}
          {isAuthenticated && (
            <header className="App-header">
              <div className="profile-container">
                <span className="student-name">Welcome, Student!</span>
                <button className="logout-button" onClick={logout}>
                  Logout
                </button>
              </div>
            </header>
          )}

          {/* Warden Header */}
          {isWardenAuthenticated && (
            <header className="App-header">
              <div className="profile-container">
                <span className="warden-name">Welcome, Warden!</span>
                <button className="logout-button" onClick={wardenLogout}>
                  Logout
                </button>
              </div>
            </header>
          )}

          {/* Navigation Bar */}
          {(isAuthenticated || isWardenAuthenticated) && (
            <nav className="App-nav">
              <Link to="/lost-and-found">Lost and Found</Link>
              <Link to="/laundry">Laundry Services</Link>
              {isAuthenticated && <Link to="/food">View Menu</Link>}
              {isWardenAuthenticated && (
                <>
                  <Link to="/food-editor">Edit Menu</Link>
                  <Link to="/bus-schedule-edit">Edit Bus Schedule</Link>
                  <Link to="/student-details">View Student Details</Link>
                </>
              )}
              
            </nav>
          )}

          {/* Routes */}
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Front />} />
            <Route path="/student-login" element={<StudentLogin login={login} />} />
            <Route path="/warden-login" element={<WardLog login={wardenLogin} />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/feedback" element={<FeedbackForm/>}/>

            {/* Warden Routes */}
            <Route
              path="/warden-dashboard"
              element={
                isWardenAuthenticated ? (
                  <WardenDashboard logout={wardenLogout} />
                ) : (
                  <Navigate to="/warden-login" />
                )
              }
            />

            {/* Common Routes for Students and Warden */}
            <Route path="/lost-and-found" element={<LostAndFound />} />
            <Route path="/laundry" element={<Laundry />} />

            {/* Student Protected Routes */}
            <Route
              path="/food"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirectTo="/student-login">
                  <Food />

                </ProtectedRoute>
              }
            />
            <Route
              path="/student-dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirectTo="/student-login">
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />

            {/* Warden Protected Routes */}
            <Route
              path="/food-editor"
              element={
                <ProtectedRoute isAuthenticated={isWardenAuthenticated} redirectTo="/warden-login">
                  <FoodEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bus-schedule-edit"
              element={
                <ProtectedRoute isAuthenticated={isWardenAuthenticated} redirectTo="/warden-login">
                  <BusScheduleEdit />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student-details"
              element={
                <ProtectedRoute isAuthenticated={isWardenAuthenticated} redirectTo="/warden-login">
                  <StudentDetails />
                </ProtectedRoute>
              }
            />

            {/* Bus Schedule - Accessible by both Warden and Student */}
            <Route path="/bus-schedule" element={<BusSchedule />} />
          </Routes>
        </div>
      </Router>
    </MenuProvider>
  );
}

export default App;