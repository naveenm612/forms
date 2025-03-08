import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import House from './House/RealEstatePage';
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Profile from "./components/Profile";
import CompleteProfile from "./components/CompleteProfile";

function App() {
  return (
    <Router>
      <div className="main-content">
        <Routes>
          {/* <Route path="/" element={<House />} /> */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileform" element={<CompleteProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
