import React from "react";
import { Link } from 'react-router-dom';
import "./ImageSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";


import ThreedCard from "./ThreedCard";


const ImageSlider = ({ images, titles, descriptions, links }) => {
  
  return (
    <div className="containerImage" >
      <Swiper
        effect={"coverflow"}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={5}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 1,
          stretch: 1,
          depth: 800,
          
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Link to={links[index]}>
            
              <ThreedCard
                backgroundImages={image}
                title={titles[index]}
                desc={descriptions[index]}
              />
              
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div
        className="swiper-pagination"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '180px'
        }}
      ></div>
   </div>
  );
};

export default ImageSlider;

