import React, { useState } from 'react';
import './Sidebar.css'; // Make sure to create a Sidebar.css file for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar open/close

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the state value
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Topics
      </button>
      {isOpen && (
        <div className="sidebar-content">
          <h2 className="sidebar-title">IT Foundation Course</h2>
          <ul className="sidebar-list">
            {/* List of topics */}
            <li className="sidebar-item">Introduction to IT</li>
            <li className="sidebar-item">Course Resources</li>
            <li className="sidebar-item">Understanding Hardware</li>
            <li className="sidebar-item">Basic Networking Concepts</li>
            <li className="sidebar-item">Fundamentals of Security</li>
            <li className="sidebar-item">Software Management</li>
            <li className="sidebar-item">Operating Systems</li>
            <li className="sidebar-item">Troubleshooting Techniques</li>
            <li className="sidebar-item">IT Service Management</li>
            <li className="sidebar-item">Preparing for Certification</li>
            {/* ...other list items */}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
