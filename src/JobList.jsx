import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./JobList.css";
import { Player } from "@lottiefiles/react-lottie-player";
import circuit from "./lottieFiles/circuit.json";
import circuit2 from "./lottieFiles/circuit2.json";
import circuit3 from "./lottieFiles/circuit3.json";
import circuit4 from "./lottieFiles/circuit4.json";
import circuit5 from "./lottieFiles/circuit5.json";
import circuit6 from "./lottieFiles/circuit6.json";
import circuit7 from "./lottieFiles/circuit7.json";
import circuit8 from "./lottieFiles/circuit8.json";
import circuit9 from "./lottieFiles/circuit9.json";

import Employee from "./lottieFiles/EmulLottie1.json";
import Reward from "./lottieFiles/EmulLottie2.json";
import Listen from "./lottieFiles/EmulLottie3.json";
import CustomerReview from "./lottieFiles/EmulLottie4.json";
import Trust from "./lottieFiles/EmulLottie5.json";
import six from "./lottieFiles/EmulLottie6.json";

const JobList = () => {
  const backgroundRef = useRef();

  const JobData = [
    {
      id: 1,
      lottie1: circuit,
      Role: "Design Verification",
      location: "Bengaluru, India",
      Exp: "4 to 20 Years",
      Type: "Full Time",
      desc: "Ensures that hardware or software designs meet specifications and functional requirements through rigorous testing and analysis.",
      link: "/OPENER",
      componentIdentifier: "DesignVerification",
      Text: "DESIGN VERIFICATION",
      JD: [
        "Dedicated/hands-on ASIC/IP/SOC DV experience",
        "Experience working on block level UVM test benches - writing drivers, scoreboards, sequences, constraints, and functional coverage models",
        "Strong hands-on with any one of High Speed Protocols like (PCIe / DDR / Ethernet / USB)",
        "Strong interest in understanding the architectural and micro-architectural details of a design",
        "Strong interest in debugging complex issues",
        "Drive and adopt new verification methodologies to improve effectiveness and efficiency",
        "Experience working on the Memory Subsystem is a plus",
      ],
      QUAL: [
        {
          sentence1:
            "Build UVM test benches and own the verification of an IP from start to finish. Create coverage driven verification plans from specifications. Execute, review and refine to achieve coverage targets",
          lottie1: Employee,
          sentence2:
            "Set up regressions and triage failures. Debug and drive any design and verification bugs found, to closure",
          lottie2: Reward,
        },

        {
          sentence1:
            "Work with the team to improve DV methodology and infrastructure",
          lottie1: Listen,

          sentence2:
            "Proven experience in scripting languages such as Python / Perl / TCL",
          lottie2: CustomerReview,
        },
        {
          sentence1:
            "BE degree with 6+ years of experience or MSEE with 4+ years of experience, preferably with high-speed protocols or other high performance IP designs.",
          lottie1: Trust,
          sentence2: "Ability to work independently in team environment ",
          lottie2: six,
        },
      ],
    },
    {
      id: 2,
      lottie1: circuit2,
      Role: "Analog Design",
      location: "Bengaluru, India",
      Exp: "4 to 20 Years",
      Type: "Full Time",
      desc: "Responsible for creating circuits that process continuous signals, such as voltage or current, to perform various functions like amplification, filtering, or modulation.",
      link: "/OPENER",
      componentIdentifier: "AnalogDesign",
      Text: "ANALOG DESIGN",
      JD: [
        "Work under the guidance of senior team members and deliver analog blocks on-time with state-of-the-art architecture to meet the overall product requirements",
        "Work closely with team in designing and delivering analog blocks ",
        "Design analog modules from scratch ",
        "Handling assigned tasks independently ",
        "Pro-actively get design issues/problems resolved ",
        "Contribute to or propose innovative design solutions and design methodologies",
        "Work closely with the layout engineers on providing requirements and guidelines",
      ],
      QUAL: [
        {
          sentence1:
            "4+ years of experience in Analog and mixed signal design ",
          lottie1: Listen,

          sentence2:
            "Hands-on experience in designing analog blocks for Power management (voltage and current references, voltage detectors, linear and/or switching regulators) ",
          lottie2: CustomerReview,
        },
        {
          sentence1:
            "Hands-on experience in designing analog blocks for Clock management (oscillators, PLL, DLL) ",
          lottie1: Listen,
          sentence2:
            "Hands-on experience in designing analog blocks for Signal processing (ADC, DAC)",
          lottie2: CustomerReview,
        },
        {
          sentence1:
            "Should have solid understanding of CMOS and FinFET process technologies and associated issues in deep sub-micron technologies i.e. 28nm, 16nm and smaller.",
          lottie1: Listen,

          sentence2:
            "Should have hands-on experience in simulation of analog blocks, mixed-mode simulations, statistical simulations etc. ",
          lottie2: CustomerReview,
        },
        {
          sentence1:
            "Knowledge in scripting (PERL, TCL, etc.) and modelling (Matlab, VerilogA, etc.) tools will be an advantage ",
          lottie1: Listen,

          sentence2: "Should have good insight into layouts ",
          lottie2: CustomerReview,
        },
        {
          sentence1:
            "Silicon debug/characterization experience is an advantage.",
          lottie1: Listen,

          sentence2:
            "Should possess good documentation, communication and presentation skills ",
          lottie2: CustomerReview,
        },
        {
          sentence1:
            "Work with the team to improve DV methodology and infrastructure",
          lottie1: Listen,

          sentence2: "Master Degree in Electrical/Electronics Engineering ",
          lottie2: CustomerReview,
        },
      ],
    },
    {
      id: 3,
      lottie1: circuit3,
      Role: "Layout Design",
      location: "Bengaluru, India",
      Exp: "4 to 20 Years",
      Type: "Full Time",
      desc: "Responsible for translating electronic circuit designs into physical layouts on semiconductor chips, ensuring optimal performance, manufacturability, and reliability.",
      link: "/OPENER",
      componentIdentifier: "LayoutDesign",
      Text: "LAYOUT DESIGN",
      JD: [
        "Have 3+ years of experience in Analog Mixed Signal / RF layout-design.",
        "Preferred experience in FINFET technology nodes (16nm & below)",
        "Preferred experience in team & project management.",
        "Good Understanding of CMOS Fundamentals, IC-Fabrication & Circuit-basics",
        "Good Understanding of IC Layout design flow & reliability issues",
        "Good exposure to EDA tools like Virtuoso L/XL, Assura, PVS, Calibre.",
      
      ],
      QUAL: [
        {
          sentence1:
            "Experience implementing analog layouts to achieve tight matching, low noise, and low power consumption. Layouts may include analog blocks, resistors, capacitors, ESD structures, etc.",
          lottie1: Trust,
          sentence2: "High level of proficiency in custom and standard cell based floor-planning and hierarchical layout assembly.",
          lottie2: six,
        },
        {
          sentence1:
            "Must understand techniques for managing IR drop, RC delay, electromigration, self heating and coupling capacitance.",
          lottie1: Trust,
          sentence2: "Must recognize failure prone circuit and layout structures, have experience with analog and DFM best practices, and proactively work with circuit designer to identify the best approach to solving problems.",
          lottie2: six,
        },
        {
          sentence1:
            "High level proficiency in interpretation of CALIBRE DRC, ERC, LVS, etc. reports.",
          lottie1: Trust,
          sentence2: "Knowledge of MENTOR GRAPHICS or CADENCE layout tools.",
          lottie2: six,
        },
        {
          sentence1:
            "Scripting skills in PERL or SKILL are considered a plus, but not required.",
          lottie1: Trust,
          sentence2: "Excellent communication skills and able to work with cross-functionalteams.",
          lottie2: six,
        },
      ],
    },
    {
      id: 4,
      lottie1: circuit4,
      Role: "Physical Design Engi.",
      location: "Bengaluru, India",
      Exp: "4 to 20 Years",
      Type: "Full Time",
      desc: "Focuses on implementing and optimizing the layout of integrated circuits, including floor planning, placement, routing, and timing closure, to meet performance, power, and area targets.",
      link: "/OPENER",
      componentIdentifier: "PhysicalDesign",
      Text: "PHYSICAL DESIGN",
      JD: [
        "Will be responsible for all aspects of Physical Design for Fullchip/Blocks covering Floorplanning, Placement, Budgeting, Clock Tree planning & analysis, Scan re-ordering, Clock tree synthesis, Placement optimizations, Routing, Timing and SI analysis/closure, ECO tasks (both timing and functional), EM/IR, DRC, LVS, ERC analysis & fixes, Low Power solution development & implementation ",
        "Place and route at chip level, or block level, including placement, clock tree synthesis, routing, signal integrity for designs with complex clock tree implementations ",
        "Defining and debugging Timing Constraints and performing STA using industry standard STA engines and using a thorough understanding of timing correlation, to achieve timing closure ",
        "Responsible for Front-End chip implementation including design integration, synthesis and execution flows that starts with RTL coding and ends with the delivery of a netlist package ready for physical design. ",
        "Prefer sound knowledge in EDA tools such as DC, ICC2, Cadence Innovus, STAR-RC, PT-SI, Verplex, Quartz, Calibre, internal tools & flow ",
        "Perform custom RF Physical Design, including block-level and top level layouts, floorplanning, package routing ",
      ],

      QUAL: [
        {
          sentence1:
            "Expertise and in-depth knowledge of industry standard EDA tools required ",
          lottie1: Employee,
          sentence2:
            "Proficiency in scripting languages, such as, Perl, Tcl, Make, required",
          lottie2: Reward,
        },

        {
          sentence1:
            "5+ years of hands-on experience in physical design on ASIC tapeouts ",
          lottie1: Listen,

          sentence2:
            "Experienced with ASIC design flow, hierarchical physical design strategies, methodologies",
          lottie2: CustomerReview,
        },
        {
          sentence1: "Understanding of deep sub-micron technology issues ",
          lottie1: Trust,

          sentence2:
            "BE degree with 6+ years of experience or MSEE with 4+ years of experience, preferably with high-speed multi-gigabit SerDes PHY designs or other high performance IP designs.",
          lottie2: six,
        },
      ],
    },
    {
      id: 5,
      lottie1: circuit5,
      Role: "DFT Engineer",
      location: "Bengaluru, India",
      Exp: "4 to 20 Years",
      Type: "Full Time",
      desc: "Designs and implements test structures within integrated circuits to facilitate efficient and effective testing during manufacturing, ensuring high quality and reliability of the final product.",
      link: "/OPENER",
      componentIdentifier: "dft",
      Text: "DFT",
      JD: [
        "Expertise in DfT methodology like scan test, boundary-scan and test access mechanisms ",
        "Scan Insertion, ATPG, scan verification and pattern generation ",
        "Memory BIST insertion, validation and pattern generation ",
        "SoC DFT architecture specification including test mixing and DfT RTL coding ",
        "Experience with the DFT integration of IP",
        "Analysis of Functional Design for Testability, including product functionality and access through external connections, BIST and Board Level Diagnostics, control of significant circuits, and isolation of functional blocks for testing",
        "Create and maintain DFT timing constraints ",
        "Experience in gate level simulation",
        "Knowledge in RF/mixed-signal circuit design and test ",
      ],
      QUAL: [
        {
          sentence1:
            "BE degree with 6+ years of experience or MSEE with 4+ years of experience.",
          lottie1: Trust,
          sentence2: "Ability to work independently in team environment ",
          lottie2: six,
        },
      ],
    },
    {
      id: 6,
      lottie1: circuit6,
      Role: "RTL Engineer",
      location: "Bengaluru, India",
      Exp: "4 to 20 Years",
      Type: "Full Time",
      desc: "Responsible for designing and implementing digital circuits at the level of logical operations and data transfers between registers, typically using hardware description languages like Verilog or VHDL.",
      link: "/OPENER",
      componentIdentifier: "rtl",
      Text: "RTL",
      JD: [
        "Develop RTL for logic blocks and participate in Front End activities like Synthesis, Timing Closure & Asic implementation ",
        "Synthesis, Equivalence Checking, Clock-Domain Crossing (CDC) Analysis, Area/Power optimizations, Linting & Static Timing Analysis (STA) ",
        "Write design specifications for different functional blocks on a chip, Create micro-architecture diagrams of functional blocks, Design functional blocks using System Verilog RTL code, conduct Synthesis and place and route to meet timing / area goals ",
        "Responsible for logic implementation of complex design block(s) using RTL coding techniques (Verilog) ",
        "Code Verilog RTL for high performance designs with supervision from manager and input from peers and architects in the engineering team ",
        "Must handle Verilog RTL logic design and debug",
        "Ability to work independently in team environment ",
      ],
      QUAL: [
        {
          sentence1:
            "Minimum 4+ Years of experience in Computer architecture, micro-architecture, VLSI design and other design & validation tool knowledge. ",
          lottie1: Employee,
          sentence2:
            "Must have completed an BE OR B.Tech OR MS degree in Electronics Engineering or related/equivalent discipline. ",
          lottie2: Reward,
        },
      ],
    },
    {
      id: 7,
      lottie1: circuit7,
      Role: "FPGA Engineer",
      location: "Bengaluru, India",
      Exp: "4 to 20 Years",
      Type: "Full Time",
      desc: "Responsible for Designing and implementing digital circuits using FPGA devices, which can be reconfigured after manufacturing to perform various tasks, such as signal processing, encryption, or control functions.",
      link: "/OPENER",
      componentIdentifier: "fpga",
      Text: "FPGA",
      JD: [
        "Concept, develop, validate and integrate high-speed digital circuits on FPGAs using VHDL.",
        "Understand the high level description of  algorithms and realize them in VHDL.",
        "Write test benches that can be used by other colleagues to test your own modules",
        "Design and implement interface circuits that communicate with different HW and SW components in an Embedded System. ",
        "Debug existing VHDL codes and run VHDL and system simulations",
        "Perform measurements using high speed Oscilloscope and logic analyzer4",
      ],
      QUAL: [
        {
          sentence1: "Experience in VHDL / Verilog programming ",
          lottie1: Trust,
          sentence2:
            "Knowledge of modern embedded systems / available System on chips, including all on-chip communication protocols and Peripherals (AXI, I2C, SPI, UART, Ethernet, etc. )",
          lottie2: six,
        },
        {
          sentence1:
            "Familiar with measurements and debugging tools (Oscilloscope, logic analyzer, ..etc.) ",
          lottie1: Trust,
          sentence2:
            "Knowledge of Xilinx development tools ( Vivado, SDK, HLS) is a plus",
          lottie2: six,
        },
        {
          sentence1: "Knowledge of Matlab/Simulink is a plus.",
          lottie1: Trust,
          sentence2:
            "Teamwork and interpersonal skills are keys in your qualification.",
          lottie2: six,
        },
        {
          sentence1: "Very good English in reading, writing and speaking",
          lottie1: Trust,
          sentence2:
            "BE degree with 6+ years of experience or MSEE with 4+ years of experience.",
          lottie2: six,
        },
      ],
    },
    {
      id: 8,
      lottie1: circuit8,
      Role: "STA Engineer",
      location: "Bengaluru, India",
      Exp: "4 to 20 Years",
      Type: "Full Time",
      desc: "Conducting timing analysis to ensure that digital circuit designs meet timing constraints and performance specifications, typically using specialized software tools to verify timing paths and optimize design timing.",
      link: "/OPENER",
      componentIdentifier: "sta",
      Text: "STA",
      JD: [
        "STA setup, convergence, reviews and signoff for multi-mode, multi-voltage domain designs.",
        "Perform static timing analysis (STA) and timing optimization, generate and verifies timing constraints, performs SI/Noise analysis, and fixes timing & noise violations at full chip/block level for SoCs.",
        "Timing analysis, validation and debug across multiple PVT conditions using PT/Tempus.",
        "Run Primetime and/or Tempus for STA flow optimization and Spice to STA correlation. ",
        "Evaluate multiple timing methodologies/tools on different designs and technology nodes. ",
        "Work on automation scripts within STA/PD tools for methodology development. ",
        "Work closely with the clocking team and other backend full chip designers for clocking balance, timing fixes, power delivery, and partitioning. ",
        "Good Technical writing and Communication skills, should be willing to work in cross-collaborative environment ",
        "Experience in design automation using TCL/Perl/Python.",
        "Experience with digital flow design implementation RTL to GDS : ICC, Innovous , Prime Time/Tempus.",
      ],
      QUAL: [
        {
          sentence1:
            "Strong expertise in STA timing analysis basics, AOCV/POCV concepts, CTS, defining and managing timing constraints, Latch transparency handling, 0-cycle, multi-cycle path handling ",
          lottie1: Trust,
          sentence2: "Hands-on experience with STA tools - Prime-time, Tempus ",
          lottie2: six,
        },
        {
          sentence1:
            "Have experience in driving timing convergence at Chip-level and Hard-Macro level ",
          lottie1: Trust,
          sentence2:
            "In-depth knowledge cross-talk noise, Signal Integrity, Layout Parasitic Extraction, feed through handling.",
          lottie2: six,
        },
        {
          sentence1:
            "Knowledge of ASIC back-end design flows and methods and tools (ICC2, Innovus) ",
          lottie1: Trust,
          sentence2: "Proficient is scripting languages – TCL, Perl, Awk",
          lottie2: six,
        },
        {
          sentence1: "Basic knowledge of device physics",
          lottie1: Trust,
          sentence2:
            " B.Tech or MTech/MS in Electrical/Electronics/Microelectronics/VLSI.",
          lottie2: six,
        },
      ],
    },
    {
      id: 9,
      lottie1: circuit,
      Role: "Design Verification",
      location: "Kuala Lumpur, Malaysia",
      Exp: "4 to 15 Years",
      Type: "Full Time",
      desc: "Ensures that hardware or software designs meet specifications and functional requirements through rigorous testing and analysis.",
      link: "/OPENER",
      componentIdentifier: "DesignVerification",
      Text: "DESIGN VERIFICATION",
      JD: [
        "Dedicated/hands-on ASIC/IP/SOC DV experience",
        "Experience working on block level UVM test benches - writing drivers, scoreboards, sequences, constraints, and functional coverage models",
        "Strong hands-on with any one of High Speed Protocols like (PCIe / DDR / Ethernet / USB)",
        "Strong interest in understanding the architectural and micro-architectural details of a design",
        "Strong interest in debugging complex issues",
        "Drive and adopt new verification methodologies to improve effectiveness and efficiency",
        "Experience working on the Memory Subsystem is a plus",
      ],
      QUAL: [
        {
          sentence1:
            "Build UVM test benches and own the verification of an IP from start to finish. Create coverage driven verification plans from specifications. Execute, review and refine to achieve coverage targets",
          lottie1: Employee,
          sentence2:
            "Set up regressions and triage failures. Debug and drive any design and verification bugs found, to closure",
          lottie2: Reward,
        },

        {
          sentence1:
            "Work with the team to improve DV methodology and infrastructure",
          lottie1: Listen,

          sentence2:
            "Proven experience in scripting languages such as Python / Perl / TCL",
          lottie2: CustomerReview,
        },
        {
          sentence1:
            "BE degree with 6+ years of experience or MSEE with 4+ years of experience, preferably with high-speed protocols or other high performance IP designs.",
          lottie1: Trust,
          sentence2: "Ability to work independently in team environment ",
          lottie2: six,
        },
      ],
    },
    // {
    //   id: 9,
    //   lottie1: circuit9,
    //   Role: "Emulation Engineer",
    //   location: "Bangalore, India",
    //   Exp: "4 to 20 Years",
    //   Type: "Full Time",
    //   desc: "Develops and utilizes emulation platforms, which are specialized hardware systems that mimic the behavior of a target electronic device or system, enabling thorough testing and validation of complex designs before fabrication.",
    //   link: "/OPENER",
    //   componentIdentifier: "Emulation",
    //   Text: "EMULATION",
    //   JD: ["No Contents", "No Contents"],
    //   QUAL: [
    //     {
    //       sentence1:
    //         "BE degree with 6+ years of experience or MSEE with 4+ years of experience.",
    //       lottie1: Trust,
    //       sentence2: "Ability to work independently in team environment ",
    //       lottie2: six,
    //     },
    //   ],
    // },
  ];

  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        {JobData.map((job) => (
          <div key={job.id} className="col-lg-4 col-md-6 col-sm-12">
            <Link
              to={job.link}
              state={{
                Text: job.Text,
                componentIdentifier: job.componentIdentifier,
                JD: job.JD,
                QUAL: job.QUAL,
              }}
              className="text-decoration-none"
            >
              <div className="card">
                <div className="card-body">
                  <div className="centerJob">
                    <div ref={backgroundRef} className="front-faceJob">
                      <div className="contents front">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="fs-4 fw-bold"  style={{
                                fontSize: "1rem",
                                fontWeight: 700,
                                color: "#1268b3",
                              }}>
                              {job.Role}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <span
                              style={{
                                fontSize: "1rem",
                                fontWeight: 700,
                                color: "#008F58",
                              }}
                            >
                              Job Location: {job.location}
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <span
                              style={{
                                fontSize: "1rem",
                                fontWeight: 700,
                                color: "black",
                              }}
                            >
                              Exp:{job.Exp}
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <span
                              style={{
                                fontSize: "1rem",
                                fontWeight: 700,
                                color: "black",
                              }}
                            >
                              Job Type: {job.Type}
                            </span>
                          </div>
                        </div>
                         <Player
                              autoplay
                              loop
                              src={job.lottie1} 
                              style={{
                                // top:"14rem",
                                marginTop:'2rem',
                                width: "100%",
                                height: "9vh",
                                objectFit: "cover",
                                
                              }}
                            />
                      </div>
                    </div>
                    <div className="back-face">
                      <input
                        type="submit"
                        class="btn btn-primary rounded-pill btn-send mb-1 mt-3"
                        value="Know More"
                        // onClick={handleSubmit}
                      />
                      <div className="contents backJob">
                        <p className="fs-5">{job.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
