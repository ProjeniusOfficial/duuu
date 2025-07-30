import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Column 1 - Logo & Description */}
        <div className="footer-col">
          <img src="/logo.png" alt="PSNA Logo" className="footer-logo" />
          <h3>PSNA Entrepreneurship</h3>
          <p className="org-type">Section 8 Organization</p>
          <p className="footer-text">
            Empowering the next generation of entrepreneurs through comprehensive incubation
            support, mentorship, and innovative programs.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/apply">Apply Now</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Our Programs */}
        <div className="footer-col">
          <h4>Our Programs</h4>
          <ul>
            <li><a href="/services">Startup Incubation</a></li>
            <li><a href="/services">Mentorship Program</a></li>
            <li><a href="/services">Innovation Labs</a></li>
            <li><a href="/services">Funding Assistance</a></li>
            <li><a href="/services">Workshops</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact Us */}
        <div className="footer-col contact">
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt /> PSNA College of Engineering & Technology<br />Dindigul, Tamil Nadu 624622</p>
          <p><FaPhone /> +91 451 234 5678</p>
          <p><FaEnvelope /> entrepreneurship@psnatech.ac.in</p>
          <button className="visit-button">Visit Campus</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PSNA College Entrepreneurship Center. All rights reserved.</p>
        <div className="footer-links">
        <p>Developed by Team Projenius</p>
          {/* <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
