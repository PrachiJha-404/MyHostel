// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LostAndFound from './components/LostAndFound';
import Food from './components/Food';
import FoodEditor from './components/FoodEditor';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Links */}
        <nav>
          <Link to="/">Lost and Found</Link>
          <Link to="/food">View Menu</Link>
          <Link to="/food-editor">Edit Menu</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<LostAndFound />} />
          <Route path="/food" element={<Food />} />
          <Route path="/food-editor" element={<FoodEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
