import React, { useState, useEffect, useRef } from 'react';
import './ApplicationForm.css';
import {
  FiUser, FiBriefcase, FiZap, FiTarget, FiBarChart2, FiUsers,
  FiDollarSign, FiLifeBuoy, FiInfo, FiPaperclip, FiAward
} from 'react-icons/fi';
import MentorshipForm from './MentorshipForm';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroSection from './Herosection';

const SectionHeader = ({ icon, title }) => (
  <div className="section-header">
    {icon}
    <h2>{title}</h2>
  </div>
);

// InputField with floating labels
const InputField = ({ label, id, type = 'text', required = true }) => (
  <div className="form-group floating-label">
    <input type={type} id={id} name={id} required={required} placeholder=" " />
    <label htmlFor={id}>{label}{required && <span>*</span>}</label>
  </div>
);

// TextArea with floating labels
const TextArea = ({ label, id, helpText, required = true, rows = 4 }) => (
    <div className="form-group floating-label full-width">
        <textarea id={id} name={id} required={required} placeholder=" " rows={rows}></textarea>
        <label htmlFor={id}>{label}{required && <span>*</span>}</label>
        {helpText && <small>{helpText}</small>}
    </div>
);

// Standard SelectField
const SelectField = ({ label, options, required = true }) => (
    <div className="form-group">
        <label>{label}{required && <span>*</span>}</label>
        <select required={required}>
            {options.map(opt => <option key={opt} value={opt === options[0] ? '' : opt}>{opt}</option>)}
        </select>
    </div>
);

// CORRECT stateful Checkbox component
const Checkbox = ({ label, name, checked, onChange }) => (
  <label className="checkbox-item">
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <span className="custom-box" />
    <span className="label-text">{label}</span>
  </label>
);


