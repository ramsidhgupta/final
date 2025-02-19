import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const MktData = ({MktData1}) => {
    const [ref, inView] = useInView({});
    
    const variants1 = {
      hidden: { opacity: 0, x: 350 },
      visible: { opacity: 1, x: 0 },
    };
    const variants2 = {
      hidden: { opacity: 0, x: -350 },
      visible: { opacity: 1, x: 0 },
    };
    const variants3 = {
      hidden: { opacity: 0, x: 350 },
      visible: { opacity: 1, x: 0 },
    };

  return (
    <>
   
    <div className="col-lg-5 position-relative">
      <div className="overlap-grid overlap-grid-2">
        {/* <div className="item"> */}
          <Player
            src={MktData1.animation}
            className="player"
            loop
            autoplay
            style={{
              height: "180px",
              width: "100%",
             
            }}
          />
        {/* </div> */}
      </div>
    </div>

    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start">
      <motion.div 
       className="d-flex align-items-center mb-3"
       ref={ref}
       initial="hidden"
       animate={inView ? "visible" : "hidden"}
       variants={variants1}
       transition={{ duration: 1, ease: "easeInOut"  }}
      >
      
        <Player
          src={MktData1.lottie}
          className="player"
          loop
          autoplay
          style={{ height: "40px", width: "40px" }}
        />
        <h2 className="display-4 ms-3" style={{color:"#1268b3", fontWeight:400}}>{MktData1.title}</h2>
      </motion.div>
      <motion.p 
        style={{color:"#fff", fontWeight:500}}
        ref={ref}
       initial="hidden"
       animate={inView ? "visible" : "hidden"}
       variants={variants1}
       transition={{ duration: 2, ease: "easeInOut"  }}>
      
        {MktData1.detail}
      </motion.p>
    </div>
</>
  )
}

export default MktData