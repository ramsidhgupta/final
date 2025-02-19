import React, { useEffect, useState } from "react";
import "./AsicTech.css";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";
import DftCard from "./DftCard";
import BannerZoom from "./BannerZoom";

import animation from "./lottieFiles/Animation - 1711442882485.json";
import Circut from "./lottieFiles/circuit.json";
import Circut5 from "./lottieFiles/circuit5.json";
import chip1 from "./images/chip1.jpg";
import chip2 from "./images/chip2.jpg";
import chip3 from "./images/chip3.jpg";
import BackGround from "./lottieFiles/BackGround4.json";
import AmsDataOne from "./AmsDataOne";


const DftTech = () => {
  const images = [chip1, chip2, chip3];
  const heading1 = "Design For Test";
  const heading2 =
    "Reduce time-to-market, improve test predictability and ensure that your silicon comes up faster and seamlessly.";
  const [isAnimate, setIsAnimate] = useState(false);
  const [ref1, inView1] = useInView({});
  const [ref, inView] = useInView({});
  const [ref2, inView2] = useInView({});

  const [ref3, inView3] = useInView({});


  useEffect(() => {
    if (inView1) {
      setIsAnimate(true);
    } else {
      setIsAnimate(false);
    }
  }, [inView1]);

  const TechData = [
    {
      id: 11,
      lottie: Circut,
      title: "Scan Insertion",
    },
    {
      id: 1,
      lottie: Circut,
      title: "Scan Compression",
    },
    {
      id: 2,
      lottie: Circut,
      title: "ATPG, MBIST",
    },
    {
      id: 3,
      lottie: Circut,
      title: "JTAG, B-Scan",
    },
    {
      id: 4,
      lottie: Circut5,
      title: "Physical Aware Synth",
    },
    {
      id: 5,
      lottie: Circut5,
      title: "Timing Closure",
    },
    {
      id: 6,
      lottie: Circut5,
      title: "SI Analysis",
    },
    {
      id: 7,
      lottie: Circut5,
      title: "Formal Verification", //Remove this
    },
    {
      id: 8,
      lottie: Circut5,
      title: "Low-Power Checks",
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
        <div class="container py-5 py-md-5">
          <div class="row">
            <div
              ref={ref}
              className={`col-md-6 mb-1 ${
                inView
                  ? "animate__animated animate__zoomIn animate__delay-0.5s"
                  : ""
              }`}
            >
              <Player
                src={animation}
                className="player"
                loop
                autoplay
                style={{ height: "540px", width: "100%" }}
              />
            </div>
            <div class="col-md-6 mb-1 text-success">
              <div 
                            ref={ref2}

              className={`card ms-lg-13 bg-success mb-5 ${
                inView2
                  ? "animate__animated animate__zoomIn animate__delay-0.6s"
                  : ""
              }`}
            >
                <div className="card-body p-2">
                  <div className="d-flex flex-row">
                    <div>
                      <h4>Our Vision</h4> 
                      <p className="fw-bold">
                        With a team of specialized engineers of Physical Design,
                        DFT Synthesis, and STA, TechsoC can give you a one-stop
                        solution for building all kinds of next-generation
                        leadership products. We help customers accelerate their
                        end-to-end product development with our extensive design
                        capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                            ref={ref3}

              className={`card ms-lg-13 bg-info mb-5 ${
                inView3
                  ? "animate__animated animate__zoomIn animate__delay-0.5s"
                  : ""
              }`}
            >
                <div className="card-body p-2">
                  <div className="d-flex flex-row">
                    <div>
                    <h4>Our Specilization</h4>

                      <ul className="fw-bold">
                        <li>Architect, methodology & flow</li>
                        <li>Scan insertion & ATPG</li>
                        <li>Memory BIST, LBIST JTAG/TAP implementation</li>
                        <li>Low power, low pin count DFT expert</li>
                        <li>Test vector debug & failure analysis</li>
                        <li>
                          DFT Signoff:
                          <ul>
                            <li>Test coverage</li>
                            <li>DFT area</li>
                            <li>Test timing</li>
                            <li>ATE memory</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="double my-10" />

          <div
            ref={ref}
            className={`d-flex justify-content-center align-items-center text-success ${
              inView
                ? "animate__animated animate__fadeInRight animate__delay-3s"
                : ""
            }`}
          >
            <h2 fw-bold>Our <span style={{color:'blue', fontWeight:'700'}}>DFT Services </span> suite includes the following</h2>
          </div>
          <hr class="double my-10" />
          <div
            ref={ref1}
            className={`row gy-3 gx-xl-8 gayab ${
              isAnimate ? "animationOne" : ""
            }`}
          >
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
          </div>
          <hr class="double my-8" />
          <div
            ref={ref1}
            className={`row gy-3 gx-xl-8 gayab ${
              isAnimate ? "animationTwo" : ""
            }`}
          >
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
              <DftCard Data={TechData[8]} />
            </div>
            <hr class="double my-8" />
          </div>
        </div>
        <AmsDataOne/>
      </section>
    </>
  );
};

export default DftTech;
