import React, { useEffect } from "react";
import "./SlickSlider.css";

import airbus from "./icons/airbus.png";
import building from "./icons/building.png";
import city from "./icons/city.png";
import bike from "./icons/dirt-bike.png";
import chopper from "./icons/medical-chopper.png";
import people from "./icons/people.png";
import sun from "./icons/sun.png";
import tower from "./icons/tower.png";
import tractor from "./icons/tractor.png";
import ship from "./icons/ship.png";
import computer from "./icons/computer.png";

import circle5 from "./lottieFiles/ram/Animation - 1711810876252.json";

const SliderSegment = () => {
  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);

    const images = document.querySelectorAll(".logos-slide img");
    images.forEach((image) => {
      image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.2)";
        image.style.zIndex = "1";
        image.style.filter = "grayscale(0%)";
      });
      image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
        image.style.zIndex = "auto";
        image.style.filter = "grayscale(100%)";
      });
    });
  }, []);

  return (
    <>
      <div class="logos">
        <div class="logos-slide">
          <img src={people} alt="" />
          <img src={sun} alt="" />
          <img src={tower} alt="" />
          <img src={ship} alt="" />
          <img src={computer} alt="" />
          <img src={city} alt="" />
          <img src={bike} alt="" />
          <img src={building} alt="" />
        </div>
      </div>
     
    </>
  );
};

export default SliderSegment;
