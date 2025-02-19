import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TechUsed.css";




import { Player } from "@lottiefiles/react-lottie-player";
import animation1 from "./lottieFiles/EmulLottie5.json";
import animation2 from "./lottieFiles/circuit4.json";
import animation3 from "./lottieFiles/circuit6.json";
import animation4 from "./lottieFiles/circuit9.json";
import animation5 from "./lottieFiles/circuit8.json";
import animation6 from "./lottieFiles/circuit7.json";
import animation8 from "./lottieFiles/circuit3.json";


import AsicTech from "./AsicTech";
function TechUsed() {
  const CardData = [
    {
      id: 1,
      svg:animation8,
      title: "RTL Design",
      details:
        "TechsoC Technologies provides services in areas of RTL Design (ASIC & FPGA). Verilog / System Verilog, Fundamentals of Digital Circuits, Static Timing Analysis and Clock Domain Crossing, Resets Clock Dividers, Power and Performance.",
      link: "/OPENER",
      componentIdentifier: "AsicTech",
      Text:"RTL DESIGN" ,
    },
    {
      id: 2,
      svg: animation1,
      title: "Physical Design",
      details:
        "TechsoC Technologies provides all services in area of Physical Design. These services include full chip and block level physical implementation, Floorplanning, Clock tree synthesis, Place & Route, Timing closure, Physical verification, IR Drop/EM/SI analysis and closure, etc.",
      link: "/OPENER",
      componentIdentifier: "PhysicalDesign",
      Text:"PHYSICAL DESIGN" ,
    },
    {
      id: 3,
      svg: animation2,
      title: "DFT",
      details:
        "We have experience across various DFT Techniques like Scan, ATPG, Bist, MBIST and Boundary Scan, then make TechsoC your first choice.",
      link: "/OPENER",
      componentIdentifier: "DFT",
      Text:"D F T" ,
    },
    {
      id: 4,
      svg: animation3,
      title: "Emulation",
      details:
        "Our team of competent engineers working in the FPGA Emulation and Validation team are experts in prototyping and emulating complex IC designs for streamlined system debugging and software bring-up.",
      link: "/OPENER",
      componentIdentifier: "Emulation",
      Text:"EMULATION" ,
    },
    {
      id: 5,
      svg: animation4,
      title: "Analog Design",
      details:
        "In order to meet the highest standard of requirement, Techsoc significantly invests in its analog engineers to establish their strength in fundamentals of analog design, specializes in specific domains, and invests in processes, methodologies, the best practices, and infrastructure.",
      link: "/OPENER",
      componentIdentifier: "AnalogDesign",
      Text:"ANALOG DESIGN" ,
    },
    {
      id: 6,
      svg: animation5,
      title: "Design Verification",
      details:
        "Our team can execute verification from scratch of complex SoC’s and IP’s by using latest methodologies such as SV-UVM, UPF and meeting key KPI such as 100% functional and code coverage.",
      link: "/OPENER",
      componentIdentifier: "DesignVerification",
      Text:"DESIGN VERIFICATION" ,
    },
    {
      id: 7,
      svg: animation6,
      title: "AMS Verification",
      details:
        "Our Analog Mixed-Signal verification services  focus on verification of the analog/mixed-signal part of the chip, ensuring that every analog module, their mutual connections as well as connections to the digital core are working and verified properly.",
      link: "/OPENER",
      componentIdentifier: "AmsVerification",
      Text:"AMS VERIFICATION" ,
    },
    // {
    //   id: 8,
    //   svg: animation7,
    //   title: "CPU & GPU Design",
    //   details:
    //     "Our team of competent engineers working in the STA Emulation and Validation team are experts in prototyping and emulating complex IC designs for streamlined system debugging and software bring-up.",
    //   link: "/CPUGPU",
    // },
  ];

  return (
    <section className="wrapper-border mt-4">


      <div className="container py-5 py-md-5">
        <div className="row card-container-Tech mt-5">
          {CardData.map((card) => (
            <div className="col-lg-4 col-md-6 col-sm-6 mt-5" key={card.id}>
              <Link to={card.link}
                        state={{
                          Text:card.Text,
                          componentIdentifier: card.componentIdentifier,
                        }}
                    className="text-decoration-none" >
                   
                <div className="card height-card CardContents-Tech">
                  <div className="card-body">
                    <div className="img1 d-flex align-items-center justify-content-center">
                      <Player
                        src={card.svg}
                        className="player"
                        loop
                        autoplay
                        style={{ height: "60px", width: "100%" }}
                      />
                    </div>
                    <h5 className="card-title text-center mt-2 fw-bold">
                      {card.title}
                    </h5>
                    <p className="card-text text-center fw-bold">{card.details}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechUsed;
























