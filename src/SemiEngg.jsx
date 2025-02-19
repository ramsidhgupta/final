import React, {useEffect} from "react";
import "./SemiEngg.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";
import { Icon } from "@iconify/react";
import Textify from "textify.js";
import gsap from "gsap";

import HeadSection from "./HeadSection";
import semi1 from "./assets/semi1.jpg";
import tech from "./assets/tech.jpg";
import DivTest from "./DivTest";
import ThreeDivs from "./ThreeDivs";
import welcome2 from "./images/workPeople.jpg";
import welcome1 from "./images/chipDesign2.jpg";

import Circut2 from "./lottieFiles/circuit2.json";
import star from "./lottieFiles/EmulLottie5.json";
import lottie1 from "./lottieFiles/EmulLottie3.json";
import lottie2 from "./lottieFiles/EmulLottie4.json";

const SemiEngg = () => {
  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const [ref3, inView3] = useInView({});

  const variants1 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
   
    // const textifyConfig = {
    //   el: ".raamm",
    //   observer: {
    //     repeat: true,
    //   },
    //   animation: {
    //     duration: 1,
    //     stagger: 0.1,
    //     ease: "expo.inOut",
    //     transformOrigin: "left right",
    //     animateProps: {
    //       x: "-100%",
    //       y: "0%",
    //     },
    //   },
    // };

    // const paragraphConfig = {
    //   el: ".ramParagraph",
    //   largeText: true,
    //   splitType: "lines",
    //   observer: {
    //     repeat: true,
    //   },
    //   animation: {
    //     by: "lines",
    //     duration: 2,
    //     ease: "power3.inOut",
    //     stagger: 0.1,
    //     animateProps: {
    //       scale: 0.5,
    //       opacity: 0,
    //     },
    //   },
    // };

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
        duration: 0.7,
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
    // const titleInstance = new Textify(textifyConfig, gsap);
    // const paragraphInstance = new Textify(paragraphConfig, gsap);
    // const title2Instance = new Textify(title2Config, gsap);
    // const paragraph3Instance = new Textify(paragraph3Config, gsap);
    const textifyInstance = new Textify(RamConfig, gsap);
  }, []); 



  return (
    <>
      <section class="wrapper bg-soft-primary">
        <HeadSection
          header1="Semiconductor Engineering"
          header2="Administrations oblige a scope of requirements including System"
          imageUrl={semi1}
        />
        <ThreeDivs />
      </section>

      <div className="container pt-md-16"></div>

      <section className="wrapper bg-light">
        <div className="container pt-md-14 pt-8 pt-md-16">
          <div className="row">
            <div className="col-lg-12 mb-10">
              <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
                <div className="col-lg-6 position-relative order-lg-2">
                  <motion.div
                    ref={ref1}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView1 ? "visible" : "hidden"}
                    variants={variants2}
                    transition={{ duration: 2, delay: 0.3 }}
                    className="shape bg-dot primary rellax w-16 h-20"
                    style={{ top: ".5rem", left: ".8rem"}}
                  ></motion.div>
                  <div className="overlap-grid overlap-grid-2">
                    <motion.div
                      className="item"
                      ref={ref2}
                      initial={{ opacity: 0, x: -50 }}
                      animate={inView2 ? "visible" : "hidden"}
                      variants={variants1}
                      transition={{ duration: 1, delay: 0.2 }}
                    >
                      <figure className="rounded shadow">
                        <img className="image-1 ShadowEffect" src={welcome2} alt="" />
                      </figure>
                    </motion.div>

                    <motion.div
                      className="item"
                      ref={ref3}
                      initial={{ opacity: 0, x: 50 }}
                      animate={inView3 ? "visible" : "hidden"}
                      variants={variants2}
                      transition={{ duration: 2, delay: 0.3 }}
                    >
                      <figure className="rounded shadow">
                        <img className="image-2 ShadowEffect" src={welcome1} alt="" />
                      </figure>
                    </motion.div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg  disabled me-4 custom-background">
                        <Player
                          src={Circut2}
                          className="player"
                          loop
                          autoplay
                          style={{ height: "35px", width: "35px" }}
                        />
                      </span>
                    </div>
                    <div className="downtoup">
                      <h4 style={{color:'#1268b3', letterSpacing:'0.1em', fontWeight:'600', textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5), -2px -2px 3px rgba(255, 255, 255, 0.7)'}}>Full Chip and Module Level Signoff Expertise:</h4>
                      <ul className="expertise-list">
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>Static Planning Examination</span>
                        </li>

                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>Dynamic and Spillage Power Analysis</span>
                        </li>
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>Formal Confirmation and Actual Check</span>
                        </li>
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>Low Power Design Implementation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg  disabled me-4 custom-background">
                        <Player
                          src={star}
                          className="player"
                          loop
                          autoplay
                          style={{ height: "35px", width: "35px" }}
                        />
                      </span>
                    </div>
                    <div className="downtoup">
                      <h4 style={{color:'#1268b3', letterSpacing:'0.1em', fontWeight:'600', textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5), -2px -2px 3px rgba(255, 255, 255, 0.7)'}}>
                        ASIC Solutions for IoT, Intelligent Tracking, and
                        Medical Applications:
                      </h4>
                      <ul className="expertise-list">
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>Mixed-Signal Technologies</span>
                        </li>
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>
                            High Precision and High Voltage Capabilities
                          </span>
                        </li>
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>Ultra-Low Power Designs</span>
                        </li>
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>Integration of Sensor-Based ASICs</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg  disabled me-4 custom-background">
                        <Player
                          src={lottie1}
                          className="player"
                          loop
                          autoplay
                          style={{ height: "35px", width: "35px" }}
                        />
                      </span>
                    </div>
                    <div className="downtoup">
                      <h4 style={{color:'#1268b3', letterSpacing:'0.1em', fontWeight:'600', textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5), -2px -2px 3px rgba(255, 255, 255, 0.7)'}}>Expertise in SRAM and Non-Volatile Memories:</h4>
                      <ul className="expertise-list">
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>Leading Edge Technology Nodes</span>
                        </li>
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>State-of-the-Art Synthesis Flows</span>
                        </li>
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>Minimizing Design Risk and Layout Effort</span>
                        </li>
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>Accelerated Time-to-Market</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg  disabled me-4 custom-background">
                        <Player
                          src={lottie2}
                          className="player"
                          loop
                          autoplay
                          style={{ height: "35px", width: "35px" }}
                        />
                      </span>
                    </div>
                    <div className="downtoup">
                      <h4 style={{color:'#1268b3', letterSpacing:'0.1em', fontWeight:'600', textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5), -2px -2px 3px rgba(255, 255, 255, 0.7)'}}>Top-Down Design and Verification Strategy:</h4>
                      <ul className="expertise-list">
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>
                            Perfect Track Record of First-Time-Right Execution
                          </span>
                        </li>
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>
                            Decades of Experience in Design, Layout, Testing,
                            and Manufacturing
                          </span>
                        </li>
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>
                            Design for Test (DfT) and Design for
                            Manufacturability (DfM) Considerations
                          </span>
                        </li>
                        <li>
                          <span class="me-3">
                            <Icon icon="icon-park-outline:check-correct" />
                          </span>
                          <span>
                            Intelligent Test Strategies for Production Cost
                            Optimization
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a id="offerings"></a>
      <section
        className="wrapper image-wrapper bg-image bg-overlay movImage"
        style={{
          backgroundImage: `url(${tech})`,
        }}
      >
        <div className="container py-18">
          <div className="row text-center">
            <div className="col-lg-11 col-xl-10 col-xxl-8 mx-auto">
              <h3 className="display-4 mb-0 text-white px-lg-5 px-xxl-0 fw-bold">
                <span className="fast-flicker3">Our</span>
                <span className="fast-flicker"> Technical</span>
                <span className="fast-flicker1"> Competence</span>
              </h3>
            </div>
          </div>
        </div>
        <DivTest />
      </section>
      {/* <section className="wrapper bg-light">
        <div className="container pt-md-8 pt-8 pt-md-0">
          <div className="row">
            <div className="col-lg-12 mb-10">
              <div className="card col-12 h-100">
                <div className="card-body">
                  <ul className="nav nav-tabs nav-pills">
                    <li className="nav-item">
                      <a
                        className="nav-link active flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-1"
                      >
                        <img
                          src={one}
                          height="50"
                        />
                        <span className="display-block text-uppercase mt-3 fw-bold">
                          ASIC Design and Verification
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link  flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-2"
                      >
                        <img
                          src={two}
                          height="50"
                        />
                        <span className="display-block text-uppercase mt-3 fw-bold">
                          PHYSICAL DESIGN AND DFT SERVICES
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link  flex-column mb-3"
                        data-bs-toggle="tab"
                        href="#tab3-3"
                      >
                        <img
                          src={three}
                          height="50"
                        />
                        <span className="display-block text-uppercase mt-3 fw-bold">
                          Emulation
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mt-0 mt-md-5">
                    <div className="tab-pane fade show active" id="tab3-1">
                      <div className="row">
                        <div className="col-md-8">
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns ">
                            <li>
                              <Icon icon="flat-color-icons:ok" />System Verilog
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />UVM Based
                              Constrained Random Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Test Bench
                              Development
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />SoC and IP
                              Functional Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Subsystem
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Formal
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Power Aware
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Performance Tests
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />SystemC/TLM
                              Modelling
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />VIP Development
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />UVM Development
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <img
                            src={sm1}
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab3-2">
                      <p>
                        With a team of specialized engineers of Physical Design,
                        DFT Synthesis, and STA, TechsoC can give you a one-stop
                        solution for building all kinds of next-generation
                        leadership products. We help customers accelerate their
                        end-to-end product development with our extensive design
                        capabilities.
                      </p>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-6 order-1 order-md-1">
                              <h4>Physical Design Services</h4>
                              <p>
                                Proficient in implementing complex ASICs in 7nm,
                                10nm, 14nm, 16nm and 28nm.
                              </p>
                            </div>
                            <div className="col-md-6 order-2 order-md-3">
                              <p>
                                <strong>
                                  Our physical design services cover the
                                  following
                                </strong>
                              </p>
                              <ul className="icon-list bullet-bg bullet-soft-primary mb-5">
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Die-size
                                  Estimation
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Floor Plan
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Pad Ring &
                                  RDL
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Partition &
                                  Budgeting
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Power-grid
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Low-Power
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Block/Chip
                                  Level
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Clocking
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Physical
                                  Verification
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />DRC/LVS/DFM
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-6 order-3 order-md-2">
                              <h4>DFT, Synthesis and STA</h4>
                              <p>
                                We have experience across various DFT Techniques
                                like Scan, ATPG, Bist, and Boundary Scan, then
                                make TechsoC your first choice.
                              </p>
                            </div>
                            <div className="col-md-6 order-4  order-md-4">
                              <p>
                                <strong>
                                  Our DFT Service suite includes the following
                                </strong>
                              </p>
                              <ul className="icon-list bullet-bg bullet-soft-primary mb-5">
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Scan
                                  Insertion
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Scan
                                  Compression
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />ATPG, MBIST
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />JTAG, B-Scan
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Physical
                                  Aware Synth
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Timing
                                  Closure
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />SI Analysis
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Formal
                                  Verification
                                </li>
                                <li>
                                  <Icon icon="flat-color-icons:ok" />Low-power
                                  Checks
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <img
                            src={sm3}
                            className="w-100 rounded"
                            style={{ height: "400px", objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab3-3">
                      <div className="row">
                        <div className="col-md-8">
                          <p>
                            Experience bug free software with TechsoC’s test
                            automation frameworks and error diagnosis system.
                            Our team of competent engineers working in the STA
                            Emulation and Validation team are experts in
                            prototyping and emulating complex IC designs for
                            streamlined system debugging and software bring-up.
                            Be it board bring-up, development of test automation
                            frameworks, error diagnosis or system debug, our STA
                            Emulation and Validation Services team can provide
                            you with the most suitable solution.
                          </p>

                          <p>
                            Our distinguished team has experience in working
                            with various semiconductor industries across the
                            globe for System Level Testing, Signal Integrity,
                            Bench Marking, Test Content Development and
                            Automation.
                          </p>
                          <p>
                            <strong>
                              Our FPGA Emulation and Validation Portfolio
                              include the following services
                            </strong>
                          </p>
                          <ul className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns">
                            <li>
                              <Icon icon="flat-color-icons:ok" />GLS
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />FPGA design
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />FPGA prototyping
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Emulation
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Post Silicon
                              Validation
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />IP Validation
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Protocol
                              Qualification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Processor Based
                              Emulation
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <img
                            src={case2}
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <footer className="bg-dark text-inverse">
  <div className="container py-13 py-md-15">
    <div className="row gy-6 gy-lg-0">
      <div className="col-lg-4">
        <div className="widget">
          <p className="mb-4">© 2022 TechsoC. All rights reserved.</p>
          
          <!-- /.social -->
        </div>
        <!-- /.widget -->
      </div>
      <!-- /column -->
      
    </div>
    <!--/.row -->
  </div>
  <!-- /.container -->
</footer>  */}
    </>
  );
};

export default SemiEngg;
