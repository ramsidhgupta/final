import React, { useState, useEffect } from "react";
import "./Project3.css";
import image_1 from "./assets/first_photo.jpg";
import image_2 from "./assets/second_photo.jpg";
import image_3 from "./assets/third_photo.jpg";
import image_4 from "./assets/fourth_photo.jpg";
import image_5 from "./assets/fifth_photo.jpg";
import image_6 from "./assets/sixth_photo.jpg";
import image_7 from "./assets/seventh-photo.jpg";

const Projects3 = () => {
  const images = [image_1, image_2, image_3, image_4, image_5, image_6, image_7];
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    let links = document.querySelectorAll(".menu-item");
    let linkimage = document.querySelectorAll(".hover-reveal_img");

    links.forEach((link, idx) => {
      link.addEventListener("mousemove", (e) => {
        link.children[1].style.opacity = 1;
        link.children[0].style.zIndex = 3;
        link.children[1].style.transform = `translate(${e.clientX - 300}px, -${
          e.clientY / 3
        }px) rotate(${e.clientX / 70}deg)`;
        linkimage[idx].style.transform = `scale(1,1)`;
        link.style.zIndex = 2;
      });
      link.addEventListener("mouseleave", (e) => {
        link.children[1].style.opacity = 0;
        link.children[1].style.transform = `translate(${-e.clientX}px, -300px)`;
        linkimage[idx].style.transform = `scale(0.8, 0.8)`;
        link.style.zIndex = 0;
      });
    });

    const links2 = document.querySelectorAll(".menu-item");

    links2.forEach((link, idx) => {
      link.addEventListener("mouseenter", () => {
        setBackgroundImage(images[idx]);
      });
      link.addEventListener("mouseleave", () => {
        setBackgroundImage(null);
      });
    });

    return () => {
      // Clean up the event listeners when the component unmounts
      links2.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  },);

  return (
    <>
      <h3 className="textDecor text-center" style={{ marginTop: "6rem" }}>
        {" "}
        How We Work
      </h3>
      <div
        className="project3-container mt-5"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
        }}
      >
        <div className="menu">
          <div className="menu-item">
            <span>Project Exploration</span>
            <div className="hover-reveal">
              <div className="hover-reveal_inner">
                <div className="hover-reveal_img">
                  <div className="card">
                    <img
                      src={image_1}
                      alt="Card Image"
                      style={{
                        height: "25vh",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#1268b3",
                          fontWeight: "bold",
                          fontSize: "1.65em",
                        }}
                      >
                        Project Exploration
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#008F58",
                          fontWeight: "bold",
                          fontSize: "1em",
                        }}
                      >
                        We delve into your embedded system project needs,
                        conducting thorough research and analysis upfront to
                        identify potential risks. Prior to engagement, we
                        provide detailed estimates and planning, ensuring full
                        transparency and informed decision-making.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div href="" className="menu-item">
            <span>Preliminary System Blueprint</span>
            <div className="hover-reveal">
              <div className="hover-reveal_inner">
                <div className="hover-reveal_img">
                  <div className="card">
                    <img
                      src={image_2}
                      alt="Card Image"
                      style={{
                        height: "25vh",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#1268b3",
                          fontWeight: "bold",
                          fontSize: "1.65em",
                        }}
                      >
                        Preliminary System Blueprint
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#008F58",
                          fontWeight: "bold",
                          fontSize: "1em",
                        }}
                      >
                        We assist in selecting an operating system, third-party
                        libraries, and frameworks, and define hardware and
                        software component allocation. You'll have the
                        opportunity to review the finalized blueprint before
                        it's handed off to our embedded development team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div href="" className="menu-item">
            <span>Execution & Implementation</span>
            <div className="hover-reveal">
              <div className="hover-reveal_inner">
                <div className="hover-reveal_img">
                  <div className="card">
                    <img
                      src={image_3}
                      alt="Card Image"
                      style={{
                        height: "25vh",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="card-body">
                      {/* <h5
                        className="card-title"
                        style={{
                          color: "#1268b3",
                          fontWeight: "bold",
                          fontSize: "1.25em",
                        }}
                      >
                        Execution & Implementation
                      </h5> */}
                      <p
                        style={{
                          color: "#008F58",
                          fontWeight: "bold",
                          fontSize: "1em",
                        }}
                      >
                        Our Embedded System Development Services
                      </p>

                      <p
                        style={{
                          color: "#008F58",
                          fontWeight: "bold",
                          fontSize: "0.75em",
                        }}
                      >
                        Hardware and device driver development, along with board
                        initialization
                      </p>
                      <p
                        style={{
                          color: "#008F58",
                          fontWeight: "bold",
                          fontSize: "0.75em",
                        }}
                      >
                        Crafting secure bootloaders tailored to your bespoke
                        hardware
                      </p>
                      <p
                        style={{
                          color: "#008F58",
                          fontWeight: "bold",
                          fontSize: "0.75em",
                        }}
                      >
                        Board Support Package (BSP) development, covering
                        adaptations
                      </p>

                      {/* <p className="card-text" style={{ color:'#008F58',fontWeight:'bold', fontSize:'1em'}}>
                      Our services encompass the entire process, starting from analysis and initial concept development to delivery of a production-ready solution and continued post-launch maintenance.</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div href="" className="menu-item">
            <span>Following that, we proceed with</span>
            <div className="hover-reveal">
              <div className="hover-reveal_inner">
                <div className="hover-reveal_img">
                  <div className="card">
                    <img
                      src={image_4}
                      alt="Card Image"
                      style={{
                        height: "25vh",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#1268b3",
                          fontWeight: "bold",
                          fontSize: "1em",
                        }}
                      >
                        Following that, we proceed with
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#008F58",
                          fontWeight: "bold",
                          fontSize: "0.75em",
                        }}
                      >
                        Porting third-party software packages or middleware and
                        protocol stacks, Configuring and setting up software
                        development tools, Designing, coding, and testing
                        firmware, Conducting reviews of software architecture
                        and design, followed by testing, Enabling continuous
                        integration, deployment, configuration, and management
                        of embedded systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div href="" className="menu-item">
            <span>Consolidation</span>
            <div className="hover-reveal">
              <div className="hover-reveal_inner">
                <div className="hover-reveal_img">
                  <div className="card">
                    <img
                      src={image_5}
                      alt="Card Image"
                      style={{
                        height: "25vh",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#1268b3",
                          fontWeight: "bold",
                          fontSize: "1.65em",
                        }}
                      >
                        Consolidation
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#008F58",
                          fontWeight: "bold",
                          fontSize: "1em",
                        }}
                      >
                        We unite all embedded system elements, conducting
                        comprehensive testing to verify seamless integration and
                        adherence to your project requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div href="" className="menu-item">
            <span>Handover</span>
            <div className="hover-reveal">
              <div className="hover-reveal_inner">
                <div className="hover-reveal_img">
                  <div className="card">
                    <img
                      src={image_6}
                      alt="Card Image"
                      style={{
                        height: "25vh",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#1268b3",
                          fontWeight: "bold",
                          fontSize: "1.65em",
                        }}
                      >
                        Handover
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#008F58",
                          fontWeight: "bold",
                          fontSize: "1em",
                        }}
                      >
                        As part of our embedded development process, we conduct
                        thorough QA and debugging. Our rigorous product and
                        system testing procedures guarantee clean, readable, and
                        well-commented code. Only upon completion of these steps
                        is the product deemed ready for final delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div href="" className="menu-item">
            <span>Sustainment and Assistance</span>
            <div className="hover-reveal">
              <div className="hover-reveal_inner">
                <div className="hover-reveal_img" style={{top:'-2rem'}}>
                  <div className="card">
                    <img
                      src={image_7}
                      alt="Card Image"
                      style={{
                        height: "25vh",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          color: "#1268b3",
                          fontWeight: "bold",
                          fontSize: "1.65em",
                        }}
                      >
                        Sustainment and Assistance
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          color: "#008F58",
                          fontWeight: "bold",
                          fontSize: ".75em",
                        }}
                      >
                        We provide round-the-clock monitoring and management of
                        your system's performance. Should any issues arise, we
                        promptly address them and accommodate requests for
                        additional functionalities. This ongoing maintenance and
                        support are integral components of our embedded software
                        development services.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects3;
