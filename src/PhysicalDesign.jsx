import React, {useEffect} from "react";
import "./AsicTech.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import DftCard from "./DftCard";
import BannerZoom from "./BannerZoom";
import { Player } from "@lottiefiles/react-lottie-player";
import Textify from "textify.js";
import gsap from "gsap";

import Circut2 from "./lottieFiles/circuit2.json";
import Circut6 from "./lottieFiles/circuit6.json";
import Circut9 from "./lottieFiles/circuit9.json";
import animation from "./lottieFiles/Animation - 1711442796353";
import chip1 from "./images/chip1.jpg";
import chip2 from "./images/chip2.jpg";
import chip3 from "./images/chip3.jpg";
import BackGround from "./lottieFiles/BackGround3.json";
import AmsDataOne from "./AmsDataOne";

const PhysicalDesign = () => {
  const images = [chip1, chip2, chip3];
  const heading1 = "Physical Design";
  const heading2 =
    "Committed to delivering high-quality design solutions that meet industry standards";
  
  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const [ref3, inView3] = useInView({});
  const [ref4, inView4] = useInView({});
  const [ref5, inView5] = useInView({});


  useEffect(() => {
   
    const textifyConfig = {
      el: ".raamm",
      observer: {
        repeat: true,
      },
      animation: {
        duration: 2.5,
        stagger: 0.1,
        ease: "expo.inOut",
        transformOrigin: "left right",
        animateProps: {
          x: "-100%",
          y: "0%",
        },
      },
    };

    const paragraphConfig = {
      el: ".ramParagraph",
      largeText: true,
      splitType: "lines",
      observer: {
        repeat: true,
      },
      animation: {
        by: "lines",
        duration: 2.5,
        ease: "power3.inOut",
        stagger: 0.1,
        animateProps: {
          scale: 0.5,
          opacity: 0,
        },
      },
    };

    // const title2Config = {
    //   el: ".ramHeading",
    //   observer: {
    //     repeat: true,
    //   },
    //   animation: {
    //     duration: 0.7,
    //     ease: "power2.inOut",
    //     transformOrigin: "left top",
    //     animateProps: {
    //       y: "0",
    //       rotate: -180,
    //       scale: 0,
    //     },
    //   },
    // };

    // const paragraph3Config = {
    //   el: ".paragraph-3",
    //   observer: {
    //     repeat: true,
    //   },
    //   // largeText: true,
    //   // splitType: "lines",
    //   animation: {
    //     by: "lines",
    //     duration: 0.7,
    //     ease: "power3.inOut",
    //     stagger: 0.1,
    //     transformOrigin: "left top",
    //     animateProps: {
    //       rotate: 30,
    //       opacity: 0,
    //     },
    //   },
    // };

    const RamConfig = {
      el: ".downtoup",
      largeText: true,
      splitType: "lines",
      observer: {
        repeat: true,
      },
      animation: {
        by: "lines",
        duration: 1.5,
        ease: "power3.inOut",
        stagger: 0.1,
        animateProps: {
          // Define custom properties and their values for animation
          opacity: 0, // Animate opacity from 0 to 1
          x: "-100px", // Animate horizontal position by 100 pixels
          y: "-50px", // Animate vertical position by -50 pixels
          scale: 2, // Animate scale to double the size
          // rotate: 360, // Animate rotation by 360 degrees
        },
      },
    };

    // Initialize Textify for banner title and paragraph with GSAP
    const titleInstance = new Textify(textifyConfig, gsap);
    const paragraphInstance = new Textify(paragraphConfig, gsap);
    // const title2Instance = new Textify(title2Config, gsap);
    // const paragraph3Instance = new Textify(paragraph3Config, gsap);
    const textifyInstance = new Textify(RamConfig, gsap);
  }, []); 


  const variants1 = {
    initial: { opacity: 0, x: 400 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    initial: { opacity: 0, x: -400 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    initial: { opacity: 0, y: 350 },
    visible: { opacity: 1, y: 0 },
  };

  const TechData = [
    {
      id: 0,
      lottie: Circut6,
      title: "Block/SoC Level",
    },
    {
      id: 1,
      lottie: Circut6,
      title: "Floor Plan",
    },
    {
      id: 2,
      lottie: Circut6,
      title: "Power Planning & Optimization",
    },
    {
      id: 3,
      lottie: Circut6,
      title: "Placement & Routing",
    },
    {
      id: 4,
      lottie: Circut6,
      title: "Clock Tree Synthesis",
    },
    {
      id: 5,
      lottie: Circut6,
      title: "pv-ORC, LVS,ANT, DFM, Density",
    },
    {
      id: 6,
      lottie: Circut6,
      title: "Static and Dynamic EM/IR",
    },
    {
      id: 7,
      lottie: Circut6,
      title: "Physical Verification",
    },
    {
      id: 8,
      lottie: Circut6,
      title: "Extraction", //Remove This
    },
    {
      id: 9,
      lottie: Circut6,
      title: "ECO Implementation",
    },
    {
      id: 10,
      lottie: Circut2,
      title: "Synthesis / Formal",
    },
    {
      id: 11,
      lottie: Circut2,
      title: "Checking",
    },
    {
      id: 12,
      lottie: Circut2,
      title: "Static Timing",
    },
    {
      id: 13,
      lottie: Circut2,
      title: "Analysis",
    },
    {
      id: 14,
      lottie: Circut2,
      title: "Timing Signoff",
    },
    {
      id: 15,
      lottie: Circut2,
      title: "Multi Power Volatage",
    },
    {
      id: 16,
      lottie: Circut2,
      title: "Domain Designs",
    },
    {
      id: 17,
      lottie: Circut2,
      title: "Crosstalk/ Noise/ Thermal Analysis",
    },
    {
      id: 18,
      lottie: Circut9,
      title: "ICC, ICC2, Innovus, AtopTech, SOC Encounter",
    },
    {
      id: 19,
      lottie: Circut9,
      title: "Calibre, ICV, PVS, Assura",
    },
    {
      id: 20,
      lottie: Circut9,
      title: "Redhawk, Voltus, Totem Star RC",
    },
    {
      id: 21,
      lottie: Circut9,
      title: "Cadence RC, Synopsys RC",
    },
    {
      id: 22,
      lottie: Circut9,
      title: "Synopsys PrimeTime/PTSI",
    },
    {
      id: 23,
      lottie: Circut9,
      title: "TCL, Shell, Perl Scripting",
    },
    {
      id: 24,
      lottie: Circut9,
      title: "Varlous Checks/Flow Automation",
    },
  ];

  return (
    <>
      <section class="wrapper-border bg-light mt-5">
        <BannerZoom images={images} heading1={heading1} heading2={heading2} />
      </section>

      <section class="wrapper-border mt-4">
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
            src={BackGround}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div class="container py-5 py-md-10">
          <div class="row">
            <div className="col-md-7 col-lg-7 mb-1">
              <Player
                src={animation}
                className="player"
                loop
                autoplay
                style={{ height: "440px", width: "100%" }}
              />
              <div
                ref={ref1}
                className={`card ms-lg-13 bg-info ${
                  inView1
                    ? "animate__animated animate__fadeInRight animate__delay-1s"
                    : ""
                }`}
              >
                <div className="card-body p-2">
                  <div className="d-flex flex-row">
                    <div>
                      <h4 className="mb-1 raamm">Our Experties</h4>
                      <ul className="ramParagraph">
                        <li>
                          Physical Design (IO ring, Floorplanning, PG Planning,
                          Place, Optimization for Timing and Power, Clock Tree
                          Synthesis, Routing, Post Route Optimization)
                        </li>
                        <li>
                          Low Power Expertise - Clock Gating, Multi-Vt, Voltage
                          Islands, Power Gating
                        </li>
                        <li>Logic Synthesis and Physical Synthesis</li>
                        <li>EM & IR drop analysis, SI Closure</li>
                        <li>Timing Closure and Static Timing Analysis</li>
                        <li>Physical Verification (DRC/ERC/LVS)</li>
                        <li>
                          180nm all the way down to 16nm/14nm/10nm/7nm/5nm/3nm
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 mb-1">
              <p className="lead fw-bold downtoup">
                Our proven physical design flow, methodologies and rich
                experience enable us to deliver physical design implementation
                with superior performance. We have dedicated experts for each
                design stage, methodology & tools and have undertaken projects
                across Networking, Mass Storage and Mobile for Area, Power &
                Time optimization. Interface expertise includes MIPI, DDR, PCIe,
                SATA, USB, AMBA etc.
              </p>
              <p className="lead fw-bold downtoup">
                Ownership mode Physical Design from RTL to Power, Performance
                and Area optimized GDS. Expertise in FinFET-based
                nanometer-scale technology nodes and industry leading tool flows
                to bring precision and predictability to your complex physical
                implementation requirements.
              </p>
              <div
                ref={ref2}
                className={`card ms-lg-13 bg-info ${
                  inView2
                    ? "animate__animated animate__fadeInLeft animate__delay-1s"
                    : ""
                }`}
              >
                <div className="card-body p-2">
                  <div className="d-flex flex-row">
                    <div>
                      <h4 className="mb-1 raamm">Physical Design (RTL - GDSII)</h4>
                      <ul className="ramParagraph">
                        <li>RTL Synthesis (Logical & Physical aware)</li>
                        <li>Library Quality Checks, IP Validation</li>
                        <li>IO Planning, Floor Planning, Partitioning</li>
                        <li>Power Planning and Low Power Strategy</li>
                        <li>Place & Route</li>
                        <li>Clock Tree Synthesis</li>
                        <li>
                          Design for Manufacture (Metal Fill, Spare Cells, Decap
                          Cells)
                        </li>
                        <li>Power Analysis (EM/IR)</li>
                        <li>
                          Physical Verification (DRC, LVS, ERC, ANTENNA, PERC,
                          XOR)
                        </li>
                        <li>Low Power Checks (CLP) & Formality (LEC)</li>
                        <li>
                          Full Chip/Partition Timing Closure, MMMC Signoff
                        </li>
                        <li>ECO Iteration (Functional & Timing Fixes)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="double my-10" />

          <div
            ref={ref3}
            className={`d-flex justify-content-center align-items-center ${
              inView3
                ? "animate__animated animate__fadeInRight animate__delay-1s"
                : ""
            }`}
          >
            <h2 fw-bold><span style={{color:'black', fontWeight:'500'}}>Our </span> <span style={{color:'blue', fontWeight:'700'}}>Physical Design </span><span style={{color:'black', fontWeight:'500'}}> Services cover the followings</span></h2>
          </div>
          <hr class="double my-10" />
          <div className="row gy-3 gx-xl-8">
            <div className="col-lg-3">
              <DftCard Data={TechData[0]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[1]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[2]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[3]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[4]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[5]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[6]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[7]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[8]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[9]} />
            </div>
          </div>
          <hr class="double my-10" />

          <div
            ref={ref4}
            className={`d-flex justify-content-center align-items-center ${
              inView4
                ? "animate__animated animate__fadeInRight animate__delay-1s"
                : ""
            }`}
          >
            <h2 fw-bold><span style={{color:'black', fontWeight:'500'}}>Our </span><span style={{color:'blue', fontWeight:'700'}}> Synthesis / STA </span> <span style={{color:'black', fontWeight:'500'}}>part cover the followings</span></h2>
          </div>
          <hr class="double my-10" />

          <div className="row gy-3 gx-xl-8 text-center">
            <div className="col-lg-3">
              <DftCard Data={TechData[10]} />
            </div>

            <div className="col-lg-3">
              <DftCard Data={TechData[11]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[12]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[13]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[14]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[15]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[16]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[17]} />
            </div>
          </div>
          <hr class="double my-10" />

          <div
            ref={ref5}
            className={`d-flex justify-content-center align-items-center ${
              inView5
                ? "animate__animated animate__fadeInRight animate__delay-1s"
                : ""
            }`}
          >
            <h2 fw-bold><span style={{color:'black', fontWeight:'500'}}>The followings </span><span style={{color:'blue', fontWeight:'700'}}> Tools </span> <span style={{color:'black', fontWeight:'500'}}>We Are Using</span></h2>
          </div>
          <hr class="double my-10" />

          <div className="row gy-3 gx-xl-8 text-center">

            <div className="col-lg-3">
              <DftCard Data={TechData[18]} />
            </div>

            <div className="col-lg-3">
              <DftCard Data={TechData[19]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[20]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[21]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[22]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[23]} />
            </div>
            <div className="col-lg-3">
              <DftCard Data={TechData[24]} />
            </div>
          </div>
          <hr class="double my-8" />
        </div>
        <AmsDataOne />
      </section>
    </>
  );
};

export default PhysicalDesign;
