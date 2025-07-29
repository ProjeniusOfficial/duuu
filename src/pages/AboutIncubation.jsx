import React from 'react';
import incubationImg from '../images/startup_img.jpeg'; // your middle image
import AboutInitiative from './Aboutinitiative';

const AboutIncubation = () => {
  return (
    <section className="incubation-section">
      <h2 className='about_inc'>About Our Incubation Center</h2>
      <img src={incubationImg} alt="Incubation Center" className="incubation-img" />
      <p>
      Our startup center nurtures young entrepreneurs by providing essential infrastructure,
      expert mentoring, and funding support. We transform ideas into scalable ventures through
      innovation, collaboration, and real-world problem solving.
    </p>
      <div className="incubation-content">
        <h3>Empowering Innovation</h3>
        <p>
          The PSNA Centre for Entrepreneurship and Incubation serves as a dynamic hub for innovation...
        </p>
        <div className="incubation-cards">
          <div className="card">
            <span>👨‍🏫</span>
            <h4>Expert Mentorship</h4>
            <p>Industry professionals guiding your journey</p>
          </div>
          <div className="card">
            <span>📊</span>
            <h4>Strategic Support</h4>
            <p>Comprehensive business development aid</p>
          </div>
          <div className="card">
            <span>⚡</span>
            <h4>Innovation Hub</h4>
            <p>Cutting-edge facilities and resources</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIncubation;
