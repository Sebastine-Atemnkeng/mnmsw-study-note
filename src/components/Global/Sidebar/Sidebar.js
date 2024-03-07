// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/it-foundation">IT Foundation</NavLink></li>
          <li><NavLink to="/e-books">E-Books</NavLink></li>
          {/* Other links as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
