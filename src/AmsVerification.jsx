import React from "react";
import "./AsicTech.css";
import { Player } from "@lottiefiles/react-lottie-player";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AmsData from "./AmsData";

import BannerZoom from "./BannerZoom";
import chip1 from "./images/chip1.jpg";
import chip2 from "./images/chip2.jpg";
import chip3 from "./images/chip3.jpg";
import animation1 from "./lottieFiles/WorkingMan.json";
import AmsDataOne from "./AmsDataOne";
import AmsDataTwo from "./AmsDataTwo";
import circle5 from "./lottieFiles/BackGround2.json";

const AmsVerification = () => {
  const [ref, inView] = useInView({});
  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const images = [chip1, chip2, chip3];
  const heading1 = "AMS Verification";
  const heading2 =
    "Committed to delivering high-quality design solutions that meet industry standards";

  const variants1 = {
    initial: { opacity: 0, x: 400 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    initial: { opacity: 0, x: -400 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    initial: { opacity: 0, x: -350 },
    visible: { opacity: 1, x: 0 },
  };

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
          src={circle5}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
        <div class="container py-10 py-md-10">
          <div class="row">
            <div className="col-md-7 mb-1">
              <motion.div
                ref={ref}
                initial="initial"
                animate={inView ? "visible" : "initial"}
                variants={variants2}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Player
                  src={animation1}
                  className="player"
                  loop
                  autoplay
                  style={{ height: "500px", width: "100%" }}
                />
              </motion.div>
              <motion.div
                ref={ref1}
                initial="initial"
                animate={inView1 ? "visible" : "initial"}
                variants={variants1}
                transition={{ duration: 1, delay: 0.3 }}
                className="card ms-lg-13 bg-info"
              >
                <div className="card-body p-2">
                  <div className="d-flex flex-row">
                    <div>
                      <h4 className="mb-1">AMS VERIFICATION FIELDS</h4>
                      <h5 className="mb-1">
                        We provide AMS verification services in the the
                        following areas:
                      </h5>
                      <ul>
                        <li>Analog IP verification</li>
                        <li>
                          Analog modeling (Verilog-AMS, wreal, EEnet)
                          <ul>
                            <li>SoC’s internal analog modules</li>
                            <li>
                              External – test-bench analog modules (e.g.
                              antenna)
                            </li>
                            <li>
                              Model “calibration” – functional test against the
                              schematic
                            </li>
                          </ul>
                        </li>
                        <li>
                          Full top-level verification in both UVM and direct
                          methodologies
                        </li>
                        <li>Power aware, GLS simulations</li>
                        <li>Stress testing, performance analysis</li>
                        <li>Fault injection</li>
                        <li>
                          AMS simulation speed-up (by adapting models or analog
                          simulator settings)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div class="col-md-5 mb-1 mt-4" style={{ color: "#407AFF" }}>
              <motion.div
                ref={ref2}
                initial="initial"
                animate={inView2 ? "visible" : "initial"}
                variants={variants3}
                transition={{ duration: 1, delay: 0.3 }}
                className="card ms-lg-13 bg-info"
              >
                <div className="card-body p-2">
                  <div className="d-flex flex-column">
                    <p>
                      Analog and Mixed-Signal Chip designs bring challenges for
                      many aspects of electronics system development. Optimal
                      sizing and/or value of devices – transistors, resistors,
                      capacitors within an IC is an art and science both. This
                      needs to meet the functional and power requirements of the
                      system at an optimal schedule and cost which requires a
                      deep understanding of the device physics along with the
                      model parameters of the process node.
                    </p>
                    <hr class="double my-10" />
                    <div>
                      <h4 className="mb-1">AMS VERIFICATION PROCESS</h4>
                      <h5 className="mb-1">
                        We typically follow these steps in our analog mixed
                        signal verification projects:
                      </h5>
                      <ul>
                        <li>Project management and planning</li>
                        <li>Verification tools setup</li>
                        <li>Functional spec assessment</li>
                        <li>
                          Verification Metrics, verification plan and test plans
                          definition
                        </li>
                        <li>
                          Verification environment architecture definition,
                          development and maintenance
                        </li>
                        <li>Test suite development and debug</li>
                        <li>Regression runs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <hr class="double my-10" />
          <AmsDataTwo />
          <AmsData />
          <AmsDataOne />
        </div>
      </section>
    </>
  );
};

export default AmsVerification;
