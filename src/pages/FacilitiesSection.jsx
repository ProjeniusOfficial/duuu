import React from 'react';
import './FacilitiesSection.css';
import StartupCarousel from './CardCarousel';

// ✅ Import images from src/images/
import facility1 from '../images/startup.jpeg';
import facility2 from '../images/facility_graph.jpg';
import facility3 from '../images/startup.jpeg';
import facility4 from '../images/startup.jpeg';

function FacilitiesSection() {
  return (
    <>
      <section className="facilities-section-container">
        {/* Top Section: World-Class Facilities */}
        <div className="facility-content-block facility-block-top">
          <div className="facility-text-content">
            <h2 className="facility-title">World-Class Facilities</h2>
            <p className="facility-description">
              Our state-of-the-art infrastructure provides entrepreneurs with
              modern workspaces, advanced technology, and collaborative
              environments designed to foster innovation and accelerate business
              growth.
            </p>
            <a href="#" className="facility-button">
              View All Facilities <span className="arrow">→</span>
            </a>
          </div>
          <div className="facility-images-top">
            <img src={facility1} alt="Modern office hallway" className="facility-image-large" />
            <img src={facility2} alt="Data dashboard" className="facility-image-small" />
          </div>
        </div>

        {/* Bottom Section: Comprehensive Startup Support */}
        <div className="facility-content-block facility-block-bottom">
          <div className="facility-images-bottom">
            <img src={facility3} alt="People collaborating in an office" className="facility-image-medium" />
            <img src={facility4} alt="Open office space" className="facility-image-medium" />
          </div>
          <div className="facility-text-content">
            <h2 className="facility-title">Comprehensive Startup Support</h2>
            <p className="facility-description">
              From initial ideation to successful market launch, we provide
              comprehensive incubation services, expert mentorship, and
              essential resources to transform your entrepreneurial vision into a
              thriving business venture.
            </p>
            <a href="#" className="facility-button">
              Explore Our Services <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default FacilitiesSection;
