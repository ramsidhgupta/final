// import React, { useEffect } from "react";
// import Particles from "react-tsparticles";
// import { loadFireworksPreset } from "tsparticles-preset-fireworks";
// import OfficeImage1 from "./assets/OfficeImage5.jpg";
// import OfficeImage2 from "./assets/OfficeImage2.jpeg";
// import OfficeImage3 from "./assets/OfficeImage3.jpeg";
// import OfficeImage4 from "./assets/OfficeImage4.jpg";

// import award55 from "./assets/novel.webp";
// import './ParticlesComponent.css';

// import { useSpring, animated } from "react-spring";

// const randomInRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };

// function Fireworks(props) {
//   const customInit = async (engine) => {
//     await loadFireworksPreset(engine);
//   };

//   const [styles, setStyles] = useSpring(() => ({
//     from: { transform: "translate(0%, 0%)" },
//     to: {
//       transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
//         -50,
//         50
//       )}%)`,
//     },
//     config: { duration: 3000 },
//     reset: true,
//     onRest: () => triggerAnimation(),
//   }));

//   const [styles1, setStyles1] = useSpring(() => ({
//     from: { transform: "translate(0%, 0%)" },
//     to: {
//       transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
//         -50,
//         50
//       )}%)`,
//     },
//     config: { duration: 2000 },
//     reset: true,
//     onRest: () => triggerAnimation1(),
//   }));

//   const [styles2, setStyles2] = useSpring(() => ({
//     from: { transform: "translate(0%, 0%)" },
//     to: {
//       transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
//         -50,
//         50
//       )}%)`,
//     },
//     config: { duration: 3000 },
//     reset: true,
//     onRest: () => triggerAnimation2(),
//   }));

//   const [styles3, setStyles3] = useSpring(() => ({
//     from: { transform: "translate(0%, 0%)" },
//     to: {
//       transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
//         -50,
//         50
//       )}%)`,
//     },
//     config: { duration: 3000 },
//     reset: true,
//     onRest: () => triggerAnimation3(),
//   }));

//   const [styles4, setStyles4] = useSpring(() => ({
//     from: { transform: "translate(0%, 0%)" },
//     to: {
//       transform: `translate(${randomInRange(-30, 30)}%, ${randomInRange(
//         -50,
//         50
//       )}%)`,
//     },
//     config: { duration: 3000 },
//     reset: true,
//     onRest: () => triggerAnimation4(),
//   }));

//   const [cardStyles, setCardStyles] = useSpring(() => ({
//     from: { transform: "translate(0%, 0%)" },
//     to: {
//       transform: `translate(${randomInRange(-30, 30)}%, ${randomInRange(
//         -30,
//         30
//       )}%)`,
//     },
//     config: { duration: 2500 },
//     reset: true,
//     onRest: () => triggerCardAnimation(),
//   }));

//   const triggerAnimation = () => {
//     setStyles.start({
//       to: {
//         transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
//           -50,
//           50
//         )}%)`,
//       },
//     });
//   };

//   const triggerAnimation1 = () => {
//     setStyles1.start({
//       to: {
//         transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
//           -50,
//           50
//         )}%)`,
//       },
//     });
//   };

//   const triggerAnimation2 = () => {
//     setStyles2.start({
//       to: {
//         transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
//           -50,
//           50
//         )}%)`,
//       },
//     });
//   };

//   const triggerAnimation3 = () => {
//     setStyles3.start({
//       to: {
//         transform: `translate(${randomInRange(-40, 40)}%, ${randomInRange(
//           -50,
//           50
//         )}%)`,
//       },
//     });
//   };

//   const triggerAnimation4 = () => {
//     setStyles4.start({
//       to: {
//         transform: `translate(${randomInRange(-40, 40)}%, ${randomInRange(
//           -50,
//           50
//         )}%)`,
//       },
//     });
//   };

//   const triggerCardAnimation = () => {
//     setCardStyles.start({
//       to: {
//         transform: `translate(${randomInRange(-30, 30)}%, ${randomInRange(
//           -30,
//           30
//         )}%)`,
//       },
//     });
//   };

//   useEffect(() => {
//     triggerAnimation();
//     triggerAnimation1();
//     triggerAnimation2();
//     triggerAnimation3();
//     triggerAnimation4();
//     triggerCardAnimation();
//   }, []);

