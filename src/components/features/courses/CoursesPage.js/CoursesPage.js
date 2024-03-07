import React from 'react';
// Assuming the relative paths to FilterBar and SearchBar are correct
import FilterBar from '../../../Global/FilterBar/FilterBar';
import SearchBar from '../../../Global/SearchBar/SearchBar';

const CoursesPage = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    // Implementation of your search logic goes here
    console.log("Search initiated");
  };
  
  return (
    <div>
      <div className="content-background">
      <SearchBar onSearch={handleSearch} /> {/* Implement handleSearch */}
      <FilterBar />
      </div>
    </div>
  );
}

export default CoursesPage;
