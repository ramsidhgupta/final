import React from "react";
import "./CardJob.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
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

const CardJob = () => {
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const variants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 50 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 50 },
  };
  const variants3 = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 50 },
  };
  const variants4 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const variants5 = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 50 },
  };

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


    {
      id: 10,
      lottie1: circuit8,
      Role: "Firmware Engineer",
      location: "Bengaluru, India",
      Exp: "4 to 20 Years",
      Type: "Full Time",
      desc: "Conducting timing analysis to ensure that digital circuit designs meet timing constraints and performance specifications, typically using specialized software tools to verify timing paths and optimize design timing.",
      link: "/OPENER",
      componentIdentifier: "firmware",
      Text: "FIRMWARE",
      JD: [
        "Design, development and maintenance of software and firmware for electronic control systems deployed in the Automotive industry.",
        "Developing software requirements specifications, functional specifications, and software design documents.",
        "Design and develop high-quality software products in a CI/CD environment.",
        "Support and Enhance the entire software development life cycle.",
        "Perform and guide the automation of unit, module, system and regression-level testing on various software modules and systems.",
        "Perform root cause analysis and develop solutions for issues and defects as necessary.",
        "Accountable for system requirements review, software architecture and design.",
        "Follow software development processes like the Waterfall method.",
        "Adopt the Agile methods for execution of projects.",
      ],
      GoodToHave: [
        "Experience with Tasking Compiler.",
        "Experience with FreeRTOS real-time operating system.",
        "Experience with Trace32 debugger.",
        "Experience with Infineon Tri-Core microcontrollers like TC2xx and TC3xx.",
      ],
      SoftSkills: [
        "High ability to work independently.",
        "Flexible - can plan and adapt to circumstances.",
        "Analytic mindset and good ability to perform fault tracing and root cause analysis based on logged data.",
        "Be skilled in presenting issues and suggesting solutions.",
        "Be a Team Player",
      ],


      QUAL: [
        {
          sentence1:
            "Very Good experience in Embedded C programming.",
          lottie1: Trust,
          sentence2: "Experience with RTOS porting and usage of various features.",
          lottie2: six,
        },
        {
          sentence1:
            "Good Experience in ARM CortexMx-based microcontroller architecture.",
          lottie1: Trust,
          sentence2:
            "Knowledge of Embedded hardware, understanding of hardware schematics, and hardware debugging skills.",
          lottie2: six,
        },
        {
          sentence1:
            "Experience in Firmware development using compilers.",
          lottie1: Trust,
          sentence2: "Should have worked in protocols like CAN, Ethernet, UART, I2C, SPI, BLE and Wi-Fi.",
          lottie2: six,
        },
        {
          sentence1: "Experience in Debugging firmware using debug tools.",
          lottie1: Trust,
          sentence2:
            " B.Tech or MTech/MS in Electrical/Electronics/Microelectronics/VLSI.",
          lottie2: six,
        },
      ],
    },
    {
      id: 11,
      lottie1: circuit8,
      Role: "Embedded Engineer",
      location: "Bengaluru, India",
      Exp: "4 to 20 Years",
      Type: "Full Time",
      desc: "Conducting timing analysis to ensure that digital circuit designs meet timing constraints and performance specifications, typically using specialized software tools to verify timing paths and optimize design timing.",
      link: "/OPENER",
      componentIdentifier: "embedded",
      Text: "EMBEDDED",
      JD: [
        "Perform BSW configurations for the ECU System Management, Memory Management and Communication Module.",
        "Perform Board Bring-Up activities.",
        "Requirement Analysis and Understanding of how to Configure/Implement it.",
        "Integration and Configuration of AUTOSAR Software Components.",
        "Testing of the software in various SW and HW Environments.",
        "Issue management with related investigations and technical documentation.",
      ],
      GoodToHave: [
        "ECU Board brings up knowledge.",
        "Good hands-on experience with compilers used for Infineon multicore Aurix Microcontrollers like Hi-Tech or Tasking and Debuggers like TRACE32.",
        "Working knowledge of various communication protocols such as CAN,CAN-FD, LIN, and the Unified Diagnostic Service (UDS) Protocol.",
        "Experience with Project Management Tools like JIRA.",
        "Understanding of complete project development life cycle and agile methodologies.",
      ],
      SoftSkills: [
        "High ability to work independently.",
        "Flexible - can plan and adapt to circumstances.",
        "Analytic mindset and good ability to perform fault tracing and root cause analysis based on logged data.",
        "Be skilled in presenting issues and suggesting solutions.",
        "Be a Team Player",
      ],

      QUAL: [
        {
          sentence1:
            "Experience in programming skills in Embedded C for the automotive domain.",
          lottie1: Trust,
          sentence2: "Working experience in Classic AUTOSAR - MCAL, SWC/CDD Modules and their configurations/integrations using tools like DaVinci Developer/Configurator.",
          lottie2: six,
        },
        {
          sentence1:
            "Experience in HW Schematic, HSIS and HW knowledge.",
          lottie1: Trust,
          sentence2:
            "Knowledge of SPI, I2C and UART",
          lottie2: six,
        },
        {
          sentence1:
            "Experience in Ethernet Stack Configuration.",
          lottie1: Trust,
          sentence2: "Experience in requirement Management and requirement Engineering.",
          lottie2: six,
        },
        {
          sentence1: "Agile Way of Working",
          lottie1: Trust,
          sentence2:
            " B.Tech or MTech/MS in Electrical/Electronics/Microelectronics.",
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
    <section class="wrapper bg-light">
      <div class="container pt-19 pb-14">
        <div class="row d-flex align-item-center">
          <div class="col-md-3 col-lg-3 boxJob">
          <Link
              to={JobData[0].link}
              state={{
                Text: JobData[0].Text,
                componentIdentifier: JobData[0].componentIdentifier,
                JD: JobData[0].JD,
                QUAL: JobData[0].QUAL,
              }}
              className="text-decoration-none"
            >
            <h3>Design Verification Engineer</h3>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="zondicons:education"
                style={{
                  color: "#e10e0e",
                  marginTop: ".2rem",
                  marginRight: "0.5rem",
                }}
              />
              <p>Exp:4 to 20 Years</p>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="openmoji:location-indicator-red"
                style={{ marginTop: ".2rem", marginRight: "0.5rem" }}
              />

              <p>Location:Bengaluru</p>
            </div>

            <a href="#">
              <button>Know More</button>
            </a>
            <span className="count">
              
              <svg
                width="35"
                height="35"
                viewBox="0 0 60 60"
                fill="#f50057"
                stroke="#000000"
                stroke-width="0.85"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M58.5,53.2c-0.1,0.2-0.1,0.3-0.2,0.5c-0.5,1.5-2,2.5-3.6,2.3c-1.6-0.2-2.8-1.6-2.8-3.2c0-1.6,1.2-3,2.7-3.2c1.7-0.3,3.2,0.6,3.7,2.2c0.1,0.2,0.1,0.3,0.2,0.5C58.5,52.5,58.5,52.9,58.5,53.2z" />
                  <path d="M1.5,52.2c0.1-0.2,0.1-0.3,0.2-0.5c0.5-1.6,2.1-2.4,3.7-2.2C6.9,49.8,8,51.2,8,52.7c0,1.6-1.2,3-2.7,3.2c-1.6,0.3-3.1-0.7-3.6-2.2c-0.1-0.2-0.1-0.3-0.2-0.5C1.5,52.9,1.5,52.6,1.5,52.2z" />
                  <path d="M21.7,45.4c-1.2,0-2.2,0-3.4,0c0-4.4,0-8.9,0-13.4c-0.8,0-1.5,0-2.3,0c0.1-0.2,0.2-0.4,0.3-0.5c1.6-2.3,3.7-4.1,6.3-5.4c0.3-0.2,0.6-0.1,0.9,0.1c3.9,3,9.2,3,13.1,0c0.3-0.3,0.6-0.3,1-0.1c2.5,1.3,4.6,3,6.2,5.3c0.1,0.1,0.2,0.3,0.4,0.5c-0.9,0-1.6,0-2.5,0c0,4.5,0,8.9,0,13.4c-1.1,0-2.1,0-3.2,0c0-4.4,0-8.9,0-13.3c-5.6,0-11.1,0-16.7,0C21.7,36.5,21.7,40.9,21.7,45.4z" />
                  <path d="M37.4,11.5c1.1,0,2.2,0,3.2,0c0,1.1,0,2.2,0,3.3c-7.1,0-14.1,0-21.2,0c0-1.1,0-2.2,0-3.3c1,0,2,0,3,0c0.3-1.8,1.1-3.4,2.6-4.7c0,1.6,0,3.1,0,4.6c1.1,0,2.1,0,3.2,0c0-2.4,0-4.7,0-7.1c1.1,0,2.2,0,3.4,0c0,2.4,0,4.7,0,7.1c1.1,0,2.1,0,3.2,0c0-1.5,0-3,0-4.6C36.3,8.1,37.1,9.6,37.4,11.5z" />
                  <path d="M15,45.4c-3.4,0-6.7,0-10.1,0c0-3.4,0-6.7,0-10.1c3.4,0,6.7,0,10.1,0C15,38.7,15,42,15,45.4z" />
                  <path d="M24.9,35.3c3.4,0,6.7,0,10.1,0c0,3.4,0,6.7,0,10.1c-3.4,0-6.7,0-10.1,0C24.9,42.1,24.9,38.7,24.9,35.3z" />
                  <path d="M44.8,35.3c3.4,0,6.7,0,10.1,0c0,3.4,0,6.7,0,10.1c-3.4,0-6.7,0-10.1,0C44.8,42.1,44.8,38.7,44.8,35.3z" />
                  <path d="M22.5,18.1c5,0,10,0,14.9,0c0.2,2.8-2.4,6.9-7,7.2C26.3,25.6,22.5,22.2,22.5,18.1z" />
                  <path d="M24.9,52.7c0,1.8-1.5,3.2-3.3,3.2c-1.8,0-3.3-1.5-3.2-3.3c0-1.8,1.5-3.2,3.3-3.2C23.5,49.5,24.9,50.9,24.9,52.7z" />
                  <path d="M41.7,52.7c0,1.8-1.5,3.2-3.3,3.2c-1.8,0-3.3-1.5-3.3-3.3c0-1.8,1.5-3.2,3.3-3.2C40.3,49.5,41.7,50.9,41.7,52.7z" />
                  <path d="M10.5,55.9c1.1-3,1.1-3.9,0-6.4c1.8,0,3.6,0,5.5,0c-1.1,2.1-1.1,4.3,0,6.4C14.1,55.9,12.4,55.9,10.5,55.9z" />
                  <path d="M27.3,55.9c1.1-2.2,1.1-4.3,0-6.5c1.8,0,3.6,0,5.5,0c-1.1,2.1-1.1,4.3,0,6.5C31,55.9,29.2,55.9,27.3,55.9z" />
                  <path d="M49.6,56c-1.9,0-3.7,0-5.5,0c1.1-2.2,1.1-4.3,0-6.5c1.8,0,3.6,0,5.5,0C48.5,51.6,48.5,53.8,49.6,56z" />
                </g>
              </svg>
              
            </span>
            </Link>
          </div>
          <div class="col-md-3 col-lg-3 boxJob">
          <Link
              to={JobData[1].link}
              state={{
                Text: JobData[1].Text,
                componentIdentifier: JobData[1].componentIdentifier,
                JD: JobData[1].JD,
                QUAL: JobData[1].QUAL,
              }}
              className="text-decoration-none"
            >
            <h3>Analog Design Engineer</h3>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="zondicons:education"
                style={{
                  color: "#e10e0e",
                  marginTop: ".2rem",
                  marginRight: "0.5rem",
                }}
              />
              <p>Exp:4 to 20 Years</p>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="openmoji:location-indicator-red"
                style={{ marginTop: ".2rem", marginRight: "0.5rem" }}
              />

              <p>Location:Bengaluru</p>
            </div>
            <a href="#">
              <button>Know More</button>
            </a>
            <span className="count">
              
              <svg
                width="35"
                height="35"
                viewBox="0 0 60 60"
                fill="#f50057"
                stroke="#000000"
                stroke-width="0.85"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M49.2,19.2c-0.3-2.2-1.6-3.4-3.8-3.4c-1.2,0-2.3,0-3.5,0c-2.5,0-3.6,0.9-4.1,3.4c-0.7,0-1.4,0-2.2,0c0-1.8,0.7-3.2,2.1-4.3c1.3-1.1,3-1.4,4.7-1.3c0-0.8,0-1.5,0-2.3c-0.2,0-0.5,0-0.7,0c-12,0-23.9,0-35.9,0c-2.4,0-4.2-1.5-4.6-3.7C0.6,4.9,2.6,2.4,5.3,2.2c0.1,0,0.2,0,0.3,0c16.2,0,32.4,0,48.7,0c2.2,0,4.1,1.5,4.5,3.7c0.5,2.8-1.5,5.4-4.4,5.4c-3,0-6,0-9,0c-0.2,0-0.4,0-0.6,0c0,0.8,0,1.5,0,2.3c2.1-0.2,4,0.3,5.4,2c0.9,1,1.3,2.2,1.4,3.6C50.7,19.2,50,19.2,49.2,19.2z" />
                  <path d="M30,43c6.4,0,12.8,0,19.2,0c4.2,0,7.4,3.4,7.4,7.5c-0.1,3.9-3.3,7.2-7.2,7.2c-4.2,0-8.4,0-12.6,0c-8.7,0-17.4,0-26.1,0c-4.1,0-7.4-3.3-7.4-7.4c0-4,3.3-7.3,7.3-7.3C17.1,43,23.5,43,30,43z M14.1,45.3c-2.8,0-5.1,2.3-5.1,5c0,2.8,2.3,5.1,5.1,5.2c2.8,0,5.1-2.3,5.1-5C19.2,47.6,16.9,45.3,14.1,45.3z M35,50.4c0-2.8-2.3-5.1-5.1-5.1c-2.8,0-5.1,2.3-5.1,5.1c0,2.8,2.3,5.1,5.1,5.1C32.7,55.5,35,53.2,35,50.4z M50.9,50.4c0-2.8-2.3-5.1-5.1-5.1c-2.8,0-5.1,2.3-5.1,5.1c0,2.8,2.3,5.1,5.1,5.1C48.6,55.5,50.9,53.2,50.9,50.4z" />
                  <path d="M49.2,35.1c-3.8,0-7.5,0-11.3,0c0-3.8,0-7.5,0-11.3c0.7,0,1.4,0,2.2,0c0,1.5,0,3,0,4.5c2.3,0,4.5,0,6.8,0c0-1.5,0-2.9,0-4.5c0.8,0,1.5,0,2.2,0C49.2,27.5,49.2,31.3,49.2,35.1z" />
                  <path d="M19.7,33.9c0-1.5,0-3,0-4.5c0.8,0,1.5,0,2.2,0c0,3.8,0,7.5,0,11.3c-3.8,0-7.5,0-11.3,0c0-3.7,0-7.5,0-11.3c0.7,0,1.4,0,2.2,0c0,1.5,0,3,0,4.5C15.2,33.9,17.4,33.9,19.7,33.9z" />
                  <path d="M35.6,40.7c-3.8,0-7.5,0-11.3,0c0-3.8,0-7.5,0-11.3c0.7,0,1.4,0,2.2,0c0,1.5,0,3,0,4.5c2.3,0,4.5,0,6.8,0c0-1.5,0-2.9,0-4.5c0.8,0,1.5,0,2.2,0C35.6,33.2,35.6,36.9,35.6,40.7z" />
                  <path d="M44.6,26c-0.7,0-1.4,0-2.2,0c0-0.7,0-1.5,0-2.2c0.7,0,1.4,0,2.2,0C44.6,24.5,44.6,25.3,44.6,26z" />
                  <path d="M15.3,29.4c0.8,0,1.5,0,2.2,0c0,0.7,0,1.4,0,2.2c-0.7,0-1.4,0-2.2,0C15.3,30.9,15.3,30.2,15.3,29.4z" />
                  <path d="M31,31.7c-0.7,0-1.4,0-2.2,0c0-0.7,0-1.5,0-2.2c0.7,0,1.4,0,2.2,0C31,30.2,31,30.9,31,31.7z" />
                  <path d="M14.1,47.5c1.6,0,2.8,1.3,2.8,2.8c0,1.6-1.3,2.8-2.8,2.8c-1.5,0-2.8-1.3-2.8-2.8C11.2,48.8,12.5,47.5,14.1,47.5z" />
                  <path d="M29.9,47.5c1.6,0,2.8,1.3,2.8,2.8c0,1.6-1.3,2.8-2.9,2.8c-1.5,0-2.8-1.3-2.8-2.8C27.1,48.8,28.4,47.5,29.9,47.5z" />
                  <path d="M45.8,47.5c1.6,0,2.8,1.3,2.8,2.9c0,1.6-1.3,2.8-2.9,2.8c-1.5,0-2.8-1.3-2.8-2.8C43,48.8,44.3,47.5,45.8,47.5z" />
                </g>
              </svg>
              
            </span>
            </Link>
          </div>
          <div class="col-md-3 col-lg-3 boxJob">
          <Link
              to={JobData[2].link}
              state={{
                Text: JobData[2].Text,
                componentIdentifier: JobData[2].componentIdentifier,
                JD: JobData[2].JD,
                QUAL: JobData[2].QUAL,
              }}
              className="text-decoration-none"
            >
            <h3>Layout Design Engineer</h3>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="zondicons:education"
                style={{
                  color: "#e10e0e",
                  marginTop: ".2rem",
                  marginRight: "0.5rem",
                }}
              />
              <p>Exp:4 to 20 Years</p>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="openmoji:location-indicator-red"
                style={{ marginTop: ".2rem", marginRight: "0.5rem" }}
              />

              <p>Location:Bengaluru</p>
            </div>
            <a href="#">
              <button>Know More</button>
            </a>
            <span className="count">
              
              <svg
                width="35"
                height="35"
                viewBox="0 0 60 60"
                fill="#f50057"
                stroke="#000000"
                stroke-width="0.85"
                xmlns="http://www.w3.org/2000/svg"
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
              
            </span>
            </Link>
          </div>
          <div class="col-md-3 col-lg-3 boxJob">
          <Link
              to={JobData[3].link}
              state={{
                Text: JobData[3].Text,
                componentIdentifier: JobData[3].componentIdentifier,
                JD: JobData[3].JD,
                QUAL: JobData[3].QUAL,
              }}
              className="text-decoration-none"
            >
            <h3>Physical Design Engineer</h3>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="zondicons:education"
                style={{
                  color: "#e10e0e",
                  marginTop: ".2rem",
                  marginRight: "0.5rem",
                }}
              />
              <p>Exp:4 to 20 Years</p>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="openmoji:location-indicator-red"
                style={{ marginTop: ".2rem", marginRight: "0.5rem" }}
              />

              <p>Location:Bengaluru</p>
            </div>
            <a href="#">
              <button>Know More</button>
            </a>
            <span className="count">
              
              <svg
                width="35"
                height="35"
                viewBox="0 0 60 60"
                fill="#f50057"
                stroke="#000000"
                stroke-width="0.85"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M43.1,51c-2.4,1.5-4.8,2.5-7.5,3.1c0,1.2,0,2.4,0,3.7c0,0.9-0.3,1.2-1.2,1.2c-2.9,0-5.9,0-8.8,0c-0.9,0-1.2-0.3-1.2-1.2c0-1.2,0-2.4,0-3.7c-2.7-0.7-5.2-1.7-7.6-3.2c-0.4,0.4-0.8,0.9-1.2,1.3c-0.5,0.5-1,1-1.5,1.5c-0.5,0.4-0.9,0.5-1.4,0c-2.2-2.2-4.4-4.4-6.6-6.6c-0.5-0.5-0.4-0.9,0.1-1.4C7.1,44.9,8,44,8.9,43.1c-1.4-2.3-2.5-4.8-3.1-7.6c-1.2,0-2.4,0-3.5,0c-1.1,0-1.4-0.2-1.4-1.4c0-2.9,0-5.7,0-8.6c0-0.9,0.3-1.2,1.2-1.2c1.2,0,2.4,0,3.7,0c0.6-2.7,1.7-5.2,3.1-7.5c-0.9-0.9-1.7-1.7-2.6-2.6c-0.7-0.7-0.7-1.1,0-1.7c2.1-2.1,4.1-4.1,6.2-6.2c0.7-0.7,1.1-0.7,1.7,0C15.1,7.1,16,8,16.8,8.9c2.4-1.5,4.9-2.5,7.5-3.1c0-1.2,0-2.5,0-3.7c0-0.9,0.3-1.2,1.2-1.2c2.9,0,5.9,0,8.8,0c0.9,0,1.2,0.3,1.2,1.2c0,1.2,0,2.4,0,3.7c2.7,0.6,5.2,1.7,7.5,3.1C44,8,44.8,7.2,45.7,6.3c0.7-0.7,1.1-0.7,1.8,0c2.1,2.1,4.1,4.1,6.2,6.2c0.7,0.7,0.7,1.1,0,1.7c-0.9,0.9-1.7,1.7-2.6,2.6c1.5,2.4,2.5,4.8,3.1,7.5c1.3,0,2.5,0,3.7,0c0.9,0,1.2,0.3,1.2,1.2c0,3,0,5.9,0,8.9c0,0.8-0.3,1.1-1.1,1.1c-1.1,0-2.2,0-3.4,0c-0.2,0-0.4,0.2-0.5,0.3c-0.6,2.5-1.7,4.9-3.1,7.2c0.8,0.8,1.7,1.7,2.5,2.5c0.7,0.7,0.7,1.1,0,1.9c-2,2-4.1,4.1-6.1,6.1c-0.7,0.7-1.1,0.7-1.8,0C44.8,52.8,44,51.9,43.1,51z M26.2,57.2c2.6,0,5,0,7.6,0c0-1.2,0-2.3,0-3.5c0-0.8,0.2-1.1,1-1.3c2.7-0.6,5.3-1.6,7.6-3.2c0.8-0.5,1.1-0.5,1.7,0.2c0.8,0.8,1.6,1.6,2.3,2.4c1.8-1.8,3.6-3.6,5.4-5.4c-0.7-0.7-1.5-1.5-2.3-2.3c-0.7-0.7-0.7-1-0.2-1.8c1.5-2.3,2.5-4.8,3.1-7.5c0.2-0.9,0.4-1.1,1.4-1.1c1.1,0,2.2,0,3.4,0c0-2.5,0-5,0-7.6c-1.2,0-2.3,0-3.4,0c-0.9,0-1.1-0.2-1.3-1c-0.6-2.7-1.6-5.3-3.2-7.6c-0.5-0.8-0.5-1.1,0.2-1.7c0.8-0.8,1.6-1.6,2.3-2.3c-1.8-1.8-3.6-3.6-5.4-5.4c-0.8,0.8-1.5,1.5-2.3,2.3c-0.7,0.7-1,0.8-1.8,0.2C40,9.1,37.5,8,34.8,7.5c-0.8-0.2-1-0.4-1-1.3c0-1.1,0-2.3,0-3.4c-2.6,0-5,0-7.6,0c0,1.1,0,2.3,0,3.4c0,1-0.2,1.2-1.1,1.4C22.4,8,20,9,17.7,10.5c-1.1,0.7-1.2,0.7-2.1-0.2c-0.7-0.7-1.5-1.5-2.2-2.2c-1.8,1.8-3.6,3.6-5.4,5.4c0.8,0.8,1.7,1.7,2.5,2.5c0.4,0.4,0.5,0.8,0.2,1.3c-1.6,2.5-2.8,5.2-3.4,8.1c-0.1,0.6-0.5,0.8-1.1,0.8c-1,0-2.1,0-3.1,0c-0.2,0-0.4,0-0.5,0c0,2.5,0,5,0,7.5c1.2,0,2.3,0,3.4,0c0.9,0,1.1,0.2,1.3,1.1c0.6,2.7,1.6,5.2,3.1,7.5c0.6,0.9,0.5,1.1-0.2,1.9c-0.8,0.8-1.5,1.6-2.3,2.3c1.8,1.8,3.6,3.6,5.4,5.4c0.8-0.8,1.6-1.6,2.4-2.4c0.6-0.6,0.9-0.6,1.6-0.2c2.4,1.5,5,2.6,7.7,3.2c0.8,0.2,1,0.4,1,1.3C26.2,54.9,26.2,56,26.2,57.2z" />
                  <path d="M45.8,15.5c-0.6,0.6-1.2,1.2-1.7,1.8c6.5,7.2,6.4,18.2,0,25.3c0.6,0.6,1.1,1.1,1.7,1.7c0-0.3,0-0.5,0-0.8c0-0.5,0.3-0.9,0.8-0.9c0.5,0,0.9,0.2,1,0.8c0.1,1.2,0.2,2.4,0.2,3.6c0,0.5-0.4,0.9-0.9,0.9c-1.1,0-2.3-0.1-3.4-0.2c-0.6-0.1-0.9-0.5-0.9-1c0.1-0.5,0.4-0.8,1-0.8c0.2,0,0.5,0,0.9,0.1c-0.4-0.4-0.7-0.7-0.9-1c-0.3-0.3-0.5-0.6-0.8-0.9c-3.7,3.2-7.9,4.9-12.8,4.9c-4.8,0-9.1-1.7-12.8-5c-0.3,0.3-0.5,0.6-0.8,0.9c-0.3,0.3-0.6,0.5-0.9,0.8c0,0.1,0,0.1,0.1,0.2c0.3,0,0.5,0,0.8,0c0.6,0,0.9,0.3,1,0.8c0.1,0.5-0.3,0.9-0.9,1c-1.2,0.1-2.3,0.2-3.5,0.2c-0.5,0-0.9-0.4-0.9-0.9c0-1.2,0.1-2.3,0.2-3.5c0.1-0.6,0.5-0.9,1-0.8c0.5,0,0.8,0.4,0.8,1c0,0.3,0,0.5,0,0.9c0.1-0.1,0.2-0.1,0.2-0.2c0.5-0.5,1.1-1,1.6-1.5c-6.6-7.3-6.5-18.4-0.1-25.5c-0.6-0.6-1.1-1.1-1.7-1.7c0,0.3,0,0.6,0,0.9c0,0.5-0.3,0.9-0.8,0.9c-0.5,0-0.9-0.2-1-0.8c-0.1-1.2-0.2-2.4-0.2-3.6c0-0.5,0.4-0.9,0.9-0.9c1.1,0,2.3,0.1,3.4,0.2c0.6,0.1,0.9,0.5,0.9,1c0,0.5-0.4,0.8-1,0.8c-0.2,0-0.5,0-0.7,0c0.6,0.5,1.1,1.1,1.7,1.7C20.9,12.7,25.1,11,30,11c4.8,0,9.1,1.7,12.7,4.8c0.6-0.6,1.1-1.2,1.7-1.7c-0.2,0-0.5,0-0.7,0c-0.6,0-0.9-0.3-1-0.8c-0.1-0.5,0.3-0.9,0.8-1c1.2-0.1,2.3-0.2,3.5-0.2c0.5,0,0.9,0.4,0.9,0.9c0,1.2-0.1,2.3-0.2,3.5c-0.1,0.6-0.5,0.9-1,0.8c-0.5,0-0.8-0.4-0.8-1C45.8,16.1,45.8,15.8,45.8,15.5z M30.9,38.8c0.1,0,0.3-0.1,0.4-0.1c3.4-1.3,6.8-2.6,10.1-3.9c0.3-0.1,0.4-0.3,0.4-0.6c0-2.5,0-5.1,0-7.6c0-0.1,0-0.3,0-0.4c-0.1,0-0.1,0-0.2,0c-3.4,1.3-6.9,2.7-10.3,4c-0.3,0.1-0.4,0.3-0.3,0.6c0,2.5,0,5,0,7.5C30.9,38.4,30.9,38.6,30.9,38.8z M26.7,29.4c0,0.4,0,0.8,0,1.1c0,0.4,0,0.7,0,1.1c-0.1,0.9-1,1.3-1.7,0.8c-0.3-0.2-0.6-0.4-0.8-0.7c-0.6-0.7-1.2-0.7-1.9-0.4c-1.1,0.4-1.7-0.1-1.7-1.2c0-0.9,0-1.8,0-2.7c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.3-1.4-0.6-2.1-0.8c0,0.2,0,0.4,0,0.6c0,2.5,0,4.9,0,7.4c0,0.4,0.1,0.6,0.5,0.8c3.2,1.2,6.4,2.5,9.6,3.7c0.2,0.1,0.5,0.2,0.8,0.3c0-2.8,0-5.5,0-8.2c0-0.1-0.1-0.3-0.2-0.4C28.1,29.9,27.4,29.7,26.7,29.4z M28.3,28c0.4,0.1,0.6,0.2,0.8,0.3c0.6,0.3,1.1,0.3,1.7,0c2.4-1,4.7-1.9,7.1-2.8c0.7-0.3,1.4-0.5,2.2-0.9c-0.9-0.4-1.7-0.8-2.7-0.3c-1.4,0.7-2.8,1.1-4.2,1.7C31.6,26.7,30,27.3,28.3,28z M31.7,21.4c-0.5-0.2-0.9-0.4-1.3-0.5c-0.2-0.1-0.5-0.1-0.8,0c-3.1,1.2-6.2,2.4-9.3,3.6c-0.1,0-0.2,0.1-0.3,0.2c1,0.7,1.9,0.7,2.9,0.1c0.1-0.1,0.2-0.1,0.4-0.1C26,23.6,28.7,22.6,31.7,21.4z" />
                </g>
              </svg>
              
            </span>
            </Link>
          </div>
          <div class="col-md-3 col-lg-3 boxJob">
          <Link
              to={JobData[4].link}
              state={{
                Text: JobData[4].Text,
                componentIdentifier: JobData[4].componentIdentifier,
                JD: JobData[4].JD,
                QUAL: JobData[4].QUAL,
              }}
              className="text-decoration-none"
            >
            <h3>DFT Engineer</h3>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="zondicons:education"
                style={{
                  color: "#e10e0e",
                  marginTop: ".2rem",
                  marginRight: "0.5rem",
                }}
              />
              <p>Exp:4 to 20 Years</p>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="openmoji:location-indicator-red"
                style={{ marginTop: ".2rem", marginRight: "0.5rem" }}
              />

              <p>Location:Bengaluru</p>
            </div>
            <a href="#">
              <button>Know More</button>
            </a>
            <span className="count">
              
              <svg
                width="35"
                height="35"
                viewBox="0 0 60 60"
                fill="#f50057"
                stroke="#000000"
                stroke-width="0.85"
                xmlns="http://www.w3.org/2000/svg"
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
              
            </span>
            </Link>
          </div>
          <div class="col-md-3 col-lg-3 boxJob">
          <Link
              to={JobData[5].link}
              state={{
                Text: JobData[5].Text,
                componentIdentifier: JobData[5].componentIdentifier,
                JD: JobData[5].JD,
                QUAL: JobData[5].QUAL,
              }}
              className="text-decoration-none"
            >
            <h3>RTL Engineer</h3>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="zondicons:education"
                style={{
                  color: "#e10e0e",
                  marginTop: ".2rem",
                  marginRight: "0.5rem",
                }}
              />
              <p>Exp:4 to 20 Years</p>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="openmoji:location-indicator-red"
                style={{ marginTop: ".2rem", marginRight: "0.5rem" }}
              />

              <p>Location:Bengaluru</p>
            </div>
            <a href="#">
              <button>Know More</button>
            </a>
            <span className="count">
              
              <svg
                width="35"
                height="35"
                viewBox="0 0 60 60"
                fill="#f50057"
                stroke="#000000"
                stroke-width="0.85"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M43.1,51.3c-0.1,0.1-0.3,0.1-0.4,0.2c-2,1.2-4.2,2.1-6.5,2.7c-0.2,0.1-0.5,0.3-0.6,0.6c-0.5,1.3-1,2.6-1.5,4c-0.1,0.3-0.3,0.4-0.6,0.4c-2.3,0-4.6,0-7,0c-0.4,0-0.5-0.1-0.6-0.5c-0.5-1.3-1-2.6-1.5-3.9c-0.1-0.3-0.3-0.5-0.7-0.6c-2.2-0.5-4.3-1.4-6.3-2.6c-0.3-0.2-0.6-0.2-1-0.1c-1.3,0.6-2.5,1.1-3.8,1.7c-0.3,0.1-0.5,0.1-0.7-0.1c-1.6-1.7-3.3-3.3-4.9-4.9c-0.3-0.3-0.3-0.5-0.1-0.8c0.6-1.3,1.2-2.5,1.7-3.8c0.1-0.2,0.1-0.6,0-0.9c-1.1-2-2.1-4.1-2.6-6.4c-0.1-0.4-0.3-0.6-0.6-0.7c-1.3-0.5-2.6-1-3.9-1.5C1,34,0.9,33.8,0.9,33.5c0-2.3,0-4.6,0-7c0-0.4,0.1-0.5,0.5-0.6c1.3-0.5,2.6-1,3.9-1.5c0.2-0.1,0.5-0.3,0.5-0.6c0.6-2.3,1.5-4.4,2.7-6.5c0.1-0.2,0.1-0.6,0-0.8c-0.5-1.3-1.1-2.6-1.7-3.9c-0.1-0.3-0.1-0.5,0.1-0.7c1.7-1.6,3.3-3.3,4.9-4.9c0.3-0.3,0.5-0.3,0.8-0.1c1.3,0.6,2.5,1.2,3.8,1.7c0.2,0.1,0.6,0.1,0.9,0c2-1.2,4.2-2.1,6.4-2.6c0.2-0.1,0.5-0.3,0.6-0.6c0.5-1.3,1-2.6,1.5-4C26,1,26.2,0.9,26.5,0.9c2.3,0,4.6,0,7,0c0.4,0,0.5,0.1,0.6,0.5c0.5,1.3,1,2.6,1.5,3.9c0.1,0.2,0.3,0.5,0.6,0.5c2.3,0.6,4.4,1.5,6.5,2.7c0.2,0.1,0.6,0.1,0.8,0c1.3-0.5,2.6-1.1,3.9-1.7c0.3-0.1,0.5-0.1,0.7,0.1c1.6,1.7,3.3,3.3,4.9,4.9c0.3,0.3,0.3,0.5,0.1,0.8c-0.6,1.3-1.2,2.5-1.7,3.8c-0.1,0.2-0.1,0.6,0,0.9c1.1,2,2.1,4.1,2.6,6.4c0.1,0.4,0.3,0.6,0.6,0.7c1.3,0.5,2.6,1,3.9,1.5c0.3,0.1,0.4,0.3,0.4,0.6c0,2.3,0,4.6,0,7c0,0.4-0.1,0.5-0.5,0.6c-1.3,0.5-2.6,1-3.9,1.5c-0.3,0.1-0.5,0.3-0.6,0.7c-0.6,2.2-1.4,4.4-2.6,6.3c-0.2,0.3-0.2,0.6,0,1c0.6,1.3,1.1,2.5,1.7,3.8c0.1,0.3,0.1,0.5-0.1,0.7c-1.7,1.6-3.3,3.3-4.9,4.9c-0.3,0.3-0.5,0.3-0.8,0.1c-1.2-0.6-2.5-1.1-3.7-1.7C43.5,51.4,43.3,51.4,43.1,51.3z M21.1,45.8c7.3,4.2,17.6,2.9,23.5-5c5.7-7.7,4.5-18.4-2.8-24.7c-7.2-6.1-18.1-5.6-24.7,1.1C10.5,24,11,33.4,14,38.3c0.1-0.2,0.3-0.3,0.4-0.5c2.7-2.7,5.3-5.3,8-8c0.5-0.5,0.6-0.5,1.1,0c2.1,2.1,4.2,4.2,6.3,6.3c0.5,0.5,0.5,0.7,0,1.2c-2.7,2.7-5.4,5.4-8.1,8.1C21.6,45.5,21.4,45.6,21.1,45.8z M15.9,41.4c2.3-2.5,4.6-4.8,6.9-7.3c1,1,1.8,1.8,2.6,2.6c0.5,0.5,1.1,0.6,1.5,0.2c0.4-0.4,0.4-1-0.1-1.5c-0.8-0.8-1.7-1.7-2.5-2.5c-1.4-1.4-1.5-1.4-2.8,0c-2.2,2.3-4.4,4.6-6.7,7C15,40.2,15.3,40.7,15.9,41.4z" />
                  <path d="M31.1,34.6c-0.4-0.5-0.9-0.9-1.3-1.3c0.1-0.1,0.2-0.3,0.4-0.4c1.6-1.6,3.3-3.3,4.9-4.9c0.5-0.5,1-0.6,1.6-0.4c0.6,0.2,1.2,0.3,1.7,0.5c0.7,0.2,1.3,0.3,2-0.1c0.9-0.6,2.2,0,2.6,1c0.5,1,0,2.2-0.9,2.7c-1,0.5-2.2,0.1-2.7-0.9c-0.2-0.4-0.5-0.6-0.9-0.7c-0.7-0.2-1.5-0.6-2.1-0.5c-0.6,0.2-1.1,1-1.7,1.5c-1.2,1.1-2.3,2.3-3.5,3.5C31.2,34.5,31.2,34.6,31.1,34.6z" />
                  <path d="M26.3,29.8c-0.5-0.5-0.9-0.9-1.4-1.4c1.1-1.1,2.2-2.2,3.4-3.4c0.5-0.5,0.9-1,1.4-1.4c0.4-0.3,0.4-0.6,0.3-1.1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.7-0.4-1.2-1.1-1.6c-1-0.5-1.1-1.9-0.5-2.8c0.6-0.9,1.8-1.1,2.8-0.5c0.9,0.6,1.2,1.8,0.6,2.8c-0.3,0.4-0.3,0.7-0.2,1.1c0.3,0.9,0.5,1.7,0.7,2.6c0.1,0.3,0,0.8-0.2,1C30,26.1,28.2,27.9,26.3,29.8z" />
                  <path d="M28.9,32.3c-0.5-0.5-1-0.9-1.5-1.4c0.6-0.6,1.2-1.1,1.7-1.7c1.8-1.8,3.5-3.5,5.3-5.3c0.2-0.2,0.3-0.5,0.3-0.8c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2,0.9,2,2.1c0,1.2-1,2-2.2,1.9c-0.4,0-0.6,0.1-0.9,0.3c-2.1,2.1-4.3,4.3-6.4,6.4C29.1,32,29,32.2,28.9,32.3z" />
                </g>
              </svg>
              
            </span>
            </Link>
          </div>
          <div class="col-md-3 col-lg-3 boxJob">
          <Link
              to={JobData[6].link}
              state={{
                Text: JobData[6].Text,
                componentIdentifier: JobData[6].componentIdentifier,
                JD: JobData[6].JD,
                QUAL: JobData[6].QUAL,
              }}
              className="text-decoration-none"
            >
            <h3>FPGA Engineer</h3>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="zondicons:education"
                style={{
                  color: "#e10e0e",
                  marginTop: ".2rem",
                  marginRight: "0.5rem",
                }}
              />
              <p>Exp:4 to 20 Years</p>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="openmoji:location-indicator-red"
                style={{ marginTop: ".2rem", marginRight: "0.5rem" }}
              />

              <p>Location:Bengaluru</p>
            </div>
            <a href="#">
              <button>Know More</button>
            </a>
            <span className="count">
              
              <svg
                width="35"
                height="35"
                viewBox="0 0 60 60"
                fill="#f50057"
                stroke="#000000"
                stroke-width="0.85"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M1.6,39.9c0-0.2,0-0.5,0-0.7c0-10.6,0-21.2,0-31.8c0-2.7,1.5-4.2,4.2-4.2c16.3,0,32.5,0,48.8,0c2.7,0,4.2,1.5,4.2,4.2c0,10.6,0,21.2,0,31.8c0,0.2,0,0.4,0,0.6C39.7,39.9,20.7,39.9,1.6,39.9z M43,34.8c-0.6,0.1-1,0.2-1.4,0.2c-0.6,0.1-1,0.5-0.9,1.1c0.1,0.5,0.5,0.8,1.1,0.7c1.2-0.2,2.3-0.3,3.5-0.5c0.7-0.1,0.9-0.5,0.9-1.1c-0.1-1.1-0.3-2.3-0.5-3.4c-0.1-0.7-0.5-1-1.1-0.9c-0.5,0.1-0.8,0.6-0.7,1.2c0.1,0.4,0.1,0.8,0.2,1.3c-1-0.6-1.8-1.1-2.7-1.6c-0.4-0.2-0.5-0.4-0.5-0.9c0-3.6,0-7.1,0-10.7c0-0.9-0.1-1.1-1-1.3c-2.8-1-5.5-1.9-8.3-2.9c-0.4-0.1-0.5-0.3-0.5-0.7c0-0.8,0-1.7,0-2.5c0-0.7,0-1.4,0-2.1c0.1,0,0.1-0.1,0.2-0.1c0.3,0.3,0.6,0.6,0.9,0.9c0.4,0.4,1,0.4,1.3,0.1c0.4-0.4,0.4-0.9-0.1-1.4c-0.8-0.8-1.6-1.7-2.5-2.5c-0.5-0.5-0.9-0.5-1.4,0c-0.8,0.8-1.7,1.6-2.5,2.5c-0.4,0.5-0.5,0.9-0.1,1.3c0.4,0.4,0.9,0.4,1.4-0.1c0.3-0.3,0.6-0.6,0.9-0.9c0,0,0.1,0,0.1,0.1c0,0.2,0,0.3,0,0.5c0,1.4,0,2.7,0,4.1c0,0.4-0.1,0.6-0.5,0.8c-2.7,0.9-5.4,1.9-8.1,2.8c-1,0.4-1.1,0.4-1.1,1.5c0,3.5,0,7,0,10.6c0,0.2,0,0.5-0.1,0.6c-1,0.6-2,1.2-3.1,1.9c0.1-0.6,0.2-1,0.2-1.4c0.1-0.6-0.2-1-0.7-1.1c-0.5-0.1-1,0.2-1.1,0.8c-0.2,1.2-0.4,2.4-0.5,3.6c-0.1,0.7,0.2,1,0.9,1.1c1.1,0.2,2.3,0.3,3.4,0.5c0.6,0.1,1.1-0.2,1.1-0.7c0.1-0.5-0.2-1-0.9-1.1c-0.4-0.1-0.9-0.1-1.4-0.2c1.1-0.6,2-1.2,2.9-1.7c0.3-0.2,0.6-0.2,1-0.1c2.8,1,5.5,2,8.3,2.9c0.4,0.1,0.9,0.1,1.3,0c2.8-0.9,5.5-1.9,8.3-2.9c0.2-0.1,0.5-0.1,0.7,0C40.9,33.5,41.9,34.2,43,34.8z M12.1,6.8c-1,0-2.1,0-3.1,0c-0.9,0-1.8,0-2.7,0c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.3,0.9,0.9,0.9c0.2,0,0.3,0,0.5,0c2.8,0,5.7,0,8.5,0c0.8,0,1.7,0,2.5,0c0.8,0,1.2-0.7,0.9-1.3c-0.2-0.4-0.6-0.5-1-0.5C15.9,6.8,14,6.8,12.1,6.8z M10.2,10.8c-1.2,0-2.4,0-3.6,0c-0.7,0-1.1,0.3-1.1,0.9c0,0.6,0.4,0.9,1.1,0.9c2.4,0,4.8,0,7.1,0c0.7,0,1.1-0.3,1.1-0.9c0-0.6-0.4-0.9-1.1-0.9C12.5,10.8,11.3,10.8,10.2,10.8z" />
                  <path d="M1.6,41.8c19.1,0,38.1,0,57.2,0c-0.1,1.1,0,2.2-0.2,3.2c-0.3,1.6-1.8,2.7-3.5,2.7c-1.4,0-2.8,0-4.2,0c-15.1,0-30.2,0-45.3,0c-2.2,0-3.7-1.3-4-3.4C1.6,43.5,1.6,42.7,1.6,41.8z M31.1,44.7c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9C30.7,45.6,31.1,45.2,31.1,44.7z" />
                  <path d="M30.2,56.7c-3.9,0-7.8,0-11.8,0c-0.2,0-0.5,0-0.7,0c-0.5-0.1-0.8-0.5-0.8-1c0-0.5,0.3-0.8,0.8-0.9c0.2,0,0.3,0,0.5,0c7.9,0,15.8,0,23.8,0c0.2,0,0.3,0,0.5,0c0.5,0.1,0.8,0.4,0.9,0.9c0,0.5-0.3,0.9-0.8,1c-0.2,0-0.4,0-0.6,0C38,56.7,34.1,56.7,30.2,56.7z" />
                  <path d="M37.1,53c-4.6,0-9.2,0-13.8,0c0.5-1.1,0.9-2.2,1.4-3.3c0-0.1,0.3-0.2,0.4-0.2c3.4,0,6.8,0,10.3,0c0.1,0,0.4,0.1,0.4,0.2C36.2,50.8,36.6,51.8,37.1,53z" />
                  <path d="M29.2,33.9c-1.3-0.5-2.6-0.9-3.9-1.4c-1.2-0.4-2.4-0.8-3.6-1.3c-0.2-0.1-0.4-0.3-0.4-0.4c0-3.2,0-6.4,0-9.7c0.2,0,0.3,0.1,0.5,0.1c2.4,0.8,4.7,1.6,7.1,2.5c0.2,0.1,0.4,0.3,0.4,0.5c0,3.1,0,6.3,0,9.4C29.3,33.8,29.3,33.8,29.2,33.9z" />
                  <path d="M39,21.2c0,0.2,0,0.3,0,0.5c0,3,0,6,0,9c0,0.3,0,0.5-0.4,0.6c-2.4,0.8-4.9,1.7-7.3,2.6c-0.1,0-0.1,0-0.2,0c0-0.2,0-0.3,0-0.5c0-3,0-6,0-8.9c0-0.3,0-0.5,0.4-0.7c2.4-0.8,4.9-1.7,7.3-2.5C38.8,21.2,38.9,21.2,39,21.2z" />
                  <path d="M23.2,19.9c0.8-0.3,1.4-0.5,2-0.7c1.5-0.5,3.1-1.1,4.6-1.6c0.2-0.1,0.5-0.1,0.7,0c2.2,0.7,4.3,1.5,6.5,2.2c0.1,0,0.1,0.1,0.3,0.2c-1.6,0.6-3.2,1-4.6,1.7c-1.6,0.7-3.1,0.7-4.7,0C26.4,20.9,24.8,20.5,23.2,19.9z" />
                </g>
              </svg>
              
            </span>
            </Link>
          </div>
          <div class="col-md-3 col-lg-3 boxJob">
          <Link
              to={JobData[7].link}
              state={{
                Text: JobData[7].Text,
                componentIdentifier: JobData[7].componentIdentifier,
                JD: JobData[7].JD,
                QUAL: JobData[7].QUAL,
              }}
              className="text-decoration-none"
            >
            <h3>STA Engineer</h3>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="zondicons:education"
                style={{
                  color: "#e10e0e",
                  marginTop: ".2rem",
                  marginRight: "0.5rem",
                }}
              />
              <p>Exp:4 to 20 Years</p>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="openmoji:location-indicator-red"
                style={{ marginTop: ".2rem", marginRight: "0.5rem" }}
              />

              <p>Location:Bengaluru</p>
            </div>
            <a href="#">
              <button>Know More</button>
            </a>
            <span className="count">
              
              <svg
                width="35"
                height="35"
                viewBox="0 0 60 60"
                fill="#f50057"
                stroke="#000000"
                stroke-width="0.85"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M58.8,38.4c0,2.3,0,4.6,0,6.9c-1.1,0-2.2,0-3.4,0c0-1.2,0-2.3,0-3.4c-1.7,0-3.4,0-5.1,0c0,2.8,0,5.6,0,8.5c-2.9,0-5.6,0-8.4,0c0,1.7,0,3.4,0,5.1c1.1,0,2.2,0,3.4,0c0,1.2,0,2.3,0,3.4c-2.3,0-4.6,0-6.9,0c0-0.1,0-0.2,0-0.3c0-7.1,0-14.2,0-21.3c0-0.1,0-0.3,0-0.5c-0.2,0-0.4,0-0.6,0c-3.6,0-7.2,0-10.9,0c-0.4,0-0.6-0.1-0.8-0.5c-0.9-1.8-2.4-2.8-4.5-2.9c-2.5-0.1-4.7,1.8-5.1,4.2c-0.4,2.5,1.1,4.9,3.5,5.7c2.4,0.8,5-0.4,6.1-2.6c0.2-0.4,0.4-0.6,0.9-0.5c2.5,0,5,0,7.5,0c0.2,0,0.4,0,0.6,0c0,5.7,0,11.3,0,16.9c-1.1,0-2.2,0-3.3,0c0-2.2,0-4.5,0-6.7c-1.2,0-2.2,0-3.4,0c0,2.3,0,4.5,0,6.7c-1.1,0-2.2,0-3.4,0c0-2.2,0-4.5,0-6.7c-1.2,0-2.3,0-3.4,0c0,2.8,0,5.6,0,8.4c-2.3,0-4.6,0-6.9,0c0-1.1,0-2.2,0-3.4c1.2,0,2.3,0,3.4,0c0-1.7,0-3.4,0-5.1c-2.8,0-5.6,0-8.5,0c0-2.8,0-5.6,0-8.5c-1.7,0-3.4,0-5.1,0c0,1.1,0,2.2,0,3.4c-1.2,0-2.3,0-3.4,0c0-2.3,0-4.6,0-6.9c2.8,0,5.6,0,8.4,0c0-1.1,0-2.2,0-3.4c-2.3,0-4.5,0-6.7,0c0-1.1,0-2.2,0-3.4c2.3,0,4.5,0,6.7,0c0-1.1,0-2.2,0-3.3c-2.3,0-4.5,0-6.7,0c0-1.1,0-2.2,0-3.4c2.2,0,4.5,0,6.7,0c0-1.2,0-2.3,0-3.5c-2.8,0-5.6,0-8.4,0c0-2.3,0-4.6,0-6.9c1.1,0,2.2,0,3.4,0c0,1.2,0,2.3,0,3.4c1.7,0,3.4,0,5.1,0c0-2.8,0-5.6,0-8.5c2.9,0,5.6,0,8.4,0c0-1.7,0-3.4,0-5.1c-1.1,0-2.2,0-3.4,0c0-1.2,0-2.3,0-3.4c2.3,0,4.6,0,6.9,0c0,0.1,0,0.1,0,0.2c0,8.3,0,16.5,0,24.8c0,0.1,0,0.3,0.1,0.4c2.7,0,5.4,0,8.1,0c0.5,0,0.7,0.1,0.9,0.6c1,2.1,3.3,3.2,5.6,2.7c2.2-0.5,3.9-2.5,4-4.8c0.1-2.2-1.4-4.3-3.6-5c-2.4-0.7-4.9,0.4-6.1,2.7c-0.1,0.2-0.3,0.4-0.4,0.4c-1.7,0-3.4,0-5.1,0c0-6.8,0-13.6,0-20.3c1.1,0,2.2,0,3.3,0c0,2.3,0,4.5,0,6.7c1.2,0,2.2,0,3.4,0c0-2.3,0-4.5,0-6.7c1.1,0,2.2,0,3.4,0c0,2.2,0,4.5,0,6.7c1.2,0,2.3,0,3.4,0c0-2.8,0-5.6,0-8.4c1.7,0,3.4,0,5.1,0c0,1.1,0,2.2,0,3.4c-0.5,0-1.1,0-1.6,0c0,1.7,0,3.4,0,5.1c2.8,0,5.6,0,8.5,0c0,2.8,0,5.6,0,8.4c1.7,0,3.4,0,5.1,0c0-1.1,0-2.2,0-3.4c1.2,0,2.3,0,3.4,0c0,2.3,0,4.6,0,6.9c-2.8,0-5.6,0-8.4,0c0,1.2,0,2.3,0,3.5c2.3,0,4.5,0,6.7,0c0,1.1,0,2.2,0,3.4c-2.3,0-4.5,0-6.7,0c0,1.1,0,2.2,0,3.3c2.3,0,4.5,0,6.7,0c0,1.1,0,2.2,0,3.4c-2.2,0-4.5,0-6.7,0c0,1.2,0,2.3,0,3.4C53.2,38.4,56,38.4,58.8,38.4z" />
                  <path d="M35.1,23.2c0.9,0,1.7,0.7,1.7,1.6c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C33.4,24,34.2,23.2,35.1,23.2z" />
                  <path d="M23.3,38.4c0,0.9-0.7,1.7-1.6,1.7c-1,0-1.7-0.7-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C22.5,36.8,23.2,37.5,23.3,38.4z" />
                </g>
              </svg>
              
            </span>
            </Link>
          </div>



          <div class="col-md-3 col-lg-3 boxJob">
          <Link
              to={JobData[9].link}
              state={{
                Text: JobData[9].Text,
                componentIdentifier: JobData[9].componentIdentifier,
                JD: JobData[9].JD,
                QUAL: JobData[9].QUAL,
                GoodToHave:JobData[9].GoodToHave,
                SoftSkills:JobData[9].SoftSkills,

              }}
              className="text-decoration-none"
            >
            <h3>Firmware Engineer</h3>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="zondicons:education"
                style={{
                  color: "#e10e0e",
                  marginTop: ".2rem",
                  marginRight: "0.5rem",
                }}
              />
              <p>Exp:4 to 20 Years</p>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="openmoji:location-indicator-red"
                style={{ marginTop: ".2rem", marginRight: "0.5rem" }}
              />

              <p>Location:Bengaluru</p>
            </div>
            <a href="#">
              <button>Know More</button>
            </a>
            <span className="count">
              
            <svg
                width="35"
                height="35"
                viewBox="0 0 60 60"
                fill="#f50057"
                stroke="#000000"
                stroke-width="0.85"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M58.5,53.2c-0.1,0.2-0.1,0.3-0.2,0.5c-0.5,1.5-2,2.5-3.6,2.3c-1.6-0.2-2.8-1.6-2.8-3.2c0-1.6,1.2-3,2.7-3.2c1.7-0.3,3.2,0.6,3.7,2.2c0.1,0.2,0.1,0.3,0.2,0.5C58.5,52.5,58.5,52.9,58.5,53.2z" />
                  <path d="M1.5,52.2c0.1-0.2,0.1-0.3,0.2-0.5c0.5-1.6,2.1-2.4,3.7-2.2C6.9,49.8,8,51.2,8,52.7c0,1.6-1.2,3-2.7,3.2c-1.6,0.3-3.1-0.7-3.6-2.2c-0.1-0.2-0.1-0.3-0.2-0.5C1.5,52.9,1.5,52.6,1.5,52.2z" />
                  <path d="M21.7,45.4c-1.2,0-2.2,0-3.4,0c0-4.4,0-8.9,0-13.4c-0.8,0-1.5,0-2.3,0c0.1-0.2,0.2-0.4,0.3-0.5c1.6-2.3,3.7-4.1,6.3-5.4c0.3-0.2,0.6-0.1,0.9,0.1c3.9,3,9.2,3,13.1,0c0.3-0.3,0.6-0.3,1-0.1c2.5,1.3,4.6,3,6.2,5.3c0.1,0.1,0.2,0.3,0.4,0.5c-0.9,0-1.6,0-2.5,0c0,4.5,0,8.9,0,13.4c-1.1,0-2.1,0-3.2,0c0-4.4,0-8.9,0-13.3c-5.6,0-11.1,0-16.7,0C21.7,36.5,21.7,40.9,21.7,45.4z" />
                  <path d="M37.4,11.5c1.1,0,2.2,0,3.2,0c0,1.1,0,2.2,0,3.3c-7.1,0-14.1,0-21.2,0c0-1.1,0-2.2,0-3.3c1,0,2,0,3,0c0.3-1.8,1.1-3.4,2.6-4.7c0,1.6,0,3.1,0,4.6c1.1,0,2.1,0,3.2,0c0-2.4,0-4.7,0-7.1c1.1,0,2.2,0,3.4,0c0,2.4,0,4.7,0,7.1c1.1,0,2.1,0,3.2,0c0-1.5,0-3,0-4.6C36.3,8.1,37.1,9.6,37.4,11.5z" />
                  <path d="M15,45.4c-3.4,0-6.7,0-10.1,0c0-3.4,0-6.7,0-10.1c3.4,0,6.7,0,10.1,0C15,38.7,15,42,15,45.4z" />
                  <path d="M24.9,35.3c3.4,0,6.7,0,10.1,0c0,3.4,0,6.7,0,10.1c-3.4,0-6.7,0-10.1,0C24.9,42.1,24.9,38.7,24.9,35.3z" />
                  <path d="M44.8,35.3c3.4,0,6.7,0,10.1,0c0,3.4,0,6.7,0,10.1c-3.4,0-6.7,0-10.1,0C44.8,42.1,44.8,38.7,44.8,35.3z" />
                  <path d="M22.5,18.1c5,0,10,0,14.9,0c0.2,2.8-2.4,6.9-7,7.2C26.3,25.6,22.5,22.2,22.5,18.1z" />
                  <path d="M24.9,52.7c0,1.8-1.5,3.2-3.3,3.2c-1.8,0-3.3-1.5-3.2-3.3c0-1.8,1.5-3.2,3.3-3.2C23.5,49.5,24.9,50.9,24.9,52.7z" />
                  <path d="M41.7,52.7c0,1.8-1.5,3.2-3.3,3.2c-1.8,0-3.3-1.5-3.3-3.3c0-1.8,1.5-3.2,3.3-3.2C40.3,49.5,41.7,50.9,41.7,52.7z" />
                  <path d="M10.5,55.9c1.1-3,1.1-3.9,0-6.4c1.8,0,3.6,0,5.5,0c-1.1,2.1-1.1,4.3,0,6.4C14.1,55.9,12.4,55.9,10.5,55.9z" />
                  <path d="M27.3,55.9c1.1-2.2,1.1-4.3,0-6.5c1.8,0,3.6,0,5.5,0c-1.1,2.1-1.1,4.3,0,6.5C31,55.9,29.2,55.9,27.3,55.9z" />
                  <path d="M49.6,56c-1.9,0-3.7,0-5.5,0c1.1-2.2,1.1-4.3,0-6.5c1.8,0,3.6,0,5.5,0C48.5,51.6,48.5,53.8,49.6,56z" />
                </g>
              </svg>

              
            </span>
            </Link>
          </div>




          <div class="col-md-3 col-lg-3 boxJob">
          <Link
              to={JobData[10].link}
              state={{
                Text: JobData[10].Text,
                componentIdentifier: JobData[10].componentIdentifier,
                JD: JobData[10].JD,
                QUAL: JobData[10].QUAL,
                GoodToHave:JobData[10].GoodToHave,
                SoftSkills:JobData[10].SoftSkills,
              }}
              className="text-decoration-none"
            >
            <h3>Embedded Engineer</h3>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="zondicons:education"
                style={{
                  color: "#e10e0e",
                  marginTop: ".2rem",
                  marginRight: "0.5rem",
                }}
              />
              <p>Exp:4 to 20 Years</p>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <Icon
                icon="openmoji:location-indicator-red"
                style={{ marginTop: ".2rem", marginRight: "0.5rem" }}
              />

              <p>Location:Bengaluru</p>
            </div>
            <a href="#">
              <button>Know More</button>
            </a>
            <span className="count">
              
            <svg
                width="35"
                height="35"
                viewBox="0 0 60 60"
                fill="#f50057"
                stroke="#000000"
                stroke-width="0.85"
                xmlns="http://www.w3.org/2000/svg"
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
</span>
            </Link>
          </div>




        </div>
      </div>
    </section>
  );
};

export default CardJob;
