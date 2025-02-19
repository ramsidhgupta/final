import React from "react";

// import "./ErrorModal.css";

const ErrorModal = ({ show, handleClose, newErrors }) => {
  if (!show) return null;
 

  return (
   
      <div className="popup-container ">
        <div className="popup-content">
          <div className="bg">
            <h2 style={{ color: "black", fontWeight: 800 }}>
              Please Check the following errors
            </h2>
            <ul >
              {Object.entries(newErrors).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="btn btn-info"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default ErrorModal;

{
  /* <div>
      <h2>Object Details:</h2>
      <ul>
        {Object.entries(newErrors).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <button onClick={handleClose}>Close</button>
    </div> */
}
