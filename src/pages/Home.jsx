import React from 'react';

import Navbar from "../components/NavBar";
import HeroSection from './Herosection';
import VisionMissionSection from './VisionMissionsection';
import VideoSection from './VideoSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import FacilitiesSection from './FacilitiesSection';
import CombinedLeadershipPage from './FoundersSection';
import Animation from './Animation';
import Startupmember from './Startupmember';
import CommunitySays from './CommunitySays';
import ImpactNumber from './ImpactNumber';

function Home(){
    return(
        <div>
        <Navbar/>
        <HeroSection/>
        <VisionMissionSection/>
        <VideoSection/>     
        <Animation />
        <FacilitiesSection/>
         <Startupmember/>
        <CommunitySays/>
        <ImpactNumber/>
        <Footer/>

       

          {/*<CombinedLeadershipPage/>*/}
        </div>
    );
}

export default Home;