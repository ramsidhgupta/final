import React, {useEffect} from "react";
import "./HomeFourth.css";
import { Link } from "react-router-dom";
import join from './assets/join.jpg'
import useAnimateOnScroll from './useAnimateOnScroll';


const HomeFourth = () => {
  useAnimateOnScroll('.raamm', { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1, stagger: 0.1, ease: 'expo.inOut' });
  useAnimateOnScroll('.ramParagraph', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, stagger: 0.1, ease: 'power3.inOut' });
  useAnimateOnScroll('.ramHeading', { y: '-100%', rotate: -180, scale: 0 }, { y: '0', rotate: 0, scale: 1, duration: 0.7, ease: 'power2.inOut' });
  useAnimateOnScroll('.paragraph-3', { rotate: 30, opacity: 0 }, { rotate: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.inOut' });
  useAnimateOnScroll('.downtoup', { opacity: 0, x: '-100px', y: '-50px', scale: 2 }, { opacity: 1, x: '0px', y: '0px', scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.inOut' });

  // useEffect(() => {
   
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

    
  //   // Initialize Textify for banner title and paragraph with GSAP
  //   const titleInstance = new Textify(textifyConfig, gsap);
  //   const paragraph3Instance = new Textify(paragraph3Config, gsap);
  // }, []); 




  return (
    <section
      data-cue="fadeIn"
      className="wrapper image-wrapper bg-image bg-overlay"
      style={{
        backgroundImage:
        `url(${join})`,
      }}
    >
      
      <div class="container py-18">
        <div class="row">
          <div class="col-lg-8">
            <h1 class="raamm text-white">
              Join Our Community
            </h1>
            <h4 class="text-white paragraph-3" style={{
                    letterSpacing: "0.2rem",
                    fontWeight: 600}}>
              We are trusted by majority of the clients. Join them by using our
              services and grow your business.
            </h4>
            <Link to="/ContactUs"
              
              className="btn btn-primary rounded mb-0 text-nowrap text-white"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFourth;
