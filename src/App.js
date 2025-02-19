
import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import { Header } from './Header';
import ReactGA from 'react-ga4';


import BussinessModal from "./BussinessModal";
import DivOpener from "./DivOpner";
import WhyCompany from "./WhyCompany";

import AsicTech from "./AsicTech";
import DftTech from "./DftTech";
import EmulTech from "./EmulTech";
import PhysicalDesign from "./PhysicalDesign";


import AnalogDesign from "./AnalogDesign";
import DesignVerification from "./DesignVerification";
import AmsVerification from "./AmsVerification";
import CpuGpu from "./CpuGpu";

import BussDetail from "./bussDetail";
import TurnkeyService from "./TurnkeyService";
import ScrollToTop from './ScrollToTop';
import ValueProp from "./ValueProp";
import StackDemo from "./StackDemo";
import MktPage from "./MktPage";
import CustRel from "./CustRel";




import CarrerPage from './CarrerPage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import ConsultSerice from './ConsultSerice';
import SemiEngg from './SemiEngg';
import Footer from './Footer';

import BussCont from './BussCont';
import CardJob from './CardJob';





import TurnKey from './TurnKey';
import FiveG from './FiveG';
import ProjectOutsourcing from './ProjectOutsourcing';
import OffshoreDevelopment from './OffshoreDevelopment';
import ProgressBar from './ProgressBar';
import NewNav from './NavNew';


// import LifeComp from './LifeComp'
import EmpQuotes1 from './EmpQuotes1';
import PhotoShow from './PhotoShow';
// import AwardShow from './AwardShow';
import ValueVision from './ValueVision';
import WhyTechsoc from './WhyTechsoc';
import EmbeddedPage from './EmbeddedPage';



function App() {
  ReactGA.initialize('G-KV645CBWY1');
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <>
    <ScrollToTop/>
      <NewNav/>
      
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/CarrierPage" element={<CarrerPage/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/SemiCondEngin" element={<SemiEngg/>}/>
      <Route path="/FiveGTech" element={<FiveG/>}/>
      <Route path="/TurnkeyServices" element={<TurnKey/>}/>
      <Route path="/ConsultServices" element={<ConsultSerice/>}/>
      <Route path="/ProjectOutSource" element={<ProjectOutsourcing/>}/>
      <Route path="/OffshoreDev" element={<OffshoreDevelopment/>}/>
      {/* <Route path="/LifeAtTechsoc" element={<LifeComp/>}/> */}
      <Route path="/employee-quotes" element={<EmpQuotes1/>}/>
      <Route path="/photos-events" element={<PhotoShow/>}/>
      {/* <Route path="/recognition-awards" element={<AwardShow/>}/>  */}
      <Route path="/values-mission" element={<ValueVision/>}/>

      <Route path="/BussinessModal" element={<BussinessModal/>}/>
      <Route path="/OPENER" element = {<DivOpener />}/>
      <Route path="/buss-details" element={<BussDetail/>} />
      <Route path="/TURNKEY" element={<TurnkeyService/>} />
      <Route path="/value-proposition" element={<ValueProp/>} />
      <Route path="/quality" element={<StackDemo/>} />
      <Route path="/market-research" element={<MktPage/>} />
      <Route path="/customer-relation" element={<CustRel/>} />
      <Route path="/COMPANY" element = {<WhyCompany />}/>

      <Route path="/buss-details" element={<BussDetail/>} />
      <Route path="/TURNKEY" element={<TurnkeyService/>} />
      <Route path="/value-proposition" element={<ValueProp/>} />
      <Route path="/quality" element={<StackDemo/>} />
      <Route path="/market-research" element={<MktPage/>} />
      <Route path="/customer-relation" element={<CustRel/>} />
      <Route path="/SEGMENT" element={<WhyTechsoc/>} />

      <Route path="/ASIC" element={<AsicTech/>} />
      <Route path="/PHYSICAL" element={<PhysicalDesign/>} />
      <Route path="/DFT" element={<DftTech/>} />
      <Route path="/EMUL" element={<EmulTech/>} />
      <Route path="/ANALOG" element={<AnalogDesign/>} />
      <Route path="/DESIGN" element={<DesignVerification/>} />
      <Route path="/AMS" element={<AmsVerification/>} />
      <Route path="/CPUGPU" element={<CpuGpu/>} />
      <Route path="/BUSSCONT" element={<BussCont/>} />
      <Route path="/CARDJOB" element={<CardJob/>}/>

      <Route path="/EMBEDDED" element={<EmbeddedPage/>}/>





    </Routes>
      <ProgressBar/>
      <Footer/>
    
    </>  
  );
}

export default App;


