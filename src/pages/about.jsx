import React from 'react';
import Navbar from '../components/NavBar';
import AboutIncubation from './AboutIncubation';
import ManagersSection from './ManagersSection';
import TeamCarousel from './TeamCarousel';

import "./about.css"
import Footer from '../components/Footer';
import CommitmentSection from './CommitmentSlider';
import HeroSection from './Herosection';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <HeroSection />
      <AboutIncubation />
      <ManagersSection />
      <TeamCarousel />
      <CommitmentSection/>
      <Footer/>
    </div>
  );
};

export default About;
