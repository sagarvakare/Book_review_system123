import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!form.email || !form.password) {
      alert('Please fill in both email and password.');
      return;
    }

    // ✅ Admin Login Check (Optional: Match real DB instead)
    if (form.email === 'admin@gmail.com' && form.password === 'admin') {
      localStorage.setItem('token', 'admin-secret-token');
      alert('Admin login successful!');
      navigate('/admin');
      return;
    }

    // ✅ Normal User Login
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', form);
      if (res.data?.token) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Login failed. Invalid credentials.');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed due to server error');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
