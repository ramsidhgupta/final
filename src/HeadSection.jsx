import React from 'react';
import './HeadSection.css';
import { useInView } from "react-intersection-observer";

const HeadSection = ({ header1, header2, imageUrl }) => {

  const [ref, inView] = useInView({});
  const [ref1, inView1] = useInView({});
 

  return (
    
        <div class="container pt-17 pt-md-17 pb-10 pb-md-0 pt-xs-17">
          <div class="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-md-10 mb-3">
            <div
              ref={ref}
              className={`col-lg-6 ${
                inView ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <h1 class="lh-xxs mb-0 coda-extrabold">{header1}</h1>
            </div>
            <div
              ref={ref}
              className={`col-lg-6 ${
                inView ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <p class="lead fs-25 my-3 coda-extrabold" style={{color:'#1268b3', textAlign: window.innerWidth <= 768 ? 'left' : 'right'}}>
                {header2}
              </p>
            </div>
          </div>
          <div class="position-relative">
            <div
              ref={ref}
              className={`shape bg-dot primary rellax w-17 h-21 ${
                inView
                  ? "animate__animated animate__fadeInUp"
                  : ""
              }`}
              style={{
                top: "-1.5rem",
                right: "-4.7rem",
                transform: "translate3d(0px, -22px, 0px)",
              }}
            ></div>
            <figure
              ref={ref1}
              className={`rounded mb-md-n20 ${
                inView1
                  ? "animate__animated animate__fadeInUp animate__delay-0.5s"
                  : ""
              }`}
            >
              <img
                src={imageUrl}
                srcSet={imageUrl}
                alt=""
                class="inner-banner"
              />
            </figure>
          </div>
        </div>
  )
}

export default HeadSection;