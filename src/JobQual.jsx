import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const JobQual = ({ header, QUAL }) => {
  const [ref5, inView5] = useInView({threshold:0.1});

  const variants2 = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  
  return (
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
            // key={job.id}
            // ref={ref5}
            // animate={inView5 ? "visible" : "hidden"}
            // variants={variants2}
            // transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
            // className="col-lg-6"
            key={job.id}
            initial="hidden"
            animate="visible"
            variants={variants2}
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
            // ref={ref5}
            // animate={inView5 ? "visible" : "hidden"}
            // variants={variants2}
            // transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
            // className="col-lg-6"
            key={job.id}
            initial="hidden"
            animate="visible"
            variants={variants2}
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
  );
};

export default JobQual;

// return (
//   <section className="wrapper-border mt-4">
//     <div className="container py-10 py-md-10" style={{ color: "white" }}>
//       <h2 className="text-black text-center">
//         {" "}
//         {header} Engineer Qualification:
//       </h2>

//       <div className="row gy-3 gx-xl-8 mt-1">
//         <ValueData JobData={JobData[0]} />
//       </div>
//       <div className="row gy-3 gx-xl-8 mt-1">
//         <ValueData JobData={JobData[1]} />
//       </div>
//       <div className="row gy-3 gx-xl-8 mt-1">
//         <ValueData JobData={JobData[2]} />
//       </div>
//     </div>
//   </section>
// );
// };
