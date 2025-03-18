import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Profile from "./components/Profile";
import CompleteProfile from "./components/CompleteProfile";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <Router>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileform" element={<CompleteProfile />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
