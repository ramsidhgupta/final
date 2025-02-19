import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ValueData = ({ValueData1}) => {
    const [ref, inView] = useInView({});

      const variants2 = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
      };



  return (
    <>
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={variants2}
        transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
        className="col-lg-6"
      >
        <h4 className="text-center"> {ValueData1.title1}</h4>
        <h5 className="text-center"> {ValueData1.title2}</h5>

        <ul className="icon-list bullet-bg bullet-soft-primary mb-0 list-unstyled">
          <li className="lead text-center">
            <span>
              <Player
                src={ValueData1.lottie1}
                className="player"
                loop
                autoplay
                style={{ height: "80px", width: "80px" }}
              />
            </span>
            <span>{ValueData1.detail1}</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={variants2}
        transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
        className="col-lg-6"
      >
        <h4 className="text-center">{ValueData1.title3}</h4>
        <h5 className="text-center">{ValueData1.title4}</h5>
        <ul className="icon-list bullet-bg bullet-soft-primary mb-0 list-unstyled">
          <li className="lead text-center">
            <span>
              <Player
                src={ValueData1.lottie2}
                className="player"
                loop
                autoplay
                style={{ height: "80px", width: "80px" }}
              />
            </span>
            <span>{ValueData1.details2}</span>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default ValueData;
