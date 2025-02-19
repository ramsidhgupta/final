import React, { useRef } from "react";
import "./PhotoShow.css";
import event1 from "./assets/TeamLunchMay24.jpeg";
import event2 from "./assets/raja2.jpeg";
import event3 from "./assets/grp1.jpeg";
import event4 from "./assets/raja3.jpeg";
import event5 from "./assets/event3.jpg";
import event6 from "./assets/event6.jpeg";
import event10 from "./assets/event10.jpeg";

import { Icon } from "@iconify/react/dist/iconify.js";

const PhotoShow = () => {
  const slideRef = useRef(null);
  const nextSlide = () => {
    const items = slideRef.current.querySelectorAll(".itemPhoto");
    slideRef.current.appendChild(items[0]);
  };
  const prevSlide = () => {
    const items = slideRef.current.querySelectorAll(".itemPhoto");
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    <div class="container mt-3 pt-5">
      <div class="row">
        <div class="col-md-12">
          <div className="containerPhoto">
            <div className="slidePhoto" ref={slideRef}>
              <div
                className="itemPhoto"
                style={{ backgroundImage: `url(${event1})`}}>
                <div className="contentPhoto">
                  <div className="name">Monthly Meet Up</div>
                  <div className="desc">For the Month of May'24</div>
                  
                </div>
              </div>
              <div
                className="itemPhoto"
                style={{ backgroundImage: `url(${event2})` }}
              >
                <div className="contentPhoto">
                  <div className="name">Get Together</div>
                  <div className="desc">On 1st Anniversery</div>
                 
                </div>
              </div>
              <div
                className="itemPhoto"
                style={{ backgroundImage: `url(${event3})` }}
              >
                <div className="contentPhoto">
                  <div className="name">Monthly Meet Up</div>
                  <div className="desc">For the Month of Dec'23</div>
                 
                </div>
              </div>
              <div
                className="itemPhoto"
                style={{ backgroundImage: `url(${event4})` }}
              >
                <div className="contentPhoto">
                  <div className="name">Monthly Meet Up</div>
                  <div className="desc">For the Month of Jan'24</div>
                 
                </div>
              </div>
              <div
                className="itemPhoto"
                style={{ backgroundImage: `url(${event5})` }}
              >
                <div className="contentPhoto">
                  <div className="name">Monthly Meet Up</div>
                  <div className="desc">For the Month of Feb'24</div>
                 
                </div>
              </div>
              {/* <div
                className="itemPhoto"
                style={{ backgroundImage: `url(${event6})` }}
              >
                <div className="contentPhoto">
                  <div className="name">Monthly Meet Up</div>
                  <div className="desc">For the Month of Nov'23</div>
                 
                </div>
              </div> */}
              <div
                className="itemPhoto"
                style={{ backgroundImage: `url(${event10})` }}
              >
                <div className="contentPhoto">
                  <div className="name">Monthly Meet Up</div>
                  <div className="desc">For the Month of Oct'23</div>
                 
                </div>
              </div>
            </div>
            <div className="buttonPhoto">
              <button className="prev" onClick={prevSlide}>
              <Icon icon="twemoji:left-arrow" style={{ width: '30px', height: '33px', borderRadius:'10px', }}/>
               
              </button>
              <button className="next" onClick={nextSlide}>
              <Icon icon="twemoji:right-arrow" style={{ width: '30px', height: '33px', borderRadius:'10px', }}/>
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoShow;
