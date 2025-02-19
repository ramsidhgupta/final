import React, { useState } from "react";
import "./Popup.css";

const Popup = ({ wordsArray, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
 
  return (
    isVisible && (
      <div className="popup-container">
        <div className="popup-content">
          <div className="bg">
          <h2 style={{ color: "black", fontWeight: 800 }}>
                Our Experties In
              </h2>
            <ul>
              {wordsArray.map((word, index) => (
                <li key={index} className="fw-bold">{word}</li>
              ))}
            </ul>
          </div>

          <div style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-info" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
