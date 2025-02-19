import React from "react";

const WhyElement = (props) => {
  const { heading1, icons } = props;
  return (
    <>
      <div className="containerBlob mx-auto mt-5">
        <div className="cardBlob d-flex flex-column justify-content-center align-items-center">
          <img
            src={icons}
            className="img-fluid"
            style={{ maxWidth: "40%", height: "auto" }}
            alt=""
          />
          <h5 className="text-center text-black" style={{ letterSpacing: "0.1rem"}}>{heading1}</h5>
        </div>
      </div>
    </>
  );
};

export default WhyElement;
