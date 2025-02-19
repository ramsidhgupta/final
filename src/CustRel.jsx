import React from "react";
import "./CustRel.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";

import CustomerReview from "./lottieFiles/Customerreview.json";
import phone from "./icons/phone.png";
import envelop from "./icons/envelop.png";
import conference from "./icons/conference.png";
import helpline from "./icons/helpline.png";
import support from "./icons/support.png";
import CICD from "./icons/CICD.png";
import security from "./icons/security.png";
import crisis from "./icons/crisis.png";
import BackGround from "./lottieFiles/ram/Animation - 1711810649074.json";

const CustRel = () => {
  const [ref, inView] = useInView();

  const variants1 = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  };
  const variants4 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const variants5 = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <section className="wrapper-border" style={{ marginTop: "6rem" }}>
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
              width: "50%",
              height: "50%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="container py-md-8">
          <motion.div
            className="row"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants5}
            transition={{ duration: 1 }}
            data-cue="slideInUp"
          >
            <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
              <h2 className="display-4 mb-1 px-lg-10">
                Customer Relationship Strategy
              </h2>
            </div>
          </motion.div>

          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <motion.div
                className="card ms-lg-13 bg-info"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants2}
                transition={{ duration: 1 }}
                data-cue="slideInRight"
              >
                <div className="card-body p-2">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-2">
                        <span className="number">
                          <img
                            src={helpline}
                            width="30px"
                            height="30px"
                            alt=""
                          />
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">24/7 support</h4>
                      <p className="mb-0">
                        We respond to our customer inquiries or issues at
                        anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="card mx-lg-6 mt-2 bg-dark text-white"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants3}
                transition={{ duration: 1 }}
                data-cue="slideInRight"
              >
                <div className="card-body p-2">
                  <motion.div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">
                          <img
                            src={support}
                            width="30px"
                            height="30px"
                            alt=""
                          />
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">Post-Purchase Support</h4>
                      <p className="mb-0">
                        We provide to assistance with product setup,
                        troubleshooting, support and upgradation.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="card me-lg-6 mt-2 bg-secondary"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 1 }}
                data-cue="slideInRight"
              >
                <div className="card-body p-2">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">
                          <img src={CICD} width="30px" height="30px" alt="" />
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">Continuous Improvement</h4>
                      <p className="mb-0">
                        We are committed to continuously improving the customer
                        experience based on their feedback and evolving customer
                        needs. We regularly reviews of customer satisfaction
                        metrics and iterative changes to their products or
                        services.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="card me-lg-6 mt-2 bg-success"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 1 }}
                data-cue="slideInRight"
              >
                <div className="card-body p-2">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">
                          <img src={crisis} width="30px" height="30px" alt="" />
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">Crisis Management</h4>
                      <p className="mb-0">
                        We are always here 24/7 for any complaints, crises, or
                        other challenging situations. We resolve issues promptly
                        to maintain trust and loyalty
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="col-lg-6 mt-0"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants4}
              transition={{ duration: 1 }}
              data-cue="slideInUp"
            >
              <motion.div
                className="card mb-4 mt-2 bg-danger"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 1 }}
                data-cue="slideInRight"
              >
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-1">
                        <span className="number">
                          <img src={phone} width="30px" height="30px" alt="" />
                        </span>
                      </span>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-1">
                        <span className="number">
                          <img
                            src={envelop}
                            width="30px"
                            height="30px"
                            alt=""
                          />
                        </span>
                      </span>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-1">
                        <span className="number">
                          <img
                            src={conference}
                            width="30px"
                            height="30px"
                            alt=""
                          />
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-0">Communication Channels</h4>
                    </div>
                  </div>
                  <div>
                    <p>
                      We use various communication channels through which we
                      will engage with OUR customers.
                    </p>
                  </div>
                </div>
              </motion.div>
              <Player
                src={CustomerReview}
                className="player"
                loop
                autoplay
                style={{ height: "50vh", width: "100%" }}
              />

              <motion.div
                className="card mt-0 bg-warning mb-5"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 1 }}
                data-cue="slideInRight"
              >
                <div className="card-body p-2">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">
                          <img
                            src={security}
                            width="30px"
                            height="30px"
                            alt=""
                          />
                        </span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">Data Privacy and Security</h4>
                      <p className="mb-0">
                        Customer personal information will be handled securely
                        and transparently, to protect customer data from
                        unauthorized access or misuse.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustRel;
