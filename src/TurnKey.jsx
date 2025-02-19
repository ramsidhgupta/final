import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HeadSection from "./HeadSection";
import banner2 from "./assets/banner2.jpg";
import turnkey from "./assets/turnkey.jpg";
import Textify from "textify.js";
import gsap from "gsap";

const TurnKey = () => {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

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

    const paragraphConfig = {
      el: ".ramParagraph",
      largeText: true,
      splitType: "lines",
      observer: {
        repeat: true,
      },
      animation: {
        by: "lines",
        duration: 2,
        ease: "power3.inOut",
        stagger: 0.1,
        animateProps: {
          scale: 0.5,
          opacity: 0,
        },
      },
    };

    const title2Config = {
      el: ".ramHeading",
      observer: {
        repeat: true,
      },
      animation: {
        duration: 0.7,
        ease: "power2.inOut",
        transformOrigin: "left top",
        animateProps: {
          y: "0",
          rotate: -180,
          scale: 0,
        },
      },
    };

    const paragraph3Config = {
      el: ".paragraph-3",
      observer: {
        repeat: true,
      },
      // largeText: true,
      // splitType: "lines",
      animation: {
        by: "lines",
        duration: 0.7,
        ease: "power3.inOut",
        stagger: 0.1,
        transformOrigin: "left top",
        animateProps: {
          rotate: 30,
          opacity: 0,
        },
      },
    };

    // const RamConfig = {
    //   el: ".downtoup",
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
    //       // Define custom properties and their values for animation
    //       opacity: 0, // Animate opacity from 0 to 1
    //       x: "-100px", // Animate horizontal position by 100 pixels
    //       y: "-50px", // Animate vertical position by -50 pixels
    //       scale: 2, // Animate scale to double the size
    //       // rotate: 360, // Animate rotation by 360 degrees
    //     },
    //   },
    // };

    // Initialize Textify for banner title and paragraph with GSAP
    // const titleInstance = new Textify(textifyConfig, gsap);
    const paragraphInstance = new Textify(paragraphConfig, gsap);
    const title2Instance = new Textify(title2Config, gsap);
    const paragraph3Instance = new Textify(paragraph3Config, gsap);
    // const textifyInstance = new Textify(RamConfig, gsap);
  }, []);

  return (
    <>
      <section class="wrapper bg-soft-primary">
        <HeadSection
          header1="Turnkey"
          header2="We offer great end to end services for VLSI Semiconductor companies"
          imageUrl={banner2}
        />
      </section>

      <div class="container pt-md-16"></div>
      <section class="wrapper bg-light">
        <div class="container pt-md-14 pt-8 pt-md-16">
          <div class="row">
            <div class="col-md-6 mb-2">
              <p
                className="ramParagraph"
                style={{
                  lineHeight: "1.3",
                  letterSpacing: "1.2px",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                We have proven experience of driving turnkey projects and ODC
                for Semiconductor product companies. With our experienced
                technical know how and stringent process.
              </p>

              <p
                className="ramParagraph"
                style={{
                  lineHeight: "1.3",
                  letterSpacing: "1.2px",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                We can uphold you as your minimal expense seaward advancement
                place, empowering you to zero in on your vital assets and
                passing on the remainder of the improvement work to us.
              </p>
            </div>
            <div class="col-md-6 mb-2">
              <p
                className="ramParagraph"
                style={{
                  lineHeight: "1.3",
                  letterSpacing: "1.2px",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                TechsoC Systems works in executing ASIC configuration projects
                from determination to GDSII. We influence the times of
                involvement and specialized expertise to execute projects inside
                time and right at the first go. We can rapidly increase groups
                and oversee programs forcefully to guarantee speedy opportunity
                to market and superior grade.
              </p>
            </div>

            <div class="row mb-10">
              <div
                ref={ref2}
                className={`col-md-6 col-lg-6 ${
                  inView2 ? "animate__animated animate__fadeInLeft" : ""
                }`}
              >
                <h4> Benifits</h4>
                <ul class="icon-list bullet-bg bullet-soft-primary mb-0 paragraph-3">
                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>Technical excellence</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>Cutting Edge solutions</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>Less development times</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>Reduced Risk</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>Cost Saving</span>
                  </li>
                </ul>
              </div>
              <div
                ref={ref3}
                className={`col-md-6 col-lg-6 ${
                  inView3 ? "animate__animated animate__fadeInRight" : ""
                }`}
              >
                <h4>Areas of Expertise</h4>

                <ul class="icon-list bullet-bg bullet-soft-primary mb-0 paragraph-3">
                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>ASIC/FPGA Design</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>IP, Subsystem, SoC</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>Design Verification.</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>Analog & Mixed Signal.</span>
                  </li>
                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>Physical Design.</span>
                  </li>

                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>DFT.</span>
                  </li>

                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>STA & Synthesis</span>
                  </li>

                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>POST/PRE Silicon Validation</span>
                  </li>

                  <li>
                    <span>
                      <i class="uil uil-check mt-2"></i>
                    </span>
                    <span>Emulation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="wrapper text-white mt-5"
        style={{ backgroundColor: "#e5af2b" }}
      >
        <div class="container py-10">
          <h3 class="text-white mb-5 ramHeading">
            Some of the key highlights includes
          </h3>
          <ul
            ref={ref}
            className={`icon-list bullet-bg bullet-soft-primary mb-0 two-columns ${
              inView ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            <li>
              <span>
                <i class="uil uil-check mt-2"></i>
              </span>
              <span>
                Engagement models: ODCs, On-site Managed Services & Turnkey
                Fixed Price Projects
              </span>
            </li>
            <li>
              <span>
                <i class="uil uil-check mt-2"></i>
              </span>
              <span>
                Expertise in implementing complex SoCs / ASICs in 5nm, 7nm,
                10nm, 14nm, 16nm, 28nm and other older technology nodes
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section class="wrapper">
        <div class="container py-10">
          <h4>Offerings</h4>
          <p className="paragraph-3">
            We provide a comprehensive range of customized semiconductor
            solution to suit the specific requirements of the clients. Some of
            our semiconductor solutions include.
          </p>

          <div class="row">
            <div class="col-md-8 mb-5">
              <p className="paragraph-3">
                TechsoC is a worldwide semiconductor administrations and
                arrangements supplier and helps its clients' address
                market-driven difficulties. We work intimately with a few
                incorporated gadget makers (IDMs), fabless Semiconductor
                Companies, Original gear makers, Pure Play foundries,
                Engineering Design computerization (EDA) and IP sellers to speed
                up their items to the market.
              </p>

              <p className="paragraph-3">
                Our ability in VLSI plan and confirmation administrations can
                change your item thoughts into practical, strong, execution and
                region streamlined System-on-Chip (SoC). We take special care of
                the developing requests of the 5G, Data Center Infrastructure,
                Automotive, Consumer Electronics and Industrial business
                sectors.
              </p>
            </div>
            <div
              ref={ref}
              className={`col-md-4 ${
                inView ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <img src={turnkey} class="w-100 rounded" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TurnKey;
