import React from 'react';
import {
  FaMicroscope,
  FaChalkboardTeacher,
  FaCogs,
  FaCouch,
  FaBook,
} from 'react-icons/fa';
import startupImage from '../images/startup_img.jpeg';
import Footer from '../components/Footer';
import { MdNavigateBefore } from 'react-icons/md';
import Navbar from '../components/NavBar';
import HeroSection from './Herosection';

const facilities = [
  {
    icon: <FaMicroscope className="icon" />,
    title: 'State of the Art Infrastructure',
    description:
      'Cutting-edge technology and modern equipment for all your innovation needs.',
  },
  {
    icon: <FaChalkboardTeacher className="icon" />,
    title: 'Meeting and Conference Rooms',
    description:
      'Fully equipped spaces for presentations, workshops, and collaborative sessions.',
  },
  {
    icon: <FaCogs className="icon" />,
    title: 'Prototyping Lab',
    description:
      'Advanced tools and equipment for building and testing your innovative ideas.',
  },
  {
    icon: <FaCouch className="icon" />,
    title: 'Innovation Lounge',
    description:
      'Comfortable networking space designed to spark creativity and collaboration.',
  },
  {
    icon: <FaBook className="icon" />,
    title: 'Library and Resources',
    description:
      'Comprehensive collection of books, research materials, and digital resources.',
  },
  {
    icon: <FaCogs className="icon" />,
    title: 'Tech Incubation Support',
    description:
      'Assistance with product development, mentoring, and funding opportunities.',
  },
];

const images = [
  startupImage,
  startupImage,
  startupImage,
  startupImage,
  startupImage,
  startupImage,
];

export default function FacilitiesPage() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <div style={styles.container}>
      {/* Left: 6 images, 2 per row */}
      <div style={styles.imageGrid}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Facility ${i + 1}`}
            style={styles.galleryImage}
          />
        ))}
      </div>

      {/* Right: Heading and Facilities */}
      <div style={styles.textSection}>
        <h2 style={styles.heading}>World-Class Facilities</h2>
        <p style={styles.subheading}>
          Everything You Need to Innovate & Grow
        </p>

        <div style={styles.cardContainer}>
          {facilities.map((facility, index) => (
            <div
              key={index}
              style={styles.facilityCard}
              className="facility-card"
            >
              <div className="icon-wrapper" style={styles.iconWrapper}>
                {facility.icon}
              </div>
              <div>
                <h3 style={styles.facilityTitle}>{facility.title}</h3>
                <p style={styles.facilityDesc}>{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effects */}
      <style>{`
        .facility-card {
          transition: border 0.3s ease, box-shadow 0.3s ease;
        }

        .facility-card:hover {
          border: 2px solid #ffa500;
          box-shadow: 0 0 12px rgba(255, 165, 0, 0.6);
        }

        .facility-card:hover .icon-wrapper .icon {
          transform: rotate(360deg);
          transition: transform 0.6s ease;
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
        }

        .icon {
          color: orange;
          font-size: 28px;
          transition: transform 0.6s ease;
        }

        @media (max-width: 768px) {
          .facility-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .icon-wrapper {
            margin-bottom: 10px;
          }

          .image-grid {
            width: 100%;
            flex-direction: column;
          }

          .text-section {
            width: 100%;
          }
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    gap: '40px',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    width: '45%',
  },
  galleryImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  textSection: {
    flex: 1,
    minWidth: '300px',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '10px',
    marginLeft: '10px',
  },
  subheading: {
    fontSize: '18px',
    marginBottom: '30px',
    marginLeft: '10px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  facilityCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    border: '2px solid #ddd',
    borderRadius: '12px',
    backgroundColor: '#fff',
  },
  iconWrapper: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
  },
  facilityTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 'bold',
  },
  facilityDesc: {
    margin: '5px 0 0',
    fontSize: '14px',
    color: '#444',
  },
};