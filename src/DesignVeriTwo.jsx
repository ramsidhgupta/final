import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import './DesignVeriTwo.css';


const WhyElement = (props) => {
  const { heading1, lottie2 } = props;
  return (
    <>
      <div className="containerBlobDV">
        <div className="cardBlobDV">
        <Player
            src={lottie2}
            className="player"
            loop
            autoplay
            style={{ height: '40px', width: '40px' }}
        />
          {/* <img src={icons} width="60%" height="100vh" style={{marginLeft:"3rem"}} alt="" /> */}
          <h5 className="custom-text text-center">{heading1}</h5>
          <h5 className="custom-text text-center">Know More</h5>
        </div>
      </div>
    </>
  );
};

export default WhyElement;
