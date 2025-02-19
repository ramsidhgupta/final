import React, { useState, useEffect } from "react";
import "./AsicTech.css";
import BannerZoom from "./BannerZoom";

import { useInView } from "react-intersection-observer";

import { Player } from "@lottiefiles/react-lottie-player";
import EmulCard from "./EmulCard";

import Emulmain from "./lottieFiles/EmulMain.json";
import EmulLottie1 from "./lottieFiles/EmulLottie1.json";
import EmulLottie2 from "./lottieFiles/EmulLottie2.json";
import EmulLottie3 from "./lottieFiles/EmulLottie3.json";
import EmulLottie4 from "./lottieFiles/EmulLottie4.json";
import EmulLottie5 from "./lottieFiles/EmulLottie5.json";
import EmulLottie6 from "./lottieFiles/EmulLottie6.json";
import EmulLottie7 from "./lottieFiles/EmulLottie7.json";
import EmulLottie8 from "./lottieFiles/EmulLottie8.json";
import EmulLottie9 from "./lottieFiles/circuit.json";
import BackGround from "./lottieFiles/BackGround5.json";

import chip1 from "./images/chip1.jpg";
import chip2 from "./images/chip2.jpg";
import chip3 from "./images/chip3.jpg";
import AmsDataOne from "./AmsDataOne";

const EmulTech = () => {
  const images = [chip1, chip2, chip3];
  const heading1 = "Emulation";
  const heading2 =
  "Committed to delivering high-quality design solutions that meet industry standards";

  const [isAnimate, setIsAnimate] = useState(false);
  const [ref1, inView1] = useInView({});
  const [ref, inView] = useInView({});

  useEffect(() => {
    if (inView1) {
      setIsAnimate(true);
    } else {
      setIsAnimate(false);
    }
  }, [inView1]);

  const EmulData = [
    {
      id: 11,
      lottie: EmulLottie1,
      title: "Emulaion",
    },
    {
      id: 1,
      lottie: EmulLottie2,
      title: "FPGA Design",
    },
    {
      id: 2,
      lottie: EmulLottie3,
      title: "FPGA Prototyping",
    },
    {
      id: 3,
      lottie: EmulLottie4,
      title: "IP Validation",
    },
    {
      id: 4,
      lottie: EmulLottie5,
      title: "Protocol Qualification",
    },
    {
      id: 5,
      lottie: EmulLottie6,
      title: "GLS",
    },
    {
      id: 6,
      lottie: EmulLottie7,
      title: "Post Silicon Validation",
    },
    {
      id: 7,
      lottie: EmulLottie8,
      title: "Processor Based Emulation",
    },
    {
      id: 8,
      lottie: EmulLottie9,
      title: "Iterative Design Process",
    },
  ];

  return (
    <>
      <section class="wrapper-border bg-light mt-5">
        <BannerZoom images={images} heading1={heading1} heading2={heading2}/>
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

        <div class="container py-10 py-md-10">
          <div class="row">
            <div
              ref={ref}
              className={`col-md-7 mb-1 ${
                inView
                  ? "animate__animated animate__fadeInLeft animate__delay-0.5s"
                  : ""
              }`}
            >
              <Player
                src={Emulmain}
                className="player"
                loop
                autoplay
                style={{
                  height: "640px",
                  width: "640px",
                  marginLeft: "1rem",
                  marginTop: "-6rem",
                }}
              />
            </div>
            <div class="col-md-5 mb-2" style={{ color: "#FF812C" }}>
              <div className="card ms-lg-13 bg-info">
                <div className="card-body p-2">
                  <p
                    ref={ref}
                    className={`lead fw-bold ${
                      inView
                        ? "animate__animated animate__fadeInRight animate__delay-1s"
                        : ""
                    }`}
                  >
                    Experience bug free software with TechsoC’s test automation
                    frameworks and error diagnosis system. Our team of competent
                    engineers working in the FPGA Emulation, STA and Validation
                    team are experts in prototyping and emulating complex IC
                    designs for streamlined system debugging and software
                    bring-up. Be it board bring-up, development of test
                    automation frameworks, error diagnosis or system debug, our
                    FPGA Emulation, STA and Validation Services team can provide
                    you with the most suitable solution.
                  </p>

                  <div className="d-flex flex-row">
                    <div>
                      <h4 className="mb-1">Our Experties</h4>
                      <ul className="fw-bold">
                        <li>ASIC / IP Prototyping with FPGA</li>
                        <li>Processor-based emulation</li>
                        <li>
                          FPGA-to-FPGA, FPGA-to-ASIC, ASIC-to-FPGA conversion
                        </li>
                        <li>Embedded hardware and software support</li>
                        <li>Board design and bring-up</li>
                        <li>System Integration & Validation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
          <div
            ref={ref}
            className={`d-flex justify-content-center align-items-center text-info ${
              inView
                ? "animate__animated animate__fadeInRight animate__delay-3s"
                : ""
            }`}
          >
            <h2 fw-bold style={{ color: "#FF812C" }}>
              Our FPGA Emulation and Validation Portfolio include the following
              services
            </h2>
          </div>
          <hr class="double my-10" />
          <div
            ref={ref1}
            className={`row gy-3 gx-xl-8 gayab ${
              isAnimate ? "animationOne" : ""
            }`}
          >
            <div className="col-lg-3">
              <EmulCard Data={EmulData[0]} />
            </div>
            <div className="col-lg-3">
              <EmulCard Data={EmulData[1]} />
            </div>
            <div className="col-lg-3">
              <EmulCard Data={EmulData[2]} />
            </div>
            <div className="col-lg-3">
              <EmulCard Data={EmulData[3]} />
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
              <EmulCard Data={EmulData[4]} />
            </div>

            <div className="col-lg-3">
              <EmulCard Data={EmulData[5]} />
            </div>
            <div className="col-lg-3">
              <EmulCard Data={EmulData[6]} />
            </div>
            <div className="col-lg-3">
              <EmulCard Data={EmulData[7]} />
            </div>
            <hr class="double my-8" />
            <div className="col-lg-3">
              <EmulCard Data={EmulData[8]} />
            </div>
          </div>
          <hr class="double my-10" />
        </div>
        <AmsDataOne/>
      </section>
    </>
  );
};

export default EmulTech;
