// Navbar.js
import React, { useState } from 'react';
import './NavBar.css'; // Import the CSS file for styling

// Assuming you have an image for the logo,
// you can import it like this:
// import logo from './path/to/your/logo.png';
// For now, I'll use a placeholder or a simple text.

function Navbar() {
  // State to manage the mobile menu's open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Title Section */}
        <div className="navbar-logo">
          {/* If you have a logo image, replace the placeholder div */}
          <div className="logo-placeholder">
            {/* You can use an img tag here: <img src={logo} alt="PSNA Logo" /> */}
            <img src="https://placehold.co/40x40/cccccc/333333?text=LOGO" alt="PSNA Logo" className="logo-image" />
          </div>
          <div className="logo-text">
            <span className="main-title">PSNA Entrepreneurship</span>
            <span className="sub-title">Section 8 Organization</span>
          </div>
        </div>

        {/* Hamburger menu icon for mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li className="nav-item">
            <a href="/facilities" className="nav-link" onClick={() => setIsOpen(false)}>Facilities</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
          <li className="nav-item nav-button-item">
            <a href="/apply" className="nav-button" onClick={() => setIsOpen(false)}>Apply Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;