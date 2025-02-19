import React, { useEffect } from "react";
import "./SlickSlider.css";
import { Player } from "@lottiefiles/react-lottie-player";



import innetara from "./SVG/innatera.svg";
import bayasystem from "./SVG/BayaSystem.svg";
import LifeSignals from './images/lifeSignals.png';
import InnoPhase from './images/InnoPhase.png';
import SkyChip from './images/SkyChip.png';
import Aeva from './images/Aeva2.png';
import circle5 from "./lottieFiles/ram/Animation - 1711812217268.json"; //For BackGround Image



const SlickSlider = () => {
  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
 
    
    // const images = document.querySelectorAll(".logos-slide img");
    // images.forEach(image => {
    //   image.addEventListener('mouseenter', () => {
    //     image.style.transform = 'scale(1.2)';
    //     image.style.zIndex = '1';
    //     image.style.filter = 'grayscale(0%)'; 
    //   });
    //   image.addEventListener('mouseleave', () => {
    //     image.style.transform = 'scale(1)';
    //     image.style.zIndex = 'auto';
    //     image.style.filter = 'grayscale(100%)';
    //   });
    // });



  }, []);

  return (
    <>
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
          src={circle5}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div class="logos">
      <h2  class="mb-5 mt-1"
                style={{
                  letterSpacing: "0.2rem",
                  fontWeight: 600,
                  marginLeft:'8rem',
                  color:"#1268b3",
                }}
              >Our Technology Partner</h2>
        <div class="logos-slide">
           <img src={bayasystem} alt="" />
          <img src={innetara} alt="" />
          <img src={LifeSignals} alt=""/>
          <img src={SkyChip} alt="" />
          <img src={InnoPhase} alt="" style={{backgroundColor:'#1268b3'}}  />
          <img src={Aeva} alt="" />
         
        </div>
      </div>
    </>
  );
};

export default SlickSlider;
