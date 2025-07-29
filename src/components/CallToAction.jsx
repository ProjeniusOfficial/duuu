import React from 'react';
import './CallToAction.css';
import { Link } from 'react-router-dom';


function CallToAction() {
  return (
    <>
    <section className="cta-section">
      <div className="cta-container">
        <h2>Ready to Start Your Entrepreneurial Journey?</h2>
        <p>
          Join our vibrant community of innovators and entrepreneurs. Get access to world-class
          mentorship, funding opportunities, and resources.
        </p>
        <div className="cta-buttons">
          <Link to="/apply" className="cta-primary">Apply for Incubation</Link>
          <Link to="/contact" className="cta-primary">Schedule a Visit</Link>
        </div>
      </div>
    </section>
    </>
  );
}

export default CallToAction;