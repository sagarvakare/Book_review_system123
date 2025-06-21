// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import AdminLogin from './pages/AdminLogin';


function App() {
  return (
    <Router>
      <Navbar />
     
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/admin" element={<AdminDashboard />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Routes>
    </Router>
  );
}

export default App;
