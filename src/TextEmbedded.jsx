import React, { useRef, useEffect } from "react";
import useLettering from "./useLettering";
import "./TextEmbedded.css";

const TextEmbedded = () => {
  const phrasesRefs = useRef([]);

  useEffect(() => {
    phrasesRefs.current.forEach(ref => {
      if (ref) {
        ref.style.opacity = 1; // Ensure h2 elements are visible
      }
    });
  }, []);

  useLettering(phrasesRefs.current);

  const setRefs = (ref) => {
    if (ref && !phrasesRefs.current.includes(ref)) {
      phrasesRefs.current.push(ref);
    }
  };

  return (
    <section className="wrapper">
      <div className="container-fluid pt-md-8 pt-8 pt-md-0">
        <div className="container">
        <h4 className="text-center" style={{
                    
                    letterSpacing: "1em",
                    color:'#1268b3'
                   
                  }}>CONTACT WITH US FOR</h4>
          <div className="os-phrases" id="os-phrases">
         
            <h2 ref={setRefs}>Performance Optimization</h2>
            <h2 ref={setRefs}>Cost Efficiency</h2>
            <h2 ref={setRefs}>Reliability and Stability</h2>
            <h2 ref={setRefs}>Customization</h2>
            <h2 ref={setRefs}>Scalability</h2>
            <h2 ref={setRefs}>Competitive Advantage</h2>
            <h2 ref={setRefs}>User Experience</h2>
            <h2 ref={setRefs}>Expertise Innovation Quality Reliability</h2>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextEmbedded;
