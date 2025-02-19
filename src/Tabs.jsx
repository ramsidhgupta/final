import React, { useState, useEffect } from "react";
import "./Tabs.css";
// import gsap from "gsap";
 import Textify from "textify.js";
// import useAnimateOnScroll from './useAnimateOnScroll';
// import { animations } from './animationConfig';
import useAnimateOnScroll from './useAnimateOnScroll';


import { Player } from "@lottiefiles/react-lottie-player";
import play1 from "./lottieFiles/EmulLottie5.json";
import play2 from "./lottieFiles/EmulLottie6.json";
import play3 from "./lottieFiles/EmulLottie7.json";
import play4 from "./lottieFiles/EmulLottie8.json";
import play5 from "./lottieFiles/circuit9.json";
import play6 from "./lottieFiles/EmulLottie1.json";


import { Icon } from "@iconify/react";
import Card from "./Card";
import middleware1 from "./assets/middleware1.mp4";
import middleware2 from "./assets/middleware2.mp4";
import middleware3 from "./assets/middleware3.mp4";
import middleware4 from "./assets/middleware4.mp4";
import middleware5 from "./assets/middleware5.mp4";
import middleware6 from "./assets/middleware6.mp4";
import middleware7 from "./assets/middleware7.mp4";
import middleware8 from "./assets/middleware8.mp4";
import middleware9 from "./assets/middleware9.mp4";
import EmbeddedAi from "./EmbeddedAi";