//   const particleConfig = {
//     fullScreen: {
//       enable: false,
//     },
//     detectRetina: true,
//     background: {
//       color: "#000",
//     },
//     fpsLimit: 60,
//     emitters: {
//       direction: ["left", "right"],
//       life: {
//         count: 0,
//         duration: 0.1,
//         delay: 0.1,
//       },
//       rate: {
//         delay: 0.01,
//         quantity: 1,
//       },
//       size: {
//         width: 100,
//         height: 0,
//       },
//       position: {
//         y: 100,
//         x: 50,
//       },
//     },
//     particles: {
//       number: {
//         value: 0,
//       },
//       life: {
//         count: 1,
//       },
//       shape: {
//         type: "line",
//       },
//       size: {
//         value: { min: 1, max: 100 },
//         animation: {
//           enable: true,
//           sync: true,
//           speed: 150,
//           destroy: "min",
//         },
//       },
//       stroke: {
//         color: {
//           value: "#303030",
//         },
//         width: 1,
//       },
//       rotate: {
//         path: true,
//       },
//       move: {
//         enable: true,
//         speed: { min: 10, max: 20 },
//         outModes: {
//           default: "destroy",
//           top: "none",
//         },
//         trail: {
//           fillColor: "#000",
//           enable: true,
//           length: 10,
//         },
//       },
//       destroy: {
//         mode: "split",
//         split: {
//           count: 1,
//           factor: { value: 1 / 3 },
//           rate: {
//             value: 100,
//           },
//           particles: {
//             color: {
//               value: ["#FF0000", "#FFD700", "#00FF00", "#00BFFF", "#FF1493"],
//             },
//             stroke: {
//               width: -1.5,
//             },
//             number: {
//               value: 0,
//             },
//             collisions: {
//               enable: false,
//             },
//             opacity: {
//               value: 1,
//               animation: {
//                 enable: true,
//                 speed: 0.6,
//                 minimumValue: 0.1,
//                 sync: false,
//                 startValue: "max",
//                 destroy: "min",
//               },
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 2 },
//               animation: {
//                 enable: false,
//               },
//             },
//             life: {
//               count: 1,
//               duration: {
//                 value: {
//                   min: 1,
//                   max: 2,
//                 },
//               },
//             },
//             move: {
//               enable: true,
//               gravity: {
//                 enable: false,
//               },
//               speed: 2,
//               direction: "none",
//               random: true,
//               straight: false,
//               outMode: "destroy",
//             },
//           },
//         },
//       },
//     },
//   };

//   const divStyle = {
//     width: '100%',
//     border: 'none',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//   };

//   return (
//     <section className="wrapper-border">
//       <div className="container py-14 py-md-10">
//         <div className="particles-containerr">
//           <animated.img
//             src={OfficeImage3}
//             alt=""
//             className="particles-image"
//             style={styles}
//           />
//           <animated.img
//             src={OfficeImage2}
//             alt=""
//             className="particles-image2"
//             style={styles1}
//           />
//           <animated.img
//             src={award55}
//             alt=""
//             className="particles-image3"
//             style={styles2}
//           />

//           <animated.img
//             src={OfficeImage1}
//             alt=""
//             className="particles-image4"
//             style={styles3}
//           />

//           <animated.img
//             src={OfficeImage4}
//             alt=""
//             className="particles-image5"
//             style={styles4}
//           />

//           <animated.div
//             className="particles-card"
//             style={cardStyles}
//           >
//             <div className="card" style={divStyle}>
//               <div className="card-body">
//                 <h5 className="card-title flicker">our new location</h5>
//                 <p className="card-text fast-flicker">Novel Office whitfiled</p>
//                 <p className="card-text fast-flicker1">Doddanekundi, 2nd phase</p>
//                 <p className="card-text fast-flicker2">post-Mahadevapura, Whitefield Road</p>
//                 <p className="card-text flicker3"> Bengaluru, Karnataka, 560048, INDIA</p>

//               </div>
//             </div>
//           </animated.div>

//           <Particles options={particleConfig} init={customInit} />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Fireworks;
import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import OfficeImage1 from "./assets/OfficeImage5.jpg";
import OfficeImage2 from "./assets/OfficeImage2.jpeg";
import OfficeImage3 from "./assets/OfficeImage3.jpeg";
import OfficeImage4 from "./assets/OfficeImage4.jpg";
import { useInView } from "react-intersection-observer";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


import award55 from "./assets/novel.webp";
import "./ParticlesComponent.css";

import { useMediaQuery } from "@react-hook/media-query";

import { useSpring, animated } from "react-spring";

const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

