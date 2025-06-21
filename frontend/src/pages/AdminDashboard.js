// src/pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', description: '', image: '' });
  const [authorized, setAuthorized] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
  if (token === 'admin-secret-token') {
    setAuthorized(true);
    fetchBooks();
    fetchUsers();
    fetchReviews();
  } else {
    setAuthorized(false);
  }
}, []);


  useEffect(() => {
    if (token === 'admin-secret-token') {
      setAuthorized(true);
      fetchBooks();
      fetchUsers();
      fetchReviews();
    }
  }, [token]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/books', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBooks(res.data);
    } catch (err) {
      console.error('Error fetching books', err);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users', err);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/reviews', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setReviews(res.data);
    } catch (err) {
      console.error('Error fetching reviews', err);
    }
  };

  const handleAddBook = async () => {
    if (!newBook.title || !newBook.author || !newBook.description || !newBook.image) {
      return alert('All fields are required');
    }
    try {
      await axios.post('http://localhost:5000/api/books', newBook, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Book added!');
      setNewBook({ title: '', author: '', description: '', image: '' });
      fetchBooks();
    } catch (err) {
      alert('Failed to add book');
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Book deleted!');
      fetchBooks();
    } catch (err) {
      alert('Failed to delete book');
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/reviews/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Review deleted!');
      fetchReviews();
    } catch (err) {
      alert('Failed to delete review');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out successfully!');
    navigate('/');
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (adminPassword === 'admin') {
      localStorage.setItem('token', 'admin-secret-token');
      setAuthorized(true);
      fetchBooks();
      fetchUsers();
      fetchReviews();
    } else {
      alert('Incorrect password');
    }
  };

  if (!authorized) {
    return (
      <div className="container mt-5" style={{ maxWidth: '400px' }}>
        <h2 className="mb-4 text-center">🔐 Admin Access</h2>
        <form onSubmit={handleAuthSubmit}>
          <div className="form-group mb-3">
            <label>Enter Admin Password</label>
            <input
              type="password"
              className="form-control"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">Enter Dashboard</button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>

      {/* Add Book */}
      <div className="mb-4">
        <h4>Add New Book</h4>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newBook.image}
          onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
          className="form-control mb-2"
        />
        <textarea
          placeholder="Description"
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
          className="form-control mb-2"
        ></textarea>
        <button onClick={handleAddBook} className="btn btn-success">Add Book</button>
      </div>

      {/* Books List */}
      <div className="mb-4">
        <h4>All Books</h4>
        <div className="row">
          {books.map(book => (
            <div key={book.id} className="col-md-4 mb-3">
              <div className="card">
                <img src={book.image} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                  <p className="text-muted">by {book.author}</p>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteBook(book.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User List */}
      <div className="mb-4">
        <h4>Registered Users</h4>
        <ul className="list-group">
          {users.map(user => (
            <li key={user.id} className="list-group-item">
              {user.name || user.email} ({user.email})
            </li>
          ))}
        </ul>
      </div>

      {/* Reviews List */}
      <div className="mb-4">
        <h4>User Reviews</h4>
        <ul className="list-group">
          {reviews.map(review => (
            <li key={review.id} className="list-group-item d-flex justify-content-between align-items-center">
              {review.content} — <strong>{review.Book?.title || 'N/A'}</strong> by {review.User?.email || 'User'}
              <button className="btn btn-sm btn-warning" onClick={() => handleDeleteReview(review.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
