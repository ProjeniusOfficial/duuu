import React, { useState, useEffect } from 'react'; // Corrected import statement
import './VideoSection.css';

function VideoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleCloseModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const youtubeVideoId = 'tKPs7lnZ22U'; // Replace with your own video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`; // YouTube thumbnail service

  return (
    <section className="vs-video-section">
      <div className="vs-video-card">
        <div className="vs-video-thumbnail-wrapper" onClick={handlePlayClick}>
          <img src={thumbnailUrl} alt="Video thumbnail" className="vs-video-thumbnail" />
          <div className="vs-thumbnail-play-button">
            {/* SVG for play icon */}
            <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" />
            </svg>
          </div>
        </div>

        <h3 className="vs-video-title">Watch Our Journey</h3>
        <p className="vs-video-description">
          Discover how PSNA is shaping the future of entrepreneurship
        </p>
      </div>

      {isModalOpen && (
        <div className="vs-video-modal">
          <div className="vs-video-modal-content">
            {/* Re-added the close button here */}
            <button className="vs-close-video-button" onClick={handleCloseModal}>×</button>
            <div className="vs-video-player-container">
              <iframe
                className="vs-responsive-iframe"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=1`}
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
