import React from 'react';
import './CommunitySays.css';

const CommunitySays = () => {
  const testimonials = [
    {
      id: 1,
      quote: "PSNA's entrepreneurship program transformed my sustainable tech idea into a funded startup. The mentorship and resources provided were invaluable in our journey from concept to market.",
      author: 'Priya Sharma',
      title: 'Founder, EcoTech Solutions',
      cohort: '2023 Incubation Cohort',
      avatarInitials: 'PS',
      rating: 5,
    },
    {
      id: 2,
      quote: "Watching our students evolve from idea generators to successful entrepreneurs is incredibly rewarding. The program provides excellent structure and real-world exposure.",
      author: 'Dr. Rajesh Kumar',
      title: 'Faculty Mentor',
      cohort: 'Department of Computer Science',
      avatarInitials: 'RK',
      rating: 5,
    },
    {
      id: 3,
      quote: "The funding assistance and investor connections we received through PSNA helped us secure our seed round. We're now serving over 10,000 users across South India.",
      author: 'Anita Reddy',
      title: 'Co-founder, HealthFirst App',
      cohort: '2022 Graduate',
      avatarInitials: 'AR',
      rating: 5,
    },
    {
      id: 4,
      quote: "From a college project to a multi-crore agricultural technology company - PSNA's incubation center made this transformation possible with their comprehensive support system.",
      author: 'Vikram Patel',
      title: 'CEO, AgriSmart',
      cohort: 'Alumni Success Story',
      avatarInitials: 'VP',
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fas fa-star ${i < rating ? 'cs-star-filled' : 'cs-star-empty'}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="cs-body-wrapper">
      <div className="cs-header-section">
        <span className="cs-success-tag">
          <i className="fas fa-users"></i> Success Stories
        </span>
        <h1 className="cs-main-title">What Our Community Says</h1>
        <p className="cs-description-text">
          Hear from successful entrepreneurs, dedicated mentors, and industry experts who have been
          part of our entrepreneurial ecosystem.
        </p>
      </div>

      <div className="cs-testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="cs-testimonial-card" key={testimonial.id}>
            <div className="cs-card-header">
              <span className="cs-quote-icon">&#x201C;&#x201D;</span>
              <div className="cs-rating">{renderStars(testimonial.rating)}</div>
            </div>
            <p className="cs-quote-text">{testimonial.quote}</p>
            <div className="cs-author-info">
              <div className="cs-avatar">{testimonial.avatarInitials}</div>
              <div className="cs-author-details">
                <p className="cs-author-name">{testimonial.author}</p>
                <p className="cs-author-title">{testimonial.title}</p>
                <p className="cs-author-cohort">{testimonial.cohort}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitySays;