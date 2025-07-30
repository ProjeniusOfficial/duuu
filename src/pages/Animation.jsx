import React, { useEffect, useRef, useState } from 'react';
import './Animation.css';
import Chairman from '../images/Chairman.png'; // default image fallback

// 🔵 Card Component with Editable Props
function AnimationCard({
  animateText,
  animateImage,
  animateDesc,
  name = "Thiru R.S.K. Raguraam",
  title = "FOUNDER & PRO-CHAIRMAN",
  description = "Empowering students through academic, excellence and practical Innovation.",
  image = Chairman,
}) {
  return (
    <div className="ani-card">
      <div className="ani-left">
        <h2 className={`ani-name ${animateText ? 'ani-slide-in-top' : ''}`}>
          {name.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h2>
        <h4 className={`ani-title ${animateText ? 'ani-slide-in-title' : ''}`}>{title}</h4>
        <p className={`ani-description ${animateDesc ? 'ani-slide-in-desc' : ''}`}>{description}</p>
      </div>
      <div className="ani-right">
        <div className="ani-background-stripes"></div>
        <img
          src={image}
          alt={name}
          className={`ani-image ${animateImage ? 'ani-slide-in-image' : ''}`}
        />
      </div>
    </div>
  );
}

// 🔵 Page Wrapper
function Animation() {
  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const [animateDesc, setAnimateDesc] = useState(false);
  const sectionRef = useRef(null);

 useEffect(() => {
  const section = sectionRef.current;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate IN
          setTimeout(() => setAnimateText(true), 100);
          setTimeout(() => setAnimateImage(true), 300);
          setTimeout(() => setAnimateDesc(true), 500);
        } else {
          // Animate OUT (reset)
          setAnimateText(false);
          setAnimateImage(false);
          setAnimateDesc(false);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  if (section) observer.observe(section);

  return () => {
    if (section) observer.unobserve(section);
  };
}, []);


  return (
    <div className="ani-pyramid" ref={sectionRef}>
      {/* Title Section */}
      <div className="ani-header">
        <h1 className="ani-main-title">Meet Our <span className="gradient-text">Founders</span></h1>
        <p className="ani-subtitle">Visionary leaders committed to building the next generation of innovators and entrepreneurs.</p>
      </div>

      {/* Founders Row */}
      <div className="ani-row">
        <AnimationCard
          animateText={animateText}
          animateImage={animateImage}
          animateDesc={animateDesc}
          name="Thiru R.S.K. Raguraam"
          title="FOUNDER & PRO-CHAIRMAN"
          description="A passionate leader focused on empowering the next generation of innovators with a strong vision for academic and practical excellence."
          image={Chairman}
        />
        <AnimationCard
          animateText={animateText}
          animateImage={animateImage}
          animateDesc={animateDesc}
          name="Mr. Surya Raguraam"
          title="TRUSTEE"
          description="A visionary mentor promoting entrepreneurship and innovation, supporting student  from exploration to impactful execution."
          image={Chairman}
        />
      </div>

      {/* Academic Leadership Section */}
      
        <h1 className="ani-main-title1">
          Academic <span className="gradient-text">Leadership</span>
        </h1>
      <div className="ani-row center-row">
        <AnimationCard
          animateText={animateText}
          animateImage={animateImage}
          animateDesc={animateDesc}
          name="Dr.D.Vasudevan"
          title="PRINCIPAL"
          description="A forward-thinking academic leader promoting innovation, research, and real-world learning to empower students and drive institutional excellence."
          image={Chairman}
        />
      </div>

      {/* Incubation Manager Section */}
      <div className="ani-header1">
        <h1 className="ani-main-title2">
          Incubation <span className="gradient-text">Manager</span>
        </h1>
        <p className="ani-subtitle2">Dedicated professionals guiding startups through their journey from idea to market success.</p>
      </div>
      <div className="ani-row">
        <AnimationCard
          animateText={animateText}
          animateImage={animateImage}
          animateDesc={animateDesc}
          name="Dr.T.Hemalatha"
          title="INCUBATION MANAGER"
          description="A dynamic and visionary leader with expertise in emerging technologies, actively mentoring student startups, tech clubs, and incubation initiatives."
          image={Chairman}
        />
        <AnimationCard
          animateText={animateText}
          animateImage={animateImage}
          animateDesc={animateDesc}
          name="Dr.K.Srinivasan"
          title="INCUBATION MANAGER"
          description="A strategic enabler of student innovation, mentoring tech ventures and promoting hands-on development, design thinking, and real-world impact."
          image={Chairman}
        />
      </div>
    </div>
  );
}

export default Animation;
