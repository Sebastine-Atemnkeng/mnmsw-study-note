import React, { useState } from 'react';
import BookCard from '../BookCard/BookCard'; // Adjust the path as needed
import BooksData from '../BooksData/BooksData'; // Ensure this path is correct
import SearchBar from '../../../Global/SearchBar/SearchBar'; // Adjust the path as needed for SearchBar
import './Bookstore.css'; // Ensure this CSS file exists and contains the styles

const Bookstore = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target.querySelector('.search-input').value; // Assuming the input has a class "search-input"
    setSearchTerm(searchValue);
  };

  const filteredBooks = BooksData.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bookstore">
      <h1>Welcome to Our Bookstore</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default Bookstore;
