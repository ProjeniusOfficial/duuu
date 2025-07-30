import React, { useState, useEffect, useRef } from 'react';
import './ContactPage.css'; // Import the CSS file for ContactPage
import Navbar from '../components/NavBar.jsx'; // Assuming Navbar.jsx is in the same directory
import Footer from '../components/Footer.jsx'; // Assuming Footer.jsx is in the same directory

const ContactPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Refs for sections to observe their visibility for scroll animations
  const heroSectionRef = useRef(null);
  const contactFormSectionRef = useRef(null);

  // State to control visibility of sections for animations
  const [heroSectionVisible, setHeroSectionVisible] = useState(false);
  const [contactFormSectionVisible, setContactFormSectionVisible] = useState(false);

  // Effect for Intersection Observer to trigger scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Observer for Hero section
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHeroSectionVisible(true);
        }
      });
    }, observerOptions);

    if (heroSectionRef.current) {
      heroObserver.observe(heroSectionRef.current);
    }

    // Observer for Contact Form section
    const contactFormObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setContactFormSectionVisible(true);
        }
      });
    }, observerOptions);

    if (contactFormSectionRef.current) {
      contactFormObserver.observe(contactFormSectionRef.current);
    }

    // Cleanup function for observers
    return () => {
      if (heroSectionRef.current) {
        heroObserver.unobserve(heroSectionRef.current);
      }
      if (contactFormSectionRef.current) {
        contactFormObserver.unobserve(contactFormSectionRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // In a real application, you would send this data to a server
    // For now, we'll just show an alert with the form data
    alert(
      `Message Sent!\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n` +
      `Message: ${formData.message}`
    );

    // Optionally clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <div
        ref={heroSectionRef}
        className={`contact-hero-section ${heroSectionVisible ? 'is-visible' : ''}`}
      >
        {/* Content for your hero section can go here */}
        <h1 className="contact-heading">Contact Us</h1>

        <p>We'd love to hear from you!</p>
      </div>

      {/* Contact Form Section */}
      <section
        ref={contactFormSectionRef}
        className={`contact-form-section ${contactFormSectionVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          <h2 className="contact-form-title">Send Us a Message</h2>
          <p className="contact-form-description">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="send-message-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default ContactPage;
