import React, { useState, useEffect } from 'react';
import BookCard from '../BookCard/BookCard'; // Correct path based on your project structure
import './Bookstore.css'; // Ensure this CSS path is correct if it's meant to be used globally or adjust if it's specific to BookCard

const Bookstore = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of e-books. Replace the URL with your actual API endpoint
    fetch('https://example.com/api/ebooks')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching e-books:', error));
  }, []);

  return (
    <div className="bookstore">
      <h1>Welcome to Bookstore</h1>
      <div className="book-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Bookstore;
