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
import { CgCommunity } from 'react-icons/cg';
import AboutIncubation from './AboutIncubation';
import CommunitySays from './CommunitySays';
import ImpactNumber from './ImpactNumber';

function Home(){
    return(
        <div>
        <Navbar/>
        <HeroSection/>
        <VisionMissionSection/>
        <VideoSection/>
        {/*<CombinedLeadershipPage/>*/}
        <Animation />
        <FacilitiesSection/>
        <Startupmember />
        <CommunitySays />
        <ImpactNumber />
        <Footer/>
        </div>
    );
}

export default Home;