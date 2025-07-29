// HeroSection.js
import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';


function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="hero-section1">
      {/* Background Image Carousel */}
      <div className="hero-slider">
        <div className="slide-track">
          <div className="slide bg1"></div>
          <div className="slide bg2"></div>
          <div className="slide bg3"></div>
          <div className="slide bg4"></div>
          <div className="slide bg5"></div>
          <div className="slide bg6"></div>
          {/* Repeat for smooth infinite loop */}
        </div>
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content-wrapper">
        <div className="hero-tag">Section 8 Organization</div>
        <h1 className="hero-title">
          Empowering the Next Generation of <span style={{color: '#ff8c00'}}>Entrepreneurs</span>
        </h1>
        <p className="hero-description">
          PSNA College's Entrepreneurship & Incubation Center nurtures innovative
          ideas, provides mentorship, and transforms student visions into successful
          startups.
        </p>
        <div className="hero-actions">
          <button
      className="btn btn-primary"
      onClick={() => navigate('/apply')}
    >
      Start Your Journey <span className="arrow-icon"></span>
    </button>
          <button
      className="btn btn-secondary"
      onClick={() => navigate('/Videosection')}
    >
      <span className="play-icon">&#9654;</span> Watch our Journey
    </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Startups Incubated</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Students Trained</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">₹2Cr+</span>
            <span className="stat-label">Funding Raised</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Industry Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
