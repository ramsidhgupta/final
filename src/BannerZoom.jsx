import React  from "react";
import "./BannerZoom.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { useInView } from "react-intersection-observer";
import "react-multi-carousel/lib/styles.css";
import chip1 from "./assets/ai_board_1.jpg";
import chip2 from "./assets/geometric-art.jpg";
import chip3 from "./assets/microchip_4.jpg";

import { easeInOut, motion } from "framer-motion";

const BannerZoom = ({ heading1, heading2 }) => {
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const variants2 = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };
  const variants1 = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  };


  

  return (
    <Swiper
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      slidesPerView={1}
      spaceBetween={5}
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="position-relative">
          <img className="image-car-small" src={chip1} alt="Banner 1" />
          <div className="overlayMain"></div>
          <div className="position-absolute w-100 top-50 start-50 translate-middle text-center">
            <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5">
              <motion.h2
                ref={ref5}
                initial={{ opacity: 0, y: -200 }}
                animate={inView5 ? "visible" : "hidden"}
                variants={variants3}
                transition={{ duration: 0.8, delay: 0.2, ease: easeInOut }}
                className="Heading-1 display-1 fs-56 mb-10 ps-5 text-white fw-bold "
              >
               {heading1}
              </motion.h2>
              <motion.p
                ref={ref5}
                initial={{ opacity: 0, x: -200 }}
                animate={inView5 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.9, delay: 0.3, ease: easeInOut }}
                className="Paragraph-1 lead fs-23 lh-sm mb-10 ps-4 text-white fw-bold "
              >
                {heading2}
              </motion.p>


            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-content position-relative">
          <img className="image-car-small" src={chip2} alt="Banner 2" />
          <div className="position-absolute w-100 top-50 start-50 translate-middle text-center">
            <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5">
              <motion.h2
                ref={ref6}
                initial={{ opacity: 0, y: -200 }}
                animate={inView6 ? "visible" : "hidden"}
                variants={variants3}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="Heading-1 display-1 fs-56 mb-10 ps-5 text-white fw-bold "
              >
                {heading1}
              </motion.h2>
              <motion.p
                ref={ref6}
                initial={{ opacity: 0, x: -200 }}
                animate={inView6 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="Paragraph-1 lead fs-23 lh-sm mb-10 ps-4 text-white fw-bold "
              >
               {heading2}
              </motion.p>
              
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-content position-relative">
          <img className="image-car-small" src={chip3} alt="Banner 3" />
          <div className="position-absolute w-100 top-50 start-50 translate-middle text-center">
            <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5">
              <motion.h2
                ref={ref7}
                initial={{ opacity: 0, y: -200 }}
                animate={inView7 ? "visible" : "hidden"}
                variants={variants3}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="Heading-1 display-1 fs-56 mb-10 ps-5 text-white fw-bold "
              >
                {heading1}
              </motion.h2>
              <motion.p
                ref={ref7}
                initial={{ opacity: 0, x: -200 }}
                animate={inView7 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="Paragraph-1 lead fs-23 lh-sm mb-10 ps-4 text-white fw-bold "
              >
               {heading2}
              </motion.p>
              
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerZoom;
