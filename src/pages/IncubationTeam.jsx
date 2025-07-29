import React from 'react';
import './IncubationTeam.css';

const teamMembers = [
  {
    name: "Mr. Kathiravan",
    role: "Assistant Professor / Mechanical Engineering",
    phone: "+91 99945 08109",
    email: "kathiravan@psnacet.edu.in",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Dr. Thangaselvi E ",
    role: "Assistant Professor / ECE",
    phone: "+91 96008 32418",
    email: " e.thangaselvi@psnacet.edu.in",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Mr. Pushpavanam B ",
    role: "Assistant Professor / EEE",
    phone: "+91 94420 92935",
    email: "pushpavanamb4u@psnacet.edu.in",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Mrs. Aurthy Felicita S ",
    role: "Assistant Professor / CSE",
    phone: "+91 96262 73301",
    email: "sebafelicy@psnacet.edu.in",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Salem Jeyaseelan W.R. ",
    role: "Assistant Professor / IT",
    phone: "+91 98421 37166",
    email: "salemjeyam81@psnacet.edu.in",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Dr. Shahul Hammed S",
    role: "Assistant Professor / CS & BS",
    phone: "+91 94862 10223",
    email: "shahulhammed@psnacet.edu.in ",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Dr. Rajkumar K",
    role: "7.Assosicate Professor / CSE (Cyber Security)",
    phone: "+91  87788 19224",
    email: "rajkumardgl@psnacet.edu.in",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  
];

function IncubationTeam() {
  return (
    <section className="incubation-team">
      <h2>Incubation Team <span className="highlight-blue">Members</span></h2>
      <p className="team-subtext">
        Specialized experts providing comprehensive support across all aspects of startup development.
      </p>

      <div className="member-list">
        {teamMembers.map((member, index) => (
          <div key={index} className="member">
            <div className="member-left">
              <img src={member.image} alt={member.name} className="member-img" />
              <div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
            <div className="member-right">
              <p>{member.phone}</p>
              <p>{member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IncubationTeam;
