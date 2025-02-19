import React from "react";
import './App.css';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import JobQual from "./JobQual";



const JobDesc = ({header, JD, QUAL}) => {
  
  const variants3 = {
    hidden: { opacity: 0, x: 450 },
    visible: { opacity: 1, x: 0 },
  };

  const [ref, inView] = useInView({});

  const delayVar = 0.2;
  const isSmallScreen = window.innerWidth < 768;

  return (
    <>
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
            // If screen size is less than 768px, don't animate
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
            // If screen size is not less than 768px, animate
            <motion.p
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
              {/* <div > */}
                {/* {JD.map((response, index) => (
                  
                  <motion.p
                    key={index}
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
                      lineHeight: "1", 
                      maxWidth: "90%", 
                      fontSize:"0.85rem",

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
                ))} */}
              {/* </div> */}
            </div>
          </div>

          
         </div>
      </section>
      <JobQual header={header} QUAL={QUAL}/>
    </>
  );
};

export default JobDesc;
