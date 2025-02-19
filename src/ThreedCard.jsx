import React, { useEffect, useRef } from "react";
import "./ThreedCard.css";

const ThreedCard = ({ backgroundImages, title, desc }) => {
  const backgroundRef = useRef();

  useEffect(() => {
   
    backgroundRef.current.style.background = `url(${backgroundImages})`;
    backgroundRef.current.style.height = "100%";
    backgroundRef.current.style.width = "100%";
    backgroundRef.current.style.backgroundSize = "100% 100%";
    backgroundRef.current.style.backgroundPosition = "center";
    backgroundRef.current.style.borderRadius = "20px";
    backgroundRef.current.style.transformStyle ="preserve-3d";
    backgroundRef.current.style.transition = "transform .6s cubic-bezier(.4,.2,.2,1), transform-style 2s"; 
  }, [backgroundImages]);

  return (
    <>
   
    <div className="center1">
    
      <div ref={backgroundRef} className="front-face">
        <div className="contents1 front">
           <p style={{fontSize:'1.5rem', color:'#1268b3', fontWeight:'500', alignItems:'center'}}> {title}</p>
          <span style={{fontSize:'1rem', fontWeight:'800'}}>TechSoc, Bangaluru, India</span>
        </div>
      </div>
      
      <div className="back-face">
        <div className="contents1 backFace">
          <p style={{fontSize:'1.5rem', color:'#1268b3', fontWeight:'800'}}>{desc}</p>
        </div>
      </div>
     
      
    </div>
    
    </>
  );
};

export default ThreedCard;


