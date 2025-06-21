import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error("Error fetching book:", err));
  }, [id]);

  return (
    <div className="container mt-5">
      {book ? (
        <>
          <h2>{book.title}</h2>
          <h4 className="text-muted">by {book.author}</h4>
          <p>{book.description || "No description available."}</p>
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
}

export default BookDetail;
