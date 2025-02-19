
import React from "react";
import "./WhyTechsoc.css";
import { Player } from "@lottiefiles/react-lottie-player";

import WhyElement from "./WhyElement";

import gear from "./icons/gear.png";
import medical from "./icons/medical.png";
import airbus from "./icons/airbus.png";
import ai from "./icons/AI.png";
import security from "./icons/security.png";
import cart from "./icons/cart.png";
import economy from "./icons/economy.png";
import container from "./icons/container.png";

import circle5 from "./lottieFiles/ram/Animation - 1711812217268.json"; //For BackGround Image
import AmsDataOne from "./AmsDataOne";
import SliderSegment from "./SliderSegment";

const WhyTechsoc = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Player
          autoplay
          loop
          src={circle5}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <section className="wrapper mt-5">
        <div className="container py-md-10 mt-5">
          <h3 className="text-center mt-5">INDUSTRIES WE ALREADY SERVE</h3>
          <h4 className="text-center" style={{ fontStyle: "italic" }}>
            {" "}
            We have verified designs for leading players in the following
            industries{" "}
          </h4>
          <hr class="double my-10" />
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
          <div className="col-lg-3 col-md-6 col-sm-6">
              <WhyElement
                heading1="AI/ML & Robotics"
                desc="Introducing the first ever 5G enabled tablet. You've got a tablet that let's you play harder and work smarter."
                icons={ai}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <WhyElement
                heading1="Security"
                desc="Introducing the first ever 5G enabled tablet. You've got a tablet that let's you play harder and work smarter."
                icons={security}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <WhyElement
                heading1="Automotive"
                desc="Introducing the first ever 5G enabled tablet. You've got a tablet that let's you play harder and work smarter."
                icons={gear}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <WhyElement
                heading1="Medical Devices"
                desc="Introducing the first ever 5G enabled tablet. You've got a tablet that let's you play harder and work smarter."
                icons={medical}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <WhyElement
                heading1="Industrial Automation"
                desc="Introducing the first ever 5G enabled tablet. You've got a tablet that let's you play harder and work smarter."
                icons={economy}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <WhyElement
                heading1="Aerospace"
                desc="Introducing the first ever 5G enabled tablet. You've got a tablet that let's you play harder and work smarter."
                icons={airbus}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <WhyElement
                heading1="Consumer Electronics"
                desc="Introducing the first ever 5G enabled tablet. You've got a tablet that let's you play harder and work smarter."
                icons={cart}
              />
            </div>
           
            <div className="col-lg-3 col-md-6 col-sm-6">
              <WhyElement
                heading1="Transport & Logistics"
                desc="Introducing the first ever 5G enabled tablet. You've got a tablet that let's you play harder and work smarter."
                icons={container}
              />
            </div>
            
          </div>

          
          <SliderSegment/>
          
        </div>
        {/* <SlickSlider/> */}
        <AmsDataOne />
      </section>
    </>
  );
};

export default WhyTechsoc;
