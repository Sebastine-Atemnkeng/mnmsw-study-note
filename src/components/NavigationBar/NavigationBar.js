import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css'; // Ensure this path matches your file structure
import { Link } from 'react-router-dom';

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
        <span>Menu</span> {/* Placeholder for menu icon */}
      </button>
      <div className={`nav-links ${isNavExpanded ? 'show' : ''}`} id="navigation">
        <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
        <NavLink to="/upload" activeClassName="active" className="nav-link">Upload</NavLink>

        <div 
          className="nav-link Bootcamp"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          Bootcamp
          {isDropdownVisible && (
            <div className="dropdown-content">
              <NavLink to="/devops-bootcamp" className="dropdown-item">DevOps Bootcamp</NavLink>
              <NavLink to="/devsecops-bootcamp" className="dropdown-item">DevSecOps Bootcamp</NavLink>
            </div>
          )}
        </div>


        <div 
          className="nav-link Courses"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          Courses
          {isDropdownVisible && (
            <div className="dropdown-content">
              <NavLink to="/Kubernetes-Course" className="dropdown-item">Kubernetes Course</NavLink>
              <NavLink to="/Docker-Docker-Compose-Course" className="dropdown-item">Docker & Docker Compose Course</NavLink>
              <NavLink to="/Github-Actions-Course" className="dropdown-item">Github Actions Course</NavLink>
              <NavLink to="/Terraform-Course" className="dropdown-item">Terraform Course</NavLink>
              <NavLink to="/IT-Foundation-Course" className="dropdown-item">IT Foundation Course</NavLink>
            </div>
          )}
        </div>


        <div 
          className="nav-link RoadMaps"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          RoadMaps
          {isDropdownVisible && (
            <div className="dropdown-content">
              <NavLink to="/DevOps-Roadmap" className="dropdown-item">DevOps Roadmap</NavLink>
              <NavLink to="/Kubernetes-Roadmap" className="dropdown-item">Kubernetes Roadmap</NavLink>
              <NavLink to="/Linux-Administrator-Roadmap" className="dropdown-item">Linux Administrator Roadmap</NavLink>
            </div>
          )}
        </div>


        <div 
          className="nav-link E-Books"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          E-Books
          {isDropdownVisible && (
            <div className="dropdown-content">

              <NavLink to="/E-Books" activeClassName="active" className="nav-link">E-Books</NavLink>

              <NavLink to="/Linux-E-Books" className="dropdown-item">Linux e-books</NavLink>
              <NavLink to="/Kubernetes-E-Books" className="dropdown-item">Kubernetes e-books</NavLink>
              <NavLink to="/Docker-E-books" className="dropdown-item">Docker e-books</NavLink>
              <NavLink to="/Terraform-E-books" className="dropdown-item">Terraform e-books</NavLink>
              <NavLink to="/AWS Cloud E-Books" className="dropdown-item">AWS Cloud e-books</NavLink>
              <NavLink to="/Github-Actions-Jenkins-E-Books" className="dropdown-item">Github Actions & Jenkins e-books</NavLink>
              <NavLink to="/Python-E-books" className="dropdown-item">Python e-book</NavLink>
              <NavLink to="/GO-E-Books" className="dropdown-item">Go e-books</NavLink>
              <Link to="/bookstore" className="btn btn-primary">E-Books</Link>
            </div>
          )}
        </div>










        <div 
          className="nav-link more"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          More
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
