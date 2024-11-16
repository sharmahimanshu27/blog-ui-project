import React, { useState } from 'react';
import './Headers.css';
import { NavLink } from 'react-router-dom';

function Headers() {
  // State to manage the visibility of the navbar links
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Toggle function to open/close the navbar links
  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <nav>
        <div className="container-Navbar">
          <div className="logo">
            <a href="/" className="download-logo" alt="Logo"></a>
          </div>
          {/* Hamburger icon for mobile toggle */}
          <div className="menu-toggle" onClick={toggleNavVisibility}>
            &#9776; {/* Hamburger icon */}
          </div>
          {/* Navbar links; conditionally shown based on `isNavVisible` */}
          <div className={`navbar-link ${isNavVisible ? 'visible' : ''}`}>
            <NavLink className="NavText" to="/">Home</NavLink>
            <NavLink className="NavText" to="/about">About</NavLink>
            <NavLink className="NavText" to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Headers;
