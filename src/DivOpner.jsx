import React, { useEffect, useState } from "react";
import "./DivOpener.css";
import { motion, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import JobDetails from './JobDetails';


import BannerSection from "./BannerSection";


const DivOpener = () => {
  const [hideTopBottom, setHideTopBottom] = useState(false);
  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();

  useEffect(() => {
    const animateDivs = async () => {
      await Promise.all([
        controlsTop.start({ y: -450 }),
        controlsBottom.start({ y: 450 }),
      ]);

      await controlsTop.set({ height: 0, width: 0, opacity: 0 });
      await controlsBottom.set({ height: 0, width: 0, opacity: 0 });

      setHideTopBottom(true);

      const mainElement = document.querySelector(".main1");
      mainElement.classList.remove("main1");
      const topElement = document.querySelector(".top");
      topElement.classList.remove("top");
      const tophElement = document.querySelector(".top-h");
      tophElement.classList.remove("top-h");
      const bottomElement = document.querySelector(".bottom");
      bottomElement.classList.remove("bottom");

      const bottomHElement = document.querySelector(".bottom-h");
      bottomHElement.classList.remove("bottom-h");
    };

    animateDivs();
  }, [controlsTop, controlsBottom]);


  const location = useLocation();
  const { componentIdentifier, Text, JD, QUAL, GoodToHave, SoftSkills } = location.state || {};



  let componentToRender;
  switch (componentIdentifier) {
    case "DesignVerification":
          componentToRender = <BannerSection header={Text} JD={JD} QUAL={QUAL}/>;
          break;
    case "AnalogDesign":
        componentToRender = <BannerSection header={Text} JD={JD} QUAL={QUAL}/>;
        break;
    case "LayoutDesign":
          componentToRender = <BannerSection header={Text} JD={JD} QUAL={QUAL}/>;
          break;
    case "PhysicalDesign":
          componentToRender = <BannerSection header={Text} JD={JD} QUAL={QUAL}/>;
          break;
    case "dft":
          componentToRender = <BannerSection header={Text} JD={JD} QUAL={QUAL}/>;
          break;
    case "rtl":
          componentToRender = <BannerSection header={Text} JD={JD} QUAL={QUAL}/>;
          break;
    case "fpga":
          componentToRender = <BannerSection header={Text} JD={JD} QUAL={QUAL}/>;
          break;
    case "sta":
          componentToRender = <BannerSection header={Text} JD={JD} QUAL={QUAL}/>;
          break;
    case "Emulation":
          componentToRender = <BannerSection header={Text} JD={JD} QUAL={QUAL}/>;
          break;
    case "firmware":
          // componentToRender = <BannerSection header={Text} JD={JD} QUAL={QUAL}/>;
          componentToRender = <JobDetails header={Text} JD={JD} QUAL={QUAL} GoodToHave={GoodToHave} SoftSkills={SoftSkills}/>;

          break;
    case "embedded":
          // componentToRender = <BannerSection header={Text} JD={JD} QUAL={QUAL}/>;
           componentToRender = <JobDetails header={Text} JD={JD} QUAL={QUAL} GoodToHave={GoodToHave} SoftSkills={SoftSkills}/>;

           break; 
    default:
          componentToRender = <div>Component Not Found</div>;
  }



  
  return (
    <div className="main1">
      {!hideTopBottom && (
        <>
          <motion.div
            className="top"
            initial={{ y: 0 }}
            animate={controlsTop}
            transition={{ duration: 3, delay: 1, ease: "linear" }}
          >
            <h1 className="top-h">{Text}</h1>
          </motion.div>
          <motion.div
            className="bottom"
            initial={{ y: 0 }}
            animate={controlsBottom}
            transition={{ duration: 3, delay: 1, ease: "linear" }}
          >
           
            <h1 className="bottom-h">{Text}</h1>
          </motion.div>
        </>
      )}
    
      {componentToRender}
    </div>
  );
};
export default DivOpener;
