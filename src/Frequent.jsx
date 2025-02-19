import React, { useState } from "react";
import "./Tabs.css";
import "./Frequent.css";
import { useInView } from "react-intersection-observer";


import { Icon } from "@iconify/react";

const Frequent = () => {
    
  const [ref, inView] = useInView();
  


  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);

  const [icon1, setIcon1] = useState("noto-v1:right-arrow");
  const [icon2, setIcon2] = useState("noto-v1:right-arrow");
  const [icon3, setIcon3] = useState("noto-v1:right-arrow");
  const [icon4, setIcon4] = useState("noto-v1:right-arrow");
  const [icon5, setIcon5] = useState("noto-v1:right-arrow");
  const [icon6, setIcon6] = useState("noto-v1:right-arrow");
  const [icon7, setIcon7] = useState("noto-v1:right-arrow");
  const [icon8, setIcon8] = useState("noto-v1:right-arrow");
  const [icon9, setIcon9] = useState("noto-v1:right-arrow");
  const [icon10, setIcon10] = useState("noto-v1:right-arrow");





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

  const onShowClick5 = () => {
    setShow5(!show5);
    const newIcon = show5 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
    setIcon5(newIcon);
  };
  const onShowClick6 = () => {
    setShow6(!show6);
    const newIcon = show6 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
    setIcon6(newIcon);
  };

  const onShowClick7 = () => {
    setShow7(!show7);
    const newIcon = show7 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
    setIcon7(newIcon);
  };

  const onShowClick8 = () => {
    setShow8(!show8);
    const newIcon = show8 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
    setIcon8(newIcon);
  };

  const onShowClick9 = () => {
    setShow9(!show9);
    const newIcon = show9 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
    setIcon9(newIcon);
  };

  const onShowClick10 = () => {
    setShow10(!show10);
    const newIcon = show10 ? "noto-v1:down-arrow" : "noto-v1:right-arrow";
    setIcon10(newIcon);
  };


  return (
    <section
        class="wrapper text-white mt-5"
        style={{ backgroundColor: "#e5af2b" }}
      >
        <div class="container py-10">
          <h3 class="text-white text-center mb-5 textDecor">Embedded Software FAQs</h3>
        
          <div className="row gx-lg-8 gx-xl-12 gy-10">
          <div className="col-lg-6">
            <a
              className="btn btn-light line-through d-flex align-items-center"
              style={{ width: "100%", height: "auto" }}
              onClick={onShowClick1}
            >
              <Icon
                icon={icon1}
                style={{ marginRight: "1rem", width: "1.5rem", height:'4vh', width:'4%' }}/>
               <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'0.9em'}}>
              What is embedded software?
              </p>
            </a>

            {show1 && (
              <div
                class="solutions-for-business-card "
                style={{ width: "100%", height: "auto" }}
              >
                <div class="solution-title">
                  <h5 style={{color:'black'}}>
                  Embedded software refers to specialized computer programs that are embedded within hardware devices to control their functions and behavior. These programs are tailored to the specific requirements of the hardware they run on and are typically optimized for performance, reliability, and resource efficiency.
                  </h5>
                </div>
              </div>
            )}
          </div>
        


        
          <div className="col-lg-6">
            <a
              className="btn btn-light line-through d-flex align-items-center"
              style={{ width: "100%", height: "auto" }}
              onClick={onShowClick2}
            >
              <Icon
                icon={icon2}
                style={{ marginRight: "1rem", width: "1.5rem", height:'4vh', width:'4%' }}/>
               <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'0.9em'}}>
                What industries rely on embedded software services?
              </p>
            </a>

            {show2 && (
              <div
                class="solutions-for-business-card "
                style={{ width: "100%", height: "auto" }}
              >
                <div class="solution-title">
                  <h5 style={{color:'black'}}>
                  Embedded software is pervasive across various industries, including automotive, aerospace, consumer electronics, healthcare, industrial automation, telecommunications, and IoT. It is used in a wide range of applications, from automotive engine control systems to smart home devices and medical equipment.                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
        



        <div className="row gx-lg-8 gx-xl-12 gy-10">
          <div className="col-lg-6">
            <a
              className="btn btn-light line-through d-flex align-items-center"
              style={{ width: "100%", height: "auto" }}
              onClick={onShowClick3}
            >
              <Icon
                icon={icon3}
                style={{ marginRight: "1rem", width: "1.5rem", height:'4vh', width:'4%' }}/>
                <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'0.9em'}}>
                What is the difference between firmware and embedded software?
              </p>
            </a>

            {show3 && (
              <div
                class="solutions-for-business-card "
                style={{ width: "100%", height: "auto" }}
              >
                <div class="solution-title">
                  <h5 style={{color:'black'}}>
                  Firmware refers to software that is closely tied to the hardware of a device and is typically stored in non-volatile memory (e.g., ROM, flash memory). Embedded software, on the other hand, is a broader term that encompasses all software running on embedded systems, including firmware as well as higher-level application software.
                  </h5>
                </div>
              </div>
            )}
          </div>
        

       
          <div className="col-lg-6">
            <a
              className="btn btn-light line-through d-flex align-items-center"
              style={{ width: "100%", height: "auto" }}
              onClick={onShowClick4}
            >
              <Icon
                icon={icon4}
                style={{ marginRight: "1rem", width: "1.5rem", height:'4vh', width:'4%' }}/>
               <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'0.9em'}}>How is embedded software development?</p>
            </a>

            {show4 && (
              <div
                class="solutions-for-business-card "
                style={{ width: "100%", height: "auto" }}
              >
                <div class="solution-title">
                  <h5 style={{color:'black'}}>
                    Embedded software development means creating a machine code
                    using specific programming languages such as C/C++ and
                    Python for some modules. Real-time operating systems often
                    are needed when talking about embedded software development.
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-10">
          <div className="col-lg-6">
            <a
              className="btn btn-light line-through d-flex align-items-center"
              style={{ width: "100%", height: "auto" }}
              onClick={onShowClick5}
            >
              <Icon
                icon={icon5}
                style={{ marginRight: "1rem", width: "1.5rem", height:'4vh', width:'4%' }}/>
                <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'0.9em'}}>
              How can companies benefit from outsourcing embedded software development?
              </p>
            </a>

            {show5 && (
              <div
                class="solutions-for-business-card "
                style={{ width: "100%", height: "auto" }}
              >
                <div class="solution-title">
                  <h5 style={{color:'black'}}>
                  Outsourcing embedded software development can offer companies access to specialized expertise, cost savings, faster time-to-market, scalability, and flexibility. It allows companies to focus on their core competencies while leveraging the skills and resources of external partners.</h5>
                </div>
              </div>
            )}
          </div>
        

          <div className="col-lg-6">
            <a
              className="btn btn-light line-through d-flex align-items-center"
              style={{ width: "100%", height: "auto" }}
              onClick={onShowClick6}
            >
              <Icon
                icon={icon6}
                style={{ marginRight: "1rem", width: "1.5rem", height:'4vh', width:'4%' }}/>
               <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'0.9em'}}>
              What are some emerging trends in embedded software development?
              </p>
            </a>

            {show6 && (
              <div
                class="solutions-for-business-card "
                style={{ width: "100%", height: "auto" }}
              >
                <div class="solution-title">
                  <h5 style={{color:'black'}}>
                  Some emerging trends in embedded software development include the adoption of AI and machine learning for edge computing applications, the proliferation of IoT devices and connected ecosystems, the use of open-source software and hardware platforms, the integration of security by design principles, and the rise of DevOps practices for embedded systems development and deployment.</h5>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-10">
          <div className="col-lg-6">
            <a
              className="btn btn-light line-through d-flex align-items-center"
              style={{ width: "100%", height: "auto" }}
              onClick={onShowClick7}
            >
              <Icon
                icon={icon7}
                style={{ marginRight: "1rem", width: "1rem", height:'4vh', width:'4%' }}/>
                <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'0.9em'}}>
              How can company benefit from outsourcing embedded software development?
              </p>
            </a>

            {show7 && (
              <div
                class="solutions-for-business-card "
                style={{ width: "100%", height: "auto" }}
              >
                <div class="solution-title">
                  <h5 style={{color:'black'}}>
                  Outsourcing embedded software development can offer companies access to specialized expertise, cost savings, faster time-to-market, scalability, and flexibility. It allows companies to focus on their core competencies while leveraging the skills and resources of external partners.</h5>
                </div>
              </div>
            )}
          </div>
        


          <div className="col-lg-6">
            <a
              className="btn btn-light line-through d-flex align-items-center"
              style={{ width: "100%", height: "auto" }}
              onClick={onShowClick8}
            >
              <Icon
                icon={icon8}
                style={{ marginRight: "1rem", width: "1.5rem", height:'4vh', width:'4%' }}/>
                <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'0.9em'}}>What are the main characteristics of embedded systems?</p>
            </a>

            {show8 && (
              <div
                class="solutions-for-business-card "
                style={{ width: "100%", height: "auto" }}
              >
                <ul
           
            className="icon-list bullet-bg bullet-soft-primary mb-0 two-columns text-black"
          >
            There are at least five characteristics of an embedded system:
            <li>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#1268b3"/><path fill="black" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"/></svg>
              </span>
              <span>
              Embedded system requires real-time performance.
              </span>
            </li>
            <li>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#1268b3"/><path fill="black" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"/></svg>
              </span>
              <span>
              It should have high reliability and security.
              </span>
            </li>
            <li>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#1268b3"/><path fill="black" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"/></svg>
              </span>
              <span>
              It can be developed as a real-time operating system.
              </span>
            </li>
            <li>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#1268b3"/><path fill="black" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"/></svg>
              </span>
              <span>
              It is often based on an internal memory operation.
              </span>
            </li>
            <li>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#1268b3"/><path fill="black" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"/></svg>
              </span>
              <span>
              It is designed for one or more specific software development tasks.
              </span>
            </li>
          </ul>
              </div>
            )}
          </div>
        </div>


        <div className="row gx-lg-8 gx-xl-12 gy-10">
          <div className="col-lg-6">
            <a
              className="btn btn-light line-through d-flex align-items-center"
              style={{ width: "100%", height: "auto" }}
              onClick={onShowClick9}
            >
              <Icon
                icon={icon9}
                style={{ marginRight: "1rem", width: "1.5rem", height:'4vh', width:'4%' }}/>
               <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'0.9em'}}>How many types of embedded system software are there?</p>
            </a>

            {show9 && (
              <div
                class="solutions-for-business-card "
                style={{ width: "100%", height: "auto" }}
              >
                <ul
           
            className="icon-list bullet-bg bullet-soft-primary mb-0 two-columns text-black"
          >
           Embedded systems are divided into three categories based on their size:
            <li>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#1268b3"/><path fill="black" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"/></svg>
              </span>
              <span>
              Small-scale embedded systems
              </span>
            </li>
            <li>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#1268b3"/><path fill="black" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"/></svg>
              </span>
              <span>
              Medium-scale embedded systems
              </span>
            </li>
            <li>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#1268b3"/><path fill="black" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"/></svg>
              </span>
              <span>
              Sophisticated (Enterprise-level) embedded systems
              </span>
            </li>
          </ul>
          <ul
           
           className="icon-list bullet-bg bullet-soft-primary mb-0 two-columns text-black"
         >
          Also, an embedded system can be differentiated based on the types:
           <li>
             <span>
             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#1268b3"/><path fill="black" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"/></svg>
             </span>
             <span>
             RTOS
             </span>
           </li>
           <li>
             <span>
             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#1268b3"/><path fill="black" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"/></svg>
             </span>
             <span>
             Bare-metal
             </span>
           </li>
           
         </ul>


              </div>
            )}
          </div>
        
        
          <div className="col-lg-6">
            <a
              className="btn btn-light line-through d-flex align-items-center"
              style={{ width: "100%", height: "auto" }}
              onClick={onShowClick10}
            >
              <Icon
                icon={icon10}
                style={{ marginRight: "1rem", width: "1.5rem", height:'4vh', width:'4%' }}/>         
               <p style={{ color:'#1268b3',fontWeight:'bold', fontSize:'0.9em'}}>
              What are the skills required for each embedded engineer?
              </p>
            </a>

            {show10 && (
              <div
                class="solutions-for-business-card "
                style={{ width: "100%", height: "auto" }}
              >
                <div class="solution-title">
                  <h5 style={{color:'black'}}>
                  An embedded software engineer needs hard technical skills, hardware and software expertise, and a programming language like C or C++. Moreover, the engineer must have good soft skills for excellent communication and a proactive position crucial in problem-solving software situations.
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Frequent;
