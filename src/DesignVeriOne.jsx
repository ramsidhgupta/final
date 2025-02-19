import React, {useState} from "react";
import "./DesignVeriOne.css";
import Popup from "./Popup";
import chip1 from "./assets/ai_board_1.jpg";

const DesignVeriOne = () => {
    const [wordsState, setWordsState] = useState({
        "Design Verification": ["Strategic Planning",
        "Functional Planning",
        "Constrained random",
        "Coverage driven",
        "Assertion based",
        "Timing driven",
        "Performance driven",
        "Power driven",
        "Formal",
        "Gate level",
        "Post silicon"],
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
    <section
      data-cue="fadeIn"
      className="wrapper image-wrapper bg-image overlayMain"
      style={{
        top:'0', left:'0', width: '100%', height:'100%', backgroundColor:'rgba(0, 0, 0, 0.5)', borderRadius:'10px'}}
    >
      <div class="container py-18">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="fs-18 text-uppercase text-white mb-5">
              Design Verification Expertise
            </h2>
            <h2 class="mb-6 text-white" style={{fontWeight:'700'}}>
              Our team has developed reusable Verification components from
              scratch as well as used industry standard VIPs as part of
              environment to reduce time and improve quality of verification.
            </h2>
            <a
              className="btn btn-primary rounded mb-0 text-nowrap text-white"
              href="#"
              style={{ textDecoration: "none" }}
              onClick={(e) => handleSubmit(e, "Design Verification")}
            >Know More</a>
           
            
          </div>
        </div>
      </div>
    </section>
     {isPopupVisible && <Popup wordsArray={selectedWords} onClose={closePopup} />}
     </>
  );
};

export default DesignVeriOne;
