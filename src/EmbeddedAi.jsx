import React, { useRef } from "react";
import "./EmbeddedAi.css";
import { Player } from "@lottiefiles/react-lottie-player";
import circuit from "./lottieFiles/circuit.json";
import circuit2 from "./lottieFiles/circuit2.json";
import circuit3 from "./lottieFiles/circuit3.json";
import circuit4 from "./lottieFiles/circuit4.json";
import circuit5 from "./lottieFiles/circuit5.json";
import circuit6 from "./lottieFiles/circuit6.json";
import circuit7 from "./lottieFiles/circuit7.json";
import circuit8 from "./lottieFiles/circuit8.json";


const EmbeddedAi = () => {
  const backgroundRef = useRef();

  const JobData = [
    {
      id: 1,
      lottie1: circuit,
      Role: "Customize AI and embedded development",
      desc: "Partner with a team of experienced data engineers to create tailored development of machine learning (ML) models designed to meet the unique requirements of your embedded applications.",
    },
    {
        id: 2,
        lottie1: circuit2,
        Role: "Implement cost-effective embedded strategies",
        desc: "Conduct compatibility assessments to ensure optimal AI model integration with your specific hardware architecture.",
      },
      {
        id: 3,
        lottie1: circuit3,
        Role: "Enable data-driven decision making",
        desc: "Design and implement algorithms for real-time decision-making within your embedded system that minimize latency in AI-driven processes.",
      },
      {
        id: 4,
        lottie1: circuit4,
        Role: "Optimize resource-constrained environments",
        desc: "Overcome power consumption challenges and memory limitations by optimizing inference engines for edge computing to ensure high-performance of AI models on your embedded platforms.",
      },
      {
        id: 5,
        lottie1: circuit5,
        Role: "Design and develop intelligent devices",
        desc: "Seamlessly integrate AI into your embedded systems to enhance the intelligence and decision-making capabilities of your devices.",
      },
      {
        id: 6,
        lottie1: circuit6,
        Role: "Implement vision sensing capabilities",
        desc: "Empower devices with video recognition of patterns, object types and use cases to automate measurements, improve accuracy and speed.",
      },
      {
        id: 7,
        lottie1: circuit7,
        Role: "Maximize embedded systems’ efficiency",
        desc: "Implement hardware acceleration and parallel processing techniques to maximize development.",
      },
      {
        id: 8,
        lottie1: circuit8,
        Role: "Enhance power and resource management",
        desc: "Use power-efficient AI algorithms to extend the life of battery-powered embedded devices and fine-tune resource management by balancing AI performance with system responsiveness.",
      },
  ];

  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        {JobData.map((job) => (
          <div key={job.id} className="col-lg-4 col-md-6 col-sm-12">
             <div className="card mb-5">
             <div className="overlayAI"></div>
                <div className="card-body">
                   
                  <div className="centerJob">
                    <div ref={backgroundRef} className="front-faceJob">
                      <div className="contents front" style={{ width: '100%', height: '100%' }}>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="text-center"  style={{
                                fontSize: "1.5rem",
                                fontWeight: 600,
                                color: "white",
                                top:'10',
                              }}>
                              {job.Role}
                            </p>
                          </div>
                        </div>
                         <Player
                              autoplay
                              loop
                              src={job.lottie1} 
                              
                              style={{
                                top:"14rem",
                                marginTop:'2rem',
                                width: "100%",
                                height: "9vh",
                                objectFit: "cover",
                                
                              }}
                            />
                      </div>
                    </div>
                    <div className="back-face">
                      <div className="contents backJob">
                        <p className="fs-6 text-center">{job.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmbeddedAi;
