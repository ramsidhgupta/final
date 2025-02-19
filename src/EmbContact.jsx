import React, {useEffect} from "react";
import "./EmbContact.css";
import { Player } from "@lottiefiles/react-lottie-player";
import ContactUs from "./lottieFiles/ContactUs.json";
import contact from "./assets/contact.png";
import gsap from "gsap";
import Textify from "textify.js";

const EmbContact = () => {
  // useEffect(() => {
  //   // Textify Configuration
  //   const textifyConfig = {
  //     el: ".raamm",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       duration: 1,
  //       stagger: 0.1,
  //       ease: "expo.inOut",
  //       transformOrigin: "left right",
  //       animateProps: {
  //         x: "-100%",
  //         y: "0%",
  //       },
  //     },
  //   };

  //   const paragraphConfig = {
  //     el: ".ramParagraph",
  //     largeText: true,
  //     splitType: "lines",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       by: "lines",
  //       duration: 2,
  //       ease: "power3.inOut",
  //       stagger: 0.1,
  //       animateProps: {
  //         scale: 0.5,
  //         opacity: 0,
  //       },
  //     },
  //   };

  //   const title2Config = {
  //     el: ".ramHeading",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       duration: 0.7,
  //       ease: "power2.inOut",
  //       transformOrigin: "left top",
  //       animateProps: {
  //         y: "0",
  //         rotate: -180,
  //         scale: 0,
  //       },
  //     },
  //   };

  //   const paragraph3Config = {
  //     el: ".paragraph-3",
  //     observer: {
  //       repeat: true,
  //     },
  //     // largeText: true,
  //     // splitType: "lines",
  //     animation: {
  //       by: "lines",
  //       duration: 0.7,
  //       ease: "power3.inOut",
  //       stagger: 0.1,
  //       transformOrigin: "left top",
  //       animateProps: {
  //         rotate: 30,
  //         opacity: 0,
  //       },
  //     },
  //   };

  //   const RamConfig = {
  //     el: ".downtoup",
  //     largeText: true,
  //     splitType: "lines",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       by: "lines",
  //       duration:2,
  //       ease: "power3.inOut",
  //       stagger: 0.1,
  //       animateProps: {
         
  //         opacity: 0, 
  //         x: "100px", 
  //         y: "-50px", 
  //         scale: 2, 
  //         rotate: 360, 

  //       },
  //     },
  //   };

  //   // Initialize Textify for banner title and paragraph with GSAP
  //   const titleInstance = new Textify(textifyConfig, gsap);
  //   const paragraphInstance = new Textify(paragraphConfig, gsap);
  //   const title2Instance = new Textify(title2Config, gsap);
  //   const paragraph3Instance = new Textify(paragraph3Config, gsap);
  //   const textifyInstance = new Textify(RamConfig, gsap);
  // }, []); 

  return (
    <section class="section techwix-cta-section-03" style={{ backgroundColor: "#e5af2b" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <Player
              autoplay
              loop
              src={ContactUs}
              style={{
                width: "100%",
                height: "40vh",
                objectFit: "cover",
              }}
            />
          </div>

          <div class="col-lg-4">
            <div class="cta-content">
              <div class="section-title text-center mt-5">
                <h5 class="white downtoup" style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.25em'}}>
                  Please  don’t hesitate to contact us any time</h5>
                  <p class="font-w-100 ramParagraph" style={{ color:'#008F58',fontWeight:'bold', fontSize:'1em'}}>
                    Our experts can help you accelerate your digital
                    transformation journey!
                  </p>
                
                <div class="cta-info text-center"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cta-info text-center" >
              <div class="mt-2">
                <img src={contact} alt="No Pic" style={{background:'black', borderRadius:'10px'}} />
              </div>
              <p className="ramParagraph" style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.05em'}}>Call us for any inquiry</p>
              <h5 class="number ramParagraph" style={{ color:'#008F58',fontWeight:'bold', fontSize:'1em'}}>+91 8067577879</h5>
              <p className="ramParagraph" style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.05em'}}>Send your query</p>
              <h5 class="number ramParagraph" style={{ color:'#008F58',fontWeight:'bold', fontSize:'1em'}}>contact@Techsocind.com</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmbContact;
