import React, { useEffect, useRef } from "react";
import img1 from "../images/fac1.jpg"; // Remember to use your colorful images
import img2 from "../images/fac1.jpg";
import img3 from "../images/fac1.jpg";
import img4 from "../images/fac1.jpg";
import img5 from "../images/fac1.jpg";
import img6 from "../images/fac1.jpg";
import img7 from "../images/fac1.jpg";
import "./TeamCarousel.css";

const teamMembers = [
  { name: "Mr. Kathiravan T ", role: "Assistant Professor / Mechanical Engineering", image: img1 },
  { name: "Dr. Thangaselvi E ", role: "Assistant Professor / ECE", image: img2 },
  { name: "Mr. Pushpavanam B", role: "Assistant Professor / EEE", image: img3 },
  { name: "Mrs. Aurthy Felicita S", role: "Assistant Professor / CSE", image: img4 },
  { name: "Dr. Salem Jeyaseelan W.R. ", role: "Assistant Professor / IT", image: img5 },
  { name: "Dr. Shahul Hammed S ", role: "Assistant Professor / CS & BS", image: img6 },
   { name: "Dr. Rajkumar K ", role: "Assosicate Professor / CSE (Cyber Security)", image: img7 },
];

const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

const TeamCarousel = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Options for the observer (which part of the container to watch)
    const observerOptions = {
      root: scroller, // The scroller is the viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Find the center of the scroller
        const scrollerCenter = scroller.offsetLeft + scroller.offsetWidth / 2;
        // Find the center of the card
        const cardCenter = entry.target.offsetLeft + entry.target.offsetWidth / 2;
        
        // Check if the card is close to the center
        if (Math.abs(scrollerCenter - cardCenter) < entry.target.offsetWidth / 2) {
          entry.target.classList.add("popped-up");
        } else {
          entry.target.classList.remove("popped-up");
        }
      });
    }, observerOptions);
    
    // Observe all cards
    const cards = scroller.querySelectorAll('.team-card');
    cards.forEach(card => observer.observe(card));
    
    // Cleanup on component unmount
    return () => cards.forEach(card => observer.unobserve(card));

  }, []);

  return (
    <div className="team-carousel">
      <div className="team-header">
        <h2 className="meet">
          Meet Our <span className="highlight">Team</span>
        </h2>
        <p className="subtext">
          Talented professionals dedicated to fostering innovation and
          entrepreneurship
        </p>
      </div>
      <div className="carousel-container">
        <div className="scrolling-wrapper" ref={scrollerRef}>
          {duplicatedMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;