import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import ContactPage from './pages/ContactPage'; // Your Contact Page
import Navbar from './components/NavBar';
import ServicesPage from './pages/ServicesPage';
import FacilitiesPage from './pages/FacilitiesPage';
import AboutSection from './pages/about';
import Home from './pages/Home'; 
import ApplicationForm from './pages/ApplicationForm';
import VideoSection from './pages/VideoSection';


// A simple Home component for the root pat

function App() {
  return (
    <Router>{/* This is the crucial Router component that provides context */}
      {/* Navbar is placed here so it appears on all pages */}
      <Routes>
        
         {/* Routes defines the different paths and their corresponding components */}
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<FacilitiesPage />} /> {/* Facilities page */}
        <Route path="/contact" element={<ContactPage />} /> {/* Contact page */}
        {/* Add more routes for other pages as needed */}
        <Route path="/about" element={<AboutSection/>} />
        <Route path="/services" element={<ServicesPage />}  />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/Videosection" element={<VideoSection />} />
      </Routes>
      {/* You can place a Footer here if it's meant to be on all pages, outside Routes */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
