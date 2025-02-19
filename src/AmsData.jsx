import React from "react";
import "./WhyTechsoc.css";

import WhyElement from "./WhyElement";

import gear from "./icons/gear.png";
import medical from "./icons/medical.png";
import airbus from "./icons/airbus.png";
import ai from "./icons/AI.png";
import security from "./icons/security.png";
import cart from "./icons/cart.png";
import economy from "./icons/economy.png";
import container from "./icons/container.png";



const AmsData = () => {
  return (
    <>
      <div className="container py-md-10">
        <h3 className="text-center">INDUSTRIES WE ALREADY SERVE</h3>
        <h4 className="text-center" style={{fontStyle:"italic"}}>
          {" "}
          We have verified designs for leading players in the following
          industries{" "}
        </h4>
        <hr class="double my-10" />
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
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
              heading1="Consumer Electronics"
              desc="Introducing the first ever 5G enabled tablet. You've got a tablet that let's you play harder and work smarter."
              icons={cart}
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
              heading1="Transport & Logistics"
              desc="Introducing the first ever 5G enabled tablet. You've got a tablet that let's you play harder and work smarter."
              icons={container}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <WhyElement
              heading1="Aerospace"
              desc="Introducing the first ever 5G enabled tablet. You've got a tablet that let's you play harder and work smarter."
              icons={airbus}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AmsData;
