import React from 'react';
import './ImpactNumber.css';

const ImpactNumber = () => {
  const impactStats = [
    {
      id: 1,
      value: '95%',
      label: 'Student Satisfaction',
      colorClass: 'in-value-blue'
    },
    {
      id: 2,
      value: '80%',
      label: 'Startup Success Rate',
      colorClass: 'in-value-orange'
    },
    {
      id: 3,
      value: '150+',
      label: 'Alumni Entrepreneurs',
      colorClass: 'in-value-green'
    },
    {
      id: 4,
      value: '₹50L+',
      label: 'Average Funding',
      colorClass: 'in-value-dark-blue'
    },
  ];

  return (
    <div className="in-body-wrapper">
      <div className="in-card-container">
        <h2 className="in-main-title">Our Impact in Numbers</h2>
        <div className="in-stats-grid">
          {impactStats.map(stat => (
            <div className="in-stat-item" key={stat.id}>
              <p className={`in-stat-value ${stat.colorClass}`}>{stat.value}</p>
              <p className="in-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactNumber;
