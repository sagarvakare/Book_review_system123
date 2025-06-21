import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Client-side Validation
    if (!form.name || !form.email || !form.password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/users/register', form);

      if (res.data?.token) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        alert('Registration successful!');
        navigate('/');
      } else {
        alert('Registration failed.');
      }
    } catch (err) {
      const message = err.response?.data?.message || 'Registration failed';
      alert(message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
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
        <div className="form-group mb-4">
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
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