function Fireworks(props) {
  const customInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  const isMobileView = useMediaQuery("(max-width: 420px)");
  const [ref11, inView11] = useInView({});

  const [styles, setStyles] = useSpring(() => ({
    from: { transform: "translate(0%, 0%)" },
    to: {
      transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
        -50,
        50
      )}%)`,
    },
    config: { duration: 3000 },
    reset: true,
    onRest: () => triggerAnimation(),
  }));

  const [styles1, setStyles1] = useSpring(() => ({
    from: { transform: "translate(0%, 0%)" },
    to: {
      transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
        -50,
        50
      )}%)`,
    },
    config: { duration: 2000 },
    reset: true,
    onRest: () => triggerAnimation1(),
  }));

  const [styles2, setStyles2] = useSpring(() => ({
    from: { transform: "translate(0%, 0%)" },
    to: {
      transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
        -50,
        50
      )}%)`,
    },
    config: { duration: 3000 },
    reset: true,
    onRest: () => triggerAnimation2(),
  }));

  const [styles3, setStyles3] = useSpring(() => ({
    from: { transform: "translate(0%, 0%)" },
    to: {
      transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
        -50,
        50
      )}%)`,
    },
    config: { duration: 3000 },
    reset: true,
    onRest: () => triggerAnimation3(),
  }));

  const [styles4, setStyles4] = useSpring(() => ({
    from: { transform: "translate(0%, 0%)" },
    to: {
      transform: `translate(${randomInRange(-30, 30)}%, ${randomInRange(
        -50,
        50
      )}%)`,
    },
    config: { duration: 3000 },
    reset: true,
    onRest: () => triggerAnimation4(),
  }));

  const [cardStyles, setCardStyles] = useSpring(() => ({
    from: { transform: "translate(0%, 0%)" },
    to: {
      transform: `translate(${randomInRange(-30, 30)}%, ${randomInRange(
        -30,
        30
      )}%)`,
    },
    config: { duration: 2500 },
    reset: true,
    onRest: () => triggerCardAnimation(),
  }));

  const triggerAnimation = () => {
    setStyles.start({
      to: {
        transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
          -50,
          50
        )}%)`,
      },
    });
  };

  const triggerAnimation1 = () => {
    setStyles1.start({
      to: {
        transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
          -50,
          50
        )}%)`,
      },
    });
  };

  const triggerAnimation2 = () => {
    setStyles2.start({
      to: {
        transform: `translate(${randomInRange(-50, 50)}%, ${randomInRange(
          -50,
          50
        )}%)`,
      },
    });
  };

  const triggerAnimation3 = () => {
    setStyles3.start({
      to: {
        transform: `translate(${randomInRange(-40, 40)}%, ${randomInRange(
          -50,
          50
        )}%)`,
      },
    });
  };

  const triggerAnimation4 = () => {
    setStyles4.start({
      to: {
        transform: `translate(${randomInRange(-40, 40)}%, ${randomInRange(
          -50,
          50
        )}%)`,
      },
    });
  };

  const triggerCardAnimation = () => {
    setCardStyles.start({
      to: {
        transform: `translate(${randomInRange(-30, 30)}%, ${randomInRange(
          -30,
          30
        )}%)`,
      },
    });
  };

  useEffect(() => {
    triggerAnimation();
    triggerAnimation1();
    triggerAnimation2();
    triggerAnimation3();
    triggerAnimation4();
    triggerCardAnimation();
  }, []);

  const particleConfig = {
    fullScreen: {
      enable: false,
    },
    detectRetina: true,
    background: {
      color: "#000",
    },
    fpsLimit: 60,
    emitters: {
      direction: ["left", "right"],
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1,
      },
      rate: {
        delay: 0.01,
        quantity: 1,
      },
      size: {
        width: 100,
        height: 0,
      },
      position: {
        y: 100,
        x: 50,
      },
    },
    particles: {
      number: {
        value: 0,
      },
      life: {
        count: 1,
      },
      shape: {
        type: "line",
      },
      size: {
        value: { min: 1, max: 100 },
        animation: {
          enable: true,
          sync: true,
          speed: 150,
          destroy: "min",
        },
      },
      stroke: {
        color: {
          value: "#303030",
        },
        width: 1,
      },
      rotate: {
        path: true,
      },
      move: {
        enable: true,
        speed: { min: 10, max: 20 },
        outModes: {
          default: "destroy",
          top: "none",
        },
        trail: {
          fillColor: "#000",
          enable: true,
          length: 10,
        },
      },
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: { value: 1 / 3 },
          rate: {
            value: 100,
          },
          particles: {
            color: {
              value: ["#FF0000", "#FFD700", "#00FF00", "#00BFFF", "#FF1493"],
            },
            stroke: {
              width: -1.5,
            },
            number: {
              value: 0,
            },
            collisions: {
              enable: false,
            },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 0.6,
                minimumValue: 0.1,
                sync: false,
                startValue: "max",
                destroy: "min",
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
              animation: {
                enable: false,
              },
            },
            life: {
              count: 1,
              duration: {
                value: {
                  min: 1,
                  max: 2,
                },
              },
            },
            move: {
              enable: true,
              gravity: {
                enable: false,
              },
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outMode: "destroy",
            },
          },
        },
      },
    },
  };

  const divStyle = {
    width: "100%",
    border: "none",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  };

  return (
    <section className="wrapper-border">
      <div className="container py-14 py-md-10">
        {isMobileView ? (
          <div className="row gx-lg-8 gx-xl-12 gy-10  align-items-center">
          <div className="card-body">
                  <h5 className="card-title flicker text-center">our new location</h5>
                  <p className="card-text fast-flicker text-center">
                    Novel Office whitfiled
                  </p>
                  <p className="card-text fast-flicker1 text-center">
                    Doddanekundi, 2nd phase
                  </p>
                  <p className="card-text fast-flicker2 text-center">
                    post-Mahadevapura, Whitefield Road
                  </p>
                  <p className="card-text flicker3 text-center pb-5">
                    {" "}
                    Bengaluru, Karnataka, 560048, INDIA
                  </p>
                </div>
            <div className="col-lg-7 order-lg-2">
              <div className="row gx-md-5 gy-5">
                <div className="col-md-5 offset-md-1 align-self-end">
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "#fef3e4",
                      margin: "1px",
                    }}
                  >
                    <CardContent>
                      <img
                        src={OfficeImage1}
                        width="100%"
                        height="100%"
                        alt=""
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="col-md-6 align-self-end">
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "#fae6e7",
                      margin: "1px",
                    }}
                  >
                    <CardContent>
                      
                    <img
                        src={OfficeImage2}
                        width="100%"
                        height="100%"
                        alt=""
                      />
                     
                    </CardContent>
                  </Card>
                </div>

                <div className="col-md-5">
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "#eaf3ef",
                      margin: "1px",
                    }}
                  >
                    <CardContent>
                    <img
                        src={OfficeImage3}
                        width="100%"
                        height="100%"
                        alt=""
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="col-md-6 align-self-start">
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "#e0e9fa",
                      margin: "1px",
                    }}
                  >
                    <CardContent>
                      
                    <img
                        src={OfficeImage4}
                        width="100%"
                        height="100%"
                        alt=""
                      />
                      
                    </CardContent>
                  </Card>
                </div>
                <div className="col-md-5 offset-md-1 align-self-end">
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "#fef3e4",
                      margin: "1px",
                    }}
                  >
                    <CardContent>
                      <img
                        src={award55}
                        width="100%"
                        height="100%"
                        alt=""
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="particles-containerr">
            <animated.img
              src={OfficeImage3}
              alt=""
              className="particles-image"
              style={styles}
            />
            <animated.img
              src={OfficeImage2}
              alt=""
              className="particles-image2"
              style={styles1}
            />
            <animated.img
              src={award55}
              alt=""
              className="particles-image3"
              style={styles2}
            />

            <animated.img
              src={OfficeImage1}
              alt=""
              className="particles-image4"
              style={styles3}
            />

            <animated.img
              src={OfficeImage4}
              alt=""
              className="particles-image5"
              style={styles4}
            />

            <animated.div className="particles-card" style={cardStyles}>
              <div className="card" style={divStyle}>
                <div className="card-body">
                  <h5 className="card-title flicker">our new location</h5>
                  <p className="card-text fast-flicker">
                    Novel Office whitfiled
                  </p>
                  <p className="card-text fast-flicker1">
                    Doddanekundi, 2nd phase
                  </p>
                  <p className="card-text fast-flicker2">
                    post-Mahadevapura, Whitefield Road
                  </p>
                  <p className="card-text flicker3">
                    {" "}
                    Bengaluru, Karnataka, 560048, INDIA
                  </p>
                </div>
              </div>
            </animated.div>

            <Particles options={particleConfig} init={customInit} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Fireworks;
