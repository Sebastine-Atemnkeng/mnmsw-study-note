
import React from 'react';
import './BookCard.css'; // Adjust the path as necessary

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.coverImageUrl} alt={`Cover of ${book.title}`} className="book-cover"/>
      <div className="book-info">
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        <a href={book.documentUrl} target="_blank" rel="noopener noreferrer" className="book-link">Read Now</a>
      </div>
    </div>
  );
};

export default BookCard;
