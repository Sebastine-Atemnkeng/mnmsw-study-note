import React from 'react';
import '../../../Global/sidebar/sidebar.css'; // Ensure you create a Sidebar.css file for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">IT Foundation Course</h2>
      <ul className="sidebar-list">
        <li className="sidebar-item">Introduction to IT</li>
        <li className="sidebar-item">Understanding Hardware</li>
        <li className="sidebar-item">Basic Networking Concepts</li>
        <li className="sidebar-item">Fundamentals of Security</li>
        <li className="sidebar-item">Software Management</li>
        <li className="sidebar-item">Operating Systems</li>
        <li className="sidebar-item">Troubleshooting Techniques</li>
        <li className="sidebar-item">IT Service Management</li>
        <li className="sidebar-item">Preparing for Certification</li>
        {/* Add more list items as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
