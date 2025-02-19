import React, {useState} from "react";

import sports from "./assets/sports.mp4";
import automotive from "./assets/automotive.mp4";
import healthcare from "./assets/healthcare.mp4";
import media from "./assets/media.mp4";
import consumer from "./assets/consumer.mp4";
import industry from "./assets/industry.mp4";


import "./ManyDivs.css";

export const ManyDivs = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  

  return (
    <>
      <section className="wrapper">
        <div className="container-fluid pt-md-8 pt-8 pt-md-0">
          <div className="center-div">
          <h3 className="card-title textDecor text-center mb-5 mt-3">INDUSTRY FOCUS</h3>
          <p className="card-text" style={{ fontWeight: '600', fontSize: 'clamp(0.9rem, 1.3vw, 1.9rem)' }}>
          Techsoc offers an array of secure, intelligent, scalable solutions inform of accelerators, platforms and tools which can be diversely used across multiple industries. These span across areas of product design, hardware design, firmware development, and validation and certification.</p>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="row">
                  <div className="col-12 top-div d-flex align-items-stretch p-0">
                    <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="card-video-overlay position-absolute">
                      {isHovered && (
                        <video
                          className="card-video position-absolute"
                          muted
                          loop
                          autoPlay
                        >
                        
                          <source src={consumer} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                        <div className="overlayMainVideo"></div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="card-title textDecor" style={{color:"#008F58", fontWeight:'600', fontSize:'1.25em'}}>
                      Consumer Electronics
                        </h5>
                        <p className="card-text" style={{ fontWeight: '600', fontSize: 'clamp(1rem, 1.4vw, 2rem)' }}>
                          From wearables and IoT devices to smart homes and
                          advanced security systems—we foster end-user
                          experience with solutions built with the latest
                          embedded technologies. Techsoc has two decades of
                          in-house expertise in developing consumer electronics
                          based on bare metal, BSP, RTOS, DSP, AOSP, and other
                          technologies.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="cl-12 top-div d-flex align-items-stretch p-0">
                    <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="card-video-overlay position-absolute">
                      {isHovered && (
                        <video
                          className="card-video position-absolute"
                          muted
                          loop
                          autoPlay
                        >
                          <source src={industry} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                        <div className="overlayMainVideo"></div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title textDecor" style={{color:"#008F58", fontWeight:'600', fontSize:'1.25em'}}>
                          Industrial Manufacturing
                        </h5>
                        <p className="card-text" style={{ fontWeight: '600', fontSize: 'clamp(1rem, 1.4vw, 2rem)' }}>
                          Our embedded software development services help
                          businesses win big. We can improve your daily routine
                          with improved asset tracking and power control. If you
                          envisage more innovative scenarios, Techsoc is up to
                          the challenge. We help automate workflows on the
                          factory floor and improve safety at work.{" "}
                        </p>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="row">
                  <div className="col-12 bottom-first-div d-flex align-items-stretch p-0">
                  
                    <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="card-video-overlay position-absolute">
                      {isHovered && (
                        <video
                          className="card-video position-absolute"
                          muted
                          loop
                          autoPlay
                        >
                          <source src={healthcare} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                        <div className="overlayMainVideo"></div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title textDecor" style={{color:"#008F58", fontWeight:'600', fontSize:'1.25em'}}>Healthcare</h5>
                        <p className="card-text" style={{ fontWeight: '600', fontSize: 'clamp(1rem, 1.4vw, 2rem)' }}>
                          Techsoc provides full-cycle embedded systems
                          development services for healthcare institutions as
                          well as companies that produce healthcare equipment.
                          We develop storage solutions, hardware, firmware, and
                          middleware components for medical devices and wearable
                          sensor systems for collecting and processing health
                          data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 bottom-sec-div d-flex align-items-stretch p-0">
                  
                    <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="card-video-overlay position-absolute">
                      {isHovered && (
                        <video
                          className="card-video position-absolute"
                          muted
                          loop
                          autoPlay
                        >
                          <source src={automotive} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                        <div className="overlaySmallVideo"></div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="card-title textDecor" style={{color:"#008F58", fontWeight:'600', fontSize:'1.25em'}}>Automotive</h5>

                      <p className="card-text" style={{ fontWeight: '600', fontSize: 'clamp(0.9rem, 1.3vw, 1.9rem)' }}>
                          Our team provides full-cycle embedded development for
                          automotive embedded systems. We build in-vehicle
                          solutions like HMIs, system and ADAS controllers, and
                          connectivity mechanisms, as well as off-board software
                          for fleet management, remote vehicle diagnostics, and
                          cloud-based data management.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 bottom-sec-div d-flex align-items-stretch p-0">
                    {/* <p>Just For Demo</p> */}
                    <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="card-video-overlay position-absolute">
                      {isHovered && (
                        <video
                          className="card-video position-absolute"
                          muted
                          loop
                          autoPlay
                        >
                          <source src={sports} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                        <div className="overlaySmallVideo"></div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="card-title textDecor" style={{color:"#008F58", fontWeight:'600', fontSize:'1.25em'}}>Sports</h5>
                      <p className="card-text" style={{ fontWeight: '600', fontSize: 'clamp(0.9rem, 1.3vw, 1.9rem)' }}>
                      We work on solutions that improve
                          training and prevent injury, including projects for
                          professional sports, fitness, and rehabilitation. To
                          track and analyze physical performance, we build
                          wearables. Depending on the project, we equip devices
                          with different connectivity solutions—RFID, GPS/GIS,
                          or Bluetooth. 
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 last-div d-flex align-items-stretch p-0">
                <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="card-video-overlay position-absolute">
                  {isHovered && (
                    <video
                      className="card-video position-absolute"
                      muted
                      loop
                      autoPlay
                    >
                      <source src={media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                    <div className="overlaySmallVideo"></div>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title textDecor" style={{color:"#008F58", fontWeight:'600', fontSize:'1.25em'}}>
                      Media & Entertainment
                    </h5>
                    <p className="card-text" style={{ fontWeight: '600', fontSize: 'clamp(1rem, 1.4vw, 2rem)' }}>
                    As part of our embedded solutions development services, we
                      craft media players, media processing and streaming tools,
                      software for content compression and protection, and media
                      storage solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ManyDivs;
