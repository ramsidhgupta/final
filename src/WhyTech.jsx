import React, {useEffect} from "react";
import "./WhyTech.css";
import { Player } from "@lottiefiles/react-lottie-player";
import Circut4 from "./lottieFiles/circuit4.json";
import Circut6 from "./lottieFiles/circuit6.json";
import Circut7 from "./lottieFiles/circuit7.json";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";
import Textify from "textify.js";
import gsap from "gsap";

export const WhyTech = () => {
  const variants1 = {
    hidden: { opacity: 0, x: 350 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: -350 },
    visible: { opacity: 1, x: 0 },
  };

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
          
          opacity: 0, 
          x: "-100px", 
          y: "-50px", 
          scale: 2, 
          rotate: 360, // Animate rotation by 360 degrees
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
      <section class="Piller-at">
        <div class="container">
          <div class="d-flex justify-content-center align-items-center">
            <h2>Pillars Of Our Services</h2>
          </div>
          <div class="row">
            {isMobileView ? (
              <div
                ref={ref11}
                className={`col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4 ${
                  inView11 ? "animate__animated animate__fadeInDown" : ""
                }`}
                style={{ visibility: "visible" }}
              >
                <div
                  style={{ backgroundColor: "transparent" }}
                  className="card"
                >
                  <div class="card-body downtoup">
                    <h1>Technology</h1>
                    <p class="fw-bold fs-5 text-white" style={{letterSpacing:'0.1em'}}>
                      We are providing services to the manufacturing facilities
                      and for advanced Equipment from world leading brand.
                    </p>

                    <i
                      className="iPiller"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "2rem",
                        left: "18rem",
                      }}
                    >
                      <svg
                        class="svg-path"
                        width="60px"
                        height="60px"
                        viewBox="0 0 60 60"
                        fill="rgb(0, 0, 103)"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            class="path"
                            stroke-width="1"
                            fill="blue"
                            stroke="#000000"
                            d="M1.3,39.4c0.4-0.9,0.9-1.6,1.8-1.8c1.2-0.3,2.3,0.3,2.8,1.3c0.5,1.1,0.1,2.4-0.9,3c-0.4,0.2-0.5,0.5-0.5,0.9c0,1.3,0,2.7,0,4c0,0.2,0.1,0.6,0.3,0.7c1.8,1.8,3.6,3.6,5.3,5.4c0.2,0.2,0.5,0.3,0.7,0.3c1.8,0,3.6,0,5.4,0c0.3,0,0.5-0.1,0.7-0.4c0.6-1,1.7-1.4,2.8-1.1c1,0.3,1.7,1.3,1.7,2.3c0,1.1-0.7,2-1.8,2.3c-1.1,0.3-2.2-0.1-2.7-1.1c-0.2-0.3-0.4-0.4-0.7-0.4c-2,0-4,0-5.9,0c-0.3,0-0.8-0.2-1-0.4c-2.1-2-4.1-4.1-6.2-6.1c-0.3-0.3-0.4-0.7-0.4-1.1c0-1.6,0-3.1,0-4.7c0-0.3-0.1-0.5-0.4-0.7c-0.7-0.3-1-1-1.2-1.6C1.3,40.1,1.3,39.7,1.3,39.4z M4.5,40.1c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C4,40.5,4.2,40.2,4.5,40.1z M19.8,54.4c0-0.6-0.2-0.8-0.6-0.8c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.2,0.7,0.6,0.6C19.4,54.7,19.7,54.5,19.8,54.4z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="red"
                            stroke="#000000"
                            d="M55.3,32.3c-0.2,0.2-0.4,0.3-0.5,0.5c-1.9,1.9-3.8,3.8-5.7,5.7c-0.4,0.4-0.9,0.6-1.5,0.6c-4.3,0-8.5,0-12.8,0c-0.4,0-0.6,0.1-0.8,0.4c-0.6,0.9-1.7,1.3-2.7,1c-1-0.3-1.7-1.3-1.7-2.4c0-1.1,0.7-2,1.7-2.3c1-0.3,2.2,0.1,2.7,1c0.2,0.3,0.4,0.4,0.8,0.4c4.1,0,8.3,0,12.4,0c0.4,0,0.7-0.1,0.9-0.4c2.4-2.4,4.8-4.8,7.2-7.2c0.1-0.1,0.2-0.3,0.4-0.3c0.3-0.1,0.7-0.2,0.9-0.1c0.2,0.1,0.4,0.5,0.5,0.7c0.1,0.2,0,0.4,0,0.6c0,7.2,0,14.4,0,21.6c0,0.4,0.1,0.6,0.4,0.9c0.9,0.6,1.3,1.7,1,2.7c-0.3,1-1.3,1.8-2.4,1.7c-1.1,0-2-0.8-2.3-1.8c-0.3-1,0.1-2.1,1.1-2.7c0.2-0.1,0.4-0.4,0.4-0.6c0-6.6,0-13.2,0-19.8C55.4,32.5,55.3,32.4,55.3,32.3z M32.7,38.3c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C32.3,38.7,32.5,38.5,32.7,38.3z M55.5,54.9c0,0.1,0,0.2,0,0.3c0.2,0.2,0.5,0.4,0.7,0.5c0.4,0,0.6-0.2,0.6-0.6c0-0.4-0.3-0.7-0.6-0.6C56,54.4,55.8,54.7,55.5,54.9z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="green"
                            stroke="#000000"
                            d="M17.2,21c0.3,0,0.5,0,0.7,0c7.7,0,15.5,0,23.2,0c0.7,0,1.2,0.2,1.6,0.7c0.9,1,1.9,1.9,2.8,2.8c0.2,0.2,0.5,0.3,0.7,0.2c1.1-0.1,2.1,0.4,2.6,1.4c0.4,1,0.2,2.2-0.6,2.9c-0.8,0.7-2,0.8-2.9,0.2c-0.9-0.6-1.3-1.7-1-2.7c0.2-0.4,0-0.7-0.3-1c-0.8-0.8-1.6-1.5-2.3-2.3c-0.3-0.3-0.5-0.4-0.9-0.4c-8,0-16.1,0-24.1,0c-1,0-1.3-0.2-1.3-1.3c0-4.7,0-9.3,0-14c0-0.4-0.1-0.6-0.4-0.8C14.1,6.1,13.7,5,14,4c0.3-1,1.3-1.8,2.4-1.7c1,0,2,0.7,2.3,1.7c0.3,1.1-0.1,2.2-1,2.8c-0.2,0.1-0.4,0.2-0.4,0.6c0,4.5,0,8.9,0,13.4C17.2,20.7,17.2,20.8,17.2,21z M17,4.8c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4-0.1-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C16.6,5.2,16.8,5,17,4.8z M47.4,27.3c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C46.9,27.7,47.1,27.4,47.4,27.3z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="yellow"
                            stroke="#000000"
                            d="M43.2,52.5c0-1.4,0-2.8,0-4.2c0-0.6,0.2-1.1,0.6-1.5c0.9-0.9,1.9-1.9,2.8-2.8c0.2-0.2,0.3-0.4,0.2-0.7c-0.3-1.1,0.1-2.2,1-2.8c0.9-0.6,2.1-0.5,2.9,0.2c0.8,0.7,1,1.9,0.6,2.9c-0.5,1-1.5,1.5-2.6,1.4c-0.2,0-0.6,0.1-0.7,0.2c-0.9,0.8-1.8,1.7-2.6,2.6c-0.2,0.2-0.3,0.5-0.3,0.8c0,1.4,0,2.9,0,4.3c0,1.1-0.2,1.3-1.3,1.3c-1.9,0-3.7,0-5.6,0c-0.5,0-0.9-0.2-1.3-0.6c-4.7-4.7-9.4-9.4-14.1-14.1c-0.3-0.3-0.5-0.4-1-0.3c-1,0.2-2.1-0.4-2.5-1.4c-0.4-1-0.2-2.1,0.5-2.8c0.8-0.7,1.9-0.9,2.9-0.4c0.9,0.5,1.5,1.6,1.2,2.6c-0.2,0.6,0,0.9,0.4,1.2c4.5,4.4,8.9,8.9,13.4,13.4c0.4,0.4,0.7,0.5,1.3,0.5C40.3,52.5,41.7,52.5,43.2,52.5z M22.2,37.1c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4-0.1-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C21.7,37.5,22,37.2,22.2,37.1z M49.9,42.8c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C49.4,43.2,49.6,42.9,49.9,42.8z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="skyblue"
                            stroke="#000000"
                            d="M9.3,40.5c0,0.8,0,1.6,0,2.5c0,0.3,0.1,0.5,0.4,0.7c1,0.6,1.4,1.7,1.1,2.8c-0.3,1.1-1.4,1.8-2.6,1.7c-1.1-0.1-2-0.9-2.2-2c-0.2-0.9,0.3-1.9,1.1-2.5c0.3-0.2,0.4-0.4,0.4-0.7c0-1.5,0-3,0-4.4c0-0.3-0.1-0.6-0.3-0.8c-1.3-1.3-2.6-2.6-3.9-3.9c-0.3-0.3-0.5-0.6-0.5-1.1c0-1.6,0-3.2,0-4.8c0-0.5,0.1-0.8,0.5-1.1c2.1-2.1,4.2-4.2,6.3-6.3c0.2-0.2,0.3-0.5,0.3-0.8c0-2.3,0-4.6,0-6.9c0-0.3-0.1-0.5-0.4-0.7c-1-0.6-1.4-1.7-1-2.8c0.3-1,1.3-1.7,2.3-1.7c1.1,0,2.1,0.7,2.4,1.7c0.3,1.1-0.1,2.2-1.1,2.8c-0.3,0.2-0.4,0.4-0.4,0.7c0,2.5,0,4.9,0,7.4c0,0.5-0.1,0.9-0.5,1.2c-2.1,2.1-4.2,4.1-6.2,6.2c-0.2,0.2-0.4,0.6-0.4,0.9c0,1.2,0,2.4,0,3.7c0,0.2,0.1,0.5,0.3,0.7c1.3,1.3,2.5,2.6,3.8,3.9c0.4,0.4,0.6,0.8,0.6,1.3C9.3,38.9,9.3,39.7,9.3,40.5z M11.6,10.2c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.5-0.7-0.5c-0.4-0.1-0.6,0.2-0.6,0.6c0,0.4,0.2,0.7,0.6,0.6C11.1,10.6,11.3,10.4,11.6,10.2z M8.6,45c-0.1,0-0.2,0-0.3,0c-0.2,0.2-0.5,0.5-0.5,0.7c-0.1,0.4,0.2,0.6,0.6,0.6c0.4,0,0.7-0.3,0.6-0.6C9,45.5,8.8,45.3,8.6,45z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="black"
                            stroke="#000000"
                            d="M24.1,15.2c0.3,0,0.5,0,0.8,0c8.1,0,16.2,0,24.3,0c0.6,0,1.1,0.2,1.5,0.6c0.6,0.6,1.1,1.2,1.7,1.7c0.1,0.1,0.4,0.2,0.6,0.2c1.5-0.3,2.7,0.6,3,2.1c0.2,1.3-0.7,2.6-2,2.7c-1.4,0.2-2.7-0.7-2.8-2.1c0-0.3,0-0.6,0.1-0.8c0.2-0.4-0.1-0.6-0.3-1c-1-1.4-2.3-1.7-4-1.7c-7.8,0.1-15.5,0-23.3,0c-1.2,0-1.4-0.2-1.4-1.4c0-0.9,0-1.9,0-2.8c0-0.3-0.1-0.5-0.4-0.7c-1-0.6-1.4-1.7-1.1-2.8c0.3-1,1.3-1.7,2.3-1.7c1.1,0,2,0.7,2.3,1.8c0.3,1.1-0.1,2.2-1.1,2.8c-0.3,0.2-0.4,0.4-0.4,0.7C24.1,13.5,24.1,14.3,24.1,15.2z M53.4,20.9c0.1,0,0.2,0,0.3,0c0.2-0.2,0.4-0.5,0.5-0.7c0-0.4-0.2-0.6-0.6-0.6c-0.4,0-0.7,0.3-0.6,0.6C53,20.4,53.3,20.6,53.4,20.9z M23,10.7c0.1,0,0.2,0,0.3,0c0.2-0.2,0.5-0.5,0.5-0.7c0.1-0.4-0.2-0.6-0.6-0.6c-0.4,0-0.7,0.2-0.6,0.6C22.6,10.2,22.9,10.5,23,10.7z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="none"
                            stroke="#000000"
                            d="M15.3,37.5c0,1.1,0,2.2,0,3.3c0,0.2,0.1,0.5,0.3,0.7c3.7,3.7,7.3,7.4,11,11c0.1,0.1,0.5,0.2,0.7,0.2c1.4-0.3,2.7,0.6,2.9,1.9c0.2,1.4-0.6,2.7-2.1,2.9c-1.6,0.3-3.1-1.3-2.7-3c0.1-0.4,0-0.6-0.2-0.8c-3.7-3.7-7.4-7.4-11.2-11.2c-0.4-0.4-0.6-0.8-0.6-1.4c0-2.1,0-4.2,0-6.2c0-0.3-0.1-0.6-0.3-0.8c-0.8-0.8-1.6-1.6-2.4-2.4c-0.2-0.2-0.5-0.3-0.8-0.2c-1.3,0.3-2.6-0.6-2.9-1.9c-0.3-1.3,0.5-2.5,1.8-2.9c1.3-0.3,2.6,0.4,2.9,1.7c0.1,0.4,0.1,0.9,0,1.3c-0.1,0.4,0,0.6,0.2,0.8c0.3,0.3,0.6,0.6,1,0.9c0.7,0.8,1.7,1.4,2.1,2.3c0.4,0.9,0.1,2,0.1,3.1C15.3,37,15.3,37.3,15.3,37.5z M10.3,29.2c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.5-0.7-0.5c-0.4-0.1-0.6,0.2-0.6,0.6c0,0.4,0.2,0.7,0.6,0.6C9.8,29.6,10,29.4,10.3,29.2z M28.6,55.1c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.8-0.5c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.7,0.6C28.1,55.6,28.3,55.3,28.6,55.1z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="orange"
                            stroke="#000000"
                            d="M16,25.5c0.7,0,1.5,0.4,1.9,1.2c0.2,0.3,0.4,0.4,0.7,0.4c2.6,0,5.1,0,7.7,0c0.6,0,1,0.2,1.4,0.6c1.1,1.1,2.2,2.2,3.3,3.3c0.2,0.2,0.5,0.3,0.8,0.3c2.3,0,4.7,0,7,0c0.3,0,0.5-0.1,0.7-0.4c0.6-1,1.7-1.4,2.8-1.1c1,0.3,1.8,1.3,1.8,2.4c0,1.1-0.8,2.1-1.8,2.3c-1.1,0.3-2.2-0.1-2.8-1.1c-0.2-0.3-0.4-0.4-0.7-0.4c-2.5,0-5,0-7.5,0c-0.5,0-0.9-0.1-1.3-0.5c-1.1-1.2-2.3-2.3-3.5-3.5c-0.2-0.2-0.5-0.3-0.7-0.3c-2.4,0-4.9,0-7.3,0c-0.4,0-0.6,0.1-0.7,0.4c-0.6,1-1.9,1.4-2.9,0.9c-1.1-0.4-1.7-1.6-1.5-2.7C13.7,26.3,14.7,25.5,16,25.5z M42.4,32.4c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.5-0.7-0.5c-0.4-0.1-0.6,0.2-0.7,0.6c0,0.4,0.2,0.7,0.6,0.6C41.9,32.8,42.1,32.5,42.4,32.4z M15.7,28.6c0.1,0,0.2,0,0.3,0c0.2-0.2,0.5-0.5,0.5-0.7c0.1-0.4-0.2-0.6-0.6-0.6c-0.4,0-0.7,0.2-0.6,0.6C15.3,28.1,15.6,28.4,15.7,28.6z"
                          />
                        </g>
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            ) : (
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4">
                <motion.div
                  style={{ backgroundColor: "transparent" }}
                  ref={ref1}
                  initial="hidden"
                  animate={inView1 ? "visible" : "hidden"}
                  variants={variants2}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="card equal-height"
                >
                  <div class="card-body">
                    <div class="columnPiller">
                      <div class="card-block txt equal-size text-center">
                        <h1>Technology</h1>
                        <p class="fw-bold fs-5">
                          We are providing services to the manufacturing
                          facilities and for advanced Equipment from world
                          leading brand.
                        </p>
                        <div class="ico-card">
                          <i
                            className="iPiller"
                            style={{
                              display: "block",
                              position: "absolute",
                              top: "3rem",
                              left: "14rem",
                            }}
                          >
                            <svg
                              class="svg-path"
                              width="60px"
                              height="60px"
                              viewBox="0 0 60 60"
                              fill="rgb(0, 0, 103)"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <path
                                  class="path"
                                  stroke-width="1"
                                  fill="blue"
                                  stroke="#000000"
                                  d="M1.3,39.4c0.4-0.9,0.9-1.6,1.8-1.8c1.2-0.3,2.3,0.3,2.8,1.3c0.5,1.1,0.1,2.4-0.9,3c-0.4,0.2-0.5,0.5-0.5,0.9c0,1.3,0,2.7,0,4c0,0.2,0.1,0.6,0.3,0.7c1.8,1.8,3.6,3.6,5.3,5.4c0.2,0.2,0.5,0.3,0.7,0.3c1.8,0,3.6,0,5.4,0c0.3,0,0.5-0.1,0.7-0.4c0.6-1,1.7-1.4,2.8-1.1c1,0.3,1.7,1.3,1.7,2.3c0,1.1-0.7,2-1.8,2.3c-1.1,0.3-2.2-0.1-2.7-1.1c-0.2-0.3-0.4-0.4-0.7-0.4c-2,0-4,0-5.9,0c-0.3,0-0.8-0.2-1-0.4c-2.1-2-4.1-4.1-6.2-6.1c-0.3-0.3-0.4-0.7-0.4-1.1c0-1.6,0-3.1,0-4.7c0-0.3-0.1-0.5-0.4-0.7c-0.7-0.3-1-1-1.2-1.6C1.3,40.1,1.3,39.7,1.3,39.4z M4.5,40.1c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C4,40.5,4.2,40.2,4.5,40.1z M19.8,54.4c0-0.6-0.2-0.8-0.6-0.8c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.2,0.7,0.6,0.6C19.4,54.7,19.7,54.5,19.8,54.4z"
                                />
                                <path
                                  class="path"
                                  stroke-width="1"
                                  fill="red"
                                  stroke="#000000"
                                  d="M55.3,32.3c-0.2,0.2-0.4,0.3-0.5,0.5c-1.9,1.9-3.8,3.8-5.7,5.7c-0.4,0.4-0.9,0.6-1.5,0.6c-4.3,0-8.5,0-12.8,0c-0.4,0-0.6,0.1-0.8,0.4c-0.6,0.9-1.7,1.3-2.7,1c-1-0.3-1.7-1.3-1.7-2.4c0-1.1,0.7-2,1.7-2.3c1-0.3,2.2,0.1,2.7,1c0.2,0.3,0.4,0.4,0.8,0.4c4.1,0,8.3,0,12.4,0c0.4,0,0.7-0.1,0.9-0.4c2.4-2.4,4.8-4.8,7.2-7.2c0.1-0.1,0.2-0.3,0.4-0.3c0.3-0.1,0.7-0.2,0.9-0.1c0.2,0.1,0.4,0.5,0.5,0.7c0.1,0.2,0,0.4,0,0.6c0,7.2,0,14.4,0,21.6c0,0.4,0.1,0.6,0.4,0.9c0.9,0.6,1.3,1.7,1,2.7c-0.3,1-1.3,1.8-2.4,1.7c-1.1,0-2-0.8-2.3-1.8c-0.3-1,0.1-2.1,1.1-2.7c0.2-0.1,0.4-0.4,0.4-0.6c0-6.6,0-13.2,0-19.8C55.4,32.5,55.3,32.4,55.3,32.3z M32.7,38.3c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C32.3,38.7,32.5,38.5,32.7,38.3z M55.5,54.9c0,0.1,0,0.2,0,0.3c0.2,0.2,0.5,0.4,0.7,0.5c0.4,0,0.6-0.2,0.6-0.6c0-0.4-0.3-0.7-0.6-0.6C56,54.4,55.8,54.7,55.5,54.9z"
                                />
                                <path
                                  class="path"
                                  stroke-width="1"
                                  fill="green"
                                  stroke="#000000"
                                  d="M17.2,21c0.3,0,0.5,0,0.7,0c7.7,0,15.5,0,23.2,0c0.7,0,1.2,0.2,1.6,0.7c0.9,1,1.9,1.9,2.8,2.8c0.2,0.2,0.5,0.3,0.7,0.2c1.1-0.1,2.1,0.4,2.6,1.4c0.4,1,0.2,2.2-0.6,2.9c-0.8,0.7-2,0.8-2.9,0.2c-0.9-0.6-1.3-1.7-1-2.7c0.2-0.4,0-0.7-0.3-1c-0.8-0.8-1.6-1.5-2.3-2.3c-0.3-0.3-0.5-0.4-0.9-0.4c-8,0-16.1,0-24.1,0c-1,0-1.3-0.2-1.3-1.3c0-4.7,0-9.3,0-14c0-0.4-0.1-0.6-0.4-0.8C14.1,6.1,13.7,5,14,4c0.3-1,1.3-1.8,2.4-1.7c1,0,2,0.7,2.3,1.7c0.3,1.1-0.1,2.2-1,2.8c-0.2,0.1-0.4,0.2-0.4,0.6c0,4.5,0,8.9,0,13.4C17.2,20.7,17.2,20.8,17.2,21z M17,4.8c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4-0.1-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C16.6,5.2,16.8,5,17,4.8z M47.4,27.3c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C46.9,27.7,47.1,27.4,47.4,27.3z"
                                />
                                <path
                                  class="path"
                                  stroke-width="1"
                                  fill="yellow"
                                  stroke="#000000"
                                  d="M43.2,52.5c0-1.4,0-2.8,0-4.2c0-0.6,0.2-1.1,0.6-1.5c0.9-0.9,1.9-1.9,2.8-2.8c0.2-0.2,0.3-0.4,0.2-0.7c-0.3-1.1,0.1-2.2,1-2.8c0.9-0.6,2.1-0.5,2.9,0.2c0.8,0.7,1,1.9,0.6,2.9c-0.5,1-1.5,1.5-2.6,1.4c-0.2,0-0.6,0.1-0.7,0.2c-0.9,0.8-1.8,1.7-2.6,2.6c-0.2,0.2-0.3,0.5-0.3,0.8c0,1.4,0,2.9,0,4.3c0,1.1-0.2,1.3-1.3,1.3c-1.9,0-3.7,0-5.6,0c-0.5,0-0.9-0.2-1.3-0.6c-4.7-4.7-9.4-9.4-14.1-14.1c-0.3-0.3-0.5-0.4-1-0.3c-1,0.2-2.1-0.4-2.5-1.4c-0.4-1-0.2-2.1,0.5-2.8c0.8-0.7,1.9-0.9,2.9-0.4c0.9,0.5,1.5,1.6,1.2,2.6c-0.2,0.6,0,0.9,0.4,1.2c4.5,4.4,8.9,8.9,13.4,13.4c0.4,0.4,0.7,0.5,1.3,0.5C40.3,52.5,41.7,52.5,43.2,52.5z M22.2,37.1c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4-0.1-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C21.7,37.5,22,37.2,22.2,37.1z M49.9,42.8c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.7-0.5c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.6,0.6C49.4,43.2,49.6,42.9,49.9,42.8z"
                                />
                                <path
                                  class="path"
                                  stroke-width="1"
                                  fill="skyblue"
                                  stroke="#000000"
                                  d="M9.3,40.5c0,0.8,0,1.6,0,2.5c0,0.3,0.1,0.5,0.4,0.7c1,0.6,1.4,1.7,1.1,2.8c-0.3,1.1-1.4,1.8-2.6,1.7c-1.1-0.1-2-0.9-2.2-2c-0.2-0.9,0.3-1.9,1.1-2.5c0.3-0.2,0.4-0.4,0.4-0.7c0-1.5,0-3,0-4.4c0-0.3-0.1-0.6-0.3-0.8c-1.3-1.3-2.6-2.6-3.9-3.9c-0.3-0.3-0.5-0.6-0.5-1.1c0-1.6,0-3.2,0-4.8c0-0.5,0.1-0.8,0.5-1.1c2.1-2.1,4.2-4.2,6.3-6.3c0.2-0.2,0.3-0.5,0.3-0.8c0-2.3,0-4.6,0-6.9c0-0.3-0.1-0.5-0.4-0.7c-1-0.6-1.4-1.7-1-2.8c0.3-1,1.3-1.7,2.3-1.7c1.1,0,2.1,0.7,2.4,1.7c0.3,1.1-0.1,2.2-1.1,2.8c-0.3,0.2-0.4,0.4-0.4,0.7c0,2.5,0,4.9,0,7.4c0,0.5-0.1,0.9-0.5,1.2c-2.1,2.1-4.2,4.1-6.2,6.2c-0.2,0.2-0.4,0.6-0.4,0.9c0,1.2,0,2.4,0,3.7c0,0.2,0.1,0.5,0.3,0.7c1.3,1.3,2.5,2.6,3.8,3.9c0.4,0.4,0.6,0.8,0.6,1.3C9.3,38.9,9.3,39.7,9.3,40.5z M11.6,10.2c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.5-0.7-0.5c-0.4-0.1-0.6,0.2-0.6,0.6c0,0.4,0.2,0.7,0.6,0.6C11.1,10.6,11.3,10.4,11.6,10.2z M8.6,45c-0.1,0-0.2,0-0.3,0c-0.2,0.2-0.5,0.5-0.5,0.7c-0.1,0.4,0.2,0.6,0.6,0.6c0.4,0,0.7-0.3,0.6-0.6C9,45.5,8.8,45.3,8.6,45z"
                                />
                                <path
                                  class="path"
                                  stroke-width="1"
                                  fill="black"
                                  stroke="#000000"
                                  d="M24.1,15.2c0.3,0,0.5,0,0.8,0c8.1,0,16.2,0,24.3,0c0.6,0,1.1,0.2,1.5,0.6c0.6,0.6,1.1,1.2,1.7,1.7c0.1,0.1,0.4,0.2,0.6,0.2c1.5-0.3,2.7,0.6,3,2.1c0.2,1.3-0.7,2.6-2,2.7c-1.4,0.2-2.7-0.7-2.8-2.1c0-0.3,0-0.6,0.1-0.8c0.2-0.4-0.1-0.6-0.3-1c-1-1.4-2.3-1.7-4-1.7c-7.8,0.1-15.5,0-23.3,0c-1.2,0-1.4-0.2-1.4-1.4c0-0.9,0-1.9,0-2.8c0-0.3-0.1-0.5-0.4-0.7c-1-0.6-1.4-1.7-1.1-2.8c0.3-1,1.3-1.7,2.3-1.7c1.1,0,2,0.7,2.3,1.8c0.3,1.1-0.1,2.2-1.1,2.8c-0.3,0.2-0.4,0.4-0.4,0.7C24.1,13.5,24.1,14.3,24.1,15.2z M53.4,20.9c0.1,0,0.2,0,0.3,0c0.2-0.2,0.4-0.5,0.5-0.7c0-0.4-0.2-0.6-0.6-0.6c-0.4,0-0.7,0.3-0.6,0.6C53,20.4,53.3,20.6,53.4,20.9z M23,10.7c0.1,0,0.2,0,0.3,0c0.2-0.2,0.5-0.5,0.5-0.7c0.1-0.4-0.2-0.6-0.6-0.6c-0.4,0-0.7,0.2-0.6,0.6C22.6,10.2,22.9,10.5,23,10.7z"
                                />
                                <path
                                  class="path"
                                  stroke-width="1"
                                  fill="none"
                                  stroke="#000000"
                                  d="M15.3,37.5c0,1.1,0,2.2,0,3.3c0,0.2,0.1,0.5,0.3,0.7c3.7,3.7,7.3,7.4,11,11c0.1,0.1,0.5,0.2,0.7,0.2c1.4-0.3,2.7,0.6,2.9,1.9c0.2,1.4-0.6,2.7-2.1,2.9c-1.6,0.3-3.1-1.3-2.7-3c0.1-0.4,0-0.6-0.2-0.8c-3.7-3.7-7.4-7.4-11.2-11.2c-0.4-0.4-0.6-0.8-0.6-1.4c0-2.1,0-4.2,0-6.2c0-0.3-0.1-0.6-0.3-0.8c-0.8-0.8-1.6-1.6-2.4-2.4c-0.2-0.2-0.5-0.3-0.8-0.2c-1.3,0.3-2.6-0.6-2.9-1.9c-0.3-1.3,0.5-2.5,1.8-2.9c1.3-0.3,2.6,0.4,2.9,1.7c0.1,0.4,0.1,0.9,0,1.3c-0.1,0.4,0,0.6,0.2,0.8c0.3,0.3,0.6,0.6,1,0.9c0.7,0.8,1.7,1.4,2.1,2.3c0.4,0.9,0.1,2,0.1,3.1C15.3,37,15.3,37.3,15.3,37.5z M10.3,29.2c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.5-0.7-0.5c-0.4-0.1-0.6,0.2-0.6,0.6c0,0.4,0.2,0.7,0.6,0.6C9.8,29.6,10,29.4,10.3,29.2z M28.6,55.1c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.4-0.8-0.5c-0.4,0-0.6,0.2-0.6,0.6c0,0.4,0.3,0.7,0.7,0.6C28.1,55.6,28.3,55.3,28.6,55.1z"
                                />
                                <path
                                  class="path"
                                  stroke-width="1"
                                  fill="orange"
                                  stroke="#000000"
                                  d="M16,25.5c0.7,0,1.5,0.4,1.9,1.2c0.2,0.3,0.4,0.4,0.7,0.4c2.6,0,5.1,0,7.7,0c0.6,0,1,0.2,1.4,0.6c1.1,1.1,2.2,2.2,3.3,3.3c0.2,0.2,0.5,0.3,0.8,0.3c2.3,0,4.7,0,7,0c0.3,0,0.5-0.1,0.7-0.4c0.6-1,1.7-1.4,2.8-1.1c1,0.3,1.8,1.3,1.8,2.4c0,1.1-0.8,2.1-1.8,2.3c-1.1,0.3-2.2-0.1-2.8-1.1c-0.2-0.3-0.4-0.4-0.7-0.4c-2.5,0-5,0-7.5,0c-0.5,0-0.9-0.1-1.3-0.5c-1.1-1.2-2.3-2.3-3.5-3.5c-0.2-0.2-0.5-0.3-0.7-0.3c-2.4,0-4.9,0-7.3,0c-0.4,0-0.6,0.1-0.7,0.4c-0.6,1-1.9,1.4-2.9,0.9c-1.1-0.4-1.7-1.6-1.5-2.7C13.7,26.3,14.7,25.5,16,25.5z M42.4,32.4c0-0.1,0-0.2,0-0.3c-0.2-0.2-0.5-0.5-0.7-0.5c-0.4-0.1-0.6,0.2-0.7,0.6c0,0.4,0.2,0.7,0.6,0.6C41.9,32.8,42.1,32.5,42.4,32.4z M15.7,28.6c0.1,0,0.2,0,0.3,0c0.2-0.2,0.5-0.5,0.5-0.7c0.1-0.4-0.2-0.6-0.6-0.6c-0.4,0-0.7,0.2-0.6,0.6C15.3,28.1,15.6,28.4,15.7,28.6z"
                                />
                              </g>
                            </svg>
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
            {isMobileView ? (
              <div
                ref={ref12}
                className={`col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4 ${
                  inView12 ? "animate__animated animate__fadeInDown" : ""
                }`}
                style={{ visibility: "visible" }}
              >
                <div
                  style={{ backgroundColor: "transparent" }}
                  className="card"
                >
                  <div class="card-body downtoup">
                    <h1>Innovation</h1>
                    <p class="fw-bold fs-5 text-white" style={{letterSpacing:'0.1em'}}>
                      We are providing services and utilize unique automation
                      software to manage all our project work to reduce schedule
                      risk
                    </p>

                    <i
                      className="iPiller"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "2rem",
                        left: "11rem",
                      }}
                    >
                      <Player
                        src={Circut7}
                        className="player"
                        loop
                        autoplay
                        style={{ height: "55px", width: "55px" }}
                      />
                    </i>
                  </div>
                </div>
              </div>
            ) : (
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4">
                <motion.div
                  style={{ backgroundColor: "transparent" }}
                  ref={ref2}
                  initial="hidden"
                  animate={inView2 ? "visible" : "hidden"}
                  variants={variants2}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="card equal-height"
                >
                  <div class="columnPiller">
                    <div class="card-block txt equal-size text-center">
                      <h1>Innovation</h1>
                      <p class="fw-bold fs-5">
                        We are providing services and utilize unique automation
                        software to manage all our project work to reduce
                        schedule risk
                      </p>
                      <div class="ico-card">
                        <i
                          className="iPiller"
                          style={{
                            display: "block",
                            position: "absolute",
                            top: "3rem",
                            left: "8rem",
                          }}
                        >
                          <Player
                            src={Circut7}
                            className="player"
                            loop
                            autoplay
                            style={{ height: "75px", width: "75px" }}
                          />
                        </i>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
            {isMobileView ? (
              <div
                ref={ref13}
                className={`col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4 ${
                  inView13 ? "animate__animated animate__fadeInDown" : ""
                }`}
                style={{ visibility: "visible" }}
              >
                <div
                  style={{ backgroundColor: "transparent" }}
                  className="card"
                >
                  <div class="card-body downtoup">
                    <h1>Transparency</h1>
                    <p class="fw-bold fs-5 white" style={{letterSpacing:'0.1em'}}>
                      We provide customers with real-time tracking of all
                      aspects of our project work through our automation tools
                    </p>

                    <i
                      className="iPiller"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "2rem",
                        left: "13rem",
                      }}
                    >
                      <Player
                        src={Circut4}
                        className="player"
                        loop
                        autoplay
                        style={{ height: "45px", width: "45px" }}
                      />
                    </i>
                  </div>
                </div>
              </div>
            ) : (
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4">
                <motion.div
                  style={{ backgroundColor: "transparent" }}
                  ref={ref3}
                  initial="hidden"
                  animate={inView3 ? "visible" : "hidden"}
                  variants={variants2}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="card equal-height"
                >
                  <div class="columnPiller">
                    <div class="card-block txt equal-size text-center">
                      <h1>Transparency</h1>
                      <p class="fw-bold fs-5">
                        We provide customers with real-time tracking of all
                        aspects of our project work through our automation
                        tools.
                      </p>
                      <div class="ico-card">
                        <i
                          className="iPiller"
                          style={{
                            display: "block",
                            position: "absolute",
                            top: "3rem",
                            left: "10rem",
                          }}
                        >
                          <Player
                            src={Circut4}
                            className="player"
                            loop
                            autoplay
                            style={{ height: "35px", width: "35px" }}
                          />
                        </i>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
            {isMobileView ? (
              <div
                ref={ref14}
                className={`col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4 ${
                  inView14 ? "animate__animated animate__fadeInDown" : ""
                }`}
                style={{ visibility: "visible" }}
              >
                <div
                  style={{ backgroundColor: "transparent" }}
                  className="card"
                >
                  <div class="card-body downtoup" style={{letterSpacing:'0.1em'}}>
                    <h1>Integrity</h1>
                    <p class="fw-bold fs-5 text-white">
                      Our engineers are trained to work with the highest degree
                      of integrity to ensure on time & on budget delivery; no
                      surprises
                    </p>

                    <i
                      className="iPiller"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "1rem",
                        left: "12rem",
                      }}
                    >
                      <Player
                        src={Circut6}
                        className="player"
                        loop
                        autoplay
                        style={{ height: "45px", width: "45px" }}
                      />
                    </i>
                  </div>
                </div>
              </div>
            ) : (
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4">
                <motion.div
                  style={{ backgroundColor: "transparent" }}
                  ref={ref4}
                  initial="hidden"
                  animate={inView4 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="card equal-height"
                >
                  <div class="columnPiller">
                    <div class="card-block txt equal-size text-center">
                      <h1>Integrity</h1>
                      <p class="fw-bold fs-5">
                        Our engineers are trained to work with the highest
                        degree of integrity to ensure on time & on budget
                        delivery; no surprises
                      </p>
                      <div class="ico-card">
                        <i
                          className="iPiller"
                          style={{
                            display: "block",
                            position: "absolute",
                            top: "3rem",
                            left: "10rem",
                          }}
                        >
                          <Player
                            src={Circut6}
                            className="player"
                            loop
                            autoplay
                            style={{ height: "75px", width: "75px" }}
                          />
                        </i>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
            {isMobileView ? (
              <div
                ref={ref15}
                className={`col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4 ${
                  inView15 ? "animate__animated animate__fadeInDown" : ""
                }`}
                style={{ visibility: "visible" }}
              >
                <div
                  style={{ backgroundColor: "transparent" }}
                  className="card"
                >
                  <div class="card-body downtoup">
                    <h1>Mission</h1>
                    <p class="fw-bold fs-5 text-white" style={{letterSpacing:'0.1em'}}>
                      TechsoC Technologies provides premium services at
                      competitive prices through to timely upgrade technology,
                      skill empowering and innovation.{" "}
                    </p>

                    <i
                      className="iPiller"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "1rem",
                        left: "18rem",
                      }}
                    >
                      <svg
                        class="svg-path"
                        width="55px"
                        height="55px"
                        viewBox="0 0 60 60"
                        fill="rgb(0, 0, 103)"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="path"
                          stroke-width="1"
                          fill="red"
                          stroke="#000000"
                          d="M57.5,21.7c-0.3-1-1-1.4-1.8-1.2c-0.8,0.2-1.1,1-0.9,2c0.3,1.4,0.7,2.7,0.9,4.1c1,8.8-1.6,16.3-8.1,22.3c-6.2,5.7-13.6,7.8-21.9,6.5c-6.2-1-11.4-4-15.4-8.9c-5-6.1-7-13.1-5.6-20.9C5.7,18.9,9,13.5,14.4,9.5c7-5.1,14.7-6.4,23-4.1c0.3,0.1,0.6,0.1,0.8,0.1c0.7-0.1,1.2-0.6,1.2-1.2c0.1-0.7-0.3-1.3-1.1-1.6c-2.5-0.8-5.2-1.2-7.8-1.3c-5.8-0.1-11.1,1.3-16,4.5c-7.1,4.5-11.4,11-12.9,19.2c-0.2,1-0.3,2.1-0.4,3.1c0,1.2,0,2.4,0,3.6c0.1,1,0.3,2.1,0.4,3.1c1.9,11.3,10.9,20.7,22.1,23c1.3,0.3,2.7,0.4,4,0.6c0.1,0,0.2,0.1,0.4,0.1c1.2,0,2.4,0,3.6,0c1-0.1,2.1-0.3,3.1-0.4C46.3,56.3,55.7,47.3,58,36c0.3-1.3,0.4-2.6,0.6-4c0-0.2,0.1-0.3,0.1-0.5c0-1,0-2.1,0-3.1c0-0.2-0.1-0.3-0.1-0.5C58.5,25.8,58.1,23.7,57.5,21.7z"
                        />
                        <path
                          class="path"
                          stroke-width="1"
                          fill="red"
                          stroke="#000000"
                          d="M48.5,27.2c-0.9,0.1-1.4,0.8-1.3,1.8c0,1,0.1,2-0.1,3c-1.1,9.5-9.9,16.2-19.4,14.9C19.3,45.7,13,38.6,13,30.1c0-7.3,3.5-12.6,10-15.8c2.6-1.3,5.3-1.7,8.2-1.5c0.7,0.1,1.2-0.2,1.4-0.8c0.2-0.5,0.2-1.2-0.3-1.6C32,10.2,31.6,10,31.1,10c-1.7-0.2-3.4,0-5.1,0.3C15.5,12.5,8.6,22.6,10.4,33.2c1.6,9.6,10,16.7,20.2,16.6c0.5,0,1.5-0.1,2.5-0.2c7.9-1.5,13.3-6,16-13.5c0.9-2.4,1.1-4.9,0.9-7.4C50,27.7,49.3,27.1,48.5,27.2z"
                        />
                        <path
                          class="path"
                          stroke-width="1"
                          fill="blue"
                          stroke="#000000"
                          d="M54.2,9.9c-1.2,0-2.3,0-3.5,0c-0.5,0-0.7-0.2-0.6-0.7c0-1.1,0-2.2,0-3.4c0-0.7-0.2-1.3-0.9-1.6c-0.7-0.3-1.3,0-1.8,0.5c-2.7,2.7-5.4,5.4-8.2,8.1c-0.4,0.4-0.6,0.9-0.6,1.5c0,1.4,0,2.8,0,4.2c0,0.5-0.1,0.8-0.5,1.1c-2.9,2.9-5.9,5.8-8.8,8.8c-0.2,0.2-0.3,0.3-0.5,0.5c-0.4,0.6-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.6,1.9,0.2c0.2-0.1,0.3-0.3,0.5-0.5c3-3,5.9-5.9,8.9-8.9c0.2-0.2,0.6-0.3,0.9-0.4c0.2,0,0.4,0,0.5,0c0.5,0,1.1,0,1.6,0c0.7,0,1.5,0,2.2,0c0.6,0,1-0.2,1.4-0.6c2.8-2.8,5.5-5.5,8.3-8.3c0.5-0.5,0.7-1.1,0.4-1.7C55.4,10.2,54.9,9.9,54.2,9.9z M50.5,13.3c-1.6,1.6-3.2,3.3-4.9,4.9c-0.2,0.2-0.6,0.3-0.9,0.3c-1,0-2.1,0-3.2,0c0-0.7,0.1-1.5,0-2.2c-0.1-1.1,0.3-1.9,1.1-2.6c1.4-1.3,2.8-2.7,4.2-4.1c0.1-0.1,0.3-0.2,0.5-0.4c0,0.8,0,1.4,0,2.1c0,1,0.6,1.5,1.5,1.5c0.7,0,1.3,0,2.1,0C50.7,13,50.6,13.2,50.5,13.3z"
                        />
                        <path
                          class="path"
                          stroke-width="1"
                          fill="red"
                          stroke="#000000"
                          d="M28,21.6c0.7-0.2,1.5-0.2,2.3-0.3c0.7-0.1,1.2-0.7,1.2-1.4c0-0.7-0.6-1.3-1.4-1.4c-0.2,0-0.4,0-0.6,0c-6.1,0.3-10.9,5.3-10.9,11.4c0.1,0.6,0.1,1.3,0.2,1.9c1,4.7,3.7,7.8,8.3,9c4.6,1.2,8.6-0.1,11.8-3.7c1.8-2,2.6-4.5,2.7-7.1c0-0.9-0.6-1.6-1.4-1.6c-0.8,0-1.4,0.6-1.5,1.4c0,0.1,0,0.2,0,0.3c-0.2,4.9-4.5,8.6-9.4,8.1c-4.2-0.4-7.4-3.7-7.7-8.1C21.2,26.4,24,22.6,28,21.6z"
                        />
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            ) : (
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4">
                <motion.div
                  style={{ backgroundColor: "transparent" }}
                  ref={ref5}
                  initial="hidden"
                  animate={inView5 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="card equal-height"
                >
                  <div class="columnPiller">
                    <div class="card-block txt equal-size text-center">
                      <h1>Mission</h1>
                      <p class="fw-bold fs-5">
                        TechsoC Technologies provides premium services at
                        competitive prices through to timely upgrade technology,
                        skill empowering and innovation.
                      </p>
                      <div class="ico-card">
                        <i
                          className="iPiller"
                          style={{
                            display: "block",
                            position: "absolute",
                            top: "3rem",
                            left: "12rem",
                          }}
                        >
                          <svg
                            class="svg-path"
                            width="55px"
                            height="55px"
                            viewBox="0 0 60 60"
                            fill="rgb(0, 0, 103)"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              class="path"
                              stroke-width="1"
                              fill="red"
                              stroke="#000000"
                              d="M57.5,21.7c-0.3-1-1-1.4-1.8-1.2c-0.8,0.2-1.1,1-0.9,2c0.3,1.4,0.7,2.7,0.9,4.1c1,8.8-1.6,16.3-8.1,22.3c-6.2,5.7-13.6,7.8-21.9,6.5c-6.2-1-11.4-4-15.4-8.9c-5-6.1-7-13.1-5.6-20.9C5.7,18.9,9,13.5,14.4,9.5c7-5.1,14.7-6.4,23-4.1c0.3,0.1,0.6,0.1,0.8,0.1c0.7-0.1,1.2-0.6,1.2-1.2c0.1-0.7-0.3-1.3-1.1-1.6c-2.5-0.8-5.2-1.2-7.8-1.3c-5.8-0.1-11.1,1.3-16,4.5c-7.1,4.5-11.4,11-12.9,19.2c-0.2,1-0.3,2.1-0.4,3.1c0,1.2,0,2.4,0,3.6c0.1,1,0.3,2.1,0.4,3.1c1.9,11.3,10.9,20.7,22.1,23c1.3,0.3,2.7,0.4,4,0.6c0.1,0,0.2,0.1,0.4,0.1c1.2,0,2.4,0,3.6,0c1-0.1,2.1-0.3,3.1-0.4C46.3,56.3,55.7,47.3,58,36c0.3-1.3,0.4-2.6,0.6-4c0-0.2,0.1-0.3,0.1-0.5c0-1,0-2.1,0-3.1c0-0.2-0.1-0.3-0.1-0.5C58.5,25.8,58.1,23.7,57.5,21.7z"
                            />
                            <path
                              class="path"
                              stroke-width="1"
                              fill="red"
                              stroke="#000000"
                              d="M48.5,27.2c-0.9,0.1-1.4,0.8-1.3,1.8c0,1,0.1,2-0.1,3c-1.1,9.5-9.9,16.2-19.4,14.9C19.3,45.7,13,38.6,13,30.1c0-7.3,3.5-12.6,10-15.8c2.6-1.3,5.3-1.7,8.2-1.5c0.7,0.1,1.2-0.2,1.4-0.8c0.2-0.5,0.2-1.2-0.3-1.6C32,10.2,31.6,10,31.1,10c-1.7-0.2-3.4,0-5.1,0.3C15.5,12.5,8.6,22.6,10.4,33.2c1.6,9.6,10,16.7,20.2,16.6c0.5,0,1.5-0.1,2.5-0.2c7.9-1.5,13.3-6,16-13.5c0.9-2.4,1.1-4.9,0.9-7.4C50,27.7,49.3,27.1,48.5,27.2z"
                            />
                            <path
                              class="path"
                              stroke-width="1"
                              fill="blue"
                              stroke="#000000"
                              d="M54.2,9.9c-1.2,0-2.3,0-3.5,0c-0.5,0-0.7-0.2-0.6-0.7c0-1.1,0-2.2,0-3.4c0-0.7-0.2-1.3-0.9-1.6c-0.7-0.3-1.3,0-1.8,0.5c-2.7,2.7-5.4,5.4-8.2,8.1c-0.4,0.4-0.6,0.9-0.6,1.5c0,1.4,0,2.8,0,4.2c0,0.5-0.1,0.8-0.5,1.1c-2.9,2.9-5.9,5.8-8.8,8.8c-0.2,0.2-0.3,0.3-0.5,0.5c-0.4,0.6-0.4,1.3,0.1,1.8c0.5,0.5,1.3,0.6,1.9,0.2c0.2-0.1,0.3-0.3,0.5-0.5c3-3,5.9-5.9,8.9-8.9c0.2-0.2,0.6-0.3,0.9-0.4c0.2,0,0.4,0,0.5,0c0.5,0,1.1,0,1.6,0c0.7,0,1.5,0,2.2,0c0.6,0,1-0.2,1.4-0.6c2.8-2.8,5.5-5.5,8.3-8.3c0.5-0.5,0.7-1.1,0.4-1.7C55.4,10.2,54.9,9.9,54.2,9.9z M50.5,13.3c-1.6,1.6-3.2,3.3-4.9,4.9c-0.2,0.2-0.6,0.3-0.9,0.3c-1,0-2.1,0-3.2,0c0-0.7,0.1-1.5,0-2.2c-0.1-1.1,0.3-1.9,1.1-2.6c1.4-1.3,2.8-2.7,4.2-4.1c0.1-0.1,0.3-0.2,0.5-0.4c0,0.8,0,1.4,0,2.1c0,1,0.6,1.5,1.5,1.5c0.7,0,1.3,0,2.1,0C50.7,13,50.6,13.2,50.5,13.3z"
                            />
                            <path
                              class="path"
                              stroke-width="1"
                              fill="red"
                              stroke="#000000"
                              d="M28,21.6c0.7-0.2,1.5-0.2,2.3-0.3c0.7-0.1,1.2-0.7,1.2-1.4c0-0.7-0.6-1.3-1.4-1.4c-0.2,0-0.4,0-0.6,0c-6.1,0.3-10.9,5.3-10.9,11.4c0.1,0.6,0.1,1.3,0.2,1.9c1,4.7,3.7,7.8,8.3,9c4.6,1.2,8.6-0.1,11.8-3.7c1.8-2,2.6-4.5,2.7-7.1c0-0.9-0.6-1.6-1.4-1.6c-0.8,0-1.4,0.6-1.5,1.4c0,0.1,0,0.2,0,0.3c-0.2,4.9-4.5,8.6-9.4,8.1c-4.2-0.4-7.4-3.7-7.7-8.1C21.2,26.4,24,22.6,28,21.6z"
                            />
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {isMobileView ? (
              <div
                ref={ref16}
                className={`col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4 ${
                  inView16 ? "animate__animated animate__fadeInDown" : ""
                }`}
                style={{ visibility: "visible" }}
              >
                <div
                  style={{ backgroundColor: "transparent" }}
                  className="card"
                >
                  <div class="card-body downtoup">
                    <h1>Vision</h1>
                    <p class="fw-bold fs-5 text-white" style={{letterSpacing:'0.1em'}}>
                      Our slogan is to become a globally semiconductor (VLSI)
                      service provider in Electronic industries and increase
                      progressively customers in our boards.
                    </p>
                    <i
                      className="iPiller"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "1rem",
                        left: "18rem",
                      }}
                    >
                      <svg
                        class="svg-path"
                        width="65px"
                        height="65px"
                        viewBox="0 0 60 60"
                        fill="rgb(0, 0, 103)"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            class="path"
                            stroke-width="1"
                            fill="#a8cbeb"
                            stroke="#000000"
                            d="M30.3,1.4c0.6,0.3,0.8,0.8,0.8,1.5c0,2.3,0,4.6,0,6.8c0,0.7-0.4,1.2-1,1.3c-0.6,0.1-1.2-0.4-1.3-1.1c0-2.5,0-5,0-7.5c0-0.5,0.4-0.8,0.8-1.1C29.9,1.4,30.1,1.4,30.3,1.4z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="#a8cbeb"
                            stroke="#000000"
                            d="M29.6,45.8c-4.8,0-9.5-1.6-13.8-4.3C11.3,38.8,7.6,35.2,4.5,31c-0.5-0.6-0.5-1,0-1.6c4.1-5.6,9.2-10.1,15.6-12.8c7-3,14-2.8,20.8,0.4c6,2.8,10.7,7.1,14.7,12.4c0.4,0.6,0.5,1,0.1,1.5c-4.7,6.4-10.6,11.3-18.2,13.8C35,45.5,32.5,45.8,29.6,45.8z M29.9,43.6c3.3,0,6.4-0.7,9.3-2c5.7-2.5,10.1-6.4,13.9-11.2c0.2-0.3,0.2-0.4,0-0.7c-3.3-4.2-7.1-7.7-11.9-10.2c-6.9-3.6-13.9-4-21-0.7c-5.4,2.5-9.7,6.3-13.4,11c-0.3,0.3-0.1,0.5,0.1,0.7c2.8,3.5,6,6.6,9.8,9C20.8,42,25.2,43.6,29.9,43.6z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="#d2e1ef"
                            stroke="#000000"
                            d="M31.1,54.1c0,1.2,0,2.4,0,3.5c0,0.8-0.5,1.3-1.1,1.3c-0.7,0-1.1-0.5-1.1-1.3c0-2.4,0-4.7,0-7.1c0-0.8,0.5-1.3,1.1-1.3c0.7,0,1.1,0.5,1.1,1.3C31.1,51.7,31.1,52.9,31.1,54.1z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="#d2e1ef"
                            stroke="#000000"
                            d="M14.6,15.7c0,1-0.9,1.5-1.7,1.1c-0.2-0.1-0.3-0.2-0.4-0.4C11,15,9.5,13.5,8,12c-0.3-0.3-0.5-0.7-0.4-1.1c0-0.3,0.4-0.8,0.7-0.9c0.3-0.1,0.9,0,1.1,0.2c1.6,1.6,3.2,3.2,4.8,4.8C14.4,15.2,14.5,15.5,14.6,15.7z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="#d2e1ef"
                            stroke="#000000"
                            d="M52.6,11c-0.2,0.4-0.4,0.7-0.6,1c-1.5,1.5-3,3-4.6,4.6c-0.6,0.6-1.2,0.6-1.7,0.1c-0.5-0.5-0.5-1.1,0.1-1.7c1.5-1.5,3-3,4.6-4.6c0.4-0.4,0.9-0.6,1.4-0.3C52.2,10.3,52.4,10.7,52.6,11z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="#d2e1ef"
                            stroke="#000000"
                            d="M8.6,51.6c-0.4-0.3-0.8-0.4-0.9-0.7c-0.1-0.3-0.1-0.7,0-1.1c0-0.1,0.2-0.3,0.3-0.4c1.5-1.5,2.9-3,4.5-4.4c0.3-0.3,0.7-0.5,1.1-0.5c0.3,0,0.7,0.3,0.9,0.6c0.3,0.4,0.1,0.8-0.2,1.2c-0.4,0.5-0.9,0.9-1.3,1.4c-1.1,1.1-2.2,2.2-3.3,3.3C9.4,51.2,9,51.3,8.6,51.6z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="#d2e1ef"
                            stroke="#000000"
                            d="M51.5,51.6c-0.4-0.2-0.7-0.3-1-0.6c-1.6-1.5-3.1-3.1-4.6-4.6c-0.5-0.5-0.5-1.2,0-1.6c0.5-0.4,1.1-0.5,1.6,0c1.6,1.5,3.1,3.1,4.7,4.7c0.4,0.4,0.5,0.8,0.3,1.3C52.2,51,51.8,51.3,51.5,51.6z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="#d2e1ef"
                            stroke="#000000"
                            d="M40.2,30.1c-0.1,5.3-4.1,9.6-9.4,10.1c-5.2,0.4-10-3.3-10.7-8.4c-0.2-1.1-0.1-2.2,0-3.2c0-0.8,0.6-1.2,1.2-1.2c0.7,0.1,1.1,0.6,1,1.4c-0.3,2.2,0.1,4.2,1.4,6c2.1,2.9,5.9,4,9.3,2.7c3.2-1.3,5.3-4.7,4.9-8c-0.4-3.7-3.1-6.5-6.7-7c-1.2-0.2-2.4,0-3.6,0.3c-0.2,0-0.3,0.1-0.5,0.2c-0.6,0.1-1.2-0.2-1.4-0.7c-0.2-0.6,0.1-1.2,0.7-1.4c1.4-0.6,2.9-0.8,4.5-0.6c4.7,0.5,8.2,3.7,9.1,8.3C40.1,28.9,40.1,29.5,40.2,30.1z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="#d2e1ef"
                            stroke="#000000"
                            d="M30.1,25.6c2.5,0,4.5,2.1,4.5,4.6c0,2.5-2.1,4.5-4.6,4.4c-2.4,0-4.4-2.1-4.4-4.5C25.5,27.6,27.6,25.6,30.1,25.6z M30,32.4c1.2,0,2.3-1,2.3-2.2c0-1.2-1-2.2-2.2-2.2c-1.2,0-2.2,1-2.3,2.2C27.8,31.3,28.8,32.4,30,32.4z"
                          />
                          <path
                            class="path"
                            stroke-width="1"
                            fill="#d2e1ef"
                            stroke="#000000"
                            d="M24.4,24.5c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1C23.9,23.4,24.4,23.9,24.4,24.5z"
                          />
                        </g>
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            ) : (
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4">
                <motion.div
                  style={{ backgroundColor: "transparent" }}
                  ref={ref6}
                  initial="hidden"
                  animate={inView6 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="card equal-height"
                >
                  <div class="columnPiller">
                    <div class="card-block txt equal-size text-center">
                      <h1>Vision</h1>
                      <p class="fw-bold fs-5">
                        Our slogan is to become a globally semiconductor (VLSI)
                        service provider in Electronic industries and increase
                        progressively customers in our boards.
                      </p>
                      <div class="ico-card">
                        <i
                          className="iPiller"
                          style={{
                            display: "block",
                            position: "absolute",
                            top: "3rem",
                            left: "10rem",
                          }}
                        >
                          <svg
                            class="svg-path"
                            width="65px"
                            height="65px"
                            viewBox="0 0 60 60"
                            fill="rgb(0, 0, 103)"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path
                                class="path"
                                stroke-width="1"
                                fill="#a8cbeb"
                                stroke="#000000"
                                d="M30.3,1.4c0.6,0.3,0.8,0.8,0.8,1.5c0,2.3,0,4.6,0,6.8c0,0.7-0.4,1.2-1,1.3c-0.6,0.1-1.2-0.4-1.3-1.1c0-2.5,0-5,0-7.5c0-0.5,0.4-0.8,0.8-1.1C29.9,1.4,30.1,1.4,30.3,1.4z"
                              />
                              <path
                                class="path"
                                stroke-width="1"
                                fill="#a8cbeb"
                                stroke="#000000"
                                d="M29.6,45.8c-4.8,0-9.5-1.6-13.8-4.3C11.3,38.8,7.6,35.2,4.5,31c-0.5-0.6-0.5-1,0-1.6c4.1-5.6,9.2-10.1,15.6-12.8c7-3,14-2.8,20.8,0.4c6,2.8,10.7,7.1,14.7,12.4c0.4,0.6,0.5,1,0.1,1.5c-4.7,6.4-10.6,11.3-18.2,13.8C35,45.5,32.5,45.8,29.6,45.8z M29.9,43.6c3.3,0,6.4-0.7,9.3-2c5.7-2.5,10.1-6.4,13.9-11.2c0.2-0.3,0.2-0.4,0-0.7c-3.3-4.2-7.1-7.7-11.9-10.2c-6.9-3.6-13.9-4-21-0.7c-5.4,2.5-9.7,6.3-13.4,11c-0.3,0.3-0.1,0.5,0.1,0.7c2.8,3.5,6,6.6,9.8,9C20.8,42,25.2,43.6,29.9,43.6z"
                              />
                              <path
                                class="path"
                                stroke-width="1"
                                fill="#d2e1ef"
                                stroke="#000000"
                                d="M31.1,54.1c0,1.2,0,2.4,0,3.5c0,0.8-0.5,1.3-1.1,1.3c-0.7,0-1.1-0.5-1.1-1.3c0-2.4,0-4.7,0-7.1c0-0.8,0.5-1.3,1.1-1.3c0.7,0,1.1,0.5,1.1,1.3C31.1,51.7,31.1,52.9,31.1,54.1z"
                              />
                              <path
                                class="path"
                                stroke-width="1"
                                fill="#d2e1ef"
                                stroke="#000000"
                                d="M14.6,15.7c0,1-0.9,1.5-1.7,1.1c-0.2-0.1-0.3-0.2-0.4-0.4C11,15,9.5,13.5,8,12c-0.3-0.3-0.5-0.7-0.4-1.1c0-0.3,0.4-0.8,0.7-0.9c0.3-0.1,0.9,0,1.1,0.2c1.6,1.6,3.2,3.2,4.8,4.8C14.4,15.2,14.5,15.5,14.6,15.7z"
                              />
                              <path
                                class="path"
                                stroke-width="1"
                                fill="#d2e1ef"
                                stroke="#000000"
                                d="M52.6,11c-0.2,0.4-0.4,0.7-0.6,1c-1.5,1.5-3,3-4.6,4.6c-0.6,0.6-1.2,0.6-1.7,0.1c-0.5-0.5-0.5-1.1,0.1-1.7c1.5-1.5,3-3,4.6-4.6c0.4-0.4,0.9-0.6,1.4-0.3C52.2,10.3,52.4,10.7,52.6,11z"
                              />
                              <path
                                class="path"
                                stroke-width="1"
                                fill="#d2e1ef"
                                stroke="#000000"
                                d="M8.6,51.6c-0.4-0.3-0.8-0.4-0.9-0.7c-0.1-0.3-0.1-0.7,0-1.1c0-0.1,0.2-0.3,0.3-0.4c1.5-1.5,2.9-3,4.5-4.4c0.3-0.3,0.7-0.5,1.1-0.5c0.3,0,0.7,0.3,0.9,0.6c0.3,0.4,0.1,0.8-0.2,1.2c-0.4,0.5-0.9,0.9-1.3,1.4c-1.1,1.1-2.2,2.2-3.3,3.3C9.4,51.2,9,51.3,8.6,51.6z"
                              />
                              <path
                                class="path"
                                stroke-width="1"
                                fill="#d2e1ef"
                                stroke="#000000"
                                d="M51.5,51.6c-0.4-0.2-0.7-0.3-1-0.6c-1.6-1.5-3.1-3.1-4.6-4.6c-0.5-0.5-0.5-1.2,0-1.6c0.5-0.4,1.1-0.5,1.6,0c1.6,1.5,3.1,3.1,4.7,4.7c0.4,0.4,0.5,0.8,0.3,1.3C52.2,51,51.8,51.3,51.5,51.6z"
                              />
                              <path
                                class="path"
                                stroke-width="1"
                                fill="#d2e1ef"
                                stroke="#000000"
                                d="M40.2,30.1c-0.1,5.3-4.1,9.6-9.4,10.1c-5.2,0.4-10-3.3-10.7-8.4c-0.2-1.1-0.1-2.2,0-3.2c0-0.8,0.6-1.2,1.2-1.2c0.7,0.1,1.1,0.6,1,1.4c-0.3,2.2,0.1,4.2,1.4,6c2.1,2.9,5.9,4,9.3,2.7c3.2-1.3,5.3-4.7,4.9-8c-0.4-3.7-3.1-6.5-6.7-7c-1.2-0.2-2.4,0-3.6,0.3c-0.2,0-0.3,0.1-0.5,0.2c-0.6,0.1-1.2-0.2-1.4-0.7c-0.2-0.6,0.1-1.2,0.7-1.4c1.4-0.6,2.9-0.8,4.5-0.6c4.7,0.5,8.2,3.7,9.1,8.3C40.1,28.9,40.1,29.5,40.2,30.1z"
                              />
                              <path
                                class="path"
                                stroke-width="1"
                                fill="#d2e1ef"
                                stroke="#000000"
                                d="M30.1,25.6c2.5,0,4.5,2.1,4.5,4.6c0,2.5-2.1,4.5-4.6,4.4c-2.4,0-4.4-2.1-4.4-4.5C25.5,27.6,27.6,25.6,30.1,25.6z M30,32.4c1.2,0,2.3-1,2.3-2.2c0-1.2-1-2.2-2.2-2.2c-1.2,0-2.2,1-2.3,2.2C27.8,31.3,28.8,32.4,30,32.4z"
                              />
                              <path
                                class="path"
                                stroke-width="1"
                                fill="#d2e1ef"
                                stroke="#000000"
                                d="M24.4,24.5c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1C23.9,23.4,24.4,23.9,24.4,24.5z"
                              />
                            </g>
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default WhyTech;
