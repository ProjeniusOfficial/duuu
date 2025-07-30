import React, { useState, useEffect } from 'react';
import './CommitmentSlider.css';

const slides = [
  {
    id: 1,
    text: " As a Section 8 company, we are legally bound to use our resources for the betterment of society.",
    bg: "bg1",
  },
  {
    id: 2,
    text: " This means every initiative we undertake, every startup we support, and every innovation we foster contributes to the larger goal of social and economic development.",
    bg: "bg2",
  },
  {
    id: 3,
    text: "Our transparent operations and accountability ensure that we remain true to our mission of creating a sustainable innovation ecosystem.",
    bg: "bg3",
  },
];

const CommitmentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="commitment-slider-container">
      <h2 className='our'>Our Commitment</h2>
      <div className="dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={currentIndex === idx ? 'dot active' : 'dot'}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>

      <div className="slider">
        <div
          className="slider-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={`slide ${slide.bg}`}>
              <p>{slide.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitmentSlider;
