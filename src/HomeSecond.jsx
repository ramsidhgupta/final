import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HomeSecond.css";
import { Icon } from "@iconify/react";
import welcome1 from "./assets/welcome1.jpg";
import welcome2 from "./assets/welcome2.jpg";
import megaphone from "./assets/megaphone.svg";
// import Textify from "textify.js";
// import gsap from "gsap";
import ConsoleText from "./ConsoleText";
import useAnimateOnScroll from "./useAnimateOnScroll";
import award55 from "./assets/novel.webp";

const HomeSecond = () => {
  useAnimateOnScroll(
    ".raamm",
    { x: "-100%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 1, stagger: 0.1, ease: "expo.inOut" }
  );
  useAnimateOnScroll(
    ".ramParagraph",
    { scale: 0.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2, stagger: 0.1, ease: "power3.inOut" }
  );
  useAnimateOnScroll(
    ".ramHeading",
    { y: "-100%", rotate: -180, scale: 0 },
    { y: "0", rotate: 0, scale: 1, duration: 0.7, ease: "power2.inOut" }
  );
  useAnimateOnScroll(
    ".paragraph-3",
    { rotate: 30, opacity: 0 },
    { rotate: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.inOut" }
  );
  useAnimateOnScroll(
    ".downtoup",
    { opacity: 0, x: "-100px", y: "-50px", scale: 2 },
    {
      opacity: 1,
      x: "0px",
      y: "0px",
      scale: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.inOut",
    }
  );

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

  const [ref, inView] = useInView();

  const variants1 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 50 },
  };

  return (
    <section className="wrapper-border bg-light angled lower-end">
      <div className="container py-14 py-md-10">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
          <div className="col-lg-6 position-relative order-lg-2">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? "visible" : "hidden"}
              variants={variants2}
              transition={{ duration: 2, delay: 0.3 }}
              className="shape bg-dot primary rellax w-16 h-20"
              style={{ top: "3rem", left: "5.5rem" }}
            ></motion.div>
            <div className="overlap-grid overlap-grid-2">
              <motion.div
                className="item"
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <figure className="rounded shadow">
                  <img className="image-1 ShadowEffect" src={welcome1} alt="" />
                </figure>
              </motion.div>
              <motion.div
                className="item"
                ref={ref}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? "visible" : "hidden"}
                variants={variants2}
                transition={{ duration: 2, delay: 0.3 }}
              >
                <figure className="rounded shadow">
                  <img className="image-2 ShadowEffect" src={welcome2} alt="" />
                </figure>
              </motion.div>
              <motion.div
                className="item"
                ref={ref}
                initial={{ opacity: 0, y: 200 }}
                animate={inView ? "visible" : "hidden"}
                variants={variants2}
                transition={{ duration: 2, delay: 0.3 }}
              >
                <figure className="rounded shadow">
                  <img className="image-2 ShadowEffect" src={award55} alt="" />
                </figure>
              </motion.div>
            </div>
          </div>
          <div className="col-lg-6" data-cue="slideInUp">
            <img
              src={megaphone}
              className="svg-inject icon-svg icon-svg-md mb-4"
              width="50"
              height="50"
              alt=""
            />

            <h2 className="fw-bold raamm">Who Are We?</h2>
            <ConsoleText
              words={[
                "Pioneers",
                "Innovators",
                "Game-Changers",
                "Transforming Organizations",
                "Pushing Boundaries",
                "Redefining Tomorrow",
              ]}
              colors={[
                "tomato",
                "rebeccapurple",
                "Steelblue",
                "Springgreen",
                "Seagreen",
                "Steelblue",
                "Firebrick",
              ]}
            />
            <p className="lead fw-normal">
            {/* <p className="lead ramParagraph" style={{ textAlign: "justify" }}> */}
              {/* TechsoC is a worldwide semiconductor administrations and
              arrangements supplier and helps its clients' address market-driven
              difficulties. We work intimately with a few incorporated gadget
              makers (IDMs), fabless Semiconductor Companies, Original gear
              makers, Pure Play foundries, Engineering Design computerization
              (EDA) and IP sellers to speed up their items to the market. Our
              ability in VLSI plan and confirmation administrations can change
              your item thoughts into practical, strong, execution and region
              streamlined System-on-Chip (SoC). We take special care of the
              developing requests of the 5G, Data Center Infrastructure,
              Automotive, Consumer Electronics and Industrial business sectors. */}
              TechsoC is a cutting-edge engineering services company, founded by
              industry veteran Mr. Dudam Rajanikanth, who brings over 15 years
              of distinguished experience in the semiconductor realm. With a
              passion for innovation, our expert and highly experienced team
              excels in crafting cost-efficient, high-performance System-on-Chip
              (SoC) designs, finely tuned for optimal performance and minimal
              footprint. Backed by a skillful group of professionals, TechsoC
              has successfully completed numerous client projects without
              escalation, showcasing our commitment to quality and reliability.
              Pioneering advancements across the 5G, data center, IoT, and
              automotive sectors, TechsoC delivers bespoke, end-to-end
              semiconductor solutions that meet the dynamic demands of a rapidly
              evolving tech landscape. We pride ourselves on offering a
              supportive and thriving work culture, where employees enjoy a
              healthy work-life balance, competitive packages, and opportunities
              for personal and professional growth. Our collaborative
              environment fosters creativity and innovation, ensuring that both
              employees and clients benefit from value-driven, world-class
              services. At TechsoC, we believe in nurturing talent, recognizing
              achievements, and creating a positive workplace that aligns with
              the aspirations of our team and the needs of our global clientele.
            </p>
            <p className="lead ramParagraph fw-normal" style={{ textAlign: "justify" }}>
              Our expertise in Semiconductor(VLSI) services can transform your
              product ideas into cost-effective, powerful, performance & area
              optimized System-on-Chip (SoC). We cater to the growing demands of
              the 5G, Data Centre Infrastructure & Industrial markets,
              automative domain.
            </p>

            <div className="row gy-3 gx-xl-8">
              <div className="col-xl-12">
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0 downtoup">
                  <li className="lead">
                    <span class="me-3">
                      <Icon icon="icon-park-outline:check-correct" />
                    </span>

                    <span className="fw-normal">
                      Our prosperity comes from exhibited initiative and a
                      pledge to transform associations into getting through
                      examples of overcoming adversity.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-xl-12">
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0 downtoup">
                  <li className="lead">
                    <span class="me-3">
                      <Icon icon="icon-park-outline:check-correct" />
                    </span>
                    <span className="fw-normal">
                      We, at TechsoC, have faith in cooperation with the journey
                      for getting new skills.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSecond;
