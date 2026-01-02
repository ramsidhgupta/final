import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";
import MasonryGallery from "./masonry_gallery_react";
import MasonryGalleryTwo from "./MasonaryGallery";
import "./ArtificialInteligence.css";
// import FourDivs from "./FourDivs";
import Circut2 from "./lottieFiles/circuit2.json";
import star from "./lottieFiles/EmulLottie5.json";
import lottie1 from "./lottieFiles/EmulLottie1.json";
import lottie2 from "./lottieFiles/EmulLottie2.json";
import lottie3 from "./lottieFiles/EmulLottie3.json";
import lottie4 from "./lottieFiles/EmulLottie4.json";
import lottie5 from "./lottieFiles/EmulLottie5.json";
import lottie6 from "./lottieFiles/EmulLottie6.json";
import lottie7 from "./lottieFiles/EmulLottie7.json";
import lottie8 from "./lottieFiles/EmulLottie8.json";
import useAnimateOnScroll from "./useAnimateOnScroll";
// import RingViewer from "./RingViewer";

const ArtificialInteligence = () => {
  useAnimateOnScroll(
    ".raamm",
    { x: "-100%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 1, stagger: 0.1, ease: "expo.inOut" }
  );
  useAnimateOnScroll(
    ".ramParagraph",
    { scale: 0.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2, stagger: 0.1, ease: "power3.inOut" }
  );
  useAnimateOnScroll(
    ".ramHeading",
    { y: "-100%", rotate: -180, scale: 0 },
    { y: "0", rotate: 0, scale: 1, duration: 2, ease: "power2.inOut" }
  );
  useAnimateOnScroll(
    ".paragraph-3",
    { rotate: 30, opacity: 0 },
    { rotate: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.inOut" }
  );
  useAnimateOnScroll(
    ".downtoup",
    { opacity: 0, x: "-350px", y: "0px", scale: 2 },
    {
      opacity: 1,
      x: "0px",
      y: "0px",
      scale: 1,
      duration: 2,
      stagger: 0.3,
      ease: "power3.inOut",
    }
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      fade
      interval={12000}
    >
      {/* <Carousel.Item>
        <div className="container-fluid"><RingViewer/></div>
      </Carousel.Item> */}
      <Carousel.Item>
        <div className="overlay-content container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 mb-2">
              <MasonryGallery isActive={activeIndex === 0} />
            </div>
            <div className="col-md-6 col-sm-12 mb-4">
              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background .raam">
                    <Player
                      src={Circut2}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",
                      fontWeight: "600",
                    }}
                  >
                    Custom Object Detection in Images/Videos
                  </h6>
                </div>
              </div>

              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={star}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",

                      fontWeight: "600",
                    }}
                  >
                    Inspection and Defect detection in assembly line (Scratch,
                    Dent & Others)
                  </h6>
                </div>
              </div>

              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie1}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup  mt-2">
                  <h6
                    style={{
                      color: "#ffff",

                      fontWeight: "600",
                    }}
                  >
                    Truck/Bus Driver safety monitoring system
                  </h6>
                </div>
              </div>

              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie2}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",

                      fontWeight: "600",
                    }}
                  >
                    Conveyor Belt object counting / Bottle / Can counting
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie3}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup">
                  <h6
                    style={{
                      color: "#ffff",

                      fontWeight: "600",
                    }}
                  >
                    Custom Person Pose Estimation (fitness/gym workout, player
                    poses, security & safety)
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie4}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",

                      fontWeight: "600",
                    }}
                  >
                    Person Detection & Tracking
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie5}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",

                      fontWeight: "600",
                    }}
                  >
                    Ball Tracking & Finding the Future Ball Trajectory
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie6}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",

                      fontWeight: "600",
                    }}
                  >
                    Persons Object Tracking in the minimart
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie7}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",

                      fontWeight: "600",
                    }}
                  >
                    Person detection and counting In-Out line
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie8}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",

                      fontWeight: "600",
                    }}
                  >
                    Webcam Live Facial Recognition online application
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="overlay-content container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 mb-4">
              <MasonryGalleryTwo isActive={activeIndex === 1} />
            </div>
            <div className="col-md-6 col-sm-12 mb-4">
              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={Circut2}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",
                      letterSpacing: "0.1em",
                      fontWeight: "700",
                    }}
                  >
                    Board bring up . BOOT and BIOS development
                  </h6>
                </div>
              </div>

              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={star}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",
                      letterSpacing: "0.1em",
                      fontWeight: "700",
                    }}
                  >
                    Driver development for SPI/ GPIO/ PCIe / I2C
                  </h6>
                </div>
              </div>

              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie1}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",
                      letterSpacing: "0.1em",
                      fontWeight: "700",
                    }}
                  >
                    Cache latency measurement drivers and monitors
                  </h6>
                </div>
              </div>

              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie2}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",
                      letterSpacing: "0.1em",
                      fontWeight: "700",
                    }}
                  >
                    Build in test development for SoC
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie3}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",
                      letterSpacing: "0.1em",
                      fontWeight: "700",
                    }}
                  >
                    HW qualification software development
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie4}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",
                      letterSpacing: "0.1em",
                      fontWeight: "700",
                    }}
                  >
                    HW testing software development
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-row mb-2">
                <div className="ramHeading">
                  <span className="icon btn btn-circle btn-sm  disabled me-4 custom-background">
                    <Player
                      src={lottie5}
                      className="player"
                      loop
                      autoplay
                      style={{ height: "25px", width: "25px" }}
                    />
                  </span>
                </div>
                <div className="downtoup mt-2">
                  <h6
                    style={{
                      color: "#ffff",
                      letterSpacing: "0.1em",
                      fontWeight: "700",
                    }}
                  >
                    Custom board software development
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ArtificialInteligence;
