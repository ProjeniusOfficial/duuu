// VideoSection.js
import React, { useState, useEffect } from 'react';
import './VideoSection.css';

function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleCloseModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const youtubeVideoId = 'dQw4w9WgXcQ'; // Replace with your own video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`;

  return (
    <section className="video-section">
      <div className="video-card">
        <div className="video-thumbnail-wrapper" onClick={handlePlayClick}>
          <img src={thumbnailUrl} alt="Video thumbnail" className="video-thumbnail" />
          <div className="thumbnail-play-button">
            <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" />
            </svg>
          </div>
        </div>

        <h3 className="video-title">Watch Our Journey</h3>
        <p className="video-description">
          Discover how PSNA is shaping the future of entrepreneurship
        </p>
      </div>

      {isModalOpen && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="close-video-button" onClick={handleCloseModal}>×</button>
            <div className="video-player-container">
              <iframe
                className="responsive-iframe"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="PSNA College Journey Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoSection;
