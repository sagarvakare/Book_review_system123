// frontend/src/pages/AdminLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', form);
      localStorage.setItem('adminToken', res.data.token);
      alert('Admin login successful!');
      navigate('/admin/dashboard'); // ✅ redirect to dashboard
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Username</label>
          <input type="text" name="username" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
