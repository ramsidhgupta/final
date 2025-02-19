import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";



const AmsDataTwo = () => {
  const sentences = [
    "Modeling and Simulation of entire chip functionality using HDL, SV, Verilog A, Verilog AMS, OVM/UVM.",
    "Top Level Verification by CoSimulation",
    "Spec Validation",
    "Module-level Verification of Analog/RF design",
    "RTL Verification",
  ];



  
  const variants3 = {
    hidden: { opacity: 0, x: 450 },
    visible: { opacity: 1, x: 0 },
  };

  const [ref, inView] = useInView({});

  const delayVar = 0.2;

  return (
    <>
    
          <div class="row AMS-at">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <h4 class="text-uppercase text-white">
                The verification team handles projects involving
              </h4>

              {/* <div > */}
                {sentences.map((sentence, index) => (
                  <motion.p
                    key={index}
                    className="lead"
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants3}
                    transition={{ duration: 2, delay: index * delayVar }}
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      marginLeft: "2rem",
                      display: "flex", 
                      alignItems: "center",
                      lineHeight: "1", // Adjust this value to reduce line spacing
                      maxWidth: "90%", // Adjust the maximum width to prevent overflow

                    }}
                  >
                    <Icon
                      icon="flat-color-icons:right"
                      style={{
                        color: "#0f27db",
                        fontSize: "36px", // Adjust the font size if necessary
                        marginRight: "1rem",
                      }}
                    />
                    {sentence}
                  </motion.p>
                ))}
              {/* </div> */}
            </div>
          </div>
        {/* </div>
      </section> */}
    </>
  );
};

export default AmsDataTwo;
