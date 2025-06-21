import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then((res) => {
        console.log("Books:", res.data);  // ✅ Log books to console
        setBooks(res.data);
      })
      .catch((err) => console.error('Error fetching books', err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📚 Featured Books</h2>
      <div className="row">
        {books.map(book => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text"><strong>Author:</strong> {book.author}</p>
                <p className="card-text">{book.description?.slice(0, 100)}...</p>
                <p className="card-text">
                  ⭐ {parseFloat(book.averageRating || 0).toFixed(1)} / 5  
                  <br />
                  🗨️ {book.reviewCount || 0} reviews
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
