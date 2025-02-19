import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@react-hook/media-query";
import { Player } from "@lottiefiles/react-lottie-player";

import Value from "./lottieFiles/ram/blob.json";
// import circle5 from "./lottieFiles/ram/Animation - 1711810550918.json" //For Background image

import people from "./icons/people.png";
import trust from "./icons/friend.png";
import global_team from "./icons/global_team.png";
import bulb from "./icons/bulb.png";
import safe from "./icons/safe.png";
import device from "./icons/device.png";

const WhyCompany = () => {
  const isMobileView = useMediaQuery("(max-width: 420px)");

  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const [ref11, inView11] = useInView({});


  const variants1 = {
    hidden: { opacity: 0, x: -400 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section className="wrapper-border mt-4">
        {/* <div
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
      </div> */}
        <div className="container pt-md-14 pt-8 pt-md-16 pb-10">
          <h3 className="display-4 mb-10 px-lg-14 text-center fw-bold">
            Why TechsoC
          </h3>
          <div class="row gx-lg-8 gx-xl-12 gy-2 process-wrapper line">
            <div className="col-md-6 col-lg-6">
              <Player
                src={Value}
                className="player"
                loop
                autoplay
                style={{ height: "100vh", width: "100%" }}
              />
            </div>

            <div className="col-md-6 col-lg-6">
              <div class="row gx-lg-8 gx-xl-12 gy-2">
                {isMobileView ? (
                  <div
                    ref={ref11}
                    className="col-md-6 col-lg-6 col-sm-12"
                   
                  >
                    <span class="icon btn btn-circle btn-lg disabled">
                      <span class="number">
                        <img src={people} width="40px" height="40px" alt="" />
                      </span>
                    </span>
                    <h4 class="mb-1">Client First</h4>
                    <p>
                      We succeed when our clients succeed. Our client-driven
                      approach demonstrates our ability to collaborate and
                      execute with excellence.
                    </p>
                  </div>
                ) : (
                  <motion.div
                    ref={ref1}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView1 ? "visible" : "hidden"}
                    variants={variants1}
                    transition={{ duration: 1, delay: 0.3 }}
                    class="col-md-6 col-lg-6 col-sm-12"
                  >
                    <span class="icon btn btn-circle btn-lg disabled">
                      <span class="number">
                        <img src={people} width="40px" height="40px" alt="" />
                      </span>
                    </span>
                    <h4 class="mb-1">Client First</h4>
                    <p>
                      We succeed when our clients succeed. Our client-driven
                      approach demonstrates our ability to collaborate and
                      execute with excellence.
                    </p>
                  </motion.div>
                )}
                <motion.div
                  ref={ref1}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView1 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.5 }}
                  class="col-md-6 col-lg-6"
                >
                  <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                    <span class="number">
                      <img src={trust} width="40px" height="40px" alt="" />
                    </span>
                  </span>
                  <h4 class="mb-1">Integrity is Execution</h4>
                  <p>
                    The culture we continuously build is honest. There are no
                    shortcuts. We deliver excellence with integrity in
                    everything we do.
                  </p>
                </motion.div>
              </div>
              <div class="row gx-lg-8 gx-xl-12 gy-2 process-wrapper line">
                <motion.div
                  ref={ref1}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView1 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.7 }}
                  class="col-md-6 col-lg-6"
                >
                  {" "}
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
                  <h4 class="mb-1">Embracing a Global Network</h4>
                  <p>
                    We embrace the power of a global network no matter where you
                    perform business.
                  </p>
                </motion.div>
                <motion.div
                  ref={ref1}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView1 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.5 }}
                  class="col-md-6 col-lg-6"
                >
                  {" "}
                  <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                    <span class="number">
                      <img src={bulb} width="40px" height="40px" alt="" />
                    </span>
                  </span>
                  <h4 class="mb-1">Driven by Innovation</h4>
                  <p>
                    We challenge innovation at every level. We encourage the
                    growth of our client’s future with our highly motivated and
                    qualified team of engineers.
                  </p>
                </motion.div>
              </div>
              <div class="row gx-lg-8 gx-xl-12 gy-2 process-wrapper line">
                <motion.div
                  ref={ref2}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView2 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.3 }}
                  class="col-md-6 col-lg-6"
                >
                  <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                    <span class="number">
                      <img src={safe} width="40px" height="40px" alt="" />
                    </span>
                  </span>
                  <h4 class="mb-1">
                    100% Transparency & Seamless Collaboration
                  </h4>
                  <p>
                    100% Transparency & Seamless Collaboration with customers to
                    ensure end-to-end customer satisfaction.
                  </p>
                </motion.div>
                <motion.div
                  ref={ref2}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView2 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.5 }}
                  class="col-md-6 col-lg-6"
                >
                  <span class="icon btn btn-circle btn-lg btn-soft-primary disabled">
                    <span class="number">
                      <img src={device} width="40px" height="40px" alt="" />
                    </span>
                  </span>
                  <h4 class="mb-1">industry-standard best practices</h4>
                  <p>
                    A distinguished advocate of industry-standard best practices
                    and frameworks with Integrity and insured delivery of
                    excellence
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyCompany;
