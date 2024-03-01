// Home.js
import React from 'react';
import './Home.css';
import Search from '../../Global/Search/Search'; // Adjust the path as necessary

const Home = ({ user }) => (
  <div className="home-container">
    <h1 className="home-title">Welcome to Study Note, {user ? user.name : "Guest"}</h1>
    <p className="home-text">Your one stop location for all things DevOps.</p>
    <Search onSearch={(searchTerm) => console.log(searchTerm)} />
    {/* This could be a section for featured courses or tools */}
    <section className="featured-section">
      {/* This could be a grid or list of featured items */}
    </section>
    {/* Add any additional content based on the mock-up */}
  </div>
);

export default Home;
