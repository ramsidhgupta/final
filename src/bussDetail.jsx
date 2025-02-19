import React, {useState, useEffect} from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./bussDetail.css";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import BannerZoom from "./BannerZoom";
import chip1 from "./images/chip1.jpg";
import chip2 from "./images/chip2.jpg";
import chip3 from "./images/chip3.jpg";
import Offshore from "./images/offshoredevelopment.webp";
import animation from "./lottieFiles/ram/Animation - 1711812217268.json"
import AmsDataOne from "./AmsDataOne";

const BussDetail = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  
  const [ref, inView] = useInView({});
  const [ref1, inView1] = useInView({});


  useEffect(() => {
    if (inView) {
      setIsAnimate(true);
    } else {
      setIsAnimate(false);
    }
  }, [inView]);


  const images = [chip1, chip2, chip3];
  const heading1 = "OffShore Development Center";
  const heading2 =
    "We assists in acquiring, mentoring & managing high-quality resources for the best productivity.";

  const location = useLocation();
  const { lottieImage, para1, para2,} =
    location.state || {};

  return (
    <>
      <section className="wrapper bg-soft-primary mt-5">
        <BannerZoom images={images} heading1={heading1} heading2={heading2} />
      </section>

      <section className="wrapper-border bg-light angled lower-end">
        <div className="container py-14 py-md-10">
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <div className="col-lg-5 position-relative animate__animated animate__fadeInRight animate__delay-1s">
              <div className="overlap-grid overlap-grid-2">
              <Player
                  src={animation}
                  className="player"
                  loop
                  autoplay
                  style={{ height: "450px", width: "550px" }}
                />
              </div>
            </div>

            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-start animate__animated animate__fadeInLeft animate__delay-1s">
              <div className="d-flex align-items-center mb-3">
                <Player
                  src={lottieImage}
                  className="player text-center"
                  loop
                  autoplay
                  style={{ height: "50px", width: "50px" }}
                />
                
              </div>
              <p className="lead fw-bold" style={{ color: "#407AFF" }}>{para1}</p>
              <p className="lead fw-bold" style={{ color: "#407AFF" }}>{para2}</p>
            </div>
            <hr class="double my-8" />
            <div className="row gy-3 gx-xl-8 mt-1">
            <div
            ref={ref}
            style={{ color: "#407AFF" }}
            className={`col-lg-6 ${
              inView
                ? "animate__animated animate__fadeInRight animate__delay-0.5s"
                : ""
            }`}
          >
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0 fw-bold">
                  <li className="lead">
                    <span className="fw-bold">
                    Hiring offshore developers for your development project is advantageous and essential to counter the increasing volatility and uncertainty in the market.  
                    </span>
                  </li>

                  <li>
                    It saves on your hiring, infrastructure, and employee costs
                  </li>
                  <li>
                    You can easily scale up or down your team to meet your
                    project requirement and budget.
                  </li>
                  <li>
                    With an available talent pool of pre-vetted programmers and
                    coders, you can quickly onboard resources across different
                    tech-stack.
                  </li>
                  <li>
                    The best of all is that you can create an offshore software
                    development center for short-term projects, and once the
                    project is completed, the team can be dismantled.
                  </li>
                </ul>
              </div>
              <div
            ref={ref1}
            style={{ color: "#407AFF" }}
            className={`col-lg-6 ${
              inView1
                ? "animate__animated animate__fadeInLeft animate__delay-0.5s"
                : ""
            }`}
          >
              
                    <img 
                      className="image-2"
                      src={Offshore}
                      alt=""
                      style={{height:"40vh", width:"100%"}}
                    />
                      
              </div>
            </div>
          </div>
        </div>
        <AmsDataOne/>
      </section>
    </>
  );
};

export default BussDetail;