export const Tabs = () => {
  
  useAnimateOnScroll('.raamm', { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1, stagger: 0.1, ease: 'expo.inOut' });
  useAnimateOnScroll('.ramParagraph', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, stagger: 0.1, ease: 'power3.inOut' });
  useAnimateOnScroll('.ramHeading', { y: '-100%', rotate: -180, scale: 0 }, { y: '0', rotate: 0, scale: 1, duration: 0.7, ease: 'power2.inOut' });
  useAnimateOnScroll('.paragraph-3', { rotate: 30, opacity: 0 }, { rotate: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.inOut' });
  useAnimateOnScroll('.downtoup', { opacity: 0, x: '-100px', y: '-50px', scale: 2 }, { opacity: 1, x: '0px', y: '0px', scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.inOut' });


  const [isCardHovered, setIsCardHovered] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [icon1, setIcon1] = useState("noto-v1:right-arrow");
  const [icon2, setIcon2] = useState("noto-v1:right-arrow");
  const [icon3, setIcon3] = useState("noto-v1:right-arrow");
  const [icon4, setIcon4] = useState("noto-v1:right-arrow");

  // useEffect(() => {
  //   // Textify Configuration
  //   const textifyConfig = {
  //     el: ".raamm",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       duration: 1,
  //       stagger: 0.1,
  //       ease: "expo.inOut",
  //       transformOrigin: "left right",
  //       animateProps: {
  //         x: "-100%",
  //         y: "0%",
  //       },
  //     },
  //   };

  //   const paragraphConfig = {
  //     el: ".ramParagraph",
  //     largeText: true,
  //     splitType: "lines",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       by: "lines",
  //       duration: 2,
  //       ease: "power3.inOut",
  //       stagger: 0.1,
  //       animateProps: {
  //         scale: 0.5,
  //         opacity: 0,
  //       },
  //     },
  //   };

  //   const title2Config = {
  //     el: ".ramHeading",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       duration: 0.7,
  //       ease: "power2.inOut",
  //       transformOrigin: "left top",
  //       animateProps: {
  //         y: "0",
  //         rotate: -180,
  //         scale: 0,
  //       },
  //     },
  //   };

  //   const paragraph3Config = {
  //     el: ".paragraph-3",
  //     observer: {
  //       repeat: true,
  //     },
  //     // largeText: true,
  //     // splitType: "lines",
  //     animation: {
  //       by: "lines",
  //       duration: 0.7,
  //       ease: "power3.inOut",
  //       stagger: 0.1,
  //       transformOrigin: "left top",
  //       animateProps: {
  //         rotate: 30,
  //         opacity: 0,
  //       },
  //     },
  //   };

  //   const RamConfig = {
  //     el: ".downtoup",
  //     largeText: true,
  //     splitType: "lines",
  //     observer: {
  //       repeat: true,
  //     },
  //     animation: {
  //       by: "lines",
  //       duration: 0.7,
  //       ease: "power3.inOut",
  //       stagger: 0.1,
  //       animateProps: {
          
  //         opacity: 0, 
  //         x: "-100px", 
  //         y: "-50px", 
  //         scale: 2, 
  //         // rotate: 360, // Animate rotation by 360 degrees
  //       },
  //     },
  //   };

  //   // Initialize Textify for banner title and paragraph with GSAP
  //   const titleInstance = new Textify(textifyConfig, gsap);
  //   const paragraphInstance = new Textify(paragraphConfig, gsap);
  //   const title2Instance = new Textify(title2Config, gsap);
  //   const paragraph3Instance = new Textify(paragraph3Config, gsap);
  //   const textifyInstance = new Textify(RamConfig, gsap);
  // }, []); 

  const onShowClick1 = () => {
    setShow1(!show1);
    const newIcon = show1 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
    setIcon1(newIcon);
  };

  const onShowClick2 = () => {
    setShow2(!show2);
    const newIcon = show2 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
    setIcon2(newIcon);
  };

  const onShowClick3 = () => {
    setShow3(!show3);
    const newIcon = show3 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
    setIcon3(newIcon);
  };

  const onShowClick4 = () => {
    setShow4(!show4);
    const newIcon = show4 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
    setIcon4(newIcon);
  };

  const JobData = [
    {
      id: 1,
      video: middleware9,
      header: "Programming Language",
      subheader: "C/C++:",
      paragraph:
        "They are well-suited for developing middleware components that require efficient memory management and hardware interaction as well as performance and low-level control over hardware.",
    },
    {
      id: 2,
      video: middleware1,
      header: "Real-Time Operating Systems (RTOS)",
      subheader: "FreeRTOS, RTOS-32, ThreadX:",
      paragraph:
        "These RTOSs provide scheduling and resource management functionalities necessary for real-time embedded systems. Middleware components can be developed to run on top of these RTOSs to ensure deterministic behavior and timely response to events.",
    },
    {
      id: 3,
      video: middleware2,
      header: "Communication Protocols",
      subheader: "MQTT, CoAP, HTTP(S):",
      paragraph:
        "Depending on the requirements of the embedded services, middleware may need to support various communication protocols for data exchange with other devices or backend servers. These protocols enable seamless communication in IoT and networked embedded systems.",
    },
    {
      id: 4,
      video: middleware3,
      header: "Message Queuing Systems:",
      subheader: "RabbitMQ, Apache Kafka:",
      paragraph:
        "Middleware components often leverage message queuing systems to facilitate asynchronous communication between different parts of the embedded system or between multiple embedded devices.",
    },
    {
      id: 5,
      video: middleware4,
      header: "Networking Libraries:",
      subheader: "FlwIP (Lightweight IP), uC/TCP-IP:",
      paragraph:
        "These libraries provide TCP/IP stack implementations optimized for resource-constrained embedded systems. They enable networking capabilities in middleware components, allowing embedded devices to communicate over Ethernet, Wi-Fi, or other network interfaces.",
    },
    {
      id: 6,
      video: middleware5,
      header: "Middleware Frameworks:",
      subheader:
        "ZeroMQ, CORBA (Common Object Request Broker Architecture), DDS (Data Distribution Service): ",
      paragraph:
        "These frameworks provide pre-built middleware solutions for distributed systems, offering features such as message queuing, remote procedure calls (RPC), and publish-subscribe communication patterns.",
    },
    {
      id: 7,
      video: middleware6,
      header: "Inter-Process Communication (IPC):",
      subheader: "Shared Memory, Message Passing:",
      paragraph:
        "Middleware may need to support IPC mechanisms for communication between different processes or threads within the embedded system. These mechanisms enable efficient data exchange while maintaining isolation between components.",
    },
    {
      id: 8,
      video: middleware7,
      header: "Data Serialization Formats:",
      subheader: "Protocol Buffers (protobuf), MessagePack, JSON:",
      paragraph:
        "Middleware components often need to serialize and deserialize data for communication over networks or storage in non-volatile memory. These formats provide efficient and platform-independent representations of structured data.",
    },
    {
      id: 9,
      video: middleware8,
      header: "Testing and Debugging Tools:",
      subheader: "Simulators and Emulators:",
      paragraph:
        "These RTOSs provide scheduling and resource management functionalities necessary for real-time embedded systems. Middleware components can be developed to run on top of these RTOSs to ensure deterministic behavior and timely response to events.",
      subheader1: "Debuggers and Profilers:",
      paragraph1:
        "Debugging tools such as GDB (GNU Debugger) and JTAG debuggers allow developers to trace and analyze the execution of middleware components, diagnose performance bottlenecks, and optimize resource usage.",
    },
  ];

  return (
    <section className="wrapper bg-light">
      <div className="container pt-md-8 pt-8 pt-md-0 mb-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card col-12">
              <div className="card-body">
                <ul className="nav nav-tabs nav-pills d-flex flex-wrap justify-content-center">
                  <li className="nav-item mb-3 mx-5">
                    <a
                      className="nav-link active flex-column mb-3"
                      data-bs-toggle="tab"
                      href="#tab3-1"
                    >
                      <Player
                        autoplay
                        loop
                        src={play1}
                        style={{
                          width: "100%",
                          height: "7vh",
                          objectFit: "cover",
                        }}
                      />
                     
                      <span
                        className="display-block text-uppercase mt-3 raamm"
                        style={{ letterSpacing: "2px" }}
                      >
                        Firmware
                      </span>
                    </a>
                  </li>
                  <li className="nav-item  mb-3 mx-4">
                    <a
                      className="nav-link  flex-column mb-3"
                      data-bs-toggle="tab"
                      href="#tab3-2"
                    >
                      <Player
                        autoplay
                        loop
                        src={play2}
                        style={{
                          width: "100%",
                          height: "7vh",
                          objectFit: "cover",
                        }}
                      />

                    
                      <span
                        className="display-block text-uppercase mt-3 raamm"
                        style={{ letterSpacing: "2px" }}
                      >
                        Middleware
                      </span>
                    </a>
                  </li>
                  <li className="nav-item mb-3 mx-4">
                    <a
                      className="nav-link  flex-column mb-3"
                      data-bs-toggle="tab"
                      href="#tab3-3"
                    >
                      <Player
                        autoplay
                        loop
                        src={play3}
                        style={{
                          width: "100%",
                          height: "7vh",
                          objectFit: "cover",
                        }}
                      />

                     
                      <span
                        className="display-block text-uppercase mt-3 raamm"
                        style={{ letterSpacing: "2px" }}
                      >
                        AI Services
                      </span>
                    </a>
                  </li>
                  <li className="nav-item mb-3 mx-4">
                    <a
                      className="nav-link  flex-column mb-3"
                      data-bs-toggle="tab"
                      href="#tab3-4"
                    >
                      <Player
                        autoplay
                        loop
                        src={play4}
                        style={{
                          width: "100%",
                          height: "7vh",
                          objectFit: "cover",
                        }}
                      />

                      
                      <span
                        className="display-block text-uppercase mt-3 raamm"
                        style={{ letterSpacing: "2px" }}
                      >
                        hmis
                      </span>
                    </a>
                  </li>
                  <li className="nav-item mb-3 mx-4">
                    <a
                      className="nav-link  flex-column mb-3"
                      data-bs-toggle="tab"
                      href="#tab3-5"
                    >
                      <Player
                        autoplay
                        loop
                        src={play5}
                        style={{
                          width: "100%",
                          height: "7vh",
                          objectFit: "cover",
                        }}
                      />

                    
                      <span
                        className="display-block text-uppercase mt-3 raamm"
                        style={{ letterSpacing: "2px" }}
                      >
                        Connectivity
                      </span>
                    </a>
                  </li>
                  <li className="nav-item mb-3 mx-4">
                    <a
                      className="nav-link  flex-column mb-3"
                      data-bs-toggle="tab"
                      href="#tab3-6"
                    >
                      <Player
                        autoplay
                        loop
                        src={play6}
                        style={{
                          width: "100%",
                          height: "7vh",
                          objectFit: "cover",
                        }}
                      />

                      
                      <span
                        className="display-block text-uppercase mt-3 raamm"
                        style={{ letterSpacing: "2px" }}
                      >
                        Technology
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content mt-0 mt-md-5">
                  <div
                    className="tab-pane fade show active"
                    id="tab3-1"
                    style={{ height: "auto", margin: 0, padding: 0 }}
                  >
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5">
                      <div className="col-md-12 col-sm-12">
                        {/* <h5>
                          As an embedded firmware development company, we offer
                          custom firmware and BSP development services for the
                          most popular 8, 16, 32-bit microcontroller
                          architectures and families. Techsoc uses not only ANSI
                          C, C++, VB, Asembly Language but also embedded
                          scripting languages with low memory footprints like
                          Lua and Python to streamline our custom firmware

                          development services.
                        </h5> */}
                        {/* <ul className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns ">
                            <li>
                              <Icon icon="flat-color-icons:ok" />System Verilog
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />UVM Based
                              Constrained Random Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Test Bench
                              Development
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />SoC and IP
                              Functional Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Subsystem
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Formal
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Power Aware
                              Verification
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />Performance Tests
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />SystemC/TLM
                              Modelling
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />VIP Development
                            </li>
                            <li>
                              <Icon icon="flat-color-icons:ok" />UVM Development
                            </li>
                          </ul> */}
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <p
                            className="ramHeading"
                            style={{
                              color: "#1268b3",
                              fontWeight: "bold",
                              fontSize: "1.65em",
                            }}
                          >
                            {" "}
                            Our Embedded Firmware Development Services
                          </p>
                          <p
                            className="ramParagraph"
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Firmware development services involve creating,
                            maintaining, and updating firmware — customised
                            software embedded in dedicated devices like consumer
                            electronics, medical equipment, industrial
                            machinery, and automotive systems. Techsoc’s
                            engineering expertise in low-level software design
                            for electronics includes but not limited to:
                          </p>
                          <ul
                            className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns"
                            style={{
                              color: "black",
                              fontSize: "1em",
                              listStyle: "none",
                              textTransform: "capitalize",
                            }}
                          >
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                MCU firmware design services.
                              </p>
                            </li>

                            {/* <li>
                              <Icon icon="flat-color-icons:ok" />
                              <p className="paragraph-3">
                              MCU firmware design services.
                              </p>
                            </li> */}
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                Engineering of device drivers and board support
                                packages (BSPs).
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                Porting real-time operating systems to target
                                hardware platforms.
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                Integration with wireless communication modules
                                (ISM, WiFi, Zigbee, ZWave, Bluetooth Classic,
                                BLE, UWB).
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                Optimisation of portable and wearable systems
                                (working with power consumption, performance
                                tuning, battery life, etc.).
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                Implementation of quality control, automated
                                testing, test beds for MCU-based embedded
                                software, and UVM verification for ASIC devices
                                and IP-cores.
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <p
                            className="ramHeading"
                            style={{
                              color: "#1268b3",
                              fontWeight: "bold",
                              fontSize: "1.65em",
                            }}
                          >
                            Tech stack Used in Firmware Development
                          </p>
                          <p
                            className="ramParagraph"
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            We design both bare-metal and RTOS-based firmware
                            within the following technology stacks:
                          </p>
                          <ul
                            className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns"
                            style={{
                              color: "black",
                              fontSize: "1em",
                              listStyle: "none",
                              textTransform: "capitalize",
                            }}
                          >
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                TI-RTOS (SYS/BIOS)
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                ARM mbed
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                NXP MQX RTOS
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                Filesystems: FatFs, Yaffs
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                FreeRTOS
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                TCP/IP stacks: uIP, lwIP
                              </p>
                            </li>
                          </ul>
                          <p
                            className="ramParagraph"
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Whether you are looking for embedded solutions to
                            connect devices within an IoT system, remotely
                            control devices and equipment, or gather and process
                            sensor data, our embedded engineers can help. We
                            cover:
                          </p>
                          <ul
                            className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns"
                            style={{
                              color: "black",
                              fontSize: "1em",
                              listStyle: "none",
                              textTransform: "capitalize",
                            }}
                          >
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                Bare metal firmware for sensors
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                Board support package (BSP) solutions
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                Digital signal processing (DSP) development
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                Android open-source projects (AOSP)
                              </p>
                            </li>
                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Icon icon="flat-color-icons:ok" />
                              <p
                                className="paragraph-3 mt-3"
                                style={{ marginLeft: "0.5rem" }}
                              >
                                Linux kernel development
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab3-2">
                    <p
                      className="ramParagraph"
                      style={{
                        color: "#1268b3",
                        fontWeight: "bold",
                        fontSize: "1.15em",
                      }}
                    >
                      Developing Middleware for embedded Services requires a
                      careful selection of technologies that balance
                      performance, resource constraints, and compatibility with
                      the target hardware. Here are some commonly used
                      technologies and tools we use to development in
                      Middleware.
                    </p>
                    <div className="row">
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-6 order-1 order-md-1">
                            <Card
                              video={JobData[0].video}
                              header={JobData[0].header}
                              subheader={JobData[0].subheader}
                              paragraph={JobData[0].paragraph}
                            />
                             
                          </div>

                          <div className="col-md-6 order-3 order-md-2">
                            <Card
                              video={JobData[1].video}
                              header={JobData[1].header}
                              subheader={JobData[1].subheader}
                              paragraph={JobData[1].paragraph}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <Card
                          video={JobData[2].video}
                          header={JobData[2].header}
                          subheader={JobData[2].subheader}
                          paragraph={JobData[2].paragraph}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-6 order-1 order-md-1">
                            <Card
                              video={JobData[3].video}
                              header={JobData[3].header}
                              subheader={JobData[3].subheader}
                              paragraph={JobData[3].paragraph}
                            />
                          </div>

                          <div className="col-md-6 order-3 order-md-2">
                            <Card
                              video={JobData[4].video}
                              header={JobData[4].header}
                              subheader={JobData[4].subheader}
                              paragraph={JobData[4].paragraph}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <Card
                          video={JobData[5].video}
                          header={JobData[5].header}
                          subheader={JobData[5].subheader}
                          paragraph={JobData[5].paragraph}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-6 order-1 order-md-1">
                            <Card
                              video={JobData[6].video}
                              header={JobData[6].header}
                              subheader={JobData[6].subheader}
                              paragraph={JobData[6].paragraph}
                            />
                          </div>

                          <div className="col-md-6 order-3 order-md-2">
                            <Card
                              video={JobData[7].video}
                              header={JobData[7].header}
                              subheader={JobData[7].subheader}
                              paragraph={JobData[7].paragraph}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <Card
                          video={JobData[8].video}
                          header={JobData[8].header}
                          subheader={JobData[8].subheader}
                          paragraph={JobData[8].paragraph}
                          subheader1={JobData[8].subheader1}
                          paragraph1={JobData[8].paragraph1}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab3-3">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
                      <p
                      className="ramParagraph"
                        style={{
                          color: "#1268b3",
                          fontWeight: "bold",
                          fontSize: "1.25em",
                        }}
                      >
                        Embedded artificial intelligence (AI) services integrate
                        AI capabilities into embedded systems so devices can
                        perform intelligent functions and make decisions locally
                        (on device or on the EDGE). Our embedded experts can
                        help you choose technologies that match your needs, help
                        with problem analysis and execute technology scouting to
                        unlock new possibilities for efficiency, automation and
                        innovation as close to your data sources as you need.
                      </p>
                      <EmbeddedAi />
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab3-4">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5">
                      <div className="col-lg-6">
                        <p
                          className="ramParagraph"
                          style={{
                            color: "#1268b3",
                            fontWeight: "bold",
                            fontSize: "1.25em",
                          }}
                        >
                          Human-Machine Interfaces (HMIs) in embedded services
                          require a combination of hardware and software
                          technologies to provide users with intuitive
                          interaction and feedback. Below are the range of
                          solutions and offerings to cater to the needs of
                          various industries and applications.
                        </p>
                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Custom HMI Development:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              We Offer bespoke solutions tailored to the
                              specific requirements of clients. Expertise in
                              designing and developing customized HMIs for
                              embedded systems across industries such as
                              automotive, industrial automation, consumer
                              electronics, medical devices, and more.
                            </div>
                           
                          </li>
                        </ul>
                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            User Interface Design:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              We provide visually appealing and user-friendly
                              interfaces for embedded systems. Our design
                              experts crafting intuitive layouts, icons,
                              animations, and color schemes to enhance user
                              experience.{" "}
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Touchscreen and Display Integration:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Our Engineers are integrating different types of
                              displays (e.g., LCD, OLED, TFT) and touchscreen
                              technologies into embedded systems. We can also
                              optimize display performance, resolution, and
                              touch sensitivity for seamless user interaction.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Graphics Rendering and Animation:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              We develop animation and graphics rendering to
                              create dynamic and engaging HMIs. We are
                              proficienc in leveraging graphics libraries and
                              frameworks to implement smooth transitions, visual
                              effects, and interactive elements.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Multi-Platform Support:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              We develop HMIs that are compatible with a variety
                              of hardware platforms and operating systems. Our
                              services provides cross-platform solutions that
                              run on different embedded architectures and
                              operating systems.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Integration with Embedded Systems:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Integrating HMIs with embedded systems hardware
                              and software components. Our HMIs interface with
                              sensors, actuators, communication modules, and
                              other peripherals to provide real-time feedback
                              and control.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Input Device Support:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Support various input devices such as
                              touchscreens, buttons, rotary encoders, keyboards,
                              and gesture recognition sensors.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Localization and Internationalization:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Provide HMIs services that support multiple
                              languages, regional preferences, and cultural
                              conventions.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Usability Testing and Optimization:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              We are committed to usability testing and
                              optimization to ensure that HMIs meet the needs
                              and expectations of end-users.{" "}
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <p
                          className="ramParagraph"
                          style={{
                            color: "#1268b3",
                            fontWeight: "bold",
                            fontSize: "1.25em",
                          }}
                        >
                          To provide embedded services in the HMI (Human-Machine
                          Interface) section, We use variety of tools and
                          technologies to develop, design, test, and deploy HMI
                          solutions for embedded systems. Here's a breakdown of
                          the essential tools and technologies:
                        </p>
                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Integrated Development Environments (IDEs):
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Eclipse</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Keil µVision</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>IAR Embedded Workbench</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Graphics Libraries and Frameworks:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>OpenGL ES</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Qt for Embedded Systems</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>LittlevGL</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            UI/UX Design Tools:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Adobe XD</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Figma</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Sketch</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Simulation and Emulation Tools:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>QEMU (Quick Emulator)</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>VirtualBox</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Prototyping Tools:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Arduino IDE</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Raspberry Pi</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Testing and Debugging Tools:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                               
                                  marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>GDB (GNU Debugger)</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>JTAG Debuggers</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Logic Analyzers</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Version Control Systems:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Git</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>SVN (Subversion)</span>
                          </li>
                          </div>
                        </ul>
                        <p
                          className="ramParagraph"
                          style={{
                            color: "#1268b3",
                            fontWeight: "bold",
                            fontSize: "1.25em",
                          }}
                        >
                          By leveraging these tools and technologies, we can
                          efficiently develop, design, test, and deploy HMI
                          solutions for embedded systems, meeting the needs and
                          expectations of your requirements.
                        </p>
                      </div>
                    </div>

                    {/* <div className="row">
                      <div className="col-md-8">
                        <p>
                          Experience bug free software with TechsoC’s test
                          automation frameworks and error diagnosis system. Our
                          team of competent engineers working in the STA
                          Emulation and Validation team are experts in
                          prototyping and emulating complex IC designs for
                          streamlined system debugging and software bring-up. Be
                          it board bring-up, development of test automation
                          frameworks, error diagnosis or system debug, our STA
                          Emulation and Validation Services team can provide you
                          with the most suitable solution.
                        </p>

                        <p>
                          Our distinguished team has experience in working with
                          various semiconductor industries across the globe for
                          System Level Testing, Signal Integrity, Bench Marking,
                          Test Content Development and Automation.
                        </p>
                        <p>
                          <strong>
                            Our FPGA Emulation and Validation Portfolio include
                            the following services
                          </strong>
                        </p>
                        <ul className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns">
                          <li>
                            <Icon icon="flat-color-icons:ok" />
                            GLS
                          </li>
                          <li>
                            <Icon icon="flat-color-icons:ok" />
                            FPGA design
                          </li>
                          <li>
                            <Icon icon="flat-color-icons:ok" />
                            FPGA prototyping
                          </li>
                          <li>
                            <Icon icon="flat-color-icons:ok" />
                            Emulation
                          </li>
                          <li>
                            <Icon icon="flat-color-icons:ok" />
                            Post Silicon Validation
                          </li>
                          <li>
                            <Icon icon="flat-color-icons:ok" />
                            IP Validation
                          </li>
                          <li>
                            <Icon icon="flat-color-icons:ok" />
                            Protocol Qualification
                          </li>
                          <li>
                            <Icon icon="flat-color-icons:ok" />
                            Processor Based Emulation
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <img src={case2} className="w-100 rounded" />
                      </div>
                    </div> */}
                  </div>

                  <div className="tab-pane fade" id="tab3-5">
                    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5">
                      <div className="col-lg-6">
                        <p
                        className="ramParagraph"
                          style={{
                            color: "#1268b3",
                            fontWeight: "bold",
                            fontSize: "1.25em",
                          }}
                        >
                          These basic connectivity services enable customers to
                          leverage the full potential of embedded devices by
                          facilitating communication, data exchange, and remote
                          management, ultimately enhancing operational
                          efficiency and driving innovation in diverse
                          industries and applications.
                        </p>
                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Wireless Connectivity:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Enabling embedded devices to communicate
                              wirelessly using protocols such as Wi-Fi,
                              Bluetooth, Zigbee, or LoRa. This allows for
                              flexible deployment and remote access to devices.
                            </div>
                          </li>
                        </ul>
                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Wired Connectivity:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Supporting wired communication interfaces such as
                              Ethernet, USB, or RS-232/485 for reliable and
                              high-speed data exchange between embedded devices
                              and external systems.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            IoT Integration:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Integrating embedded devices with Internet of
                              Things (IoT) platforms to collect, analyze, and
                              visualize data, enabling remote monitoring,
                              control, and management of devices over the
                              internet.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Cloud Connectivity:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Providing seamless integration with cloud services
                              such as AWS, Azure, or Google Cloud Platform for
                              storing, processing, and accessing data from
                              embedded devices over the internet.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Remote Access and Control:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Offering solutions for remotely accessing and
                              controlling embedded devices using web-based
                              interfaces or mobile apps, allowing users to
                              monitor device status, configure settings, and
                              perform diagnostics from anywhere.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Data Exchange Protocols:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Supporting standard communication protocols such
                              as MQTT, CoAP, HTTP, or OPC-UA for efficient and
                              secure data exchange between embedded devices and
                              external systems.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Firmware Over-the-Air (OTA) Updates:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Implementing OTA update mechanisms to remotely
                              update firmware and software on embedded devices,
                              ensuring they stay up-to-date with the latest
                              features, patches, and security fixes.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Security Features:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Incorporating security measures such as
                              encryption, authentication, and access control to
                              protect data transmitted between embedded devices
                              and external systems, safeguarding against
                              unauthorized access and data breaches.
                            </div>
                          </li>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Scalability and Flexibility:
                          </span>
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                marginTop: "0rem",
                                color: "#008080",
                            fontWeight: "bold",
                            fontSize: "1em",
                              }}
                            >
                              Providing solutions that are scalable and flexible
                              to accommodate varying deployment scenarios and
                              future expansion, allowing customers to adapt to
                              changing requirements and environments.
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <p
                        className="ramParagraph"
                          style={{
                            color: "#1268b3",
                            fontWeight: "bold",
                            fontSize: "1.25em",
                          }}
                        >
                          To provide connectivity services in the embedded
                          domain, we utilize a variety of tools and technologies
                          to enable seamless communication, data exchange, and
                          remote management of embedded devices. Here are some
                          key tools and technologies used to deliver these
                          services:
                        </p>
                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Embedded Networking Protocols:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li style={{ display: "flex" }}>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>
                              MQTT (Message Queuing Telemetry Transport)
                            </span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>CoAP (Constrained Application Protocol)</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>HTTP/HTTPS</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            IoT Platforms:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>AWS IoT</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Azure IoT Hub</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Google Cloud IoT Core</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Cloud Services:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Amazon Web Services (AWS)</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Microsoft Azure</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Google Cloud Platform (GCP)</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Wireless Communication Technologies:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Wi-Fi</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Bluetooth</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Zigbee</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>LoRaWAN</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Network Development Kits (NDKs):
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>lwIP (Lightweight IP)</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>uIP</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Firmware Over-the-Air (OTA) Update Tools:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Mender</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>AWS IoT Device Management</span>
                          </li>
                          </div>
                        </ul>

                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Security Tools and Frameworks:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Transport Layer Security (TLS)</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>OpenSSL</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Device Identity and Authentication</span>
                          </li>
                          </div>
                        </ul>
                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Device Management Platforms:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>DevicePilot</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Balena</span>
                          </li>
                          </div>
                        </ul>
                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Remote Access and Control Tools:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>TeamViewer</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>AnyDesk</span>
                          </li>
                          </div>
                        </ul>
                        <ul
                          className="icon-list bullet-bg bullet-soft-primary two-columns"
                          style={{ listStyleType: "none" }}
                        >
                          <span
                            style={{
                              color: "#008F58",
                              fontWeight: "bold",
                              fontSize: "1.25em",
                            }}
                          >
                            Development and Testing Tools:
                          </span>
                          <div
                              className="downtoup"
                              style={{
                                marginLeft: "0.2rem",
                                  marginTop: "0rem",
                                  color: "#008080",
                              fontWeight: "bold",
                              fontSize: "1em",
                              }}
                            >
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Eclipse IoT Projects</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>PlatformIO</span>
                          </li>
                          <li>
                            <span class="me-3">
                              <Icon icon="icon-park-outline:check-correct" />
                            </span>
                            <span>Wireshark</span>
                          </li>
                          </div>
                        </ul>
                        <p
                        className="ramParagraph"
                          style={{
                            color: "#1268b3",
                            fontWeight: "bold",
                            fontSize: "1.25em",
                          }}
                        >
                          By leveraging these tools and technologies, we can
                          deliver robust connectivity services for embedded
                          devices, enabling seamless communication, remote
                          management, and integration with cloud and IoT
                          platforms.
                        </p>
                      </div>
                    </div>
                    {/* <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
                      <h4>
                        Embedded artificial intelligence (AI) services integrate
                        AI capabilities into embedded systems so devices can
                        perform intelligent functions and make decisions locally
                        (on device or on the EDGE). Our embedded experts can
                        help you choose technologies that match your needs, help
                        with problem analysis and execute technology scouting to
                        unlock new possibilities for efficiency, automation and
                        innovation as close to your data sources as you need.
                      </h4>
                      <EmbeddedAi />
                    </div> */}
                  </div>
                </div>
                <div className="tab-pane fade" id="tab3-6">
                  <p
                    className="ramParagraph"
                    style={{
                      color: "#1268b3",
                      fontWeight: "bold",
                      fontSize: "1.55em",
                    }}
                  >
                    Our cross-functional teams leverage top-tier tools to craft
                    tailor-made solutions that not only provide enriching
                    experiences but also adhere to market regulations.
                  </p>
                  <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5">
                    <div className="col-lg-3">
                      <button
                        className="btn btn-primary"
                        style={{ width: "100%", height: "auto" }}
                        onClick={onShowClick1}
                      >
                        {" "}
                        Operating Systems{" "}
                        <Icon
                          icon={icon1}
                          style={{ marginLeft: "2rem", width: "3rem" }}
                        />
                      </button>
                      {show1 && (
                        <div
                          class="solutions-for-business-card "
                          style={{ width: "100%", height: "auto" }}
                        >
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51.3c-0.1,0.1-0.3,0.1-0.4,0.2c-2,1.2-4.2,2.1-6.5,2.7c-0.2,0.1-0.5,0.3-0.6,0.6c-0.5,1.3-1,2.6-1.5,4c-0.1,0.3-0.3,0.4-0.6,0.4c-2.3,0-4.6,0-7,0c-0.4,0-0.5-0.1-0.6-0.5c-0.5-1.3-1-2.6-1.5-3.9c-0.1-0.3-0.3-0.5-0.7-0.6c-2.2-0.5-4.3-1.4-6.3-2.6c-0.3-0.2-0.6-0.2-1-0.1c-1.3,0.6-2.5,1.1-3.8,1.7c-0.3,0.1-0.5,0.1-0.7-0.1c-1.6-1.7-3.3-3.3-4.9-4.9c-0.3-0.3-0.3-0.5-0.1-0.8c0.6-1.3,1.2-2.5,1.7-3.8c0.1-0.2,0.1-0.6,0-0.9c-1.1-2-2.1-4.1-2.6-6.4c-0.1-0.4-0.3-0.6-0.6-0.7c-1.3-0.5-2.6-1-3.9-1.5C1,34,0.9,33.8,0.9,33.5c0-2.3,0-4.6,0-7c0-0.4,0.1-0.5,0.5-0.6c1.3-0.5,2.6-1,3.9-1.5c0.2-0.1,0.5-0.3,0.5-0.6c0.6-2.3,1.5-4.4,2.7-6.5c0.1-0.2,0.1-0.6,0-0.8c-0.5-1.3-1.1-2.6-1.7-3.9c-0.1-0.3-0.1-0.5,0.1-0.7c1.7-1.6,3.3-3.3,4.9-4.9c0.3-0.3,0.5-0.3,0.8-0.1c1.3,0.6,2.5,1.2,3.8,1.7c0.2,0.1,0.6,0.1,0.9,0c2-1.2,4.2-2.1,6.4-2.6c0.2-0.1,0.5-0.3,0.6-0.6c0.5-1.3,1-2.6,1.5-4C26,1,26.2,0.9,26.5,0.9c2.3,0,4.6,0,7,0c0.4,0,0.5,0.1,0.6,0.5c0.5,1.3,1,2.6,1.5,3.9c0.1,0.2,0.3,0.5,0.6,0.5c2.3,0.6,4.4,1.5,6.5,2.7c0.2,0.1,0.6,0.1,0.8,0c1.3-0.5,2.6-1.1,3.9-1.7c0.3-0.1,0.5-0.1,0.7,0.1c1.6,1.7,3.3,3.3,4.9,4.9c0.3,0.3,0.3,0.5,0.1,0.8c-0.6,1.3-1.2,2.5-1.7,3.8c-0.1,0.2-0.1,0.6,0,0.9c1.1,2,2.1,4.1,2.6,6.4c0.1,0.4,0.3,0.6,0.6,0.7c1.3,0.5,2.6,1,3.9,1.5c0.3,0.1,0.4,0.3,0.4,0.6c0,2.3,0,4.6,0,7c0,0.4-0.1,0.5-0.5,0.6c-1.3,0.5-2.6,1-3.9,1.5c-0.3,0.1-0.5,0.3-0.6,0.7c-0.6,2.2-1.4,4.4-2.6,6.3c-0.2,0.3-0.2,0.6,0,1c0.6,1.3,1.1,2.5,1.7,3.8c0.1,0.3,0.1,0.5-0.1,0.7c-1.7,1.6-3.3,3.3-4.9,4.9c-0.3,0.3-0.5,0.3-0.8,0.1c-1.2-0.6-2.5-1.1-3.7-1.7C43.5,51.4,43.3,51.4,43.1,51.3z M21.1,45.8c7.3,4.2,17.6,2.9,23.5-5c5.7-7.7,4.5-18.4-2.8-24.7c-7.2-6.1-18.1-5.6-24.7,1.1C10.5,24,11,33.4,14,38.3c0.1-0.2,0.3-0.3,0.4-0.5c2.7-2.7,5.3-5.3,8-8c0.5-0.5,0.6-0.5,1.1,0c2.1,2.1,4.2,4.2,6.3,6.3c0.5,0.5,0.5,0.7,0,1.2c-2.7,2.7-5.4,5.4-8.1,8.1C21.6,45.5,21.4,45.6,21.1,45.8z M15.9,41.4c2.3-2.5,4.6-4.8,6.9-7.3c1,1,1.8,1.8,2.6,2.6c0.5,0.5,1.1,0.6,1.5,0.2c0.4-0.4,0.4-1-0.1-1.5c-0.8-0.8-1.7-1.7-2.5-2.5c-1.4-1.4-1.5-1.4-2.8,0c-2.2,2.3-4.4,4.6-6.7,7C15,40.2,15.3,40.7,15.9,41.4z" />
                                <path d="M31.1,34.6c-0.4-0.5-0.9-0.9-1.3-1.3c0.1-0.1,0.2-0.3,0.4-0.4c1.6-1.6,3.3-3.3,4.9-4.9c0.5-0.5,1-0.6,1.6-0.4c0.6,0.2,1.2,0.3,1.7,0.5c0.7,0.2,1.3,0.3,2-0.1c0.9-0.6,2.2,0,2.6,1c0.5,1,0,2.2-0.9,2.7c-1,0.5-2.2,0.1-2.7-0.9c-0.2-0.4-0.5-0.6-0.9-0.7c-0.7-0.2-1.5-0.6-2.1-0.5c-0.6,0.2-1.1,1-1.7,1.5c-1.2,1.1-2.3,2.3-3.5,3.5C31.2,34.5,31.2,34.6,31.1,34.6z" />
                                <path d="M26.3,29.8c-0.5-0.5-0.9-0.9-1.4-1.4c1.1-1.1,2.2-2.2,3.4-3.4c0.5-0.5,0.9-1,1.4-1.4c0.4-0.3,0.4-0.6,0.3-1.1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.7-0.4-1.2-1.1-1.6c-1-0.5-1.1-1.9-0.5-2.8c0.6-0.9,1.8-1.1,2.8-0.5c0.9,0.6,1.2,1.8,0.6,2.8c-0.3,0.4-0.3,0.7-0.2,1.1c0.3,0.9,0.5,1.7,0.7,2.6c0.1,0.3,0,0.8-0.2,1C30,26.1,28.2,27.9,26.3,29.8z" />
                                <path d="M28.9,32.3c-0.5-0.5-1-0.9-1.5-1.4c0.6-0.6,1.2-1.1,1.7-1.7c1.8-1.8,3.5-3.5,5.3-5.3c0.2-0.2,0.3-0.5,0.3-0.8c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2,0.9,2,2.1c0,1.2-1,2-2.2,1.9c-0.4,0-0.6,0.1-0.9,0.3c-2.1,2.1-4.3,4.3-6.4,6.4C29.1,32,29,32.2,28.9,32.3z" />
                              </g>
                            </svg>

                            <h5>Yocto</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51.3c-0.1,0.1-0.3,0.1-0.4,0.2c-2,1.2-4.2,2.1-6.5,2.7c-0.2,0.1-0.5,0.3-0.6,0.6c-0.5,1.3-1,2.6-1.5,4c-0.1,0.3-0.3,0.4-0.6,0.4c-2.3,0-4.6,0-7,0c-0.4,0-0.5-0.1-0.6-0.5c-0.5-1.3-1-2.6-1.5-3.9c-0.1-0.3-0.3-0.5-0.7-0.6c-2.2-0.5-4.3-1.4-6.3-2.6c-0.3-0.2-0.6-0.2-1-0.1c-1.3,0.6-2.5,1.1-3.8,1.7c-0.3,0.1-0.5,0.1-0.7-0.1c-1.6-1.7-3.3-3.3-4.9-4.9c-0.3-0.3-0.3-0.5-0.1-0.8c0.6-1.3,1.2-2.5,1.7-3.8c0.1-0.2,0.1-0.6,0-0.9c-1.1-2-2.1-4.1-2.6-6.4c-0.1-0.4-0.3-0.6-0.6-0.7c-1.3-0.5-2.6-1-3.9-1.5C1,34,0.9,33.8,0.9,33.5c0-2.3,0-4.6,0-7c0-0.4,0.1-0.5,0.5-0.6c1.3-0.5,2.6-1,3.9-1.5c0.2-0.1,0.5-0.3,0.5-0.6c0.6-2.3,1.5-4.4,2.7-6.5c0.1-0.2,0.1-0.6,0-0.8c-0.5-1.3-1.1-2.6-1.7-3.9c-0.1-0.3-0.1-0.5,0.1-0.7c1.7-1.6,3.3-3.3,4.9-4.9c0.3-0.3,0.5-0.3,0.8-0.1c1.3,0.6,2.5,1.2,3.8,1.7c0.2,0.1,0.6,0.1,0.9,0c2-1.2,4.2-2.1,6.4-2.6c0.2-0.1,0.5-0.3,0.6-0.6c0.5-1.3,1-2.6,1.5-4C26,1,26.2,0.9,26.5,0.9c2.3,0,4.6,0,7,0c0.4,0,0.5,0.1,0.6,0.5c0.5,1.3,1,2.6,1.5,3.9c0.1,0.2,0.3,0.5,0.6,0.5c2.3,0.6,4.4,1.5,6.5,2.7c0.2,0.1,0.6,0.1,0.8,0c1.3-0.5,2.6-1.1,3.9-1.7c0.3-0.1,0.5-0.1,0.7,0.1c1.6,1.7,3.3,3.3,4.9,4.9c0.3,0.3,0.3,0.5,0.1,0.8c-0.6,1.3-1.2,2.5-1.7,3.8c-0.1,0.2-0.1,0.6,0,0.9c1.1,2,2.1,4.1,2.6,6.4c0.1,0.4,0.3,0.6,0.6,0.7c1.3,0.5,2.6,1,3.9,1.5c0.3,0.1,0.4,0.3,0.4,0.6c0,2.3,0,4.6,0,7c0,0.4-0.1,0.5-0.5,0.6c-1.3,0.5-2.6,1-3.9,1.5c-0.3,0.1-0.5,0.3-0.6,0.7c-0.6,2.2-1.4,4.4-2.6,6.3c-0.2,0.3-0.2,0.6,0,1c0.6,1.3,1.1,2.5,1.7,3.8c0.1,0.3,0.1,0.5-0.1,0.7c-1.7,1.6-3.3,3.3-4.9,4.9c-0.3,0.3-0.5,0.3-0.8,0.1c-1.2-0.6-2.5-1.1-3.7-1.7C43.5,51.4,43.3,51.4,43.1,51.3z M21.1,45.8c7.3,4.2,17.6,2.9,23.5-5c5.7-7.7,4.5-18.4-2.8-24.7c-7.2-6.1-18.1-5.6-24.7,1.1C10.5,24,11,33.4,14,38.3c0.1-0.2,0.3-0.3,0.4-0.5c2.7-2.7,5.3-5.3,8-8c0.5-0.5,0.6-0.5,1.1,0c2.1,2.1,4.2,4.2,6.3,6.3c0.5,0.5,0.5,0.7,0,1.2c-2.7,2.7-5.4,5.4-8.1,8.1C21.6,45.5,21.4,45.6,21.1,45.8z M15.9,41.4c2.3-2.5,4.6-4.8,6.9-7.3c1,1,1.8,1.8,2.6,2.6c0.5,0.5,1.1,0.6,1.5,0.2c0.4-0.4,0.4-1-0.1-1.5c-0.8-0.8-1.7-1.7-2.5-2.5c-1.4-1.4-1.5-1.4-2.8,0c-2.2,2.3-4.4,4.6-6.7,7C15,40.2,15.3,40.7,15.9,41.4z" />
                                <path d="M31.1,34.6c-0.4-0.5-0.9-0.9-1.3-1.3c0.1-0.1,0.2-0.3,0.4-0.4c1.6-1.6,3.3-3.3,4.9-4.9c0.5-0.5,1-0.6,1.6-0.4c0.6,0.2,1.2,0.3,1.7,0.5c0.7,0.2,1.3,0.3,2-0.1c0.9-0.6,2.2,0,2.6,1c0.5,1,0,2.2-0.9,2.7c-1,0.5-2.2,0.1-2.7-0.9c-0.2-0.4-0.5-0.6-0.9-0.7c-0.7-0.2-1.5-0.6-2.1-0.5c-0.6,0.2-1.1,1-1.7,1.5c-1.2,1.1-2.3,2.3-3.5,3.5C31.2,34.5,31.2,34.6,31.1,34.6z" />
                                <path d="M26.3,29.8c-0.5-0.5-0.9-0.9-1.4-1.4c1.1-1.1,2.2-2.2,3.4-3.4c0.5-0.5,0.9-1,1.4-1.4c0.4-0.3,0.4-0.6,0.3-1.1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.7-0.4-1.2-1.1-1.6c-1-0.5-1.1-1.9-0.5-2.8c0.6-0.9,1.8-1.1,2.8-0.5c0.9,0.6,1.2,1.8,0.6,2.8c-0.3,0.4-0.3,0.7-0.2,1.1c0.3,0.9,0.5,1.7,0.7,2.6c0.1,0.3,0,0.8-0.2,1C30,26.1,28.2,27.9,26.3,29.8z" />
                                <path d="M28.9,32.3c-0.5-0.5-1-0.9-1.5-1.4c0.6-0.6,1.2-1.1,1.7-1.7c1.8-1.8,3.5-3.5,5.3-5.3c0.2-0.2,0.3-0.5,0.3-0.8c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2,0.9,2,2.1c0,1.2-1,2-2.2,1.9c-0.4,0-0.6,0.1-0.9,0.3c-2.1,2.1-4.3,4.3-6.4,6.4C29.1,32,29,32.2,28.9,32.3z" />
                              </g>
                            </svg>

                            <h5>Embedded Linux</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51.3c-0.1,0.1-0.3,0.1-0.4,0.2c-2,1.2-4.2,2.1-6.5,2.7c-0.2,0.1-0.5,0.3-0.6,0.6c-0.5,1.3-1,2.6-1.5,4c-0.1,0.3-0.3,0.4-0.6,0.4c-2.3,0-4.6,0-7,0c-0.4,0-0.5-0.1-0.6-0.5c-0.5-1.3-1-2.6-1.5-3.9c-0.1-0.3-0.3-0.5-0.7-0.6c-2.2-0.5-4.3-1.4-6.3-2.6c-0.3-0.2-0.6-0.2-1-0.1c-1.3,0.6-2.5,1.1-3.8,1.7c-0.3,0.1-0.5,0.1-0.7-0.1c-1.6-1.7-3.3-3.3-4.9-4.9c-0.3-0.3-0.3-0.5-0.1-0.8c0.6-1.3,1.2-2.5,1.7-3.8c0.1-0.2,0.1-0.6,0-0.9c-1.1-2-2.1-4.1-2.6-6.4c-0.1-0.4-0.3-0.6-0.6-0.7c-1.3-0.5-2.6-1-3.9-1.5C1,34,0.9,33.8,0.9,33.5c0-2.3,0-4.6,0-7c0-0.4,0.1-0.5,0.5-0.6c1.3-0.5,2.6-1,3.9-1.5c0.2-0.1,0.5-0.3,0.5-0.6c0.6-2.3,1.5-4.4,2.7-6.5c0.1-0.2,0.1-0.6,0-0.8c-0.5-1.3-1.1-2.6-1.7-3.9c-0.1-0.3-0.1-0.5,0.1-0.7c1.7-1.6,3.3-3.3,4.9-4.9c0.3-0.3,0.5-0.3,0.8-0.1c1.3,0.6,2.5,1.2,3.8,1.7c0.2,0.1,0.6,0.1,0.9,0c2-1.2,4.2-2.1,6.4-2.6c0.2-0.1,0.5-0.3,0.6-0.6c0.5-1.3,1-2.6,1.5-4C26,1,26.2,0.9,26.5,0.9c2.3,0,4.6,0,7,0c0.4,0,0.5,0.1,0.6,0.5c0.5,1.3,1,2.6,1.5,3.9c0.1,0.2,0.3,0.5,0.6,0.5c2.3,0.6,4.4,1.5,6.5,2.7c0.2,0.1,0.6,0.1,0.8,0c1.3-0.5,2.6-1.1,3.9-1.7c0.3-0.1,0.5-0.1,0.7,0.1c1.6,1.7,3.3,3.3,4.9,4.9c0.3,0.3,0.3,0.5,0.1,0.8c-0.6,1.3-1.2,2.5-1.7,3.8c-0.1,0.2-0.1,0.6,0,0.9c1.1,2,2.1,4.1,2.6,6.4c0.1,0.4,0.3,0.6,0.6,0.7c1.3,0.5,2.6,1,3.9,1.5c0.3,0.1,0.4,0.3,0.4,0.6c0,2.3,0,4.6,0,7c0,0.4-0.1,0.5-0.5,0.6c-1.3,0.5-2.6,1-3.9,1.5c-0.3,0.1-0.5,0.3-0.6,0.7c-0.6,2.2-1.4,4.4-2.6,6.3c-0.2,0.3-0.2,0.6,0,1c0.6,1.3,1.1,2.5,1.7,3.8c0.1,0.3,0.1,0.5-0.1,0.7c-1.7,1.6-3.3,3.3-4.9,4.9c-0.3,0.3-0.5,0.3-0.8,0.1c-1.2-0.6-2.5-1.1-3.7-1.7C43.5,51.4,43.3,51.4,43.1,51.3z M21.1,45.8c7.3,4.2,17.6,2.9,23.5-5c5.7-7.7,4.5-18.4-2.8-24.7c-7.2-6.1-18.1-5.6-24.7,1.1C10.5,24,11,33.4,14,38.3c0.1-0.2,0.3-0.3,0.4-0.5c2.7-2.7,5.3-5.3,8-8c0.5-0.5,0.6-0.5,1.1,0c2.1,2.1,4.2,4.2,6.3,6.3c0.5,0.5,0.5,0.7,0,1.2c-2.7,2.7-5.4,5.4-8.1,8.1C21.6,45.5,21.4,45.6,21.1,45.8z M15.9,41.4c2.3-2.5,4.6-4.8,6.9-7.3c1,1,1.8,1.8,2.6,2.6c0.5,0.5,1.1,0.6,1.5,0.2c0.4-0.4,0.4-1-0.1-1.5c-0.8-0.8-1.7-1.7-2.5-2.5c-1.4-1.4-1.5-1.4-2.8,0c-2.2,2.3-4.4,4.6-6.7,7C15,40.2,15.3,40.7,15.9,41.4z" />
                                <path d="M31.1,34.6c-0.4-0.5-0.9-0.9-1.3-1.3c0.1-0.1,0.2-0.3,0.4-0.4c1.6-1.6,3.3-3.3,4.9-4.9c0.5-0.5,1-0.6,1.6-0.4c0.6,0.2,1.2,0.3,1.7,0.5c0.7,0.2,1.3,0.3,2-0.1c0.9-0.6,2.2,0,2.6,1c0.5,1,0,2.2-0.9,2.7c-1,0.5-2.2,0.1-2.7-0.9c-0.2-0.4-0.5-0.6-0.9-0.7c-0.7-0.2-1.5-0.6-2.1-0.5c-0.6,0.2-1.1,1-1.7,1.5c-1.2,1.1-2.3,2.3-3.5,3.5C31.2,34.5,31.2,34.6,31.1,34.6z" />
                                <path d="M26.3,29.8c-0.5-0.5-0.9-0.9-1.4-1.4c1.1-1.1,2.2-2.2,3.4-3.4c0.5-0.5,0.9-1,1.4-1.4c0.4-0.3,0.4-0.6,0.3-1.1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.7-0.4-1.2-1.1-1.6c-1-0.5-1.1-1.9-0.5-2.8c0.6-0.9,1.8-1.1,2.8-0.5c0.9,0.6,1.2,1.8,0.6,2.8c-0.3,0.4-0.3,0.7-0.2,1.1c0.3,0.9,0.5,1.7,0.7,2.6c0.1,0.3,0,0.8-0.2,1C30,26.1,28.2,27.9,26.3,29.8z" />
                                <path d="M28.9,32.3c-0.5-0.5-1-0.9-1.5-1.4c0.6-0.6,1.2-1.1,1.7-1.7c1.8-1.8,3.5-3.5,5.3-5.3c0.2-0.2,0.3-0.5,0.3-0.8c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2,0.9,2,2.1c0,1.2-1,2-2.2,1.9c-0.4,0-0.6,0.1-0.9,0.3c-2.1,2.1-4.3,4.3-6.4,6.4C29.1,32,29,32.2,28.9,32.3z" />
                              </g>
                            </svg>

                            <h5>FreeRTOS</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51.3c-0.1,0.1-0.3,0.1-0.4,0.2c-2,1.2-4.2,2.1-6.5,2.7c-0.2,0.1-0.5,0.3-0.6,0.6c-0.5,1.3-1,2.6-1.5,4c-0.1,0.3-0.3,0.4-0.6,0.4c-2.3,0-4.6,0-7,0c-0.4,0-0.5-0.1-0.6-0.5c-0.5-1.3-1-2.6-1.5-3.9c-0.1-0.3-0.3-0.5-0.7-0.6c-2.2-0.5-4.3-1.4-6.3-2.6c-0.3-0.2-0.6-0.2-1-0.1c-1.3,0.6-2.5,1.1-3.8,1.7c-0.3,0.1-0.5,0.1-0.7-0.1c-1.6-1.7-3.3-3.3-4.9-4.9c-0.3-0.3-0.3-0.5-0.1-0.8c0.6-1.3,1.2-2.5,1.7-3.8c0.1-0.2,0.1-0.6,0-0.9c-1.1-2-2.1-4.1-2.6-6.4c-0.1-0.4-0.3-0.6-0.6-0.7c-1.3-0.5-2.6-1-3.9-1.5C1,34,0.9,33.8,0.9,33.5c0-2.3,0-4.6,0-7c0-0.4,0.1-0.5,0.5-0.6c1.3-0.5,2.6-1,3.9-1.5c0.2-0.1,0.5-0.3,0.5-0.6c0.6-2.3,1.5-4.4,2.7-6.5c0.1-0.2,0.1-0.6,0-0.8c-0.5-1.3-1.1-2.6-1.7-3.9c-0.1-0.3-0.1-0.5,0.1-0.7c1.7-1.6,3.3-3.3,4.9-4.9c0.3-0.3,0.5-0.3,0.8-0.1c1.3,0.6,2.5,1.2,3.8,1.7c0.2,0.1,0.6,0.1,0.9,0c2-1.2,4.2-2.1,6.4-2.6c0.2-0.1,0.5-0.3,0.6-0.6c0.5-1.3,1-2.6,1.5-4C26,1,26.2,0.9,26.5,0.9c2.3,0,4.6,0,7,0c0.4,0,0.5,0.1,0.6,0.5c0.5,1.3,1,2.6,1.5,3.9c0.1,0.2,0.3,0.5,0.6,0.5c2.3,0.6,4.4,1.5,6.5,2.7c0.2,0.1,0.6,0.1,0.8,0c1.3-0.5,2.6-1.1,3.9-1.7c0.3-0.1,0.5-0.1,0.7,0.1c1.6,1.7,3.3,3.3,4.9,4.9c0.3,0.3,0.3,0.5,0.1,0.8c-0.6,1.3-1.2,2.5-1.7,3.8c-0.1,0.2-0.1,0.6,0,0.9c1.1,2,2.1,4.1,2.6,6.4c0.1,0.4,0.3,0.6,0.6,0.7c1.3,0.5,2.6,1,3.9,1.5c0.3,0.1,0.4,0.3,0.4,0.6c0,2.3,0,4.6,0,7c0,0.4-0.1,0.5-0.5,0.6c-1.3,0.5-2.6,1-3.9,1.5c-0.3,0.1-0.5,0.3-0.6,0.7c-0.6,2.2-1.4,4.4-2.6,6.3c-0.2,0.3-0.2,0.6,0,1c0.6,1.3,1.1,2.5,1.7,3.8c0.1,0.3,0.1,0.5-0.1,0.7c-1.7,1.6-3.3,3.3-4.9,4.9c-0.3,0.3-0.5,0.3-0.8,0.1c-1.2-0.6-2.5-1.1-3.7-1.7C43.5,51.4,43.3,51.4,43.1,51.3z M21.1,45.8c7.3,4.2,17.6,2.9,23.5-5c5.7-7.7,4.5-18.4-2.8-24.7c-7.2-6.1-18.1-5.6-24.7,1.1C10.5,24,11,33.4,14,38.3c0.1-0.2,0.3-0.3,0.4-0.5c2.7-2.7,5.3-5.3,8-8c0.5-0.5,0.6-0.5,1.1,0c2.1,2.1,4.2,4.2,6.3,6.3c0.5,0.5,0.5,0.7,0,1.2c-2.7,2.7-5.4,5.4-8.1,8.1C21.6,45.5,21.4,45.6,21.1,45.8z M15.9,41.4c2.3-2.5,4.6-4.8,6.9-7.3c1,1,1.8,1.8,2.6,2.6c0.5,0.5,1.1,0.6,1.5,0.2c0.4-0.4,0.4-1-0.1-1.5c-0.8-0.8-1.7-1.7-2.5-2.5c-1.4-1.4-1.5-1.4-2.8,0c-2.2,2.3-4.4,4.6-6.7,7C15,40.2,15.3,40.7,15.9,41.4z" />
                                <path d="M31.1,34.6c-0.4-0.5-0.9-0.9-1.3-1.3c0.1-0.1,0.2-0.3,0.4-0.4c1.6-1.6,3.3-3.3,4.9-4.9c0.5-0.5,1-0.6,1.6-0.4c0.6,0.2,1.2,0.3,1.7,0.5c0.7,0.2,1.3,0.3,2-0.1c0.9-0.6,2.2,0,2.6,1c0.5,1,0,2.2-0.9,2.7c-1,0.5-2.2,0.1-2.7-0.9c-0.2-0.4-0.5-0.6-0.9-0.7c-0.7-0.2-1.5-0.6-2.1-0.5c-0.6,0.2-1.1,1-1.7,1.5c-1.2,1.1-2.3,2.3-3.5,3.5C31.2,34.5,31.2,34.6,31.1,34.6z" />
                                <path d="M26.3,29.8c-0.5-0.5-0.9-0.9-1.4-1.4c1.1-1.1,2.2-2.2,3.4-3.4c0.5-0.5,0.9-1,1.4-1.4c0.4-0.3,0.4-0.6,0.3-1.1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.7-0.4-1.2-1.1-1.6c-1-0.5-1.1-1.9-0.5-2.8c0.6-0.9,1.8-1.1,2.8-0.5c0.9,0.6,1.2,1.8,0.6,2.8c-0.3,0.4-0.3,0.7-0.2,1.1c0.3,0.9,0.5,1.7,0.7,2.6c0.1,0.3,0,0.8-0.2,1C30,26.1,28.2,27.9,26.3,29.8z" />
                                <path d="M28.9,32.3c-0.5-0.5-1-0.9-1.5-1.4c0.6-0.6,1.2-1.1,1.7-1.7c1.8-1.8,3.5-3.5,5.3-5.3c0.2-0.2,0.3-0.5,0.3-0.8c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2,0.9,2,2.1c0,1.2-1,2-2.2,1.9c-0.4,0-0.6,0.1-0.9,0.3c-2.1,2.1-4.3,4.3-6.4,6.4C29.1,32,29,32.2,28.9,32.3z" />
                              </g>
                            </svg>

                            <h5>TI-RTOS</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51.3c-0.1,0.1-0.3,0.1-0.4,0.2c-2,1.2-4.2,2.1-6.5,2.7c-0.2,0.1-0.5,0.3-0.6,0.6c-0.5,1.3-1,2.6-1.5,4c-0.1,0.3-0.3,0.4-0.6,0.4c-2.3,0-4.6,0-7,0c-0.4,0-0.5-0.1-0.6-0.5c-0.5-1.3-1-2.6-1.5-3.9c-0.1-0.3-0.3-0.5-0.7-0.6c-2.2-0.5-4.3-1.4-6.3-2.6c-0.3-0.2-0.6-0.2-1-0.1c-1.3,0.6-2.5,1.1-3.8,1.7c-0.3,0.1-0.5,0.1-0.7-0.1c-1.6-1.7-3.3-3.3-4.9-4.9c-0.3-0.3-0.3-0.5-0.1-0.8c0.6-1.3,1.2-2.5,1.7-3.8c0.1-0.2,0.1-0.6,0-0.9c-1.1-2-2.1-4.1-2.6-6.4c-0.1-0.4-0.3-0.6-0.6-0.7c-1.3-0.5-2.6-1-3.9-1.5C1,34,0.9,33.8,0.9,33.5c0-2.3,0-4.6,0-7c0-0.4,0.1-0.5,0.5-0.6c1.3-0.5,2.6-1,3.9-1.5c0.2-0.1,0.5-0.3,0.5-0.6c0.6-2.3,1.5-4.4,2.7-6.5c0.1-0.2,0.1-0.6,0-0.8c-0.5-1.3-1.1-2.6-1.7-3.9c-0.1-0.3-0.1-0.5,0.1-0.7c1.7-1.6,3.3-3.3,4.9-4.9c0.3-0.3,0.5-0.3,0.8-0.1c1.3,0.6,2.5,1.2,3.8,1.7c0.2,0.1,0.6,0.1,0.9,0c2-1.2,4.2-2.1,6.4-2.6c0.2-0.1,0.5-0.3,0.6-0.6c0.5-1.3,1-2.6,1.5-4C26,1,26.2,0.9,26.5,0.9c2.3,0,4.6,0,7,0c0.4,0,0.5,0.1,0.6,0.5c0.5,1.3,1,2.6,1.5,3.9c0.1,0.2,0.3,0.5,0.6,0.5c2.3,0.6,4.4,1.5,6.5,2.7c0.2,0.1,0.6,0.1,0.8,0c1.3-0.5,2.6-1.1,3.9-1.7c0.3-0.1,0.5-0.1,0.7,0.1c1.6,1.7,3.3,3.3,4.9,4.9c0.3,0.3,0.3,0.5,0.1,0.8c-0.6,1.3-1.2,2.5-1.7,3.8c-0.1,0.2-0.1,0.6,0,0.9c1.1,2,2.1,4.1,2.6,6.4c0.1,0.4,0.3,0.6,0.6,0.7c1.3,0.5,2.6,1,3.9,1.5c0.3,0.1,0.4,0.3,0.4,0.6c0,2.3,0,4.6,0,7c0,0.4-0.1,0.5-0.5,0.6c-1.3,0.5-2.6,1-3.9,1.5c-0.3,0.1-0.5,0.3-0.6,0.7c-0.6,2.2-1.4,4.4-2.6,6.3c-0.2,0.3-0.2,0.6,0,1c0.6,1.3,1.1,2.5,1.7,3.8c0.1,0.3,0.1,0.5-0.1,0.7c-1.7,1.6-3.3,3.3-4.9,4.9c-0.3,0.3-0.5,0.3-0.8,0.1c-1.2-0.6-2.5-1.1-3.7-1.7C43.5,51.4,43.3,51.4,43.1,51.3z M21.1,45.8c7.3,4.2,17.6,2.9,23.5-5c5.7-7.7,4.5-18.4-2.8-24.7c-7.2-6.1-18.1-5.6-24.7,1.1C10.5,24,11,33.4,14,38.3c0.1-0.2,0.3-0.3,0.4-0.5c2.7-2.7,5.3-5.3,8-8c0.5-0.5,0.6-0.5,1.1,0c2.1,2.1,4.2,4.2,6.3,6.3c0.5,0.5,0.5,0.7,0,1.2c-2.7,2.7-5.4,5.4-8.1,8.1C21.6,45.5,21.4,45.6,21.1,45.8z M15.9,41.4c2.3-2.5,4.6-4.8,6.9-7.3c1,1,1.8,1.8,2.6,2.6c0.5,0.5,1.1,0.6,1.5,0.2c0.4-0.4,0.4-1-0.1-1.5c-0.8-0.8-1.7-1.7-2.5-2.5c-1.4-1.4-1.5-1.4-2.8,0c-2.2,2.3-4.4,4.6-6.7,7C15,40.2,15.3,40.7,15.9,41.4z" />
                                <path d="M31.1,34.6c-0.4-0.5-0.9-0.9-1.3-1.3c0.1-0.1,0.2-0.3,0.4-0.4c1.6-1.6,3.3-3.3,4.9-4.9c0.5-0.5,1-0.6,1.6-0.4c0.6,0.2,1.2,0.3,1.7,0.5c0.7,0.2,1.3,0.3,2-0.1c0.9-0.6,2.2,0,2.6,1c0.5,1,0,2.2-0.9,2.7c-1,0.5-2.2,0.1-2.7-0.9c-0.2-0.4-0.5-0.6-0.9-0.7c-0.7-0.2-1.5-0.6-2.1-0.5c-0.6,0.2-1.1,1-1.7,1.5c-1.2,1.1-2.3,2.3-3.5,3.5C31.2,34.5,31.2,34.6,31.1,34.6z" />
                                <path d="M26.3,29.8c-0.5-0.5-0.9-0.9-1.4-1.4c1.1-1.1,2.2-2.2,3.4-3.4c0.5-0.5,0.9-1,1.4-1.4c0.4-0.3,0.4-0.6,0.3-1.1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.7-0.4-1.2-1.1-1.6c-1-0.5-1.1-1.9-0.5-2.8c0.6-0.9,1.8-1.1,2.8-0.5c0.9,0.6,1.2,1.8,0.6,2.8c-0.3,0.4-0.3,0.7-0.2,1.1c0.3,0.9,0.5,1.7,0.7,2.6c0.1,0.3,0,0.8-0.2,1C30,26.1,28.2,27.9,26.3,29.8z" />
                                <path d="M28.9,32.3c-0.5-0.5-1-0.9-1.5-1.4c0.6-0.6,1.2-1.1,1.7-1.7c1.8-1.8,3.5-3.5,5.3-5.3c0.2-0.2,0.3-0.5,0.3-0.8c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2,0.9,2,2.1c0,1.2-1,2-2.2,1.9c-0.4,0-0.6,0.1-0.9,0.3c-2.1,2.1-4.3,4.3-6.4,6.4C29.1,32,29,32.2,28.9,32.3z" />
                              </g>
                            </svg>

                            <h5>Zephyr</h5>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="col-lg-3">
                      <button
                        className="btn btn-primary"
                        style={{ width: "100%", height: "auto" }}
                        onClick={onShowClick2}
                      >
                        {" "}
                        Platforms
                        <Icon
                          icon={icon2}
                          style={{ marginLeft: "2rem", width: "3rem" }}
                        />
                      </button>
                      {show2 && (
                        <div
                          class="solutions-for-business-card "
                          style={{ width: "100%", height: "auto" }}
                        >
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
                                <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
                                <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
                                <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
                                <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
                                <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
                                <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
                                <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
                                <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
                                <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
                                <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
                              </g>
                            </svg>
                            <h5>STM32</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
                                <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
                                <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
                                <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
                                <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
                                <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
                                <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
                                <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
                                <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
                                <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
                                <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
                              </g>
                            </svg>

                            <h5>iMX6ULL</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
                                <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
                                <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
                                <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
                                <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
                                <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
                                <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
                                <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
                                <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
                                <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
                                <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
                              </g>
                            </svg>

                            <h5>nRFx</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
                                <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
                                <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
                                <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
                                <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
                                <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
                                <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
                                <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
                                <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
                                <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
                                <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
                              </g>
                            </svg>
                            <h5>Arm</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
                                <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
                                <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
                                <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
                                <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
                                <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
                                <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
                                <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
                                <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
                                <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
                                <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
                              </g>
                            </svg>
                            <h5>Intel NUC</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
                                <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
                                <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
                                <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
                                <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
                                <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
                                <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
                                <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
                                <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
                                <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
                                <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
                              </g>
                            </svg>

                            <h5>any SBC(Embedded Linux)</h5>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="col-lg-3">
                      <button
                        className="btn btn-primary"
                        style={{ width: "100%", height: "auto" }}
                        onClick={onShowClick3}
                      >
                        {" "}
                        Connectivity
                        <Icon
                          icon={icon3}
                          style={{ marginLeft: "2rem", width: "3rem" }}
                        />
                      </button>
                      {show3 && (
                        <div
                          class="solutions-for-business-card "
                          style={{ width: "100%", height: "auto" }}
                        >
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
                                <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
                              </g>
                            </svg>
                            <h5>Bluetooth LE/Audio</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
                                <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
                              </g>
                            </svg>

                            <h5>Bluetooth Mesh</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
                                <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
                              </g>
                            </svg>

                            <h5>IEEE 802.15.4</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
                                <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
                              </g>
                            </svg>

                            <h5>WiFi</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
                                <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
                              </g>
                            </svg>

                            <h5>UWB</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
                                <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
                              </g>
                            </svg>

                            <h5>Matter</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
                                <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
                              </g>
                            </svg>

                            <h5>DALI/DALI2</h5>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="col-lg-3">
                      <button
                        className="btn btn-primary"
                        style={{ width: "100%", height: "auto" }}
                        onClick={onShowClick4}
                      >
                        {" "}
                        Programming Languages
                        <Icon
                          icon={icon4}
                          style={{ marginLeft: "2rem", width: "3rem" }}
                        />
                      </button>
                      {show4 && (
                        <div
                          class="solutions-for-business-card "
                          style={{ width: "100%", height: "auto" }}
                        >
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
                                <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
                                <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
                                <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
                                <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
                                <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
                                <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
                              </g>
                            </svg>

                            <h5>Embedded C</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
                                <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
                                <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
                                <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
                                <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
                                <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
                                <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
                              </g>
                            </svg>

                            <h5>C++</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
                                <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
                                <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
                                <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
                                <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
                                <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
                                <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
                              </g>
                            </svg>

                            <h5>Python</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
                                <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
                                <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
                                <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
                                <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
                                <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
                                <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
                              </g>
                            </svg>
                            <h5>Rust</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
                                <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
                                <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
                                <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
                                <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
                                <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
                                <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
                              </g>
                            </svg>

                            <h5>Go</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
                                <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
                                <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
                                <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
                                <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
                                <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
                                <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
                              </g>
                            </svg>
                            <h5>Qt</h5>
                          </div>
                          <div class="solution-title">
                            <svg
                              width="10%"
                              height="3vh"
                              viewBox="0 0 60 60"
                              fill="#f50057"
                              stroke="#000000"
                              stroke-width="0.85"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ marginRight: "1rem" }}
                            >
                              <g>
                                <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
                                <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
                                <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
                                <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
                                <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
                                <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
                                <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
                              </g>
                            </svg>

                            <h5>MISRA C</h5>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const Tabs = () => {
//   const [isCardHovered, setIsCardHovered] = useState(false);
//   const [show1, setShow1] = useState(false);
//   const [show2, setShow2] = useState(false);
//   const [show3, setShow3] = useState(false);
//   const [show4, setShow4] = useState(false);
//   const [icon1, setIcon1] = useState("noto-v1:right-arrow");
//   const [icon2, setIcon2] = useState("noto-v1:right-arrow");
//   const [icon3, setIcon3] = useState("noto-v1:right-arrow");
//   const [icon4, setIcon4] = useState("noto-v1:right-arrow");


  
//   const onShowClick1 = () => {
    
//   setShow1(!show1);
//   const newIcon = show1 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
//   setIcon1(newIcon);

//   };
  

//   const onShowClick2 = () => {
//     setShow2(!show2);
//     const newIcon = show2 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
//     setIcon2(newIcon);
//   };
  
//   const onShowClick3 = () => {
//     setShow3(!show3);
//     const newIcon = show3 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
//     setIcon3(newIcon);

//   };
  
//   const onShowClick4 = () => {
//     setShow4(!show4);
//     const newIcon = show4 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
//     setIcon4(newIcon);
//   };
  

//   const handleMouseEnter = () => {
//     setIsCardHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsCardHovered(false);
//   };
//   const JobData = [
//     {
//       id: 1,
//       video: middleware9,
//       header: "Programming Language",
//       subheader: "C/C++:",
//       paragraph:
//         "They are well-suited for developing middleware components that require efficient memory management and hardware interaction as well as performance and low-level control over hardware.",
//     },
//     {
//       id: 2,
//       video: middleware1,
//       header: "Real-Time Operating Systems (RTOS)",
//       subheader: "FreeRTOS, RTOS-32, ThreadX:",
//       paragraph:
//         "These RTOSs provide scheduling and resource management functionalities necessary for real-time embedded systems. Middleware components can be developed to run on top of these RTOSs to ensure deterministic behavior and timely response to events.",
//     },
//     {
//       id: 3,
//       video: middleware2,
//       header: "Communication Protocols",
//       subheader: "MQTT, CoAP, HTTP(S):",
//       paragraph:
//         "Depending on the requirements of the embedded services, middleware may need to support various communication protocols for data exchange with other devices or backend servers. These protocols enable seamless communication in IoT and networked embedded systems.",
//     },
//     {
//       id: 4,
//       video: middleware3,
//       header: "Message Queuing Systems:",
//       subheader: "RabbitMQ, Apache Kafka:",
//       paragraph:
//         "Middleware components often leverage message queuing systems to facilitate asynchronous communication between different parts of the embedded system or between multiple embedded devices.",
//     },
//     {
//       id: 5,
//       video: middleware4,
//       header: "Networking Libraries:",
//       subheader: "FlwIP (Lightweight IP), uC/TCP-IP:",
//       paragraph:
//         "These libraries provide TCP/IP stack implementations optimized for resource-constrained embedded systems. They enable networking capabilities in middleware components, allowing embedded devices to communicate over Ethernet, Wi-Fi, or other network interfaces.",
//     },
//     {
//       id: 6,
//       video: middleware5,
//       header: "Middleware Frameworks:",
//       subheader:
//         "ZeroMQ, CORBA (Common Object Request Broker Architecture), DDS (Data Distribution Service): ",
//       paragraph:
//         "These frameworks provide pre-built middleware solutions for distributed systems, offering features such as message queuing, remote procedure calls (RPC), and publish-subscribe communication patterns.",
//     },
//     {
//       id: 7,
//       video: middleware6,
//       header: "Inter-Process Communication (IPC):",
//       subheader: "Shared Memory, Message Passing:",
//       paragraph:
//         "Middleware may need to support IPC mechanisms for communication between different processes or threads within the embedded system. These mechanisms enable efficient data exchange while maintaining isolation between components.",
//     },
//     {
//       id: 8,
//       video: middleware7,
//       header: "Data Serialization Formats:",
//       subheader: "Protocol Buffers (protobuf), MessagePack, JSON:",
//       paragraph:
//         "Middleware components often need to serialize and deserialize data for communication over networks or storage in non-volatile memory. These formats provide efficient and platform-independent representations of structured data.",
//     },
//     {
//       id: 9,
//       video: middleware8,
//       header: "Testing and Debugging Tools:",
//       subheader: "Simulators and Emulators:",
//       paragraph:
//         "These RTOSs provide scheduling and resource management functionalities necessary for real-time embedded systems. Middleware components can be developed to run on top of these RTOSs to ensure deterministic behavior and timely response to events.",
//       subheader1: "Debuggers and Profilers:",
//       paragraph1:
//         "Debugging tools such as GDB (GNU Debugger) and JTAG debuggers allow developers to trace and analyze the execution of middleware components, diagnose performance bottlenecks, and optimize resource usage.",
//     },
//   ];

//   return (
//     <section className="wrapper bg-light">
//       <div className="container pt-md-8 pt-8 pt-md-0 mb-5">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="card col-12">
//               <div className="card-body">
//                 <ul className="nav nav-tabs nav-pills d-flex flex-wrap justify-content-center">
//                   <li className="nav-item  mb-3 mx-5">
//                     <a
//                       className="nav-link active flex-column mb-3"
//                       data-bs-toggle="tab"
//                       href="#tab3-1"
//                     >
//                       <Player
//                         autoplay
//                         loop
//                         src={play1}
//                         style={{
//                           width: "100%",
//                           height: "7vh",
//                           objectFit: "cover",
//                         }}
//                       />
//                       {/* <img src={one} height="30" className="mx-1" /> */}
//                       <span className="display-block text-uppercase mt-3">
//                         Firmware
//                       </span>
//                     </a>
//                   </li>
//                   <li className="nav-item  mb-3 mx-4">
//                     <a
//                       className="nav-link  flex-column mb-3"
//                       data-bs-toggle="tab"
//                       href="#tab3-2"
//                     >
//                       <Player
//                         autoplay
//                         loop
//                         src={play2}
//                         style={{
//                           width: "100%",
//                           height: "7vh",
//                           objectFit: "cover",
//                         }}
//                       />

//                       {/* <img src={two} height="30" className="mx-1" /> */}
//                       <span className="display-block text-uppercase mt-3">
//                         Middleware
//                       </span>
//                     </a>
//                   </li>
//                   <li className="nav-item mb-3 mx-4">
//                     <a
//                       className="nav-link  flex-column mb-3"
//                       data-bs-toggle="tab"
//                       href="#tab3-3"
//                     >
//                       <Player
//                         autoplay
//                         loop
//                         src={play3}
//                         style={{
//                           width: "100%",
//                           height: "7vh",
//                           objectFit: "cover",
//                         }}
//                       />

//                       {/* <img src={three} height="30" className="mx-1" /> */}
//                       <span className="display-block text-uppercase mt-3">
//                         AI Services
//                       </span>
//                     </a>
//                   </li>
//                   <li className="nav-item mb-3 mx-4">
//                     <a
//                       className="nav-link  flex-column mb-3"
//                       data-bs-toggle="tab"
//                       href="#tab3-4"
//                     >
//                       <Player
//                         autoplay
//                         loop
//                         src={play4}
//                         style={{
//                           width: "100%",
//                           height: "7vh",
//                           objectFit: "cover",
//                         }}
//                       />

//                       {/* <img src={three} height="30" className="mx-1" /> */}
//                       <span className="display-block text-uppercase mt-3">
//                         hmis
//                       </span>
//                     </a>
//                   </li>
//                   <li className="nav-item mb-3 mx-4">
//                     <a
//                       className="nav-link  flex-column mb-3"
//                       data-bs-toggle="tab"
//                       href="#tab3-5"
//                     >
//                       <Player
//                         autoplay
//                         loop
//                         src={play5}
//                         style={{
//                           width: "100%",
//                           height: "7vh",
//                           objectFit: "cover",
//                         }}
//                       />

//                       {/* <img src={three} height="30" className="mx-1" /> */}
//                       <span className="display-block text-uppercase mt-3">
//                         Connectivity
//                       </span>
//                     </a>
//                   </li>
//                   <li className="nav-item mb-3 mx-4">
//                     <a
//                       className="nav-link  flex-column mb-3"
//                       data-bs-toggle="tab"
//                       href="#tab3-6"
//                     >
//                       <Player
//                         autoplay
//                         loop
//                         src={play6}
//                         style={{
//                           width: "100%",
//                           height: "7vh",
//                           objectFit: "cover",
//                         }}
//                       />

//                       {/* <img src={three} height="30" className="mx-1" /> */}
//                       <span className="display-block text-uppercase mt-3">
//                         Technology
//                       </span>
//                     </a>
//                   </li>
//                 </ul>
//                 <div className="tab-content mt-0 mt-md-5">
//                   <div className="tab-pane fade show active" id="tab3-1" style={{ height: 'auto', margin: 0, padding: 0 }}>
//                     <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5">
//                       <div className="col-md-12 col-sm-12">
//                         {/* <h5>
//                           As an embedded firmware development company, we offer
//                           custom firmware and BSP development services for the
//                           most popular 8, 16, 32-bit microcontroller
//                           architectures and families. Techsoc uses not only ANSI
//                           C, C++, VB, Asembly Language but also embedded
//                           scripting languages with low memory footprints like
//                           Lua and Python to streamline our custom firmware

//                           development services.
//                         </h5> */}
//                         {/* <ul className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns ">
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />System Verilog
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />UVM Based
//                               Constrained Random Verification
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />Test Bench
//                               Development
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />SoC and IP
//                               Functional Verification
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />Subsystem
//                               Verification
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />Formal
//                               Verification
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />Power Aware
//                               Verification
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />Performance Tests
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />SystemC/TLM
//                               Modelling
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />VIP Development
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />UVM Development
//                             </li>
//                           </ul> */}
//                       </div>
//                       <div className="row">
//                         <div className="col-md-6 col-sm-12">
//                         <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.65em'}}>
//                             {" "}
//                             Our Embedded Firmware Development Services
                           
//                           </p>
//                           <p style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                             Firmware development services involve creating,
//                             maintaining, and updating firmware — customised
//                             software embedded in dedicated devices like consumer
//                             electronics, medical equipment, industrial
//                             machinery, and automotive systems. Techsoc’s
//                             engineering expertise in low-level software design
//                             for electronics includes but not limited to:
//                           </p>
//                           <ul
//                             className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns "
//                             style={{
//                               color: "black",
//                               fontSize: "1em",
//                               listStyle: "none",
//                               textTransform: "capitalize",
//                             }}
//                           >
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               MCU firmware design services.
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               Engineering of device drivers and board support
//                               packages (BSPs).
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               Porting real-time operating systems to target
//                               hardware platforms.
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               Integration with wireless communication modules
//                               (ISM, WiFi, Zigbee, ZWave, Bluetooth Classic, BLE,
//                               UWB).
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               Optimisation of portable and wearable systems
//                               (working with power consumption, performance
//                               tuning, battery life, etc.).
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               Implementation of quality control, automated
//                               testing, test beds for MCU-based embedded
//                               software, and UVM verification for ASIC devices
//                               and IP-cores.
//                             </li>
//                           </ul>
//                         </div>
//                         <div className="col-md-6 col-sm-12">
//                         <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.65em'}}>
                          
//                             Tech stack Used in Firmware Development
                            
//                       </p>
//                       <p style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                             We design both bare-metal and RTOS-based firmware
//                             within the following technology stacks:
//                           </p>
//                           <ul
//                             className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns"
//                             style={{
//                               color: "black",
//                               fontSize: "1em",
//                               listStyle: "none",
//                               textTransform: "capitalize",
//                             }}
//                           >
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               TI-RTOS (SYS/BIOS)
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               ARM mbed
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               NXP MQX RTOS
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               Filesystems: FatFs, Yaffs
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               FreeRTOS
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               TCP/IP stacks: uIP, lwIP
//                             </li>
//                           </ul>
//                           <p style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                             Whether you are looking for embedded solutions to
//                             connect devices within an IoT system, remotely
//                             control devices and equipment, or gather and process
//                             sensor data, our embedded engineers can help. We
//                             cover:
//                           </p>
//                           <ul
//                             className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns"
//                             style={{
//                               color: "black",
//                               fontSize: "1em",
//                               listStyle: "none",
//                               textTransform: "capitalize",
//                             }}
//                           >
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               Bare metal firmware for sensors
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               Board support package (BSP) solutions
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               Digital signal processing (DSP) development
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               Android open-source projects (AOSP)
//                             </li>
//                             <li>
//                               <Icon icon="flat-color-icons:ok" />
//                               Linux kernel development
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="tab-pane fade" id="tab3-2">
//                   <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.25em'}}>
//                       Developing Middleware for embedded Services requires a
//                       careful selection of technologies that balance
//                       performance, resource constraints, and compatibility with
//                       the target hardware. Here are some commonly used
//                       technologies and tools we use to development in
//                       Middleware.
//                     </p>
//                     <div className="row">
//                       <div className="col-md-8">
//                         <div className="row">
//                           <div className="col-md-6 order-1 order-md-1">
//                             <Card
//                               video={JobData[0].video}
//                               header={JobData[0].header}
//                               subheader={JobData[0].subheader}
//                               paragraph={JobData[0].paragraph}
//                             />
//                           </div>

//                           <div className="col-md-6 order-3 order-md-2">
//                             <Card
//                               video={JobData[1].video}
//                               header={JobData[1].header}
//                               subheader={JobData[1].subheader}
//                               paragraph={JobData[1].paragraph}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="col-md-4">
//                         <Card
//                           video={JobData[2].video}
//                           header={JobData[2].header}
//                           subheader={JobData[2].subheader}
//                           paragraph={JobData[2].paragraph}
//                         />
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-md-8">
//                         <div className="row">
//                           <div className="col-md-6 order-1 order-md-1">
//                             <Card
//                               video={JobData[3].video}
//                               header={JobData[3].header}
//                               subheader={JobData[3].subheader}
//                               paragraph={JobData[3].paragraph}
//                             />
//                           </div>

//                           <div className="col-md-6 order-3 order-md-2">
//                             <Card
//                               video={JobData[4].video}
//                               header={JobData[4].header}
//                               subheader={JobData[4].subheader}
//                               paragraph={JobData[4].paragraph}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="col-md-4">
//                         <Card
//                           video={JobData[5].video}
//                           header={JobData[5].header}
//                           subheader={JobData[5].subheader}
//                           paragraph={JobData[5].paragraph}
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-8">
//                         <div className="row">
//                           <div className="col-md-6 order-1 order-md-1">
//                             <Card
//                               video={JobData[6].video}
//                               header={JobData[6].header}
//                               subheader={JobData[6].subheader}
//                               paragraph={JobData[6].paragraph}
//                             />
//                           </div>

//                           <div className="col-md-6 order-3 order-md-2">
//                             <Card
//                               video={JobData[7].video}
//                               header={JobData[7].header}
//                               subheader={JobData[7].subheader}
//                               paragraph={JobData[7].paragraph}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="col-md-4">
//                         <Card
//                           video={JobData[8].video}
//                           header={JobData[8].header}
//                           subheader={JobData[8].subheader}
//                           paragraph={JobData[8].paragraph}
//                           subheader1={JobData[8].subheader1}
//                           paragraph1={JobData[8].paragraph1}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="tab-pane fade" id="tab3-3">
//                     <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
//                     <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.25em'}}>
//                         Embedded artificial intelligence (AI) services integrate
//                         AI capabilities into embedded systems so devices can
//                         perform intelligent functions and make decisions locally
//                         (on device or on the EDGE). Our embedded experts can
//                         help you choose technologies that match your needs, help
//                         with problem analysis and execute technology scouting to
//                         unlock new possibilities for efficiency, automation and
//                         innovation as close to your data sources as you need.
//                       </p>
//                       <EmbeddedAi />
//                     </div>
//                   </div>

//                   <div className="tab-pane fade" id="tab3-4">
//                     <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5">
//                       <div className="col-lg-6">
//                       <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.25em'}}>

//                             Human-Machine Interfaces (HMIs) in embedded services
//                             require a combination of hardware and software
//                             technologies to provide users with intuitive
//                             interaction and feedback. Below are the range of
//                             solutions and offerings to cater to the needs of
//                             various industries and applications.
//                           </p>
//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none"}}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Custom HMI Development:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                               We Offer bespoke solutions tailored to the
//                               specific requirements of clients. Expertise in
//                               designing and developing customized HMIs for
//                               embedded systems across industries such as
//                               automotive, industrial automation, consumer
//                               electronics, medical devices, and more.
//                             </span>
//                           </li>
//                         </ul>
//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           User Interface Design:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                               We provide visually appealing and user-friendly
//                               interfaces for embedded systems. Our design
//                               experts crafting intuitive layouts, icons,
//                               animations, and color schemes to enhance user
//                               experience.{" "}
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//   <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Touchscreen and Display Integration:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                               Our Engineers are integrating different types of
//                               displays (e.g., LCD, OLED, TFT) and touchscreen
//                               technologies into embedded systems. We can also
//                               optimize display performance, resolution, and
//                               touch sensitivity for seamless user interaction.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                            <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
                         
//                           Graphics Rendering and Animation:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                               We develop animation and graphics rendering to
//                               create dynamic and engaging HMIs. We are
//                               proficienc in leveraging graphics libraries and
//                               frameworks to implement smooth transitions, visual
//                               effects, and interactive elements.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Multi-Platform Support:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                               We develop HMIs that are compatible with a variety
//                               of hardware platforms and operating systems. Our
//                               services provides cross-platform solutions that
//                               run on different embedded architectures and
//                               operating systems.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Integration with Embedded Systems:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                               Integrating HMIs with embedded systems hardware
//                               and software components. Our HMIs interface with
//                               sensors, actuators, communication modules, and
//                               other peripherals to provide real-time feedback
//                               and control.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Input Device Support:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                               Support various input devices such as
//                               touchscreens, buttons, rotary encoders, keyboards,
//                               and gesture recognition sensors.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Localization and Internationalization:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                               Provide HMIs services that support multiple
//                               languages, regional preferences, and cultural
//                               conventions.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Usability Testing and Optimization:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                               We are committed to usability testing and
//                               optimization to ensure that HMIs meet the needs
//                               and expectations of end-users.{" "}
//                             </span>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="col-lg-6">
//                       <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.25em'}}>
//                             To provide embedded services in the HMI
//                             (Human-Machine Interface) section, We use variety of
//                             tools and technologies to develop, design, test, and
//                             deploy HMI solutions for embedded systems. Here's a
//                             breakdown of the essential tools and technologies:
//                           </p>
//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                          <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Integrated Development Environments (IDEs):
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Eclipse</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Keil µVision</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>IAR Embedded Workbench</span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                          <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Graphics Libraries and Frameworks:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>OpenGL ES</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Qt for Embedded Systems</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>LittlevGL</span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           UI/UX Design Tools:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Adobe XD</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Figma</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Sketch</span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Simulation and Emulation Tools:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>QEMU (Quick Emulator)</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>VirtualBox</span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Prototyping Tools:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Arduino IDE</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Raspberry Pi</span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Testing and Debugging Tools:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>GDB (GNU Debugger)</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>JTAG Debuggers</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Logic Analyzers</span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Version Control Systems:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Git</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>SVN (Subversion)</span>
//                           </li>
//                         </ul>
//                         <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.25em'}}>

//                           By leveraging these tools and technologies, we can
//                           efficiently develop, design, test, and deploy HMI
//                           solutions for embedded systems, meeting the needs and
//                           expectations of your requirements.
//                         </p>
//                       </div>
//                     </div>

//                     {/* <div className="row">
//                       <div className="col-md-8">
//                         <p>
//                           Experience bug free software with TechsoC’s test
//                           automation frameworks and error diagnosis system. Our
//                           team of competent engineers working in the STA
//                           Emulation and Validation team are experts in
//                           prototyping and emulating complex IC designs for
//                           streamlined system debugging and software bring-up. Be
//                           it board bring-up, development of test automation
//                           frameworks, error diagnosis or system debug, our STA
//                           Emulation and Validation Services team can provide you
//                           with the most suitable solution.
//                         </p>

//                         <p>
//                           Our distinguished team has experience in working with
//                           various semiconductor industries across the globe for
//                           System Level Testing, Signal Integrity, Bench Marking,
//                           Test Content Development and Automation.
//                         </p>
//                         <p>
//                           <strong>
//                             Our FPGA Emulation and Validation Portfolio include
//                             the following services
//                           </strong>
//                         </p>
//                         <ul className="icon-list bullet-bg bullet-soft-primary mb-5 two-columns">
//                           <li>
//                             <Icon icon="flat-color-icons:ok" />
//                             GLS
//                           </li>
//                           <li>
//                             <Icon icon="flat-color-icons:ok" />
//                             FPGA design
//                           </li>
//                           <li>
//                             <Icon icon="flat-color-icons:ok" />
//                             FPGA prototyping
//                           </li>
//                           <li>
//                             <Icon icon="flat-color-icons:ok" />
//                             Emulation
//                           </li>
//                           <li>
//                             <Icon icon="flat-color-icons:ok" />
//                             Post Silicon Validation
//                           </li>
//                           <li>
//                             <Icon icon="flat-color-icons:ok" />
//                             IP Validation
//                           </li>
//                           <li>
//                             <Icon icon="flat-color-icons:ok" />
//                             Protocol Qualification
//                           </li>
//                           <li>
//                             <Icon icon="flat-color-icons:ok" />
//                             Processor Based Emulation
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="col-md-4">
//                         <img src={case2} className="w-100 rounded" />
//                       </div>
//                     </div> */}
//                   </div>

//                   <div className="tab-pane fade" id="tab3-5">
//                   <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5">
                    
//                       <div className="col-lg-6">
//                       <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.25em'}}>

//                           These basic connectivity services enable customers to leverage the full potential of embedded devices by facilitating communication, data exchange, and remote management, ultimately enhancing operational efficiency and driving innovation in diverse industries and applications.
//                           </p>
//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Wireless Connectivity:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                             Enabling embedded devices to communicate wirelessly using protocols such as Wi-Fi, Bluetooth, Zigbee, or LoRa. This allows for flexible deployment and remote access to devices.
//                             </span>
//                           </li>
//                         </ul>
//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Wired Connectivity: 
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                             Supporting wired communication interfaces such as Ethernet, USB, or RS-232/485 for reliable and high-speed data exchange between embedded devices and external systems.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           IoT Integration:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                             Integrating embedded devices with Internet of Things (IoT) platforms to collect, analyze, and visualize data, enabling remote monitoring, control, and management of devices over the internet.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Cloud Connectivity:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                             Providing seamless integration with cloud services such as AWS, Azure, or Google Cloud Platform for storing, processing, and accessing data from embedded devices over the internet.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Remote Access and Control: 
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                             Offering solutions for remotely accessing and controlling embedded devices using web-based interfaces or mobile apps, allowing users to monitor device status, configure settings, and perform diagnostics from anywhere.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Data Exchange Protocols:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                             Supporting standard communication protocols such as MQTT, CoAP, HTTP, or OPC-UA for efficient and secure data exchange between embedded devices and external systems.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Firmware Over-the-Air (OTA) Updates:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                             Implementing OTA update mechanisms to remotely update firmware and software on embedded devices, ensuring they stay up-to-date with the latest features, patches, and security fixes.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Security Features: 
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                             Incorporating security measures such as encryption, authentication, and access control to protect data transmitted between embedded devices and external systems, safeguarding against unauthorized access and data breaches.
//                             </span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                                                     <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>

//                           Scalability and Flexibility:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>
//                             Providing solutions that are scalable and flexible to accommodate varying deployment scenarios and future expansion, allowing customers to adapt to changing requirements and environments.
//                             </span>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="col-lg-6">
//                       <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.25em'}}>

// To provide connectivity services in the embedded domain, we utilize a variety of tools and technologies to enable seamless communication, data exchange, and remote management of embedded devices. Here are some key tools and technologies used to deliver these services:
// </p>
//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Embedded Networking Protocols:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>MQTT (Message Queuing Telemetry Transport)</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>CoAP (Constrained Application Protocol)</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>HTTP/HTTPS</span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           IoT Platforms:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>AWS IoT</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Azure IoT Hub</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Google Cloud IoT Core</span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                          Cloud Services:
//                          </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Amazon Web Services (AWS)</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Microsoft Azure</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Google Cloud Platform (GCP)</span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Wireless Communication Technologies:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Wi-Fi</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Bluetooth</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Zigbee</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>LoRaWAN</span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                          Network Development Kits (NDKs):
//                          </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>lwIP (Lightweight IP)</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>uIP</span>
//                           </li>
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Firmware Over-the-Air (OTA) Update Tools:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Mender</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>AWS IoT Device Management</span>
//                           </li>
                          
//                         </ul>

//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Security Tools and Frameworks:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Transport Layer Security (TLS)</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>OpenSSL</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Device Identity and Authentication</span>
//                           </li>
//                         </ul>
//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Device Management Platforms:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>DevicePilot</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Balena</span>
//                           </li>
//                         </ul>
//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Remote Access and Control Tools:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>TeamViewer</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>AnyDesk</span>
//                           </li>
                          
//                         </ul>
//                         <ul
//                           className="icon-list bullet-bg bullet-soft-primary two-columns"
//                           style={{ listStyleType: "none" }}
//                         >
//                           <span  style={{ color:'#008F58',fontWeight:'bold', fontSize:'1.25em'}}>
//                           Development and Testing Tools:
//                           </span>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Eclipse IoT Projects</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>PlatformIO</span>
//                           </li>
//                           <li>
//                             <span class="me-3">
//                               <Icon icon="icon-park-outline:check-correct" />
//                             </span>
//                             <span>Wireshark</span>
//                           </li>
//                         </ul>
//                         <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.25em'}}>

//                         By leveraging these tools and technologies, we can deliver robust connectivity services for embedded devices, enabling seamless communication, remote management, and integration with cloud and IoT platforms.
//                         </p>
//                       </div>
//                     </div>
//                     {/* <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
//                       <h4>
//                         Embedded artificial intelligence (AI) services integrate
//                         AI capabilities into embedded systems so devices can
//                         perform intelligent functions and make decisions locally
//                         (on device or on the EDGE). Our embedded experts can
//                         help you choose technologies that match your needs, help
//                         with problem analysis and execute technology scouting to
//                         unlock new possibilities for efficiency, automation and
//                         innovation as close to your data sources as you need.
//                       </h4>
//                       <EmbeddedAi />
//                     </div> */}
//                   </div>


//                 </div>
//                 <div className="tab-pane fade" id="tab3-6">
//                 <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'1.55em'}}>
//                     Our cross-functional teams leverage top-tier tools to craft
//                     tailor-made solutions that not only provide enriching
//                     experiences but also adhere to market regulations.
//                   </p>
//                   <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5">
//                     <div className="col-lg-3">
//                       <button className="btn btn-primary" style={{width:'100%', height:'auto'}} onClick={onShowClick1}>
//                         {" "}
//                         Operating Systems{" "}
//                         <Icon
//                           icon={icon1}
//                           style={{ marginLeft: "2rem", width: "3rem" }}
//                         />
//                       </button>
//                       {show1  &&
//                       <div class="solutions-for-business-card " style={{width:'100%', height:'auto'}}>
//                         <div class="solution-title">
//                           <svg
//                             width="10%"
//                             height="3vh"
//                             viewBox="0 0 60 60"
//                             fill="#f50057"
//                             stroke="#000000"
//                             stroke-width="0.85"
//                             xmlns="http://www.w3.org/2000/svg"
//                             style={{marginRight:'1rem'}}
//                           >
//                             <g>
//                               <path d="M43.1,51.3c-0.1,0.1-0.3,0.1-0.4,0.2c-2,1.2-4.2,2.1-6.5,2.7c-0.2,0.1-0.5,0.3-0.6,0.6c-0.5,1.3-1,2.6-1.5,4c-0.1,0.3-0.3,0.4-0.6,0.4c-2.3,0-4.6,0-7,0c-0.4,0-0.5-0.1-0.6-0.5c-0.5-1.3-1-2.6-1.5-3.9c-0.1-0.3-0.3-0.5-0.7-0.6c-2.2-0.5-4.3-1.4-6.3-2.6c-0.3-0.2-0.6-0.2-1-0.1c-1.3,0.6-2.5,1.1-3.8,1.7c-0.3,0.1-0.5,0.1-0.7-0.1c-1.6-1.7-3.3-3.3-4.9-4.9c-0.3-0.3-0.3-0.5-0.1-0.8c0.6-1.3,1.2-2.5,1.7-3.8c0.1-0.2,0.1-0.6,0-0.9c-1.1-2-2.1-4.1-2.6-6.4c-0.1-0.4-0.3-0.6-0.6-0.7c-1.3-0.5-2.6-1-3.9-1.5C1,34,0.9,33.8,0.9,33.5c0-2.3,0-4.6,0-7c0-0.4,0.1-0.5,0.5-0.6c1.3-0.5,2.6-1,3.9-1.5c0.2-0.1,0.5-0.3,0.5-0.6c0.6-2.3,1.5-4.4,2.7-6.5c0.1-0.2,0.1-0.6,0-0.8c-0.5-1.3-1.1-2.6-1.7-3.9c-0.1-0.3-0.1-0.5,0.1-0.7c1.7-1.6,3.3-3.3,4.9-4.9c0.3-0.3,0.5-0.3,0.8-0.1c1.3,0.6,2.5,1.2,3.8,1.7c0.2,0.1,0.6,0.1,0.9,0c2-1.2,4.2-2.1,6.4-2.6c0.2-0.1,0.5-0.3,0.6-0.6c0.5-1.3,1-2.6,1.5-4C26,1,26.2,0.9,26.5,0.9c2.3,0,4.6,0,7,0c0.4,0,0.5,0.1,0.6,0.5c0.5,1.3,1,2.6,1.5,3.9c0.1,0.2,0.3,0.5,0.6,0.5c2.3,0.6,4.4,1.5,6.5,2.7c0.2,0.1,0.6,0.1,0.8,0c1.3-0.5,2.6-1.1,3.9-1.7c0.3-0.1,0.5-0.1,0.7,0.1c1.6,1.7,3.3,3.3,4.9,4.9c0.3,0.3,0.3,0.5,0.1,0.8c-0.6,1.3-1.2,2.5-1.7,3.8c-0.1,0.2-0.1,0.6,0,0.9c1.1,2,2.1,4.1,2.6,6.4c0.1,0.4,0.3,0.6,0.6,0.7c1.3,0.5,2.6,1,3.9,1.5c0.3,0.1,0.4,0.3,0.4,0.6c0,2.3,0,4.6,0,7c0,0.4-0.1,0.5-0.5,0.6c-1.3,0.5-2.6,1-3.9,1.5c-0.3,0.1-0.5,0.3-0.6,0.7c-0.6,2.2-1.4,4.4-2.6,6.3c-0.2,0.3-0.2,0.6,0,1c0.6,1.3,1.1,2.5,1.7,3.8c0.1,0.3,0.1,0.5-0.1,0.7c-1.7,1.6-3.3,3.3-4.9,4.9c-0.3,0.3-0.5,0.3-0.8,0.1c-1.2-0.6-2.5-1.1-3.7-1.7C43.5,51.4,43.3,51.4,43.1,51.3z M21.1,45.8c7.3,4.2,17.6,2.9,23.5-5c5.7-7.7,4.5-18.4-2.8-24.7c-7.2-6.1-18.1-5.6-24.7,1.1C10.5,24,11,33.4,14,38.3c0.1-0.2,0.3-0.3,0.4-0.5c2.7-2.7,5.3-5.3,8-8c0.5-0.5,0.6-0.5,1.1,0c2.1,2.1,4.2,4.2,6.3,6.3c0.5,0.5,0.5,0.7,0,1.2c-2.7,2.7-5.4,5.4-8.1,8.1C21.6,45.5,21.4,45.6,21.1,45.8z M15.9,41.4c2.3-2.5,4.6-4.8,6.9-7.3c1,1,1.8,1.8,2.6,2.6c0.5,0.5,1.1,0.6,1.5,0.2c0.4-0.4,0.4-1-0.1-1.5c-0.8-0.8-1.7-1.7-2.5-2.5c-1.4-1.4-1.5-1.4-2.8,0c-2.2,2.3-4.4,4.6-6.7,7C15,40.2,15.3,40.7,15.9,41.4z" />
//                               <path d="M31.1,34.6c-0.4-0.5-0.9-0.9-1.3-1.3c0.1-0.1,0.2-0.3,0.4-0.4c1.6-1.6,3.3-3.3,4.9-4.9c0.5-0.5,1-0.6,1.6-0.4c0.6,0.2,1.2,0.3,1.7,0.5c0.7,0.2,1.3,0.3,2-0.1c0.9-0.6,2.2,0,2.6,1c0.5,1,0,2.2-0.9,2.7c-1,0.5-2.2,0.1-2.7-0.9c-0.2-0.4-0.5-0.6-0.9-0.7c-0.7-0.2-1.5-0.6-2.1-0.5c-0.6,0.2-1.1,1-1.7,1.5c-1.2,1.1-2.3,2.3-3.5,3.5C31.2,34.5,31.2,34.6,31.1,34.6z" />
//                               <path d="M26.3,29.8c-0.5-0.5-0.9-0.9-1.4-1.4c1.1-1.1,2.2-2.2,3.4-3.4c0.5-0.5,0.9-1,1.4-1.4c0.4-0.3,0.4-0.6,0.3-1.1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.7-0.4-1.2-1.1-1.6c-1-0.5-1.1-1.9-0.5-2.8c0.6-0.9,1.8-1.1,2.8-0.5c0.9,0.6,1.2,1.8,0.6,2.8c-0.3,0.4-0.3,0.7-0.2,1.1c0.3,0.9,0.5,1.7,0.7,2.6c0.1,0.3,0,0.8-0.2,1C30,26.1,28.2,27.9,26.3,29.8z" />
//                               <path d="M28.9,32.3c-0.5-0.5-1-0.9-1.5-1.4c0.6-0.6,1.2-1.1,1.7-1.7c1.8-1.8,3.5-3.5,5.3-5.3c0.2-0.2,0.3-0.5,0.3-0.8c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2,0.9,2,2.1c0,1.2-1,2-2.2,1.9c-0.4,0-0.6,0.1-0.9,0.3c-2.1,2.1-4.3,4.3-6.4,6.4C29.1,32,29,32.2,28.9,32.3z" />
//                             </g>
//                           </svg>

//                           <h5>Yocto</h5>
//                         </div>
//                         <div class="solution-title">
//                           <svg
//                             width="10%"
//                             height="3vh"
//                             viewBox="0 0 60 60"
//                             fill="#f50057"
//                             stroke="#000000"
//                             stroke-width="0.85"
//                             xmlns="http://www.w3.org/2000/svg"
//                             style={{marginRight:'1rem'}}
//                           >
//                             <g>
//                               <path d="M43.1,51.3c-0.1,0.1-0.3,0.1-0.4,0.2c-2,1.2-4.2,2.1-6.5,2.7c-0.2,0.1-0.5,0.3-0.6,0.6c-0.5,1.3-1,2.6-1.5,4c-0.1,0.3-0.3,0.4-0.6,0.4c-2.3,0-4.6,0-7,0c-0.4,0-0.5-0.1-0.6-0.5c-0.5-1.3-1-2.6-1.5-3.9c-0.1-0.3-0.3-0.5-0.7-0.6c-2.2-0.5-4.3-1.4-6.3-2.6c-0.3-0.2-0.6-0.2-1-0.1c-1.3,0.6-2.5,1.1-3.8,1.7c-0.3,0.1-0.5,0.1-0.7-0.1c-1.6-1.7-3.3-3.3-4.9-4.9c-0.3-0.3-0.3-0.5-0.1-0.8c0.6-1.3,1.2-2.5,1.7-3.8c0.1-0.2,0.1-0.6,0-0.9c-1.1-2-2.1-4.1-2.6-6.4c-0.1-0.4-0.3-0.6-0.6-0.7c-1.3-0.5-2.6-1-3.9-1.5C1,34,0.9,33.8,0.9,33.5c0-2.3,0-4.6,0-7c0-0.4,0.1-0.5,0.5-0.6c1.3-0.5,2.6-1,3.9-1.5c0.2-0.1,0.5-0.3,0.5-0.6c0.6-2.3,1.5-4.4,2.7-6.5c0.1-0.2,0.1-0.6,0-0.8c-0.5-1.3-1.1-2.6-1.7-3.9c-0.1-0.3-0.1-0.5,0.1-0.7c1.7-1.6,3.3-3.3,4.9-4.9c0.3-0.3,0.5-0.3,0.8-0.1c1.3,0.6,2.5,1.2,3.8,1.7c0.2,0.1,0.6,0.1,0.9,0c2-1.2,4.2-2.1,6.4-2.6c0.2-0.1,0.5-0.3,0.6-0.6c0.5-1.3,1-2.6,1.5-4C26,1,26.2,0.9,26.5,0.9c2.3,0,4.6,0,7,0c0.4,0,0.5,0.1,0.6,0.5c0.5,1.3,1,2.6,1.5,3.9c0.1,0.2,0.3,0.5,0.6,0.5c2.3,0.6,4.4,1.5,6.5,2.7c0.2,0.1,0.6,0.1,0.8,0c1.3-0.5,2.6-1.1,3.9-1.7c0.3-0.1,0.5-0.1,0.7,0.1c1.6,1.7,3.3,3.3,4.9,4.9c0.3,0.3,0.3,0.5,0.1,0.8c-0.6,1.3-1.2,2.5-1.7,3.8c-0.1,0.2-0.1,0.6,0,0.9c1.1,2,2.1,4.1,2.6,6.4c0.1,0.4,0.3,0.6,0.6,0.7c1.3,0.5,2.6,1,3.9,1.5c0.3,0.1,0.4,0.3,0.4,0.6c0,2.3,0,4.6,0,7c0,0.4-0.1,0.5-0.5,0.6c-1.3,0.5-2.6,1-3.9,1.5c-0.3,0.1-0.5,0.3-0.6,0.7c-0.6,2.2-1.4,4.4-2.6,6.3c-0.2,0.3-0.2,0.6,0,1c0.6,1.3,1.1,2.5,1.7,3.8c0.1,0.3,0.1,0.5-0.1,0.7c-1.7,1.6-3.3,3.3-4.9,4.9c-0.3,0.3-0.5,0.3-0.8,0.1c-1.2-0.6-2.5-1.1-3.7-1.7C43.5,51.4,43.3,51.4,43.1,51.3z M21.1,45.8c7.3,4.2,17.6,2.9,23.5-5c5.7-7.7,4.5-18.4-2.8-24.7c-7.2-6.1-18.1-5.6-24.7,1.1C10.5,24,11,33.4,14,38.3c0.1-0.2,0.3-0.3,0.4-0.5c2.7-2.7,5.3-5.3,8-8c0.5-0.5,0.6-0.5,1.1,0c2.1,2.1,4.2,4.2,6.3,6.3c0.5,0.5,0.5,0.7,0,1.2c-2.7,2.7-5.4,5.4-8.1,8.1C21.6,45.5,21.4,45.6,21.1,45.8z M15.9,41.4c2.3-2.5,4.6-4.8,6.9-7.3c1,1,1.8,1.8,2.6,2.6c0.5,0.5,1.1,0.6,1.5,0.2c0.4-0.4,0.4-1-0.1-1.5c-0.8-0.8-1.7-1.7-2.5-2.5c-1.4-1.4-1.5-1.4-2.8,0c-2.2,2.3-4.4,4.6-6.7,7C15,40.2,15.3,40.7,15.9,41.4z" />
//                               <path d="M31.1,34.6c-0.4-0.5-0.9-0.9-1.3-1.3c0.1-0.1,0.2-0.3,0.4-0.4c1.6-1.6,3.3-3.3,4.9-4.9c0.5-0.5,1-0.6,1.6-0.4c0.6,0.2,1.2,0.3,1.7,0.5c0.7,0.2,1.3,0.3,2-0.1c0.9-0.6,2.2,0,2.6,1c0.5,1,0,2.2-0.9,2.7c-1,0.5-2.2,0.1-2.7-0.9c-0.2-0.4-0.5-0.6-0.9-0.7c-0.7-0.2-1.5-0.6-2.1-0.5c-0.6,0.2-1.1,1-1.7,1.5c-1.2,1.1-2.3,2.3-3.5,3.5C31.2,34.5,31.2,34.6,31.1,34.6z" />
//                               <path d="M26.3,29.8c-0.5-0.5-0.9-0.9-1.4-1.4c1.1-1.1,2.2-2.2,3.4-3.4c0.5-0.5,0.9-1,1.4-1.4c0.4-0.3,0.4-0.6,0.3-1.1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.7-0.4-1.2-1.1-1.6c-1-0.5-1.1-1.9-0.5-2.8c0.6-0.9,1.8-1.1,2.8-0.5c0.9,0.6,1.2,1.8,0.6,2.8c-0.3,0.4-0.3,0.7-0.2,1.1c0.3,0.9,0.5,1.7,0.7,2.6c0.1,0.3,0,0.8-0.2,1C30,26.1,28.2,27.9,26.3,29.8z" />
//                               <path d="M28.9,32.3c-0.5-0.5-1-0.9-1.5-1.4c0.6-0.6,1.2-1.1,1.7-1.7c1.8-1.8,3.5-3.5,5.3-5.3c0.2-0.2,0.3-0.5,0.3-0.8c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2,0.9,2,2.1c0,1.2-1,2-2.2,1.9c-0.4,0-0.6,0.1-0.9,0.3c-2.1,2.1-4.3,4.3-6.4,6.4C29.1,32,29,32.2,28.9,32.3z" />
//                             </g>
//                           </svg>

//                           <h5>Embedded Linux</h5>
//                         </div>
//                         <div class="solution-title">
//                           <svg
//                             width="10%"
//                             height="3vh"
//                             viewBox="0 0 60 60"
//                             fill="#f50057"
//                             stroke="#000000"
//                             stroke-width="0.85"
//                             xmlns="http://www.w3.org/2000/svg"
//                             style={{marginRight:'1rem'}}
//                           >
//                             <g>
//                               <path d="M43.1,51.3c-0.1,0.1-0.3,0.1-0.4,0.2c-2,1.2-4.2,2.1-6.5,2.7c-0.2,0.1-0.5,0.3-0.6,0.6c-0.5,1.3-1,2.6-1.5,4c-0.1,0.3-0.3,0.4-0.6,0.4c-2.3,0-4.6,0-7,0c-0.4,0-0.5-0.1-0.6-0.5c-0.5-1.3-1-2.6-1.5-3.9c-0.1-0.3-0.3-0.5-0.7-0.6c-2.2-0.5-4.3-1.4-6.3-2.6c-0.3-0.2-0.6-0.2-1-0.1c-1.3,0.6-2.5,1.1-3.8,1.7c-0.3,0.1-0.5,0.1-0.7-0.1c-1.6-1.7-3.3-3.3-4.9-4.9c-0.3-0.3-0.3-0.5-0.1-0.8c0.6-1.3,1.2-2.5,1.7-3.8c0.1-0.2,0.1-0.6,0-0.9c-1.1-2-2.1-4.1-2.6-6.4c-0.1-0.4-0.3-0.6-0.6-0.7c-1.3-0.5-2.6-1-3.9-1.5C1,34,0.9,33.8,0.9,33.5c0-2.3,0-4.6,0-7c0-0.4,0.1-0.5,0.5-0.6c1.3-0.5,2.6-1,3.9-1.5c0.2-0.1,0.5-0.3,0.5-0.6c0.6-2.3,1.5-4.4,2.7-6.5c0.1-0.2,0.1-0.6,0-0.8c-0.5-1.3-1.1-2.6-1.7-3.9c-0.1-0.3-0.1-0.5,0.1-0.7c1.7-1.6,3.3-3.3,4.9-4.9c0.3-0.3,0.5-0.3,0.8-0.1c1.3,0.6,2.5,1.2,3.8,1.7c0.2,0.1,0.6,0.1,0.9,0c2-1.2,4.2-2.1,6.4-2.6c0.2-0.1,0.5-0.3,0.6-0.6c0.5-1.3,1-2.6,1.5-4C26,1,26.2,0.9,26.5,0.9c2.3,0,4.6,0,7,0c0.4,0,0.5,0.1,0.6,0.5c0.5,1.3,1,2.6,1.5,3.9c0.1,0.2,0.3,0.5,0.6,0.5c2.3,0.6,4.4,1.5,6.5,2.7c0.2,0.1,0.6,0.1,0.8,0c1.3-0.5,2.6-1.1,3.9-1.7c0.3-0.1,0.5-0.1,0.7,0.1c1.6,1.7,3.3,3.3,4.9,4.9c0.3,0.3,0.3,0.5,0.1,0.8c-0.6,1.3-1.2,2.5-1.7,3.8c-0.1,0.2-0.1,0.6,0,0.9c1.1,2,2.1,4.1,2.6,6.4c0.1,0.4,0.3,0.6,0.6,0.7c1.3,0.5,2.6,1,3.9,1.5c0.3,0.1,0.4,0.3,0.4,0.6c0,2.3,0,4.6,0,7c0,0.4-0.1,0.5-0.5,0.6c-1.3,0.5-2.6,1-3.9,1.5c-0.3,0.1-0.5,0.3-0.6,0.7c-0.6,2.2-1.4,4.4-2.6,6.3c-0.2,0.3-0.2,0.6,0,1c0.6,1.3,1.1,2.5,1.7,3.8c0.1,0.3,0.1,0.5-0.1,0.7c-1.7,1.6-3.3,3.3-4.9,4.9c-0.3,0.3-0.5,0.3-0.8,0.1c-1.2-0.6-2.5-1.1-3.7-1.7C43.5,51.4,43.3,51.4,43.1,51.3z M21.1,45.8c7.3,4.2,17.6,2.9,23.5-5c5.7-7.7,4.5-18.4-2.8-24.7c-7.2-6.1-18.1-5.6-24.7,1.1C10.5,24,11,33.4,14,38.3c0.1-0.2,0.3-0.3,0.4-0.5c2.7-2.7,5.3-5.3,8-8c0.5-0.5,0.6-0.5,1.1,0c2.1,2.1,4.2,4.2,6.3,6.3c0.5,0.5,0.5,0.7,0,1.2c-2.7,2.7-5.4,5.4-8.1,8.1C21.6,45.5,21.4,45.6,21.1,45.8z M15.9,41.4c2.3-2.5,4.6-4.8,6.9-7.3c1,1,1.8,1.8,2.6,2.6c0.5,0.5,1.1,0.6,1.5,0.2c0.4-0.4,0.4-1-0.1-1.5c-0.8-0.8-1.7-1.7-2.5-2.5c-1.4-1.4-1.5-1.4-2.8,0c-2.2,2.3-4.4,4.6-6.7,7C15,40.2,15.3,40.7,15.9,41.4z" />
//                               <path d="M31.1,34.6c-0.4-0.5-0.9-0.9-1.3-1.3c0.1-0.1,0.2-0.3,0.4-0.4c1.6-1.6,3.3-3.3,4.9-4.9c0.5-0.5,1-0.6,1.6-0.4c0.6,0.2,1.2,0.3,1.7,0.5c0.7,0.2,1.3,0.3,2-0.1c0.9-0.6,2.2,0,2.6,1c0.5,1,0,2.2-0.9,2.7c-1,0.5-2.2,0.1-2.7-0.9c-0.2-0.4-0.5-0.6-0.9-0.7c-0.7-0.2-1.5-0.6-2.1-0.5c-0.6,0.2-1.1,1-1.7,1.5c-1.2,1.1-2.3,2.3-3.5,3.5C31.2,34.5,31.2,34.6,31.1,34.6z" />
//                               <path d="M26.3,29.8c-0.5-0.5-0.9-0.9-1.4-1.4c1.1-1.1,2.2-2.2,3.4-3.4c0.5-0.5,0.9-1,1.4-1.4c0.4-0.3,0.4-0.6,0.3-1.1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.7-0.4-1.2-1.1-1.6c-1-0.5-1.1-1.9-0.5-2.8c0.6-0.9,1.8-1.1,2.8-0.5c0.9,0.6,1.2,1.8,0.6,2.8c-0.3,0.4-0.3,0.7-0.2,1.1c0.3,0.9,0.5,1.7,0.7,2.6c0.1,0.3,0,0.8-0.2,1C30,26.1,28.2,27.9,26.3,29.8z" />
//                               <path d="M28.9,32.3c-0.5-0.5-1-0.9-1.5-1.4c0.6-0.6,1.2-1.1,1.7-1.7c1.8-1.8,3.5-3.5,5.3-5.3c0.2-0.2,0.3-0.5,0.3-0.8c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2,0.9,2,2.1c0,1.2-1,2-2.2,1.9c-0.4,0-0.6,0.1-0.9,0.3c-2.1,2.1-4.3,4.3-6.4,6.4C29.1,32,29,32.2,28.9,32.3z" />
//                             </g>
//                           </svg>

//                           <h5>FreeRTOS</h5>
//                         </div>
//                         <div class="solution-title">
//                           <svg
//                             width="10%"
//                             height="3vh"
//                             viewBox="0 0 60 60"
//                             fill="#f50057"
//                             stroke="#000000"
//                             stroke-width="0.85"
//                             xmlns="http://www.w3.org/2000/svg"
//                             style={{marginRight:'1rem'}}
//                           >
//                             <g>
//                               <path d="M43.1,51.3c-0.1,0.1-0.3,0.1-0.4,0.2c-2,1.2-4.2,2.1-6.5,2.7c-0.2,0.1-0.5,0.3-0.6,0.6c-0.5,1.3-1,2.6-1.5,4c-0.1,0.3-0.3,0.4-0.6,0.4c-2.3,0-4.6,0-7,0c-0.4,0-0.5-0.1-0.6-0.5c-0.5-1.3-1-2.6-1.5-3.9c-0.1-0.3-0.3-0.5-0.7-0.6c-2.2-0.5-4.3-1.4-6.3-2.6c-0.3-0.2-0.6-0.2-1-0.1c-1.3,0.6-2.5,1.1-3.8,1.7c-0.3,0.1-0.5,0.1-0.7-0.1c-1.6-1.7-3.3-3.3-4.9-4.9c-0.3-0.3-0.3-0.5-0.1-0.8c0.6-1.3,1.2-2.5,1.7-3.8c0.1-0.2,0.1-0.6,0-0.9c-1.1-2-2.1-4.1-2.6-6.4c-0.1-0.4-0.3-0.6-0.6-0.7c-1.3-0.5-2.6-1-3.9-1.5C1,34,0.9,33.8,0.9,33.5c0-2.3,0-4.6,0-7c0-0.4,0.1-0.5,0.5-0.6c1.3-0.5,2.6-1,3.9-1.5c0.2-0.1,0.5-0.3,0.5-0.6c0.6-2.3,1.5-4.4,2.7-6.5c0.1-0.2,0.1-0.6,0-0.8c-0.5-1.3-1.1-2.6-1.7-3.9c-0.1-0.3-0.1-0.5,0.1-0.7c1.7-1.6,3.3-3.3,4.9-4.9c0.3-0.3,0.5-0.3,0.8-0.1c1.3,0.6,2.5,1.2,3.8,1.7c0.2,0.1,0.6,0.1,0.9,0c2-1.2,4.2-2.1,6.4-2.6c0.2-0.1,0.5-0.3,0.6-0.6c0.5-1.3,1-2.6,1.5-4C26,1,26.2,0.9,26.5,0.9c2.3,0,4.6,0,7,0c0.4,0,0.5,0.1,0.6,0.5c0.5,1.3,1,2.6,1.5,3.9c0.1,0.2,0.3,0.5,0.6,0.5c2.3,0.6,4.4,1.5,6.5,2.7c0.2,0.1,0.6,0.1,0.8,0c1.3-0.5,2.6-1.1,3.9-1.7c0.3-0.1,0.5-0.1,0.7,0.1c1.6,1.7,3.3,3.3,4.9,4.9c0.3,0.3,0.3,0.5,0.1,0.8c-0.6,1.3-1.2,2.5-1.7,3.8c-0.1,0.2-0.1,0.6,0,0.9c1.1,2,2.1,4.1,2.6,6.4c0.1,0.4,0.3,0.6,0.6,0.7c1.3,0.5,2.6,1,3.9,1.5c0.3,0.1,0.4,0.3,0.4,0.6c0,2.3,0,4.6,0,7c0,0.4-0.1,0.5-0.5,0.6c-1.3,0.5-2.6,1-3.9,1.5c-0.3,0.1-0.5,0.3-0.6,0.7c-0.6,2.2-1.4,4.4-2.6,6.3c-0.2,0.3-0.2,0.6,0,1c0.6,1.3,1.1,2.5,1.7,3.8c0.1,0.3,0.1,0.5-0.1,0.7c-1.7,1.6-3.3,3.3-4.9,4.9c-0.3,0.3-0.5,0.3-0.8,0.1c-1.2-0.6-2.5-1.1-3.7-1.7C43.5,51.4,43.3,51.4,43.1,51.3z M21.1,45.8c7.3,4.2,17.6,2.9,23.5-5c5.7-7.7,4.5-18.4-2.8-24.7c-7.2-6.1-18.1-5.6-24.7,1.1C10.5,24,11,33.4,14,38.3c0.1-0.2,0.3-0.3,0.4-0.5c2.7-2.7,5.3-5.3,8-8c0.5-0.5,0.6-0.5,1.1,0c2.1,2.1,4.2,4.2,6.3,6.3c0.5,0.5,0.5,0.7,0,1.2c-2.7,2.7-5.4,5.4-8.1,8.1C21.6,45.5,21.4,45.6,21.1,45.8z M15.9,41.4c2.3-2.5,4.6-4.8,6.9-7.3c1,1,1.8,1.8,2.6,2.6c0.5,0.5,1.1,0.6,1.5,0.2c0.4-0.4,0.4-1-0.1-1.5c-0.8-0.8-1.7-1.7-2.5-2.5c-1.4-1.4-1.5-1.4-2.8,0c-2.2,2.3-4.4,4.6-6.7,7C15,40.2,15.3,40.7,15.9,41.4z" />
//                               <path d="M31.1,34.6c-0.4-0.5-0.9-0.9-1.3-1.3c0.1-0.1,0.2-0.3,0.4-0.4c1.6-1.6,3.3-3.3,4.9-4.9c0.5-0.5,1-0.6,1.6-0.4c0.6,0.2,1.2,0.3,1.7,0.5c0.7,0.2,1.3,0.3,2-0.1c0.9-0.6,2.2,0,2.6,1c0.5,1,0,2.2-0.9,2.7c-1,0.5-2.2,0.1-2.7-0.9c-0.2-0.4-0.5-0.6-0.9-0.7c-0.7-0.2-1.5-0.6-2.1-0.5c-0.6,0.2-1.1,1-1.7,1.5c-1.2,1.1-2.3,2.3-3.5,3.5C31.2,34.5,31.2,34.6,31.1,34.6z" />
//                               <path d="M26.3,29.8c-0.5-0.5-0.9-0.9-1.4-1.4c1.1-1.1,2.2-2.2,3.4-3.4c0.5-0.5,0.9-1,1.4-1.4c0.4-0.3,0.4-0.6,0.3-1.1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.7-0.4-1.2-1.1-1.6c-1-0.5-1.1-1.9-0.5-2.8c0.6-0.9,1.8-1.1,2.8-0.5c0.9,0.6,1.2,1.8,0.6,2.8c-0.3,0.4-0.3,0.7-0.2,1.1c0.3,0.9,0.5,1.7,0.7,2.6c0.1,0.3,0,0.8-0.2,1C30,26.1,28.2,27.9,26.3,29.8z" />
//                               <path d="M28.9,32.3c-0.5-0.5-1-0.9-1.5-1.4c0.6-0.6,1.2-1.1,1.7-1.7c1.8-1.8,3.5-3.5,5.3-5.3c0.2-0.2,0.3-0.5,0.3-0.8c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2,0.9,2,2.1c0,1.2-1,2-2.2,1.9c-0.4,0-0.6,0.1-0.9,0.3c-2.1,2.1-4.3,4.3-6.4,6.4C29.1,32,29,32.2,28.9,32.3z" />
//                             </g>
//                           </svg>

//                           <h5>TI-RTOS</h5>
//                         </div>
//                         <div class="solution-title">
//                           <svg
//                             width="10%"
//                             height="3vh"
//                             viewBox="0 0 60 60"
//                             fill="#f50057"
//                             stroke="#000000"
//                             stroke-width="0.85"
//                             xmlns="http://www.w3.org/2000/svg"
//                             style={{marginRight:'1rem'}}
//                           >
//                             <g>
//                               <path d="M43.1,51.3c-0.1,0.1-0.3,0.1-0.4,0.2c-2,1.2-4.2,2.1-6.5,2.7c-0.2,0.1-0.5,0.3-0.6,0.6c-0.5,1.3-1,2.6-1.5,4c-0.1,0.3-0.3,0.4-0.6,0.4c-2.3,0-4.6,0-7,0c-0.4,0-0.5-0.1-0.6-0.5c-0.5-1.3-1-2.6-1.5-3.9c-0.1-0.3-0.3-0.5-0.7-0.6c-2.2-0.5-4.3-1.4-6.3-2.6c-0.3-0.2-0.6-0.2-1-0.1c-1.3,0.6-2.5,1.1-3.8,1.7c-0.3,0.1-0.5,0.1-0.7-0.1c-1.6-1.7-3.3-3.3-4.9-4.9c-0.3-0.3-0.3-0.5-0.1-0.8c0.6-1.3,1.2-2.5,1.7-3.8c0.1-0.2,0.1-0.6,0-0.9c-1.1-2-2.1-4.1-2.6-6.4c-0.1-0.4-0.3-0.6-0.6-0.7c-1.3-0.5-2.6-1-3.9-1.5C1,34,0.9,33.8,0.9,33.5c0-2.3,0-4.6,0-7c0-0.4,0.1-0.5,0.5-0.6c1.3-0.5,2.6-1,3.9-1.5c0.2-0.1,0.5-0.3,0.5-0.6c0.6-2.3,1.5-4.4,2.7-6.5c0.1-0.2,0.1-0.6,0-0.8c-0.5-1.3-1.1-2.6-1.7-3.9c-0.1-0.3-0.1-0.5,0.1-0.7c1.7-1.6,3.3-3.3,4.9-4.9c0.3-0.3,0.5-0.3,0.8-0.1c1.3,0.6,2.5,1.2,3.8,1.7c0.2,0.1,0.6,0.1,0.9,0c2-1.2,4.2-2.1,6.4-2.6c0.2-0.1,0.5-0.3,0.6-0.6c0.5-1.3,1-2.6,1.5-4C26,1,26.2,0.9,26.5,0.9c2.3,0,4.6,0,7,0c0.4,0,0.5,0.1,0.6,0.5c0.5,1.3,1,2.6,1.5,3.9c0.1,0.2,0.3,0.5,0.6,0.5c2.3,0.6,4.4,1.5,6.5,2.7c0.2,0.1,0.6,0.1,0.8,0c1.3-0.5,2.6-1.1,3.9-1.7c0.3-0.1,0.5-0.1,0.7,0.1c1.6,1.7,3.3,3.3,4.9,4.9c0.3,0.3,0.3,0.5,0.1,0.8c-0.6,1.3-1.2,2.5-1.7,3.8c-0.1,0.2-0.1,0.6,0,0.9c1.1,2,2.1,4.1,2.6,6.4c0.1,0.4,0.3,0.6,0.6,0.7c1.3,0.5,2.6,1,3.9,1.5c0.3,0.1,0.4,0.3,0.4,0.6c0,2.3,0,4.6,0,7c0,0.4-0.1,0.5-0.5,0.6c-1.3,0.5-2.6,1-3.9,1.5c-0.3,0.1-0.5,0.3-0.6,0.7c-0.6,2.2-1.4,4.4-2.6,6.3c-0.2,0.3-0.2,0.6,0,1c0.6,1.3,1.1,2.5,1.7,3.8c0.1,0.3,0.1,0.5-0.1,0.7c-1.7,1.6-3.3,3.3-4.9,4.9c-0.3,0.3-0.5,0.3-0.8,0.1c-1.2-0.6-2.5-1.1-3.7-1.7C43.5,51.4,43.3,51.4,43.1,51.3z M21.1,45.8c7.3,4.2,17.6,2.9,23.5-5c5.7-7.7,4.5-18.4-2.8-24.7c-7.2-6.1-18.1-5.6-24.7,1.1C10.5,24,11,33.4,14,38.3c0.1-0.2,0.3-0.3,0.4-0.5c2.7-2.7,5.3-5.3,8-8c0.5-0.5,0.6-0.5,1.1,0c2.1,2.1,4.2,4.2,6.3,6.3c0.5,0.5,0.5,0.7,0,1.2c-2.7,2.7-5.4,5.4-8.1,8.1C21.6,45.5,21.4,45.6,21.1,45.8z M15.9,41.4c2.3-2.5,4.6-4.8,6.9-7.3c1,1,1.8,1.8,2.6,2.6c0.5,0.5,1.1,0.6,1.5,0.2c0.4-0.4,0.4-1-0.1-1.5c-0.8-0.8-1.7-1.7-2.5-2.5c-1.4-1.4-1.5-1.4-2.8,0c-2.2,2.3-4.4,4.6-6.7,7C15,40.2,15.3,40.7,15.9,41.4z" />
//                               <path d="M31.1,34.6c-0.4-0.5-0.9-0.9-1.3-1.3c0.1-0.1,0.2-0.3,0.4-0.4c1.6-1.6,3.3-3.3,4.9-4.9c0.5-0.5,1-0.6,1.6-0.4c0.6,0.2,1.2,0.3,1.7,0.5c0.7,0.2,1.3,0.3,2-0.1c0.9-0.6,2.2,0,2.6,1c0.5,1,0,2.2-0.9,2.7c-1,0.5-2.2,0.1-2.7-0.9c-0.2-0.4-0.5-0.6-0.9-0.7c-0.7-0.2-1.5-0.6-2.1-0.5c-0.6,0.2-1.1,1-1.7,1.5c-1.2,1.1-2.3,2.3-3.5,3.5C31.2,34.5,31.2,34.6,31.1,34.6z" />
//                               <path d="M26.3,29.8c-0.5-0.5-0.9-0.9-1.4-1.4c1.1-1.1,2.2-2.2,3.4-3.4c0.5-0.5,0.9-1,1.4-1.4c0.4-0.3,0.4-0.6,0.3-1.1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.7-0.4-1.2-1.1-1.6c-1-0.5-1.1-1.9-0.5-2.8c0.6-0.9,1.8-1.1,2.8-0.5c0.9,0.6,1.2,1.8,0.6,2.8c-0.3,0.4-0.3,0.7-0.2,1.1c0.3,0.9,0.5,1.7,0.7,2.6c0.1,0.3,0,0.8-0.2,1C30,26.1,28.2,27.9,26.3,29.8z" />
//                               <path d="M28.9,32.3c-0.5-0.5-1-0.9-1.5-1.4c0.6-0.6,1.2-1.1,1.7-1.7c1.8-1.8,3.5-3.5,5.3-5.3c0.2-0.2,0.3-0.5,0.3-0.8c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2,0.9,2,2.1c0,1.2-1,2-2.2,1.9c-0.4,0-0.6,0.1-0.9,0.3c-2.1,2.1-4.3,4.3-6.4,6.4C29.1,32,29,32.2,28.9,32.3z" />
//                             </g>
//                           </svg>

//                           <h5>Zephyr</h5>
//                         </div>
//                       </div>
//                       }
//                     </div>
//                     <div className="col-lg-3">
//                     <button className="btn btn-primary" style={{width:'100%', height:'auto'}} onClick={onShowClick2}>
//                         {" "}
//                         Platforms
//                         <Icon
//                           icon={icon2}
//                           style={{ marginLeft: "2rem", width: "3rem" }}
//                         />
//                       </button>
//                       {show2 &&
//                       <div class="solutions-for-business-card " style={{width:'100%', height:'auto'}}>
//                         <div class="solution-title">
//                         <svg
//                     width="10%"
//                     height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
//                       <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
//                       <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
//                       <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
//                       <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
//                       <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
//                       <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
//                       <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
//                       <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
//                       <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
//                       <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
//                     </g>
//                   </svg>
//                           <h5>STM32</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                     width="10%"
//                     height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
//                       <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
//                       <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
//                       <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
//                       <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
//                       <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
//                       <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
//                       <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
//                       <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
//                       <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
//                       <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
//                     </g>
//                   </svg>

//                           <h5>iMX6ULL</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                     width="10%"
//                     height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
//                       <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
//                       <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
//                       <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
//                       <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
//                       <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
//                       <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
//                       <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
//                       <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
//                       <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
//                       <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
//                     </g>
//                   </svg>

//                           <h5>nRFx</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                      width="10%"
//                      height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
//                       <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
//                       <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
//                       <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
//                       <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
//                       <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
//                       <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
//                       <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
//                       <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
//                       <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
//                       <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
//                     </g>
//                   </svg>
//                           <h5>Arm</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                     width="10%"
//                     height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
//                       <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
//                       <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
//                       <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
//                       <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
//                       <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
//                       <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
//                       <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
//                       <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
//                       <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
//                       <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
//                     </g>
//                   </svg>
//                           <h5>Intel NUC</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                      width="10%"
//                      height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M33,59.1c0-0.2,0.1-0.5,0.1-0.7c0-6.9,0-13.7,0-20.6c0-0.2,0-0.5,0-0.7c0.2,0,0.4,0,0.5,0c8.4,0,16.9,0,25.3,0c0.1,0,0.2,0,0.3,0c0,6.6,0,13.1,0,19.7c-0.4,1.2-1.2,2-2.4,2.4C48.8,59.1,40.9,59.1,33,59.1z M46,56.1c0-1.3,0-2.6,0-3.9c-2,0-4,0-5.9,0c0,1.3,0,2.6,0,3.9C42.1,56.1,44,56.1,46,56.1z M50.1,52.1c0,1.3,0,2.6,0,4c2,0,4,0,5.9,0c0-1.3,0-2.6,0-4C54.1,52.1,52.1,52.1,50.1,52.1z" />
//                       <path d="M59.1,15c-0.2,0-0.5,0-0.7,0c-9.5,0-19,0-28.6,0c-0.2,0-0.5,0-0.8,0c0-0.3,0-0.5,0-0.7c0-3.2,0-6.5,0-9.7c0-2.1,0.5-2.9,2.5-3.7c8.4,0,16.8,0,25.2,0c1.2,0.4,2,1.2,2.4,2.4C59.1,7.2,59.1,11.1,59.1,15z M34,11.9c2.7,0,5.3,0,8,0c0-2.7,0-5.3,0-7.9c-2.7,0-5.3,0-8,0C34,6.6,34,9.2,34,11.9z M45.1,12.9c3.4,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.7,0-10,0C45.1,11.6,45.1,12.3,45.1,12.9z M45,6.9c0,0.5,0,1,0,1.4c0,0.5,0.1,0.6,0.6,0.6c3,0,5.9,0,8.9,0c0.2,0,0.4,0,0.6,0c0-0.7,0-1.3,0-2C51.7,6.9,48.4,6.9,45,6.9z M45.1,4.9c3.3,0,6.7,0,10,0c0-0.7,0-1.3,0-1.9c-3.3,0-6.6,0-10,0C45.1,3.6,45.1,4.2,45.1,4.9z" />
//                       <path d="M0.9,37c1.3,0,2.6,0,4,0c0,0.2,0,0.5,0,0.7c0,4.1,0,8.1,0,12.2c0,2.5,1.5,4.5,3.9,5.1c0.5,0.1,0.9,0.1,1.4,0.1c3.8,0,7.7,0,11.5,0c3.1,0,5.3-2.1,5.3-5.3c0-4,0-8,0-12c0-0.2,0-0.5,0-0.8c1.3,0,2.6,0,4,0c0,7.3,0,14.7,0,22c-9.2,0-18.5,0-27.7,0c-1.2-0.4-2-1.2-2.4-2.4C0.9,50.2,0.9,43.6,0.9,37z" />
//                       <path d="M59.1,18.5c-0.3,0.5-0.4,1-0.8,1.4c-0.6,0.8-1.6,1-2.6,1c-6.7,0-13.4,0-20.2,0c-1,0-2-0.1-3,0c-2.3,0.1-3.9-1.5-3.5-4c0.2,0,0.5,0,0.7,0c9.5,0,19.1,0,28.6,0c0.2,0,0.5,0,0.7,0C59.1,17.5,59.1,18,59.1,18.5z" />
//                       <path d="M59.1,35c-8.6,0-17.2,0-25.7,0c-0.1,0-0.2,0-0.3,0c0-1.3,0-2.6,0-4c0.2,0,0.4,0,0.7,0c7.2,0,14.4,0,21.6,0c1.9,0,3.2,0.6,3.8,2.4C59.1,33.9,59.1,34.5,59.1,35z" />
//                       <path d="M0.9,33.4c0.4-0.6,0.7-1.3,1.2-1.8c0.7-0.7,1.7-0.7,2.8-0.6c0,1.3,0,2.6,0,4c-1.3,0-2.7,0-4,0C0.9,34.5,0.9,33.9,0.9,33.4z" />
//                       <path d="M7,31c6,0,12,0,18,0c0,6,0,12,0,18c-6,0-12,0-18,0C7,43,7,37.1,7,31z M12.9,42c-0.7,0-1.4,0-2.1,0c-0.5,0-0.8,0.3-0.9,0.8c0,0.8,0,1.6,0,2.4c0,0.4,0.4,0.7,0.8,0.8c0.7,0,1.4,0,2.2,0C12.9,44.7,12.9,43.4,12.9,42z M19,42c0,1.4,0,2.7,0,4c0.7,0,1.4,0,2.1,0c0.5,0,0.9-0.4,0.9-0.9c0-0.7,0-1.4,0-2.1c0-0.6-0.4-0.9-1-1C20.3,42,19.7,42,19,42z M16.9,46c0-1.3,0-2.6,0-3.9c-0.6,0-1.3,0-1.9,0c0,1.3,0,2.6,0,3.9C15.6,46,16.2,46,16.9,46z" />
//                       <path d="M24.7,51.1c-0.4,1.1-1.4,2-2.6,2c-4.1,0-8.2,0-12.3,0c-1.2,0-2.3-0.8-2.6-2C13,51.1,18.9,51.1,24.7,51.1z" />
//                       <path d="M36.2,29c0.3-0.8,0.8-1.3,1.6-1.6c0.6-0.2,1.2-0.4,1.9-0.4c2.9,0,5.9-0.1,8.8,0c0.7,0,1.5,0.3,2.2,0.6c0.6,0.2,0.9,0.7,1.2,1.4C46.6,29,41.5,29,36.2,29z" />
//                       <path d="M48,23c0,0.7,0,1.3,0,2c-2.7,0-5.3,0-8,0c0-0.7,0-1.3,0-2C42.7,23,45.4,23,48,23z" />
//                       <path d="M31,31.1c0,1.3,0,2.6,0,3.9c-1.3,0-2.6,0-4,0c0-1.3,0-2.6,0-3.9C28.3,31.1,29.6,31.1,31,31.1z" />
//                     </g>
//                   </svg>

//                           <h5>any SBC(Embedded Linux)</h5>
//                         </div>
//                       </div>
// }
//                     </div>
//                     <div className="col-lg-3">
//                     <button className="btn btn-primary" style={{width:'100%', height:'auto'}} onClick={onShowClick3}>
//                         {" "}
//                         Connectivity
//                         <Icon
//                           icon={icon3}
//                           style={{ marginLeft: "2rem", width: "3rem" }}
//                         />
//                       </button>
//                       {show3 &&
//                       <div class="solutions-for-business-card " style={{width:'100%', height:'auto'}}>
//                         <div class="solution-title">
//                         <svg
//                      width="10%"
//                      height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
//                       <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
//                     </g>
//                   </svg>
//                           <h5>Bluetooth LE/Audio</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                      width="10%"
//                      height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
//                       <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
//                     </g>
//                   </svg>

//                           <h5>Bluetooth Mesh</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                      width="10%"
//                      height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
//                       <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
//                     </g>
//                   </svg>

//                           <h5>IEEE 802.15.4</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                      width="10%"
//                      height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
//                       <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
//                     </g>
//                   </svg>

//                           <h5>WiFi</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                      width="10%"
//                      height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
//                       <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
//                     </g>
//                   </svg>

//                           <h5>UWB</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                      width="10%"
//                      height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
//                       <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
//                     </g>
//                   </svg>

//                           <h5>Matter</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                      width="10%"
//                      height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
//                       <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
//                     </g>
//                   </svg>

//                           <h5>DALI/DALI2</h5>
//                         </div>
//                       </div>
// }
//                     </div>
//                     <div className="col-lg-3">
//                     <button className="btn btn-primary" style={{width:'100%', height:'auto'}} onClick={onShowClick4}>
//                         {" "}
//                         Programming Languages
//                         <Icon
//                           icon={icon4}
//                           style={{ marginLeft: "2rem", width: "3rem" }}
//                         />
//                       </button>
//                       {show4 &&
//                       <div class="solutions-for-business-card " style={{width:'100%', height:'auto'}}>
//                         <div class="solution-title">
//                         <svg
//                     width="10%"
//                     height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
//                       <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
//                       <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
//                       <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
//                       <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
//                       <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
//                       <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
//                     </g>
//                   </svg>

//                           <h5>Embedded C</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                     width="10%"
//                     height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
//                       <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
//                       <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
//                       <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
//                       <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
//                       <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
//                       <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
//                     </g>
//                   </svg>

//                           <h5>C++</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                     width="10%"
//                     height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
//                       <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
//                       <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
//                       <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
//                       <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
//                       <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
//                       <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
//                     </g>
//                   </svg>

//                           <h5>Python</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                     width="10%"
//                     height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
//                       <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
//                       <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
//                       <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
//                       <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
//                       <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
//                       <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
//                     </g>
//                   </svg>
//                           <h5>Rust</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                     width="10%"
//                     height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
//                       <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
//                       <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
//                       <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
//                       <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
//                       <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
//                       <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
//                     </g>
//                   </svg>

//                           <h5>Go</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                     width="10%"
//                     height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
//                       <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
//                       <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
//                       <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
//                       <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
//                       <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
//                       <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
//                     </g>
//                   </svg>
//                           <h5>Qt</h5>
//                         </div>
//                         <div class="solution-title">
//                         <svg
//                     width="10%"
//                     height="3vh"
//                     viewBox="0 0 60 60"
//                     fill="#f50057"
//                     stroke="#000000"
//                     stroke-width="0.85"
//                     xmlns="http://www.w3.org/2000/svg"
//                     style={{marginRight:'1rem'}}
//                   >
//                     <g>
//                       <path d="M48.4,58.6c-5.6,0-11.2,0-16.8,0c0-7.2,0-14.4,0-21.7c0-1.2-0.7-1.9-1.9-1.9c-0.8,0-1.7,0-2.5,0c-0.8,0-1.5,0-2.3,0c0-0.3,0-0.5,0-0.7c0-3.6,0-7.2,0-10.8c0-0.7-0.3-1.3-0.9-1.7c-1.1-0.6-2.4,0.2-2.4,1.6c0,3.7,0,7.3,0,11c0,0.2,0,0.4,0,0.6c-2.3,0-4.5,0-6.7,0c0-2.3,0-4.7,0-7c0.2-0.1,0.3-0.1,0.4-0.2c2-1,3.2-3.1,2.9-5.1c-0.4-2.4-2.1-4.1-4.4-4.4c-2.1-0.3-4.2,0.9-5.1,2.9c-0.2,0.3-0.3,0.4-0.7,0.4c-2.2,0-4.4,0-6.6,0c0-6.3,0-12.7,0-19c0.3-0.6,0.7-1,1.2-1.2c1.9,0,3.7,0,5.6,0c0,3.8,0,7.7,0,11.5c0,1.4,0.6,2,2,2c3.7,0,7.4,0,11.1,0c0.5,0,0.7,0.1,0.9,0.6c1.2,2.4,4,3.4,6.4,2.4c2.5-1.1,3.7-3.9,2.7-6.4c-0.9-2.5-3.7-3.8-6.2-3c-1.6,0.5-2.6,1.6-3.2,3.1c-3.5,0-6.9,0-10.4,0c0-3.4,0-6.8,0-10.1c7.8,0,15.6,0,23.5,0c0,5,0,10,0,15c0,1.2,0.7,1.8,1.8,1.8c2.1,0,4.2,0,6.4,0c1.1,0,1.8-0.7,1.9-1.7c0-1-0.7-1.7-1.8-1.7c-1.4,0-2.9,0-4.3,0c-0.2,0-0.4,0-0.6,0c0-4.5,0-9,0-13.5c3.4,0,6.7,0,10.1,0c0,2.3,0,4.5,0,6.8c-1.7,0-3.2,0-4.8,0c-1.1,0-1.9,0.7-1.9,1.7c0,1,0.8,1.7,1.9,1.7c1.4,0,2.9,0,4.3,0c0.2,0,0.4,0,0.5,0c0,4.5,0,8.9,0,13.4c-0.1,0-0.2,0-0.2,0c-3.2,0-6.5,0-9.7,0c-0.3,0-0.4-0.2-0.5-0.4c-0.9-1.8-2.3-2.8-4.3-2.9c-2.6-0.1-4.7,1.6-5.2,4.2c-0.4,2.4,1,4.8,3.4,5.6c2.4,0.8,5-0.3,6.1-2.7c0.2-0.3,0.3-0.4,0.7-0.4c3.7,0,7.4,0,11.2,0c1.5,0,2.1-0.6,2.1-2.1c0-8.3,0-16.6,0-24.9c1.9,0,3.7,0,5.6,0c0.6,0.3,1,0.7,1.2,1.2c0,10.8,0,21.6,0,32.4c-6.1,0-12.2,0-18.3,0c-1.2,0-1.9,0.7-1.9,1.9c0,1.5,0,3,0,4.5c0,0.5-0.1,0.7-0.6,0.9c-2.4,1.1-3.4,3.9-2.4,6.4c1,2.5,3.8,3.7,6.3,2.8c2.5-0.9,3.9-3.6,3.1-6.1c-0.5-1.6-1.6-2.7-3.1-3.3c0-1.2,0-2.4,0-3.7c5.6,0,11.2,0,16.8,0c0,6.3,0,12.7,0,19c-0.3,0.6-0.7,1-1.2,1.2c-1.9,0-3.7,0-5.6,0c0-1.5,0-2.9,0-4.4c0-3.5,0-7.1,0-10.6c0-0.8-0.3-1.3-1-1.7c-1.2-0.6-2.4,0.3-2.4,1.6C48.4,48.6,48.4,53.6,48.4,58.6z" />
//                       <path d="M1.4,57.4c0-10.8,0-21.6,0-32.4c2.2,0,4.4,0,6.6,0c0.3,0,0.5,0.1,0.7,0.4c0.5,1.1,1.3,1.9,2.4,2.4c0.3,0.2,0.5,0.3,0.4,0.7c0,2.6,0,5.2,0,7.9c0,1.4,0.6,2,2,2c4.7,0,9.4,0,14.1,0c0.2,0,0.4,0,0.7,0c0,6.8,0,13.5,0,20.2c-1.1,0-2.2,0-3.4,0c0-3.9,0-7.7,0-11.6c0-1.2-0.7-1.9-1.9-1.9c-1.5,0-3,0-4.5,0c-0.5,0-0.7-0.1-0.9-0.6c-1.2-2.4-4-3.4-6.4-2.4c-2.5,1.1-3.7,3.8-2.7,6.4c0.9,2.5,3.6,3.9,6.2,3.1c1.6-0.5,2.7-1.6,3.3-3.1c1.2,0,2.4,0,3.7,0c0,3.4,0,6.8,0,10.1c-6.3,0-12.7,0-19,0C2.1,58.3,1.7,57.9,1.4,57.4z" />
//                       <path d="M13.3,21.6c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7C11.6,22.4,12.4,21.6,13.3,21.6z" />
//                       <path d="M35,26.6c0,0.9-0.7,1.7-1.6,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C34.3,25,35,25.7,35,26.6z" />
//                       <path d="M28.3,13.3c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.6,1.7-1.6C27.6,11.6,28.3,12.4,28.3,13.3z" />
//                       <path d="M41.7,46.8c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.6C41,45.1,41.7,45.9,41.7,46.8z" />
//                       <path d="M13.2,45.1c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C11.6,45.8,12.3,45.1,13.2,45.1z" />
//                     </g>
//                   </svg>

//                           <h5>MISRA C</h5>
//                         </div>
//                       </div>
// }
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
