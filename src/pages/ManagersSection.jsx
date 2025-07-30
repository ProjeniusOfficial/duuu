import React from 'react';
import manager1 from '../images/Hod Mam.jpeg';
import manager2 from '../images/srinivasan sir.jpeg';
import './ManagersSection.css'; // Make sure to import the CSS file

const ManagersSection = () => {
  return (
    <section className="managers-section">
      <h2 className='Incub'>Incubation Team Managers</h2>
      <div className="team-carousel">
  <div className="card1">
    <img src={manager1} alt="Person 1" className="card-img" />
    <div className="card-content">
      <h3>Dr T Hemalatha</h3>
      <p className="title">Head of the Department - AIDS</p>
      <p>The incubation manager brings a strong background in innovation and academic leadership.She mentors startups through every stage of their entrepreneurial journey</p>
    </div>
  </div>
  
  <div className="card1">
    <img src={manager2} alt="Person 2" className="card-img" />
    <div className="card-content">
      <h3>Dr. Srinivasan Kandaswamy </h3>
      <p className="title">Associate Prof in the Civil Engineering</p>
      <p>A dynamic incubation manager with expertise in startup development and strategic planning.He supports early-stage ventures through mentoring and ecosystem enablement.</p>
    </div>
  </div>
</div>

    </section>
  );
};

export default ManagersSection;
