import React, { useState } from 'react';
import './MentorshipForm.css';

const mentorshipOptions = [
  'Business Strategy',
  'Product Development',
  'Marketing & Sales',
  'Fundraising',
  'Technology',
  'Legal & Compliance',
  'Operations',
  'Human Resources',
  'Financial Planning',
  'International Expansion',
];

const MentorshipForm = () => {
  const [selected, setSelected] = useState([]);

  const handleToggle = (option) => {
    setSelected((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  return (
    <div className="mentorship-container">
     
      <p className="subtitle">Mentorship Areas <span className="required">*</span></p>
      <p className="instruction">Select all areas where you need guidance.</p>

      <div className="checkbox-grid">
        {mentorshipOptions.map((option) => (
          <label
            key={option}
            className={`checkbox-card ${selected.includes(option) ? 'checked' : ''}`}
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => handleToggle(option)}
            />
            <span className="custom-checkbox" />
            <span className="label-text">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MentorshipForm;
