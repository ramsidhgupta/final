import React, {useState, useEffect} from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./bussDetail.css";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import board1 from './assets/turnkey.jpg'




import CharaAnim from "./CharaAnim";
import { Icon } from "@iconify/react";



import BannerZoom from "./BannerZoom";
import chip1 from "./images/chip1.jpg";
import chip2 from "./images/chip2.jpg";
import chip3 from "./images/chip3.jpg";
import turnkey from "./images/turnkey.png";
import image5 from "./lottieFiles/1710992281949.jpg"
import AmsDataOne from "./AmsDataOne";
const TurnkeyService = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [scale, setScale] = useState(1);
  
  const [ref, inView] = useInView({});
  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const [ref3, inView3] = useInView({});
  const [ref4, inView4] = useInView({});

  useEffect(() => {
    
    setScale(1.5); 
  }, []);

  useEffect(() => {
    if (inView) {
      setIsAnimate(true);
    } else {
      setIsAnimate(false);
    }
  }, [inView]);


  const images = [chip1, chip2, chip3];
  const heading1 = "TurnKey Services";
  const heading2 ="We assists in acquiring, mentoring & managing high-quality resources for the best productivity.";
  const para1="We have proven experience of driving turnkey projects and ODC for Semiconductor product companies. With our experienced technical know how and stringent process, we have delivered dozen’s of tape outs with high quality.";
  const para2="TechsoC Systems works in executing ASIC configuration projects from determination to GDSII. We influence the times of involvement and specialized expertise to execute projects inside time and right at the first go. We can rapidly increase groups and oversee programs forcefully to guarantee speedy opportunity to market and superior grade.";



  const location = useLocation();
  const { lottieImage, heading, para3, para4, image1, image2 } =
    location.state || {};

  return (
    <>
      <section className="wrapper bg-soft-primary mt-5">
        <BannerZoom images={images} heading1={heading1} heading2={heading2} />
      </section>

      <section className="wrapper-border bg-light angled lower-end">
        <div className="container py-14 py-md-10">
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
            <div className="col-lg-6 position-relative animate__animated animate__fadeInRight animate__delay-1s mt-5">
              <div className="overlap-grid overlap-grid-2">
              <img 
                      className="image-2"
                      src={image5}
                      alt="Welcome Second Image"
                      style={{height:"58vh", width:"100%", borderRadius:"20px"}}
                    />
              </div>
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start animate__animated animate__fadeInLeft animate__delay-1s mt-1">
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
            ref={ref4}
            style={{ color: "#407AFF" }}
            className={`col-lg-6 ${
              inView4
                ? "animate__animated animate__fadeInRight animate__delay-0.5s"
                : ""
            }`}
          >
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0 fw-bold" style={{textDecoration:"underline"}}>
                  <li>
                    
                    Price Certainty
                   
                  </li>
                  <hr class="double my-8" />
                  <li>
                    Reduced Change Management Challenges
                  </li>
                  <hr class="double my-8" />
                  <li>
                    Reduced Cost Overruns
                  </li>
                  <hr class="double my-8" />
                  <li>
                    Condensed Project Timelines
                  </li>
                  <hr class="double my-8" />
                  <li>
                    Collaborative Approach
                  </li>
                  <hr class="double my-8" />
                  <li>
                    Risk Transference
                  </li>
                  <hr class="double my-8" />
                  <li>
                    Reduced Managemnt Efforts
                  </li>
                  <hr class="double my-8" />
                  <li>
                    Consistent Quality
                  </li>
                  <hr class="double my-8" />
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
                      src={turnkey}
                      alt="Welcome Second Image"
                   
                      style={{ transform: `scale(${scale})`, transformOrigin: 'top left', height:"45vh", width:"80%" }}
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

export default TurnkeyService;
