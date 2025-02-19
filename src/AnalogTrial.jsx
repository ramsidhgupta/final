import React, { useState } from "react";
import "./AnalogTrial.css";
import Popup from "./Popup";

import case1 from "./images/chip2.jpg";
import case3 from "./images/chip3.jpg";

const AnalogTrial = () => {
  const [wordsState, setWordsState] = useState({
    "Analog Design": [
      "PLL Designs",
      "DLL Designs",
      "Phase Interpolators",
      "LDO Designs",
      "Bandgap voltage references",
      "Transceiver Designs",
      "Equalizers ( CTLE, DFE, FFE )",
      "Clock Data Recovery (CDR) Calibration blocks.",
      "Sense amplifier latches ",
      "Resistor compensation circuits",
      "ADC and DAC AFEs",
      "Termination Circuits",
      "ESD Implementation",
      "Channel modeling and Wire modeling",
    ],

    "Analog Layout": [
      "Double patterning techniques",
      "DSM sub 7nm &10nm complex DRCs",
      "Variable metal grids",
      "Density checks",
      "Reliability verification checks",
      "Electromigration checks ",
      "Rapid ESD ",
      "Latch-up issues",
      "Building customized ESD ADTs ",
      "Building customized MIMCAP ADTs ",
      "Post layout extraction debugging skills",
      "Special routing for high-speed critical nets",
    ],
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedWords, setSelectedWords] = useState([]);

  const openPopup = (wordsArray) => {
    setSelectedWords(wordsArray);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleSubmit = (event, text) => {
    event.preventDefault();
    const wordsArray = wordsState[text];
    openPopup(wordsArray);
  };

  return (
    <>
      <div class="container py-10 py-md-12">
        <div class="row" data-cue="slideInUp">
          <div className="col-lg-6 ">
            <a
              className="link-dark"
              href="#"
              style={{ textDecoration: "none" }}
              onClick={(e) => handleSubmit(e, "Analog Design")}
            >
              <article>
                <figure class="overlay overlay-1 hover-scale rounded mb-6 works-images">
                  <img src={case1} alt="" />

                  <span class="bg"></span>

                  <figcaption>
                    <h2 class="from-top mb-5 text-dark">More Details..</h2>
                  </figcaption>
                  <hr class="double my-8" />
                  <h2 class="from-top mt-5">Analog Design</h2>
                </figure>
              </article>
            </a>
          </div>

          <div className="col-lg-6">
            <a
              className="link-dark"
              href="#"
              style={{ textDecoration: "none" }}
              onClick={(e) => handleSubmit(e, "Analog Layout")}
            >
              <article>
                <figure class="overlay overlay-1 hover-scale rounded mb-6 works-images">
                  <img src={case3} alt="" />

                  <span class="bg"></span>

                  <figcaption>
                    <h2 class="from-top mb-5 text-danger">More Details..</h2>
                  </figcaption>
                  <hr class="double my-8" />
                  <h2 class="from-top mt-5">Analog Layout</h2>
                </figure>
              </article>
            </a>
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <Popup wordsArray={selectedWords} onClose={closePopup} />
      )}
    </>
  );
};

export default AnalogTrial;
