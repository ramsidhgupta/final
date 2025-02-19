import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@react-hook/media-query";
import { Player } from "@lottiefiles/react-lottie-player";
import useAnimateOnScroll from './useAnimateOnScroll';

// import Textify from "textify.js";
// import gsap from "gsap";

import Value from "./lottieFiles/ram/blob.json";
import people from "./icons/people.png";
import trust from "./icons/friend.png";
import global_team from "./icons/global_team.png";
import bulb from "./icons/bulb.png";
import safe from "./icons/safe.png";
import device from "./icons/device.png";
import Greeting from "./Greeting";

const HomeThird = () => {
  useAnimateOnScroll('.raamm', { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1, stagger: 0.1, ease: 'expo.inOut' });
  useAnimateOnScroll('.ramParagraph', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, stagger: 0.1, ease: 'power3.inOut' });
  useAnimateOnScroll('.ramHeading', { y: '-100%', rotate: -180, scale: 0 }, { y: '0', rotate: 0, scale: 1, duration: 0.7, ease: 'power2.inOut' });
  useAnimateOnScroll('.paragraph-3', { rotate: 30, opacity: 0 }, { rotate: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.inOut' });
  useAnimateOnScroll('.downtoup', { opacity: 0, x: '-100px', y: '-50px', scale: 2 }, { opacity: 1, x: '0px', y: '0px', scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.inOut' });


  const isMobileView = useMediaQuery("(max-width: 420px)");

  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const [ref3, inView3] = useInView({});
  const [ref4, inView4] = useInView({});
  const [ref5, inView5] = useInView({});
  const [ref6, inView6] = useInView({});
  const [ref11, inView11] = useInView({});
  const [ref12, inView12] = useInView({});
  const [ref13, inView13] = useInView({});
  const [ref14, inView14] = useInView({});
  const [ref15, inView15] = useInView({});
  const [ref16, inView16] = useInView({});

  const variants1 = {
    hidden: { opacity: 0, x: -400 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  // useEffect(() => {
  //   const textifyConfig = {
  //     el: ".raamm",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       duration: 1,
  //       stagger: 0.1,
  //       ease: "expo.inOut",
  //       transformOrigin: "left right",
  //       animateProps: {
  //         x: "-100%",
  //         y: "0%",
  //       },
  //     },
  //   };

  //   const paragraphConfig = {
  //     el: ".ramParagraph",
  //     largeText: true,
  //     splitType: "lines",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       by: "lines",
  //       duration: 2,
  //       ease: "power3.inOut",
  //       stagger: 0.1,
  //       animateProps: {
  //         scale: 0.5,
  //         opacity: 0,
  //       },
  //     },
  //   };

    
  //   const RamConfig = {
  //     el: ".downtoup",
  //     largeText: true,
  //     splitType: "lines",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       by: "lines",
  //       duration: 0.7,
  //       ease: "power3.inOut",
  //       stagger: 0.1,
  //       animateProps: {
         
  //         opacity: 0, 
  //         x: "-100px", 
  //         y: "-50px", 
  //         scale: 2, 
         
  //       },
  //     },
  //   };

    
  //   const titleInstance = new Textify(textifyConfig, gsap);
  //   const paragraphInstance = new Textify(paragraphConfig, gsap);
  //   const textifyInstance = new Textify(RamConfig, gsap);
  // }, []);
  useAnimateOnScroll('.raamm', { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1, stagger: 0.1, ease: 'expo.inOut' });
  useAnimateOnScroll('.ramParagraph', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, stagger: 0.1, ease: 'power3.inOut' });
  useAnimateOnScroll('.ramHeading', { y: '-100%', rotate: -180, scale: 0 }, { y: '0', rotate: 0, scale: 1, duration: 0.7, ease: 'power2.inOut' });
  useAnimateOnScroll('.paragraph-3', { rotate: 30, opacity: 0 }, { rotate: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.inOut' });
  useAnimateOnScroll('.downtoup', { opacity: 0, x: '-100px', y: '-50px', scale: 2 }, { opacity: 1, x: '0px', y: '0px', scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.inOut' });


  return (
    <>
      <section className="wrapper-border">
        <div className="container pt-19 pb-14 pt-md-10 pb-md-16">
          <div
            style={{
              display: "flex",
                      width: "100%",
            }}
          >
            <h2
              className="mb-5 px-lg-14 fw-bold raamm"
              style={{
                letterSpacing: "0.2rem",
                fontWeight: 600,
                flex: "0 0 30%",
              }}
            >
              Why TechsoC
            </h2>
            <div
              style={{
                flex: "0 0 70%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Greeting />
            </div>
          </div>
          <div class="row gx-md-8 gx-xl-12 gy-10">
            <div className="col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
              <Player
                src={Value}
                className="player"
                loop
                autoplay
                style={{ height: "40vh", width: "100%" }}
              />
            </div>

            <div className="col-md-8 col-lg-8">
              <div class="row gx-lg-8 gx-xl-12 gy-2">
                {isMobileView ? (
                  <div
                    ref={ref11}
                    className={`col-md-6 col-lg-4 ${
                      inView11 ? "animate__animated animate__fadeInDown" : ""
                    }`}
                    style={{ visibility: "visible" }}
                  >
                    <div class="card">
                      <div class="card-body">
                        <span class="icon btn btn-circle btn-lg disabled">
                          <span class="number">
                            <img
                              src={people}
                              width="40px"
                              height="40px"
                              alt=""
                            />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">Client First</h4>
                        <p className="downtoup">
                          We succeed when our clients succeed. Our client-driven
                          approach demonstrates our ability to collaborate and
                          execute with excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    ref={ref1}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView1 ? "visible" : "hidden"}
                    variants={variants1}
                    transition={{ duration: 1, delay: 0.3 }}
                    class="col-md-6 col-lg-4"
                  >
                    <div class="card">
                      <div class="card-body">
                        <span class="icon btn btn-circle btn-lg disabled">
                          <span class="number">
                            <img
                              src={people}
                              width="40px"
                              height="40px"
                              alt=""
                            />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">Client First</h4>
                        <p className="downtoup">
                          We succeed when our clients succeed. Our client-driven
                          approach demonstrates our ability to collaborate and
                          execute with excellence.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
                {isMobileView ? (
                  <div
                    ref={ref12}
                    className={`col-md-6 col-lg-4 ${
                      inView12 ? "animate__animated animate__fadeInDown" : ""
                    }`}
                    style={{ visibility: "visible" }}
                  >
                    <div class="card">
                      <div class="card-body">
                        <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                          <span class="number">
                            <img
                              src={trust}
                              width="40px"
                              height="40px"
                              alt=""
                            />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">
                          Integrity is Execution
                        </h4>
                        <p className="downtoup">
                          The culture we continuously build is honest. There are
                          no shortcuts. We deliver excellence with integrity in
                          everything we do.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    ref={ref2}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView2 ? "visible" : "hidden"}
                    variants={variants1}
                    transition={{ duration: 1, delay: 0.5 }}
                    class="col-md-6 col-lg-4"
                  >
                    <div class="card">
                      <div class="card-body">
                        <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                          <span class="number">
                            <img
                              src={trust}
                              width="40px"
                              height="40px"
                              alt=""
                            />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">
                          Integrity is Execution
                        </h4>
                        <p className="downtoup">
                          The culture we continuously build is honest. There are
                          no shortcuts. We deliver excellence with integrity in
                          everything we do.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
                {isMobileView ? (
                  <div
                    ref={ref13}
                    className={`col-md-6 col-lg-4 ${
                      inView13 ? "animate__animated animate__fadeInDown" : ""
                    }`}
                    style={{ visibility: "visible" }}
                  >
                    <div class="card">
                      <div class="card-body">
                        <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                          <span class="number">
                            <img
                              src={global_team}
                              width="40px"
                              height="40px"
                              alt=""
                            />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">
                          Embracing a Global Network
                        </h4>
                        <p className="downtoup">
                          We embrace the power of a global network no matter
                          where you perform business.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    ref={ref3}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView3 ? "visible" : "hidden"}
                    variants={variants1}
                    transition={{ duration: 1, delay: 0.7 }}
                    class="col-md-6 col-lg-4"
                  >
                    <div class="card">
                      <div class="card-body">
                        <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                          <span class="number">
                            <img
                              src={global_team}
                              width="40px"
                              height="40px"
                              alt=""
                            />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">
                          Embracing a Global Network
                        </h4>
                        <p className="downtoup">
                          We embrace the power of a global network no matter
                          where you perform business.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
                {isMobileView ? (
                  <div
                    ref={ref14}
                    className={`col-md-6 col-lg-4 ${
                      inView14 ? "animate__animated animate__fadeInDown" : ""
                    }`}
                    style={{ visibility: "visible" }}
                  >
                    <div class="card">
                      <div class="card-body">
                        <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                          <span class="number">
                            <img src={bulb} width="40px" height="40px" alt="" />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">Driven by Innovation</h4>
                        <p className="downtoup">
                          We challenge innovation at every level. We encourage
                          the growth of our client’s future with our highly
                          motivated and qualified team of engineers.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    ref={ref4}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView4 ? "visible" : "hidden"}
                    variants={variants1}
                    transition={{ duration: 1, delay: 0.5 }}
                    class="col-md-6 col-lg-4"
                  >
                    <div class="card">
                      <div class="card-body">
                        <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                          <span class="number">
                            <img src={bulb} width="40px" height="40px" alt="" />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">Driven by Innovation</h4>
                        <p className="downtoup">
                          We challenge innovation at every level. We encourage
                          the growth of our client’s future with our highly
                          motivated and qualified team of engineers.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
                {isMobileView ? (
                  <div
                    ref={ref15}
                    className={`col-md-6 col-lg-4 ${
                      inView15 ? "animate__animated animate__fadeInDown" : ""
                    }`}
                    style={{ visibility: "visible" }}
                  >
                    <div class="card">
                      <div class="card-body">
                        <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                          <span class="number">
                            <img src={safe} width="40px" height="40px" alt="" />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">
                          100% Transparency & Seamless Collaboration
                        </h4>
                        <p className="downtoup">
                          100% Transparency & Seamless Collaboration with
                          customers to ensure end-to-end customer satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    ref={ref5}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView5 ? "visible" : "hidden"}
                    variants={variants1}
                    transition={{ duration: 1, delay: 0.3 }}
                    class="col-md-6 col-lg-4"
                  >
                    <div class="card">
                      <div class="card-body">
                        <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                          <span class="number">
                            <img src={safe} width="40px" height="40px" alt="" />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">
                          100% Transparency & Seamless Collaboration
                        </h4>
                        <p className="downtoup">
                          100% Transparency & Seamless Collaboration with
                          customers to ensure end-to-end customer satisfaction.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
                {isMobileView ? (
                  <div
                    ref={ref16}
                    className={`col-md-6 col-lg-4 ${
                      inView16 ? "animate__animated animate__fadeInDown" : ""
                    }`}
                    style={{ visibility: "visible" }}
                  >
                    <div class="card">
                      <div class="card-body">
                        {" "}
                        <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                          <span class="number">
                            <img
                              src={device}
                              width="40px"
                              height="40px"
                              alt=""
                            />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">
                          industry-standard best practices
                        </h4>
                        <p className="downtoup">
                          A distinguished advocate of industry-standard best
                          practices and frameworks with Integrity and insured
                          delivery of excellence
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    ref={ref6}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView6 ? "visible" : "hidden"}
                    variants={variants1}
                    transition={{ duration: 1, delay: 0.5 }}
                    class="col-md-6 col-lg-4"
                  >
                    <div class="card">
                      <div class="card-body">
                        {" "}
                        <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                          <span class="number">
                            <img
                              src={device}
                              width="40px"
                              height="40px"
                              alt=""
                            />
                          </span>
                        </span>
                        <h4 class="mb-1 ramParagraph">
                          industry-standard best practices
                        </h4>
                        <p className="downtoup">
                          A distinguished advocate of industry-standard best
                          practices and frameworks with Integrity and insured
                          delivery of excellence
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeThird;
