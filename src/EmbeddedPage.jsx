import React from "react";
import "./EmbeddedPage.css";
import { motion, easeInOut } from "framer-motion";
import bgvideo from "./assets/bgvideo.mp4";
import { useInView } from "react-intersection-observer";
import { Tabs } from "./Tabs";
import SkewedDiv from "./SkewedDiv";
import banner1 from "./assets/embedde_processed.png";
import ManyDivs from "./ManyDivs";
import { BannerEmbedded } from "./BannerEmbedded";

import Projects3 from "./Projects3";
import Frequent from "./Frequent";
import EmbContact from "./EmbContact";
import WhyEmbedded from "./WhyEmbedded";

function EmbeddedPage() {
  
  const [ref5, inView5] = useInView();

  const variants1 = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="position-relative">
        <video
          className="image-car"
          src={bgvideo}
          autoPlay
          muted
          loop
          alt="Banner Video"
        >
          Your browser does not support the video tag.
        </video>
        <div className="overlayMain-bg"></div>
        <div
          className="position-absolute w-100 top-50 start-50 translate-middle text-center"
          style={{ zIndex: 2 }}
        >
          <div className="col-md-12 offset-md-1 col-lg-12 offset-lg-0 col-xl-6 col-xxl-5">
            <img
              src={banner1}
              alt="Banner 1"
              style={{ width: "60%", height: "auto" }}
            />

            <motion.p
              ref={ref5}
              initial={{ opacity: 0, x: -200 }}
              animate={inView5 ? "visible" : "hidden"}
              variants={variants1}
              transition={{ duration: 0.9, delay: 0.3, ease: easeInOut }}
              className="Paragraph-1 fs-23 lh-sm mb-10 ps-4 text-white fw-bold "
            >
              We are passionate about delivering well-organized, inventive, and
              world-class solutions, with a focus on Healthcare, Aerospace,
              Semiconductor, Automotive, Consumer Electronics, Home Automation,
              telecommunications, Security, Retail, and E-commerce.
            </motion.p>
          </div>
        </div>
      </div>

      <Tabs />
      <SkewedDiv />
      <ManyDivs />
      <BannerEmbedded />
      <Projects3 />
      <Frequent/>
      <EmbContact/>
      <WhyEmbedded/>
    </>
  );
}

export default EmbeddedPage;
