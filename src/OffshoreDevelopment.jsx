import React from "react";
import "./OffshoreDevelopment.css";
import { useInView } from "react-intersection-observer";
// import offone from './assets/officePic1.jpg';
// import offtwo from './assets/off2.png';
// import offthree from './assets/officePic2.jpg';
// import offfour from './assets/4.jpeg'

// import offone from './assets/officePic1.jpg';
// import offtwo from './assets/off2.png';
// import offthree from './assets/officePic2.jpg';
// import offfour from './assets/4.jpeg';

// import Offone from "./assets/OfficeImage5.jpg";
// import Offtwo from "./assets/OfficeImage2.jpeg";
// import Offthree from "./assets/OfficeImage3.jpeg";
// import Offfour from "./assets/OfficeImage4.jpg";
import OfficeImage1 from "./assets/OfficeImage5.jpg";
// import OfficeImage2 from "./assets/OfficeImage2.jpeg";
import OfficeImage3 from "./assets/OfficeImage3.jpeg";
import OfficeImage4 from "./assets/OfficeImage4.jpg";
import OfficeImage2 from "./assets/novel.webp";

const OffshoreDevelopment = () => {
  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const [ref3, inView3] = useInView({});
  const [ref4, inView4] = useInView({});
  const [ref5, inView5] = useInView({});
  const [ref6, inView6] = useInView({});
  const [ref7, inView7] = useInView({});
  
  return (
    <>
      <section class="wrapper bg-soft-primary">
        <div class="container pt-17 pt-md-17 pb-0 pb-md-0 pt-xs-17">
          <div class="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-md-10 mb-3">
            <div
              ref={ref1}
              className={`col-lg-6 ${
                inView1 ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <h1 class="code-extrabold">OffShore Development</h1>
            </div>
            <div
              ref={ref2}
              className={`col-lg-6 ${
                inView2 ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <p class="lead fs-25 my-3 coda-extrabold" style={{color:'#1268b3', textAlign: 'right'}}>
                A dedicated development centre engaged in Developing
              </p>
            </div>
          </div>
          <div class="row office-group">
            <div
              ref={ref3}
              className={`col-sm-6 col-md-3 rounded ${
                inView3
                  ? "animate__animated animate__fadeInLeft animate__delay-1s"
                  : ""
              }`}
            >
              <img
                src={OfficeImage1}
                class="office-image"
                alt="office image one"
              />
            </div>
            <div
              ref={ref4}
              className={`col-sm-6 col-md-3 rounded ${
                inView4
                  ? "animate__animated animate__fadeInLeft animate__delay-2s"
                  : ""
              }`}
            >
              <img
                src={OfficeImage2}
                class="office-image"
                alt="office image two"
              />
            </div>
            <div
              ref={ref5}
              className={`col-sm-6 col-md-3 rounded ${
                inView5
                  ? "animate__animated animate__fadeInRight animate__delay-1s"
                  : ""
              }`}
            >
              <img
                src={OfficeImage3}
                class="office-image"
                alt="office image three"
              />
            </div>
            <div
              ref={ref6}
              className={`col-sm-6 col-md-3 rounded ${
                inView6
                  ? "animate__animated animate__fadeInRight animate__delay-2s"
                  : ""
              }`}
            >
              <img
                src={OfficeImage4}
                class="office-image"
                alt="office image four"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="wrapper bg-light">
        <div class="container pt-8 pt-md-10">
          <div class="row">
            <div
              ref={ref7}
              className={`col-lg-12 mb-10 ${
                inView7
                  ? "animate__animated animate__fadeInRight animate__delay-0.2s"
                  : ""
              }`}
            >
              {/* <div class="col-lg-12 mb-10"> */}
              <p class="lead">
                TechsoC deals with its seaward improvement at its best in class
                office in Bangalore, India. The Offshore improvement place (ODC)
                is decisively found enjoying clear benefits regarding cost and
                accessibility of specialized labor.
              </p>

              <p class="lead">
                The committed ODC is especially invaluable to clients requiring
                a devoted group in India due to the different benefits that
                India offers without the need to lay out its own office.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OffshoreDevelopment;
