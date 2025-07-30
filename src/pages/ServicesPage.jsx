import React from 'react';
import './ServicesPage.css';
import CallToAction from '../components/CallToAction.jsx';
import { FaRocket, FaUserFriends, FaBook, FaBusinessTime, FaGitlab, FaLaptopCode, FaGlasses, FaMoneyBill } from 'react-icons/fa';
import Navbar from '../components/NavBar.jsx';
import HeroSection from './Herosection.jsx';
import Footer from '../components/Footer.jsx';

const Services = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <section className="services-section">
      <div className="services-header">
        <span className="offer-badge">What We Offer</span>
        <h2>
          Comprehensive Support for Your <span className="highlight-text">Entrepreneurial Journey</span>
        </h2>
        <p className="subtitle">
          From ideation to successful launch, we provide all the resources, mentorship, and support you
          need to turn your vision into reality.
        </p>
      </div>

      <div className="services-cards">
        <div className="card2">
          <div className="icon-container"><FaRocket /></div>
          <h3>Startup Incubation</h3>
          <p>
            Complete incubation support from idea validation to market launch with dedicated workspace and resources.
          </p>
          <ul>
            <li>6-month program</li>
            <li>Mentorship</li>
            <li>Funding support</li>
          </ul>
          <a href="#">Learn More <span className="arrow">→</span></a>
        </div>

         <div className="card2">
          <div className="icon-container"><FaBusinessTime /></div>
          <h3>Business Development</h3>
          <p>
            Comprehensive support for startups to refine their business models, go-to-market strategies, and customer acquisition plans.
          </p>
          <ul>
            <li>Market analysis</li>
            <li>Growth planning</li>
            <li>Strategy consultin</li>
          </ul>
          <a href="#">Learn More <span className="arrow">→</span></a>
        </div>

         <div className="card2">
          <div className="icon-container"><FaGlasses /></div>
          <h3>Innovation Labs</h3>
          <p>
            State-of-the-art facilities for prototyping, testing, and developing innovative solutions.
          </p>
          <ul>
            <li>Access to advanced tools</li>
            <li>Collaboration spaces</li>
            <li>Expert guidance</li>
          </ul>
          <a href="#">Learn More <span className="arrow">→</span></a>
        </div>

         <div className="card2">
          <div className="icon-container"><FaMoneyBill /></div>
          <h3>Funding Assistance</h3>
          <p>
            Help connect promising startups with investors, grants, and funding opportunities.
          </p>
          <ul>
            <li>Investor network</li>
            <li>Pitch preparation</li>
            <li>Grant applications</li>
          </ul>
          <a href="#">Learn More <span className="arrow">→</span></a>
        </div>

        <div className="card2">
          <div className="icon-container"><FaUserFriends /></div>
          <h3>Mentorship Network</h3>
          <p>
            Connect with industry experts, successful entrepreneurs, and experienced faculty for guidance.
          </p>
          <ul>
            <li>1-on-1 sessions</li>
            <li>Industry experts</li>
            <li>Peer learning</li>
          </ul>
          <a href="#">Learn More <span className="arrow">→</span></a>
        </div>

        <div className="card2">
          <div className="icon-container"><FaBook /></div>
          <h3>Workshops & Training</h3>
          <p>
            Comprehensive workshops on business planning, pitching, marketing, and technology development.
          </p>
          <ul>
            <li>Weekly sessions</li>
            <li>Practical training</li>
            <li>Certificates</li>
          </ul>
          <a href="#">Learn More <span className="arrow">→</span></a>
        </div>
      </div>
      <CallToAction />
    </section>
    <Footer />
    </>
  );
};

export default Services;