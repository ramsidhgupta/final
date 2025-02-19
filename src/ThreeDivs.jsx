
import React from "react";
import "./ThreeDivs.css";
import { useInView } from "react-intersection-observer";

const ThreeDivs = () => {
  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const [ref3, inView3] = useInView({});
  const [ref4, inView4] = useInView({});
  const [ref5, inView5] = useInView({});
  const [ref6, inView6] = useInView({});

  return (
    <div className="features-section pull-up pt-0">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            <div
              ref={ref1}
              className={`feature-block box1_bg col-lg-4 col-md-6 col-sm-12 ${
                inView1 ? "animate__animated animate__fadeInLeft" : ""
              }`}
             
              style={{ visibility: "visible" }}
            >
              <div className="inner-box">
                <div className="title-box">
                  <h5 className="title">About Techsoc</h5>
                </div>
                <div className="text">
                  Techsoc is an advanced Semiconductor services provider,
                  specializing in comprehensive solutions from concept to
                  prototype in the semiconductor sector. Our services encompass
                  digital, analog, high-speed physical interface IP, embedded
                  memory compiler, and EDA modeling.
                </div>
              </div>
            </div>

            <div
              ref={ref2}
              className={`feature-block box2_bg col-lg-4 col-md-6 col-sm-12 ${
                inView2 ? "animate__animated animate__fadeInLeft" : ""
              }`}
              style={{ visibility: "visible" }}
            >
              <div className="inner-box">
                <div className="title-box">
                  <h5 className="title">
                    Preferred Partner for Industry Leaders
                  </h5>
                </div>
                <div className="text">
                  We are the chosen semiconductor design partner for several
                  companies in automotive, consumer electronics, industrial IoT,
                  and medical electronics, helping clients meet time-to-market
                  goals with first-pass silicon designs and state-of-the-art
                  System-on-Chip (SoC) solutions.
                </div>
              </div>
            </div>

            <div
              ref={ref3}
              className={`feature-block box3_bg col-lg-4 col-md-6 col-sm-12 ${
                inView3 ? "animate__animated animate__fadeInRight" : ""
              }`}
              style={{ visibility: "visible" }}
            >
              <div className="inner-box">
                <div className="title-box">
                  <h5 className="title">
                    Global Leader in Semiconductor Solutions
                  </h5>
                </div>
                <div className="text">
                  Techsoc is rapidly establishing itself as a global leader in
                  semiconductor solutions, offering end-to-end services in the
                  semiconductor, embedded systems, and IT sectors. We support
                  clients in achieving immediate successes and long-term results
                  by delivering innovative services swiftly and efficiently.
                </div>
              </div>
            </div>
            <div
              ref={ref4}
              className={`feature-block box4_bg col-lg-4 col-md-6 col-sm-12 ${
                inView4 ? "animate__animated animate__fadeInLeft" : ""
              }`}
              style={{ visibility: "visible" }}
            >
              <div className="inner-box">
                <div className="title-box">
                  <h5 className="title">Innovative Semiconductor Solutions</h5>
                </div>
                <div className="text">
                  We re-engineer portable communication and computation
                  functionality with our VLSI circuits, which deliver
                  high-performance and efficient designs. Our solutions
                  integrate fault diagnosis, testing, simulation, power
                  estimation, and synthesis using smart VLSI technology.
                </div>
              </div>
            </div>
            <div
              ref={ref5}
              className={`feature-block box5_bg col-lg-4 col-md-6 col-sm-12 ${
                inView5 ? "animate__animated animate__zoomIn" : ""
              }`}
              style={{ visibility: "visible" }}
            >
              <div className="inner-box">
                <div className="title-box">
                  <h5 className="title">
                    Comprehensive Semiconductor Services
                  </h5>
                </div>
                <div className="text">
                  Our ASIC/FPGA division focuses on silicon chip innovation,
                  offering RTL design, design verification, physical design,
                  analog design, and layout services, along with RTL to GDSII
                  solutions to help technology companies monetize their
                  expertise.
                </div>
              </div>
            </div>

            <div
              ref={ref6}
              className={`feature-block box6_bg col-lg-4 col-md-6 col-sm-12 ${
                inView6 ? "animate__animated animate__fadeInRight" : ""
              }`}
              style={{ visibility: "visible" }}
            >
              <div className="inner-box">
                <div className="title-box">
                  <h5 className="title">Full-Flow IC Design Services</h5>
                </div>
                <div className="text">
                  Techsoc provides comprehensive IC design services, from
                  turnkey solutions to IP block development and staff
                  augmentation. Our services, supported by tools like Cadence,
                  Synopsys, and Mentor Graphics, scale according to project
                  needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDivs;
