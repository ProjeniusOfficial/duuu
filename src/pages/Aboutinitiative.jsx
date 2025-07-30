import React from 'react';
import './AboutInitiative.css';

const AboutInitiative = () => {
  const initiatives = [
    {
      id: 1,
      iconClass: 'fas fa-bullseye', // Font Awesome icon for target/mission
      title: 'Mission Driven',
      description: 'Operating with a clear mission to serve society through innovation and education',
    },
    {
      id: 2,
      iconClass: 'fas fa-users', // Font Awesome icon for users/non-profit
      title: 'Non-Profit',
      description: 'All proceeds reinvested in furthering our educational and innovation objectives',
    },
    {
      id: 3,
      iconClass: 'fas fa-lightbulb', // Font Awesome icon for lightbulb/innovation
      title: 'Innovation Focus',
      description: 'Dedicated to promoting scientific research and technological advancement',
    },
    {
      id: 4,
      iconClass: 'fas fa-hand-holding-heart', // Font Awesome icon for social impact
      title: 'Social Impact',
      description: 'Creating lasting positive impact on society through our initiatives',
    },
  ];

  return (
    <div className="ai-body-wrapper">
      <div className="ai-header-section">
        <h2 className="ai-main-title">Section 8 Initiative</h2>
        <p className="ai-description-text">
          Under Section 8 of the Companies Act, we operate as a non-profit organization dedicated to
          promoting innovation and entrepreneurship in education.
        </p>
      </div>

      <div className="ai-cards-grid">
        {initiatives.map((item) => (
          <div className="ai-card-item" key={item.id}>
            <div className="ai-icon-wrapper">
              <i className={item.iconClass}></i>
            </div>
            <h3 className="ai-card-title">{item.title}</h3>
            <p className="ai-card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutInitiative;
