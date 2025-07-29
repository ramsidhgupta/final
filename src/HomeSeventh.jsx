import React from "react";
import "./HomeSeventh.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import contact from "./assets/contact.jpg";
import telemarketer from "./assets/telemarketer.svg";
import { Icon } from "@iconify/react";
import "./ParticlesComponent.css";
import event1 from "./assets/TeamLunchMay24.jpeg";
import event2 from "./assets/raja2.jpeg";
import event3 from "./assets/grp1.jpeg";
import event4 from "./assets/raja3.jpeg";
import event5 from "./assets/event3.jpg";
import event6 from "./assets/event6.jpeg";
import event10 from "./assets/event10.jpeg";






const HomeSeventh = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  
  const inView = useInView();
  const variants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 50 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 50 },
  };
  const variants3 = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 50 },
  };
  const variants4 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const variants5 = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 50 },
  };
 
 
  return (
    <section className="wrapper bg-light">
      {/* <div className="container pt-19 pb-14 pt-md-10 pb-md-16">
        <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
          <div className="banner_aniv">
         
            <div className="center_static_image">
              <img src={balloon} alt="Centerpiece" />
            </div>
            <div className="slider_aniv" style={{ "--quantity": 10 }}>
              <div className="item_aniv" style={{ "--position": 1 }}>
                <img src={event1} alt="Event 1" />
              </div>
              <div className="item_aniv" style={{ "--position": 2 }}>
                <img src={event2} alt="Event 2" />
              </div>
              <div className="item_aniv" style={{ "--position": 3 }}>
                <img src={event3} alt="Event 3" />
              </div>
              <div className="item_aniv" style={{ "--position": 4 }}>
                <img src={event4} alt="Event 4" />
              </div>
              <div className="item_aniv" style={{ "--position": 5 }}>
                <img src={event5} alt="Event 5" />
              </div>
              <div className="item_aniv" style={{ "--position": 6 }}>
                <img src={event6} alt="Event 6" />
              </div>
              <div className="item_aniv" style={{ "--position": 7 }}>
                <img src={event10} alt="Event 7" />
              </div>
              <div className="item_aniv" style={{ "--position": 8 }}>
                <img src={event10} alt="Event 8" />
              </div>
              <div className="item_aniv" style={{ "--position": 9 }}>
                <img src={event1} alt="Event 9" />
              </div>
              <div className="item_aniv" style={{ "--position": 10 }}>
                <img src={event4} alt="Event 10" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="container pt-19 pb-14 pt-md-10 pb-md-16">
        <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center">
          {/* <Anniversery/> */}
          <motion.div
            class="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative"
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={variants5}
            transition={{ duration: 0.8 }}
            data-cue="slideInLeft"
          >
            <motion.div
              class="shape bg-dot primary rellax w-17 h-21 position-absolute"
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants4}
              transition={{ duration: 0.2 }}
            ></motion.div>
            <figure class="rounded">
              <img src={contact} srcSet={contact} alt="" />
            </figure>
          </motion.div>

          <div class="col-lg-6">
            <img
              src={telemarketer}
              class="svg-inject icon-svg icon-svg-md mb-4 mt-5"
              width="50"
              height="50"
              alt=""
            />
            <h2>Let’s Collaborate and Build the Future Tech </h2>
            <motion.div
              class="d-flex flex-row"
              ref={ref3}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={variants1}
              transition={{ duration: 0.4 }}
              data-cue="slideInRight"
            >
              <div>
                <div class="icon text-black-50 fs-28 me-6 mt-n1">
                  {" "}
                  <Icon icon="openmoji:location-indicator-red" />
                </div>
              </div>
              <div>
                <h5 class="mb-1">Address</h5>
                <address>
                  <strong>Techsoc Technologies Private Limited</strong>
                  <br />
                  Workhub by Noval Office,
                  <br />
                  DODDANAKUNDI INDUSTRIAL AREA, Graphite India Main Rd.
                  <br />
                  Whitefield, KEB Colony, Industrial Area,
                  <br />
                  Mahadevapura, Bengaluru, Karnataka, 560048, INDIA.
                </address>
              </div>
            </motion.div>
            <motion.div
              class="d-flex flex-row"
              ref={ref4}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={variants2}
              transition={{ duration: 0.6 }}
              data-cue="slideInRight"
            ></motion.div>
            <motion.div
              class="d-flex flex-row"
              ref={ref5}
              initial="hidden"
              animate={inView5 ? "visible" : "hidden"}
              variants={variants3}
              transition={{ duration: 0.6 }}
              data-cue="slideInRight"
            >
              <div>
                <div class="icon text--black-50 fs-28 me-6 mt-n1">
                  <Icon icon="emojione-v1:envelope-with-arrow" />
                </div>
              </div>
              <div>
                <h5 class="mb-1">E-mail</h5>
                <p class="mb-0">
                  <a
                    href="/cdn-cgi/l/email-protection#94f7fbfae0f5f7e0d4e0f1f7fce7fbf7fdfaf0baf7fbf9"
                    class="link-body"
                  >
                    <span class="__cf_email__">
                      <span
                        class="__cf_email__"
                        data-cfemail="4724282933262433073322242f3428242e29236924282a"
                      >
                        [contact@techsocind.com]
                      </span>
                    </span>
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeventh;
