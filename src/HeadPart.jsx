import React from 'react';
import './HeadPart.css';
import { useInView } from "react-intersection-observer";
import BannerZoom from './BannerZoom';
import chip1 from './images/chip1.jpg';
import chip2 from './images/chip2.jpg';
import chip3 from './images/chip3.jpg';

const HeadPart = ({ header1, header2, imageUrl }) => {

  const [ref, inView] = useInView({});
  const [ref1, inView1] = useInView({});
  const images = [chip1, chip2, chip3,];
  
  const heading1="Our Bussiness Model"
 

  return (
    
        <div class="container pt-17 pt-md-17 pb-10 pb-md-0 pt-xs-17">
          {/* <div class="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-md-10 mb-3">
            <div
              ref={ref}
              className={`col-lg-6 ${
                inView ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <h5 class="display-1 fs-66 lh-xxs mb-0 fw-bold">{header1}</h5>
            </div>
            <div
              ref={ref}
              className={`col-lg-6 ${
                inView ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <p class="lead fs-25 my-3 fw-bold">
                {header2}
              </p>
            </div>
          </div> */}
          <div className='position-relative animate__animated animate__fadeInUp'><BannerZoom images={images} heading1={heading1}/></div>
         
        </div>
  )
}

export default HeadPart;