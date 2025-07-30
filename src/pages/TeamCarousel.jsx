import React, { useEffect } from 'react';
import './TeamCarousel.css'; // Changed to TeamCarousel.css

const teamMembers = [
  {
    id: 'TM1',
    name: 'Mr. Kathiravan T',
    role: 'Founder & CEO',
    quote: 'The dreamer who turned "what if" into "what’s next."',
  },
  {
    id: 'TM2',
    name: 'Dr. Thangaselvi E',
    role: 'Co-Founder & Embedded Engineer',
    quote: 'The brain behind the machines you never see but can’t live without',
  },
  {
    id: 'TM3',
    name: 'Mr. Pushpavanam B',
    role: 'ML Engineer',
    quote: 'Teaching machines to think smarter than ever before.',
  },
  {
    id: 'TM4',
    name: 'Mrs. Aurthy Felicita S',
    role: 'IoT Engineer',
    quote: 'Making everyday objects talk, think, and act intelligently.',
  },
  {
    id: 'TM5',
    name: 'Dr. Salem Jeyaseelan',
    role: 'Web Developer',
    quote: 'Coding the internet, one pixel-perfect page at a time — flawlessly.',
  },
  {
    id: 'TM6',
    name: 'Dr. Shahul Hammed S',
    role: 'App Developer',
    quote: 'Crafting apps that fit in your palm but power your world.',
  },
  {
    id: 'TM7',
    name: 'Dr. Rajkumar K',
    role: 'UI/UX Developer',
    quote: 'Designing meaningful experiences, not just screens to scroll.',
  },
];

// For a continuous loop effect, we duplicate the team members.
// This is common for infinite scrolling carousels.
const scrollingTeam = [...teamMembers, ...teamMembers]; 

const TeamCarousel = () => {
  // Disables right-click on images (if you were to add them later)
  useEffect(() => {
    const disableRightClick = (e) => {
      if (e.target.tagName === 'IMG') e.preventDefault();
    };
    document.addEventListener('contextmenu', disableRightClick);
    return () => document.removeEventListener('contextmenu', disableRightClick);
  }, []);

  return (
    <section className="team-carousel-section"> {/* Renamed class */}
      <h2 className="section-title">Incubation Team Members</h2>
      <div className="carousel-container"> {/* New container for carousel layout */}
        <div className="team-carousel-track"> {/* Renamed class */}
          {scrollingTeam.map((member, index) => (
            <div className="team-card" key={index}> {/* Keep team-card */}
              <div className="team-avatar">
                {/* Fallback avatar with first letter */}
                <div className="avatar-fallback">{member.name[0]}</div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-quote">"{member.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel; // Exporting as TeamCarousel