const ApplicationForm = () => {
  // State for scroll progress bar
  const [scrollProgress, setScrollProgress] = useState(0);
  const formRef = useRef(null);

  // State for checkboxes
  const [selectedAreas, setSelectedAreas] = useState({});

  // Handler for checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedAreas(prevSelectedAreas => ({
        ...prevSelectedAreas,
        [name]: checked
    }));
  };

  // Effect for scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
        if (!formRef.current) return;

        const formElement = formRef.current;
        const { top, height } = formElement.getBoundingClientRect();
        const scrollableHeight = height - window.innerHeight;
        
        let progress = 0;
        if (top < 0 && scrollableHeight > 0) {
            progress = (Math.abs(top) / scrollableHeight) * 100;
        } else if (top <= 0 && scrollableHeight <=0) {
            progress = 100;
        } else if (top > 0) {
            progress = 0;
        }

        setScrollProgress(Math.min(100, progress));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const mentorshipAreas = [
    "Business Strategy", "Product Development", "Marketing & Sales",
    "Fundraising", "Technology", "Legal & Compliance",
    "Operations", "Human Resources", "Financial Planning",
    "International Expansion"
  ];
  
  // ++ FIX: Helper function to create a safe name for use in HTML id/name attributes
  const createSafeName = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');


  return (
    <>
    <Navbar />
    <div className="page-container">
       <div className="progress-container">
            <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
       </div>

      <header className="form-header">
     
        <h1>Application Form</h1>
   
        <p className="intro-text">
          Join PSNA's Centre for Entrepreneurship and Incubation to transform your innovative ideas into successful ventures.
        </p>
      </header>

      <form className="application-form" ref={formRef}>
        {/* Personal Information */}
        <section>
          <SectionHeader icon={<FiUser />} title="Personal Information" />
          <div className="form-row">
            <InputField label="First Name" id="firstName" />
            <InputField label="Last Name" id="lastName" />
          </div>
          <div className="form-row">
            <InputField label="Email Address" id="email" type="email" />
            <InputField label="Phone Number" id="phone" type="tel" />
          </div>
          <div className="form-row">
             <InputField label="LinkedIn Profile" id="linkedin" required={false} />
          </div>
        </section>

        {/* Academic & Professional Background */}
        <section>
          <SectionHeader icon={<FiBriefcase />} title="Academic & Professional Background" />
          <div className="form-row">
            <InputField label="Institution/Organization" id="institution"/>
            <InputField label="Degree/Program" id="degree"/>
          </div>
           <div className="form-row">
            <SelectField label="Year of Study/Experience Level" options={['Select your current academic year or professional level', '1st Year', '2nd Year', '3rd Year', 'Final Year', 'Alumni', 'Faculty', 'External']} />
          </div>
        </section>

        {/* Startup Concept & Vision */}
        <section>
          <SectionHeader icon={<FiZap />} title="Startup Concept & Vision" />
           <div className="form-row">
            <InputField label="Startup/Project Name" id="startupName" />
            <SelectField label="Industry/Sector" options={['Select primary industry focus', 'AI/ML', 'SaaS', 'FinTech', 'HealthTech', 'EdTech', 'E-commerce']} />
          </div>
           <TextArea label="Problem Statement" id="problemStatement" helpText="Clearly describe the problem. Minimum 50 characters" />
           <TextArea label="Solution Description" id="solutionDescription" helpText="Describe your solution. Minimum 100 characters" />
           <div className="form-row">
              <TextArea label="Unique Value Proposition" id="uvp" rows={3} />
              <TextArea label="Target Market" id="targetMarket" rows={3}/>
           </div>
        </section>

        {/* Development Stage & Progress */}
        <section>
            <SectionHeader icon={<FiTarget />} title="Development Stage & Progress" />
             <div className="form-row">
                <SelectField label="Current Development Stage" options={['Select current development stage', 'Idea Stage', 'Prototype/MVP', 'Pre-launch', 'Early Revenue']}/>
             </div>
             {/* ++ FIX: Using safe, sanitized names for checkboxes */}
             <div className="form-row checkbox-group">
                <Checkbox name="prototype-available" label="Working Prototype Available" checked={!!selectedAreas['prototype-available']} onChange={handleCheckboxChange} />
                <Checkbox name="intellectual-property" label="Intellectual Property (Patents, etc.)" checked={!!selectedAreas['intellectual-property']} onChange={handleCheckboxChange} />
             </div>
        </section>

        {/* Business Model & Market Analysis */}
        <section>
            <SectionHeader icon={<FiBarChart2 />} title="Business Model & Market Analysis" />
            <TextArea label="Revenue Model" id="revenueModel" helpText="Explain how your startup will generate revenue." />
            <div className="form-row">
                <TextArea label="Competitor Analysis" id="competitorAnalysis" rows={3} />
                <TextArea label="Market Size Estimation (TAM, SAM)" id="marketSize" rows={3} />
            </div>
        </section>

        {/* Team Composition & Leadership */}
        <section>
            <SectionHeader icon={<FiUsers />} title="Team Composition & Leadership" />
            <div className="form-row">
                <SelectField label="Current Team Size" options={['Select your current team size', '1 (Founder)', '2-3 Members', '4-5 Members', '6+ Members']} />
            </div>
            <TextArea label="Team Members & Roles" id="teamRoles" helpText="Describe each team member's background and expertise." />
            <div className="form-row">
                <TextArea label="Co-Founders" id="cofounders" required={false} rows={3} />
                <TextArea label="Advisors & Mentors" id="advisors" required={false} rows={3} />
            </div>
        </section>

        {/* Funding Requirements & Support */}
        <section>
            <SectionHeader icon={<FiDollarSign />} title="Funding Requirements & Support" />
            <div className="form-row">
                <SelectField label="Funding Requirement" options={['Select approximate funding requirement', 'Pre-seed (< ₹10 Lakhs)', 'Seed (₹10 Lakhs - ₹50 Lakhs)', 'Series A (> ₹50 Lakhs)', 'Not seeking funding currently']} />
            </div>
             <div className="form-row">
                <TextArea label="Current Funding Status" id="fundingStatus" required={false} rows={3}/>
                <TextArea label="Previous Accelerator Experience" id="prevExperience" required={false} rows={3}/>
            </div>
        </section>

        {/* Required Support & Mentorship */}
        <section>
            <SectionHeader icon={<FiLifeBuoy />} title="Required Support & Mentorship" />
            <MentorshipForm/>
             <div className="form-row">
                <TextArea label="Technical Support Needed" id="techSupport" required={false} rows={3} />
                <TextArea label="Networking Goals" id="networkingGoals" required={false} rows={3} />
            </div>
        </section>
        
        {/* Additional Information */}
        <section>
            <SectionHeader icon={<FiInfo />} title="Additional Information" />
            <TextArea label="Achievements & Recognition" id="achievements" required={false} />
            <TextArea label="Current Challenges" id="challenges" />
            <TextArea label="Why PSNA Incubation Program?" id="whyPsna" />
        </section>
        
        {/* Supporting Documents */}
        <section>
            <SectionHeader icon={<FiPaperclip />} title="Supporting Documents" />
            <div className="file-upload-container">
                <div className="file-upload-box">
                    <label>Pitch Deck</label>
                    <input type="file" />
                    <small>PDF or PPT, max 10MB</small>
                </div>
                <div className="file-upload-box">
                    <label>Business Plan</label>
                    <input type="file" />
                    <small>PDF or DOC, max 10MB</small>
                </div>
                <div className="file-upload-box">
                    <label>Additional Documents</label>
                    <input type="file" />
                    <small>Any supporting materials</small>
                </div>
            </div>
        </section>

        {/* Program Commitment */}
        <section>
          <SectionHeader icon={<FiAward />} title="Program Commitment" />
          <div className="commitment-box">
             {/* ++ FIX: Using a safe, sanitized name for this checkbox */}
            <Checkbox 
              name="program-commitment" 
              label="I hereby confirm my commitment to actively participate in PSNA's incubation program. I understand the terms and will dedicate adequate time and effort." 
              checked={!!selectedAreas['program-commitment']} 
              onChange={handleCheckboxChange} 
            />
          </div>
        </section>

        <div className="form-footer">
          <button type="submit" className="submit-btn">Submit Application for Review</button>
          <div className="review-process">
            <h4>Application Review Process</h4>
            <p>Our evaluation committee will review your application within 5-7 business days. We appreciate your interest in the PSNA Incubation Program.</p>
          </div>
        </div>
      </form>

    </div>
    <Footer />
   </>
  );
};

export default ApplicationForm;