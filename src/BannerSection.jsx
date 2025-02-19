import React from "react";
import "./JobList.css";
import { easeInOut, motion } from "framer-motion";

import { Player } from "@lottiefiles/react-lottie-player";
import Employee from "../src/lottieFiles/Animation - 1711442948648.json";

import JobDesc from "./JobDesc";
import { ApplyJob } from "./ApplyJob";
import { useInView } from "react-intersection-observer";

const BannerSection = ({ header, JD, QUAL }) => {

  const [ref5, inView5] = useInView();
  
 
  const variants1 = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <section
      class="wrapper-border bg-light"
      style={{ width: "100%", height: "46vh" }}
    >
      <div className="position-relative">
      <Player
          autoplay
          loop
          src={Employee}
          style={{
            width: "100%",
            height: "65vh",
          }}
        />
          <div className="overlayMain"></div>
          <div className="position-absolute w-100 top-50 translate-middle text-center" style={{left:'50%'}}>
            <div className="col-md-12 offset-md-1 col-lg-7 offset-lg-0 col-xl-12 col-xxl-12">
              <motion.h2
                ref={ref5}
                initial={{ opacity: 0, y: -200 }}
                animate={inView5 ? "visible" : "hidden"}
                variants={variants3}
                transition={{ duration: 0.9, delay: 0.2, ease: easeInOut }}
                className="Heading-1 display-1 fs-56 mb-10 ps-5 text-white fw-bold "
              >
              {header} ENGINEER
              </motion.h2>
              <motion.p
                ref={ref5}
                initial={{ opacity: 0, x: -200 }}
                animate={inView5 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.9, delay: 0.3, ease: easeInOut }}
                className="Paragraph-1 lead fs-23 lh-sm mb-10 ps-4 text-white fw-bold "
              >
               We’re always searching for amazing people to join our team.
              </motion.p>


            </div>
          </div>
        </div>




      
      {/* <div class="d-flex flex-direction-coloumn align-items-center">
        <Player
          autoplay
          loop
          src={Employee}
          style={{
            width: "100%",
            height: "50vh",
          }}
        />
        
        <h2
          className="Heading-1 display-1 fs-56 mb-10 text-black fw-bold "
          style={{ marginRight: "3rem" }}
        >
          {header}
          <span>We’re always searching for amazing people to join our team.</span>
        </h2>
      </div> */}
      </section>
  
      <JobDesc header={header} JD={JD} QUAL={QUAL} />
      <ApplyJob />
      </>
   ); 
};
export default BannerSection;
