import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./CardCarousel.css";

const startups = [
  {
    logo: "https://i.ibb.co/XZ1mHR6/codecraft.jpg",
    name: "CodeCraft Studios",
    founder: "Arjun Patel",
    year: "2021",
    desc: "Innovative software development and digital transformation",
    testimonial: "CodeCraft was born out of a dream to empower innovation. Our journey has just begun!",
  },
  {
    logo: "https://i.ibb.co/5BB3Fz8/innovision.jpg",
    name: "InnoVision Labs",
    founder: "Sneha Reddy",
    year: "2023",
    desc: "AI-powered solutions for healthcare and education",
    testimonial: "At InnoVision, we’re shaping the future one algorithm at a time.",
  },
  {
    logo: "https://i.ibb.co/tKyFbT4/fintech.jpg",
    name: "FinTech Pioneers",
    founder: "Rahul Kumar",
    year: "2022",
    desc: "Revolutionary financial technology and blockchain solutions",
    testimonial: "Breaking barriers in finance has never been more exciting!",
  },
  {
    logo: "https://i.ibb.co/ykbg1gP/agrovista.jpg",
    name: "AgroVista",
    founder: "Meera Nair",
    year: "2020",
    desc: "Smart farming technologies and agricultural analytics",
    testimonial: "We believe the soil holds the future, and AgroVista is the key.",
  },
  {
    logo: "https://i.ibb.co/jhzNqjc/greengen.jpg",
    name: "GreenGen Solutions",
    founder: "Amit Das",
    year: "2021",
    desc: "Clean energy innovations and sustainability solutions",
    testimonial: "GreenGen is a promise for a cleaner, brighter tomorrow.",
  },
  {
    logo: "https://i.ibb.co/4VPW1hj/eduforge.jpg",
    name: "EduForge",
    founder: "Lakshmi Verma",
    year: "2022",
    desc: "Next-gen online learning platforms and tools",
    testimonial: "Forging minds and shaping futures — that’s our mission.",
  },
  {
    logo: "https://i.ibb.co/kK9n6PY/meditech.jpg",
    name: "MediTech Nexus",
    founder: "Rohan Shah",
    year: "2023",
    desc: "Bridging healthcare with advanced medical devices and AI",
    testimonial: "Innovation meets compassion — the core of MediTech Nexus.",
  },
];

const StartupCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
           320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  }}
      >
        {startups.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="startup-card">
              {/* FRONT SIDE */}
              <div className="card-front">
                <div className="logo-wrapper">
                  <img src={s.logo} alt={s.name} />
                  <span className="status-indicator" />
                </div>
                <div className="card-content">
                  <h2>{s.name}</h2>
                  <p className="founder">Founded by {s.founder}</p>
                  <div className="year">📅 Est. {s.year}</div>
                  <p className="description">{s.desc}</p>
                  <div className="active">🟢 Active & Growing</div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="card-back">
                <blockquote>{s.testimonial}</blockquote>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StartupCarousel;