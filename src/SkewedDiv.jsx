import React from "react";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

import "./SkewedDiv.css";
import ParticlesComponent from "./particles";

export const SkewedDiv = () => {
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  return (
    <>
      <section className="wrapper sec1 size">
        <div className="container pt-md-8 pt-8 pt-md-0"></div>
      </section>
      <section className="wrapper sec2 size">
      
        <ParticlesComponent id="particles" />

        <div class="row mt-5">
          <div
            ref={ref2}
            className={`col-md-6 col-lg-6 col-sm-12 ${
              inView2 ? "animate__animated animate__fadeInLeft" : ""
            }`}
          >
            <p
              style={{
                color: "#1268b3",
                fontWeight: "bold",
                fontSize: "1.55em",
              }}
            >
              {" "}
              Our Comprehensive list of Embedded System Services for various
              industry verticals and horizontals include
            </p>
            <ul
              class="icon-list bullet-bg bullet-soft-primary fw-bold"
              style={{
                color: "#008F58",
                fontSize: "1.1em",
                listStyle: "none",
                textTransform: "capitalize",
              }}
            >
              <li>
                <Icon icon="flat-color-icons:ok" />
                Concept to production turnkey product engineering
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" />
                Firmware, hardware, application development
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" />
                Software design and development
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" />
                Electro mechanical product development
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" />
                Wireless SoC based product development
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" />
                Python application
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" />
                Verification & validation
              </li>
            </ul>
          </div>
          <div
            ref={ref3}
            className={`col-md-6 col-lg-6 col-sm-12 ${
              inView3 ? "animate__animated animate__fadeInRight" : ""
            }`}
          >
            <p
              style={{
                color: "#1268b3",
                fontWeight: "bold",
                fontSize: "1.55em",
              }}
            >
              Below, a few examples of the embedded development services we have
              offered to clients worldwide
            </p>

            <ul
              class="icon-list bullet-bg bullet-soft-primary fw-bold"
              style={{
                color: "#008F58",
                fontSize: "1.1em",
                listStyle: "none",
                textTransform: "capitalize",
              }}
            >
              <li>
                <Icon icon="flat-color-icons:ok" />
                Loop powered design and development
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" />
                Sensor integration and sensor application development
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" />
                Metering application
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" />
                Edge gateway development
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" />
                Enable legacy hardware/machine with IIoT capability
              </li>

              <li>
                <Icon icon="flat-color-icons:ok" />
                Industrial protocol simulator
              </li>

              <li>
                <Icon icon="flat-color-icons:ok" />
                Wireless application development
              </li>

              <li>
                <Icon icon="flat-color-icons:ok" />
                Condition monitoring devices
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" />
                Operator interfaces
              </li>

              <li>
                <Icon icon="flat-color-icons:ok" />
                Multilayer PCB design
              </li>
              <li>
                <Icon icon="flat-color-icons:ok" /> High speed digital and
                analog design
              </li>
            </ul>
          </div>
        </div>

        
      </section>
      <section className="wrapper bg-light sec3 size">
        <div className="container pt-md-8 pt-8 pt-md-0">
          <div className="row">
            <div
              className="col-lg-12 d-flex justify-content-center text-center"
              style={{ marginTop: "8rem" }}
            >
              <div className="text-center">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SkewedDiv;
