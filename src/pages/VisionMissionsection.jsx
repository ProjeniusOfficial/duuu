// VisionMissionSection.js
import React from 'react';
import './VisionMissionSection.css'; // Import the CSS file for styling

function VisionMissionSection() {
  return (
    <section className="vision-mission-section">
      <div className="section-tag">Our Foundation</div>
      <h2 className="section-title">Vision, Mission & Impact</h2>
      <p className="section-description">
        Discover the driving force behind PSNA's commitment to fostering entrepreneurial excellence
        and innovative thinking.
      </p>

      <div className="cards-container">
        {/* Vision Card */}
        <div className="card-item1">
          <div className="card-icon vision-icon">
            {/* SVG for Vision Icon (Eye) */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="card-title">Our Vision</h3>
          <p className="card-description">
           To inspire and nurture the younger minds towards innovation and entrepreneurship to promote profiting, technological based Startups in the campus. 
          </p>
        </div>

        {/* Mission Card */}
        <div className="card-item2">
          <div className="card-icon mission-icon">
            {/* SVG for Mission Icon (Target/Goal) */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="card-title">Our Mission</h3>
          <p className="card-description">
            We drive tech innovation through mentorship, funding, and strategic partnerships to transform ideas into impactful solutions.
          </p>
        </div>

        {/* Values Card */}
        <div className="card-item3">
          <div className="card-icon values-icon">
            {/* SVG for Values Icon (Lightbulb) */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C15 22.55 14.55 23 14 23H10C9.45 23 9 22.55 9 22ZM12 2C7.86 2 4.5 5.36 4.5 9.5C4.5 11.23 5.17 12.87 6.3 14.1C6.73 14.53 7.15 14.95 7.5 15.3L8.5 16.3V18H15.5V16.3L16.5 15.3C16.85 14.95 17.27 14.53 17.7 14.1C18.83 12.87 19.5 11.23 19.5 9.5C19.5 5.36 16.14 2 12 2ZM12 17.5V17.5C12 17.5 12 17.5 12 17.5Z" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="card-title">Our Values</h3>
          <p className="card-description">
            Innovation, integrity, collaboration, and social responsibility guide
            everything we do. We believe in empowering students to create
            meaningful change in the world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionMissionSection;