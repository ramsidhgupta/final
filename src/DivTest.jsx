import React from "react";
import "./DivTest.css";

const DivTest = () => {
  return (
    <section id="services" class="services">
      <div class="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div class="services-carousel">
              <div class="service-item overlayWorld">
                <h2
                  className="fw-bold"
                  style={{
                    letterSpacing: ".08em",
                  }}
                >
                  RTL Design
                </h2>
                <p
                  style={{
                    letterSpacing: ".08em",
                    fontSize: "1em",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  TechsoC offers comprehensive ASIC/FPGA Design Services,
                  leveraging cutting-edge tools, technologies, and expertise.
                  Our offerings include Micro-architecture development, RTL
                  Design, Linting, CDC, LEC and Synthesis.
                </p>
                <div className="logosDiv" style={{ display: "flex" }}>
                  <div class="scroll">
                    <div class="RightToLeft">
                      <p>
                        <span className="fast-flicker1">verilog </span>
                        <span className="flicker1">system verilog </span>
                      </p>
                      <p>
                        <span className="fast-flicker2">lint </span>
                        <span className="flicker2">& </span>
                        <span className="fast-flicker2">Cdc </span>
                      </p>
                      <p>
                        <span className="fast-flicker">asic</span>
                        <span className="flicker">/fpga </span>
                      </p>
                      <p>
                        <span className="fast-flicker3">Spyglass </span>
                        <span className="flicker3">Xilinx </span>
                        <span className="fast-flicker3">Vivado </span>
                      </p>
                    </div>
                    <div class="LeftToRight mt-3">
                      <p>
                        <span className="fast-flicker3">Synthesis </span>
                      </p>
                      <p>
                        <span className="fast-flicker2">Static </span>
                        <span className="flicker2">Time </span>
                        <span className="fast-flicker2">Analysis </span>
                      </p>
                      <p>
                        <span className="fast-flicker1">Clock </span>
                        <span className="flicker1">Domain </span>
                        <span className="fast-flicker1">Crossing </span>
                        <span className="flicker1">Analysis </span>
                      </p>
                      <p>
                        <span className="fast-flicker">Area </span>
                        <span className="flicker">/Power </span>
                        <span className="fast-flicker">optimizations </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div class="services-carousel">
              <div class="service-item overlayWorld">
                <h2
                  className="fw-bold"
                  style={{
                    letterSpacing: ".08em",
                  }}
                >
                  Design & Verification
                </h2>
                <p
                   style={{
                    letterSpacing: ".08em",
                    fontSize: "1em",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  To help our customers deliver complex designs within their
                  time, budget, and infrastructure constraints, we combine our
                  engineering, technological and industrial expertise with our
                  best practices (processes, methodologies, and tools) in
                  hardware design verification.
                </p>
                <div className="logosDiv" style={{ display: "flex" }}>
                  <div class="scroll">
                    <div class="RightToLeft">
                      <p>
                        <span className="fast-flicker1">Performance </span>
                        <span className="flicker1">Tests </span>
                        <span className="fast-flicker1">Verification </span>
                      </p>
                      <p>
                        <span className="fast-flicker2">VIP </span>
                        <span className="flicker2">Development </span>
                      </p>
                      <p>
                        <span className="fast-flicker">Formal </span>
                        <span className="flicker">Verification </span>
                      </p>
                      <p>
                        <span className="fast-flicker3">Power </span>
                        <span className="flicker3">Aware </span>
                        <span className="fast-flicker3">Verification</span>
                      </p>
                    </div>
                    <div class="LeftToRight mt-3">
                      <p>
                        <span className="fast-flicker3">SystemC </span>
                        <span className="flicker3">TLM </span>
                        <span className="fast-flicker3">Modelling</span>
                      </p>
                      <p>
                        <span className="fast-flicker2">UVM </span>
                        <span className="flicker2">Development</span>
                      </p>
                      <p>
                        <span className="fast-flicker1">FPGA </span>
                        <span className="flicker1">Emulation </span>
                      </p>
                      <p>
                        <span className="fast-flicker">SW </span>
                        <span className="flicker">Emulation </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div class="services-carousel">
              <div class="service-item overlayWorld">
                <h2
                  className="fw-bold"
                  style={{
                    letterSpacing: ".08em",
                  }}
                >
                  Physical Design & DFT Services
                </h2>
                <p
                   style={{
                    letterSpacing: ".08em",
                    fontSize: "1em",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Our proven physical design flow, methodologies and rich
                  experience enable us to deliver physical design implementation
                  with superior performance. We have dedicated experts for each
                  design stage, methodology & tools and have undertaken projects
                  across Networking, Mass Storage and Mobile for Area, Power &
                  Time optimization. Interface expertise includes MIPI, DDR,
                  PCIe, SATA, USB, AMBA etc.
                </p>
                <div className="logosDiv" style={{ display: "flex" }}>
                  <div class="scroll">
                    <div class="RightToLeft">
                      <p>
                        <span className="fast-flicker1">Block </span>
                        <span className="flicker1">SoC </span>
                        <span className="fast-flicker1">Level </span>
                      </p>
                      <p>
                        <span className="fast-flicker2">Floor </span>
                        <span className="flicker2">Plan </span>
                      </p>
                      <p>
                        <span className="fast-flicker">Power </span>
                        <span className="flicker">Planning </span>
                        <span className="fast-flicker">& </span>
                        <span className="flicker">Optimization </span>
                      </p>
                      <p>
                        <span className="fast-flicker3">Placement </span>
                        <span className="flicker3">& </span>
                        <span className="fast-flicker3">Routing </span>
                      </p>
                    </div>
                    <div class="LeftToRight mt-3">
                      <p>
                        <span className="fast-flicker3">Clock </span>
                        <span className="flicker3">Tree </span>
                        <span className="fast-flicker3">Synthesis </span>
                      </p>
                      <p>
                        <span className="fast-flicker2">Static </span>
                        <span className="flicker2">and </span>
                        <span className="fast-flicker2">Dynamic </span>
                        <span className="flicker2">EM/IR</span>
                      </p>
                      <p>
                        <span className="fast-flicker1">Physical </span>
                        <span className="flicker1">Verification</span>
                      </p>
                      <p>
                        <span className="fast-flicker">Extraction </span>
                      </p>
                      <p>
                        <span className="fast-flicker1">ECO </span>
                        <span className="flicker1">Implementation</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div class="services-carousel">
              <div class="service-item overlayWorld">
                <h2
                  className="fw-bold"
                  style={{
                    letterSpacing: ".08em",
                  }}
                >
                  Emulation
                </h2>
                <p
                   style={{
                    letterSpacing: ".08em",
                    fontSize: "1em",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Experience bug free software with TechsoC’s test automation
                  frameworks and error diagnosis system. Our team of competent
                  engineers working in the FPGA Emulation, STA and Validation
                  team are experts in prototyping and emulating complex IC
                  designs for streamlined system debugging and software
                  bring-up.
                </p>
                <div className="logosDiv" style={{ display: "flex" }}>
                  <div class="scroll">
                    <div class="RightToLeft">
                      <p>
                        <span className="fast-flicker1">Emulaion </span>
                      </p>
                      <p>
                        <span className="fast-flicker2">FPGA </span>
                        <span className="flicker2">Design</span>
                      </p>
                      <p>
                        <span className="fast-flicker">FPGA </span>
                        <span className="flicker">Prototyping </span>
                      </p>
                      <p>
                        <span className="fast-flicker3">IP </span>
                        <span className="flicker3">Validation </span>
                      </p>
                    </div>
                    <div class="LeftToRight mt-3">
                      <p>
                        <span className="fast-flicker3">Protocol </span>
                        <span className="flicker3">Qualification </span>
                      </p>
                      <p>
                        <span className="fast-flicker2">GLS </span>
                      </p>
                      <p>
                        <span className="fast-flicker1">Post </span>
                        <span className="flicker1">Silicon </span>
                        <span className="fast-flicker1">Validation</span>
                      </p>
                      <p>
                        <span className="fast-flicker">Processor </span>
                        <span className="flicker">Based </span>
                        <span className="fast-flicker">Emulation </span>
                      </p>
                      <p>
                        <span className="fast-flicker1">Iterative </span>
                        <span className="flicker1">Design </span>
                        <span className="fast-flicker1">Process </span>
                      </p>
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

export default DivTest;
