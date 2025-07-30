import React, { useState, useEffect, useRef } from 'react';
import './Startupmember.css';

// Import all your images explicitly
import startup_img from '../images/startup_img.jpeg';
// import startup1_img from '../images/startup1_img.jpeg';
// import startup2_img from '../images/startup2_img.jpeg';
// import startup3_img from '../images/startup3_img.jpeg';
// import startup4_img from '../images/startup4_img.jpeg';
// import startup5_img from '../images/startup5_img.jpeg';
// import startup6_img from '../images/startup6_img.jpeg';
// import startup7_img from '../images/startup7_img.jpeg';
// import startup8_img from '../images/startup8_img.jpeg';
// import startup9_img from '../images/startup9_img.jpeg';

const Startupmember = () => {
  const originalMembers = [
    {
      id: 0,
      name: 'InnovateTech Solutions',
      founder: 'Alice Wonderland',
      description: 'Pioneering AI-driven software for smart cities and urban development.',
      image: startup_img, // Use the imported image variable
      establishedYear: 2020,
      status: 'Active & Growing',
      storyTitle: 'AI Revolution at PSNA',
      storyQuote: "PSNA's incubation program provided the perfect launchpad for our AI solutions. Their mentorship and resources were instrumental in scaling our operations and securing key partnerships.",
    },
    {
      id: 1,
      name: 'GreenWave Energy',
      founder: 'Bob The Builder',
      description: 'Developing sustainable energy solutions and renewable power systems.',
     // image: startup1_img, // Use the imported image variable
      establishedYear: 2019,
      status: 'Active & Growing',
      storyTitle: 'Sustainable Growth Story',
      storyQuote: "With PSNA's support, GreenWave Energy transformed from an idea into a leading provider of eco-friendly power. Their network opened doors to crucial funding and pilot projects.",
    },
    {
      id: 2,
      name: 'HealthBridge Connect',
      founder: 'Charlie Chaplin',
      description: 'Building innovative telehealth platforms and digital health records systems.',
      //image: startup2_img, // Use the imported image variable
      establishedYear: 2021,
      status: 'Active & Growing',
      storyTitle: 'Bridging Health Gaps',
      storyQuote: "The collaborative environment at PSNA was key to developing our robust telehealth platform. We've been able to reach underserved communities and improve healthcare access significantly.",
    },
    {
      id: 3,
      name: 'EduSpark Innovations',
      founder: 'Diana Prince',
      description: 'Creating interactive e-learning modules and personalized education software.',
      //image: startup3_img, // Use the imported image variable
      establishedYear: 2022,
      status: 'Active & Growing',
      storyTitle: 'Igniting Learning Futures',
      storyQuote: "PSNA believed in our vision for accessible education. Their guidance helped us refine our product and connect with educators globally, impacting thousands of students.",
    },
    {
      id: 4,
      name: 'Quantum Leap Robotics',
      founder: 'Ethan Hunt',
      description: 'Designing advanced robotics for industrial automation and smart manufacturing.',
     // image: startup4_img, // Use the imported image variable
      establishedYear: 2018,
      status: 'Active & Growing',
      storyTitle: 'Automating Tomorrow',
      storyQuote: "The engineering expertise and lab facilities at PSNA were invaluable for Quantum Leap. We accelerated our R&D cycle and brought our cutting-edge robots to market faster than anticipated.",
    },
    {
      id: 5,
      name: 'AquaGuard Solutions',
      founder: 'Fiona Shrek',
      description: 'Specializing in water purification technologies and environmental monitoring.',
     // image: startup5_img, // Use the imported image variable
      establishedYear: 2020,
      status: 'Active & Growing',
      storyTitle: 'Protecting Our Waters',
      storyQuote: "PSNA's commitment to sustainability aligned perfectly with AquaGuard. Their network helped us secure grants and implement our water solutions in critical areas, making a real difference.",
    },
    {
      id: 6,
      name: 'CyberShield Security',
      founder: 'George Jetson',
      description: 'Providing cutting-edge cybersecurity solutions and data protection services.',
     // image: startup6_img, // Use the imported image variable
      establishedYear: 2021,
      status: 'Active & Growing',
      storyTitle: 'Fortifying Digital Defenses',
      storyQuote: "The cybersecurity experts at PSNA provided critical insights and resources that strengthened our product. We've grown into a trusted partner for businesses seeking robust digital protection.",
    },
    {
      id: 7,
      name: 'ArtisanCraft Digital',
      founder: 'Hannah Montana',
      description: 'Developing bespoke digital art tools and creative software for artists.',
     // image: startup7_img, // Use the imported image variable
      establishedYear: 2022,
      status: 'Active & Growing',
      storyTitle: 'Empowering Creative Minds',
      storyQuote: "PSNA's unique approach to fostering innovation allowed ArtisanCraft Digital to flourish. They connected us with a vibrant community of creators, helping us build tools that truly resonate.",
    },
    {
      id: 8,
      name: 'UrbanHarvest Farms',
      founder: 'Ivan Drago',
      description: 'Implementing vertical farming technologies and sustainable urban agriculture.',
     // image: startup8_img, // Use the imported image variable
      establishedYear: 2019,
      status: 'Active & Growing',
      storyTitle: 'Farming for the Future',
      storyQuote: "The entrepreneurial spirit at PSNA fueled UrbanHarvest Farms. Their support helped us overcome initial challenges and establish viable urban farming models that are now expanding rapidly.",
    },
    {
      id: 9,
      name: 'ConnectSphere AI',
      founder: 'Jasmine Aladdin',
      description: 'Building intelligent communication platforms and natural language processing tools.',
      //image: startup9_img, // Use the imported image variable
      establishedYear: 2020,
      status: 'Active & Growing',
      storyTitle: 'Revolutionizing Communication',
      storyQuote: "PSNA's focus on cutting-edge technology provided the ideal environment for ConnectSphere AI. Their resources and mentorship accelerated our development, allowing us to bring revolutionary communication tools to market.",
    },
  ];

  // Create a new array for display, duplicating the first member at the end for seamless looping
  const membersForDisplay = [...originalMembers, originalMembers[0]];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true); // Controls CSS transition property

  const intervalRef = useRef(null); // Ref to hold the interval ID

  // Function to start the automatic slider
  const startSlider = () => {
    // Clear any existing interval to prevent multiple intervals running
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => {
        // If we are about to move to the duplicated first slide (index 10 in membersForDisplay)
        if (prevIndex === originalMembers.length - 1) {
          // Set to the index of the duplicated first slide
          return originalMembers.length;
        } else {
          // Normal increment for other slides
          return prevIndex + 1;
        }
      });
    }, 3000); // 3 seconds per slide
  };

  // Effect for initial setup and clearing interval on unmount
  useEffect(() => {
    startSlider(); // Start the slider when the component mounts

    return () => {
      // Cleanup: clear the interval when the component unmounts
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Empty dependency array means this runs once on mount/unmount

  // Effect to handle the instantaneous jump back to the first slide
  useEffect(() => {
    // This effect runs whenever currentSlideIndex changes
    if (currentSlideIndex === originalMembers.length) {
      // We have just transitioned to the duplicated first slide (index 10)
      // Now, we need to immediately jump back to the actual first slide (index 0)
      // without any visual transition.

      // First, clear the automatic interval to prevent it from advancing while we jump
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      // Set a timeout to allow the CSS transition to the duplicated slide to complete
      const jumpTimeout = setTimeout(() => {
        setIsTransitioning(false); // Disable CSS transition
        setCurrentSlideIndex(0); // Instantly jump back to the first slide

        // After the jump, re-enable transition and restart the slider
        // A small delay ensures the transition property is truly off before the jump
        const restartTimeout = setTimeout(() => {
          setIsTransitioning(true); // Re-enable CSS transition
          startSlider(); // Restart the automatic sliding
        }, 50); // A very small delay (e.g., 50ms)

        return () => clearTimeout(restartTimeout); // Cleanup for restartTimeout
      }, 500); // This duration should match the CSS transition duration (0.5s)

      return () => clearTimeout(jumpTimeout); // Cleanup for jumpTimeout
    }
  }, [currentSlideIndex, originalMembers.length]); // Re-run when currentSlideIndex or originalMembers.length changes

  return (
    <div className="sm-body-wrapper">
      {/* Top Section */}
      <div className="sm-header-section">
        <span className="sm-success-tag">
          <i className="fas fa-users"></i> Success Stories
        </span>
        <h1 className="sm-main-title">
  Meet Our <span className="sm-highlight-gradient">Successful Startups</span>
</h1>
        <p className="sm-description-text">
          Discover the inspiring success stories of startups that began their journey at PSNA's
          Entrepreneurship & Incubation Center.
        </p>
      </div>

      <div className="sm-card-container">
        <div
          className="sm-slider-wrapper"
        >
          <div
            className="sm-slider-track"
            style={{
              transform: `translateX(-${currentSlideIndex * 100}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
            }}
          >
            {membersForDisplay.map((member, index) => (
              <div className="sm-startup-card" key={index}>
                {/* Left Section */}
                <div className="sm-details-section">
                  <div className="sm-profile-image-wrapper">
                    <img
                      src={member.image}
                      alt={`Startup ${member.id + 1}`}
                      className="sm-profile-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/100x100/CCCCCC/000000?text=Error`;
                      }}
                    />
                    <span className="sm-status-dot"></span>
                  </div>
                  <div className="sm-text-details">
                    <h2 className="sm-startup-name">{member.name}</h2>
                    <p className="sm-founder-info">Founded by {member.founder}</p>
                    <p className="sm-startup-description">{member.description}</p>
                    <div className="sm-status-est-info">
                      <span className="sm-active-status">
                        <span className="sm-active-dot"></span> {member.status}
                      </span>
                      <span className="sm-established-year">
                        <span className="sm-icon-calendar-alt"></span> Est. {member.establishedYear}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="sm-success-story-section">
                  <div className="sm-story-header">
                    <span className="sm-icon-quotes" aria-label="Quotes">&#x201C;&#x201D;</span>
                    <span className="sm-story-title">{member.storyTitle}</span>
                  </div>
                  <p className="sm-story-quote">{member.storyQuote}</p>
                  <div className="sm-founder-signature">
                    <p className="sm-founder-name">{member.founder}</p>
                    <p className="sm-founder-title">Founder, {member.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section (simplified, can be customized) */}
      <div className="sm-footer-section">
        <p className="sm-footer-text">
         
        </p>
      </div>
    </div>
  );
};

export default Startupmember;
