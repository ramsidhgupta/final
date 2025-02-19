import React from "react";
import "./JobList.css";
import { easeInOut, motion } from "framer-motion";
import './App.css';
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { Player } from "@lottiefiles/react-lottie-player";
import Employee from "../src/lottieFiles/Animation - 1711442948648.json";

import { ApplyJob } from "./ApplyJob";

const JobDetails = ({ header, JD, QUAL, GoodToHave, SoftSkills }) => {

  const variants1 = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  };

  const variants4 = {
    hidden: { opacity: 0, x: 450 },
    visible: { opacity: 1, x: 0 },
  };

  const variants5 = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };


  const [ref, inView] = useInView({});
  const [ref4, inView4] = useInView();

  const [ref5, inView5] = useInView();

  const [ref6, inView6] = useInView({});


  const delayVar = 0.2;
  const isSmallScreen = window.innerWidth < 768;


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
          <div
            className="position-absolute w-100 top-50 translate-middle text-center"
            style={{ left: "50%" }}
          >
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
      </section>




      <section class="wrapper bg-light">
        <div class="container pt-14 pb-5 pt-md-16">
    
          <div class="row JOB-at p-4 gy-3 gx-xl-8 mt-1">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <h4 class="text-uppercase text-white">
                The {header} Engineer responsibilities
              </h4>
              {JD.map((response, index) => (
        <React.Fragment key={index}>
          {isSmallScreen ? (
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                marginLeft: "2rem",
                display: "flex",
                alignItems: "center",
                lineHeight: "1",
                maxWidth: "90%",
                fontSize: "0.85rem",
              }}
            >
              <Icon
                icon="flat-color-icons:right"
                style={{
                  color: "#0f27db",
                  fontSize: "3vw",
                  marginRight: "1rem",
                }}
              />
              {response}
            </p>
          ) : (
            <motion.p
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants4}
              transition={{ duration: 2, delay: index * delayVar }}
              style={{
                fontWeight: "bold",
                color: "white",
                marginLeft: "2rem",
                display: "flex",
                alignItems: "center",
                lineHeight: "1",
                maxWidth: "90%",
                fontSize: "0.85rem",
              }}
            >
              <Icon
                icon="flat-color-icons:right"
                style={{
                  color: "#0f27db",
                  fontSize: "3vw",
                  marginRight: "1rem",
                }}
              />
              {response}
            </motion.p>
          )}
        </React.Fragment>
      ))}
            </div>
          </div>

          
         </div>
      </section>

      <section className="wrapper-border mt-4">
      <div className="container py-10 py-md-10" style={{ color: "white" }}>
        <h2 className="text-black text-center">
          {" "}
          {header} Engineer Qualification
        </h2>

        <div className="row gy-3 gx-xl-8 mt-1">
        {QUAL.map((job) => (
          <React.Fragment key={job.id}>
          <motion.div
            key={job.id}
            initial="hidden"
            animate="visible"
            variants={variants5}
            transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
            className="col-lg-6"
          >
            <ul className="icon-list bullet-bg bullet-soft-primary mb-0 list-unstyled text-black fw-bold">
              <li className="lead text-center">
                <span>
                  <Player
                    src={job.lottie1}
                    className="player"
                    loop
                    autoplay
                    style={{ height: "50px", width: "50px" }}
                  />
                </span>
                <span className="fw-bold">{job.sentence1}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            key={job.id}
            initial="hidden"
            animate="visible"
            variants={variants5}
            transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
            className="col-lg-6"
          >
            <ul className="icon-list bullet-bg bullet-soft-primary mb-0 list-unstyled text-black fw-bold">
              <li className="lead text-center">
                <span>
                  <Player
                    src={job.lottie2}
                    className="player"
                    loop
                    autoplay
                    style={{ height: "50px", width: "50px" }}
                  />
                </span>
                <span className="fw-bold">{job.sentence2}</span>
              </li>
            </ul>
          </motion.div>
          </React.Fragment>
        ))}
        
      </div>
      </div>
    </section>
    <section
        class="wrapper text-white"
        style={{ backgroundColor: "#e5af2b" }}
      >
        <div class="container py-10">
          <h3 class="text-white mb-1">Good To Have:</h3>

          {GoodToHave.map((response, index) => (
        <React.Fragment key={index}>
          {isSmallScreen ? (
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                marginLeft: "2rem",
                display: "flex",
                alignItems: "center",
                lineHeight: "1",
                maxWidth: "90%",
                fontSize: "0.85rem",
              }}
            >
              <Icon
                icon="flat-color-icons:right"
                style={{
                  color: "#0f27db",
                  fontSize: "1.5vw",
                  marginRight: "1rem",
                }}
              />
              {response}
            </p>
          ) : (
            <motion.p
              ref={ref6}
              initial="hidden"
              animate={inView6 ? "visible" : "hidden"}
              variants={variants4}
              transition={{ duration: 2, delay: index * delayVar }}
              style={{
                fontWeight: "bold",
                color: "white",
                marginLeft: "2rem",
                display: "flex",
                alignItems: "center",
                lineHeight: "1",
                maxWidth: "90%",
                fontSize: "0.85rem",
              }}
            >
              <Icon
                icon="flat-color-icons:right"
                style={{
                  color: "#0f27db",
                  fontSize: "1.5vw",
                  marginRight: "1rem",
                }}
              />
              {response}
            </motion.p>
          )}
        </React.Fragment>
      ))}

        </div>
        <div class="container py-10">
          <h3 class="text-white mb-1">Soft Skills:</h3>

          {SoftSkills.map((response, index) => (
        <React.Fragment key={index}>
          {isSmallScreen ? (
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                marginLeft: "2rem",
                display: "flex",
                alignItems: "center",
                lineHeight: "1",
                maxWidth: "90%",
                fontSize: "0.85rem",
              }}
            >
              <Icon
                icon="flat-color-icons:right"
                style={{
                  color: "#0f27db",
                  fontSize: "1.5vw",
                  marginRight: "1rem",
                }}
              />
              {response}
            </p>
          ) : (
            <motion.p
              ref={ref4}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={variants4}
              transition={{ duration: 2, delay: index * delayVar }}
              style={{
                fontWeight: "bold",
                color: "white",
                marginLeft: "2rem",
                display: "flex",
                alignItems: "center",
                lineHeight: "1",
                maxWidth: "90%",
                fontSize: "0.85rem",
              }}
            >
              <Icon
                icon="flat-color-icons:right"
                style={{
                  color: "#0f27db",
                  fontSize: "1.5vw",
                  marginRight: "1rem",
                }}
              />
              {response}
            </motion.p>
          )}
        </React.Fragment>
      ))}

        </div>






      </section>







      <ApplyJob />
    </>
  );
};
export default JobDetails;
