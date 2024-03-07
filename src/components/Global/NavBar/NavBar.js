import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/styles.css'; // Ensure this path matches your file structure


const NavigationBar = ({ user, onSignOut }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Correctly define the state here


  return (
    <nav className="navigation-bar" aria-label="Main navigation">
      <NavLink to="/" className="brand-logo">Study Note</NavLink>
      <button
        className="toggle-button"
        aria-controls="navigation"
        aria-expanded={isNavExpanded}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        
      </button>
      <div className={`nav-links ${isNavExpanded ? 'show' : ''}`} id="navigation">
        
        <NavLink to="/courses" className="nav-link">Courses</NavLink>
        <NavLink to="/upload" activeClassName="active" className="nav-link">Upload</NavLink>

        <div 
          className="nav-link Bootcamp"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          
          <NavLink to="/Bootcamp" className="dropdown-item">Bootcamp</NavLink>
          {isDropdownVisible && (
            <div className="dropdown-content">
              <NavLink to="/devops-bootcamp" className="dropdown-item">DevOps Bootcamp</NavLink>
              <NavLink to="/devsecops-bootcamp" className="dropdown-item">DevSecOps Bootcamp</NavLink>
            </div>
          )}
        </div>


        <div 
          className="nav-link RoadMaps"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          
          <NavLink to="/RoadMaps" className="dropdown-item">RoadMaps</NavLink>
          {isDropdownVisible && (
            <div className="dropdown-content">
              <NavLink to="/DevOps-Roadmap" className="dropdown-item">DevOps Roadmap</NavLink>
              <NavLink to="/Kubernetes-Roadmap" className="dropdown-item">Kubernetes Roadmap</NavLink>
              <NavLink to="/Linux-Administrator-Roadmap" className="dropdown-item">Linux Administrator Roadmap</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/e-books" activeClassName="active" className="nav-link">E-Books</NavLink>

        <div 
          className="nav-link more"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          
          <NavLink to="/More" className="dropdown-item">More</NavLink>
          {isDropdownVisible && (
            <div className="dropdown-content">
              <NavLink to="/about" className="dropdown-item">About - My DevOps journey</NavLink>
              <NavLink to="/blog" className="dropdown-item">Blog</NavLink>
            </div>
          )}
        </div>

        {!user && (
          <>
            <NavLink to="/login" className="nav-link action-button login">Login</NavLink>
            <NavLink to="/join" className="nav-link action-button join-now">Join Now</NavLink>
          </>
        )}
      </div>
      {user && (
        <button onClick={onSignOut} className="btn-signout" aria-label="Sign out">
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default NavigationBar;