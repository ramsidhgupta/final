import React from "react";

import WhyTechComp from "./WhyTechComp";

import TechUsed from "./TechUsed";

import BannerZoom from "./BannerZoom";
import AmsData from "./AmsData";
import AmsDataOne from "./AmsDataOne";
import AmsDataTwo from "./AmsDataTwo";

import chip1 from './images/chip1.jpg';
import chip2 from './images/chip2.jpg';
import chip3 from './images/chip3.jpg';
import WhyCompany from "./WhyCompany";
import AnalogTrial from "./AnalogTrial";
import DivOpener from './DivOpner';
import AnalogDesign from './AnalogDesign';

export const BussinessModal = () => {
  
  const images = [chip1, chip2, chip3,];
  const heading1="Our Bussiness Model"
  const heading2="Our Framework outlines how we creates, delivers, captures value, and ideas into beautiful things."

  

  return (
    <>
      <section className="wrapper bg-soft-primary mt-5">
          <BannerZoom images={images} heading1={heading1} heading2={heading2}/>
      </section>

      {/* <section className="wrapper bg-soft-primary">
        <DivOpener component={WhyCompany}/>
       
      </section> */}




      <section className="wrapper bg-soft-primary life-at">
        <WhyTechComp />
       
      </section>
      <section className="wrapper bg-soft-primary mt-4">
        
        {/* <AnalogTrial/> */}
        {/* <WhyCompany/> */}
        {/* <TechUsed /> */}
        {/* <AmsDataTwo /> */}
          <AmsData />
          <AmsDataOne />
      </section>
    </>
  );
};

export default BussinessModal;
