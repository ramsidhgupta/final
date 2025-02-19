import React, { useState } from 'react';


const Card = ({video, header, subheader, paragraph, subheader1, paragraph1}) => {

    
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleMouseLeave = () => {
    setIsCardHovered(false);
  };

  return (
    <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card-video-overlay position-absolute">
        {isCardHovered && (
          <video className="card-video position-absolute" muted loop autoPlay>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
       
      </div>
      <div className="card-body d-flex flex-column justify-content-center">
        <h4 className="headerCard" style={{ color: "#008F58", fontWeight: 600 }}>{header}</h4>
        <p className="paragraphCard">
          <span style={{ color: "#1268b3", fontWeight: "bold" }}>{subheader}</span> {paragraph}</p>
          <p>
          <span style={{ color: "#1268b3", fontWeight: "bold" }}>{subheader1}</span> {paragraph1}</p> 
      </div>
    </div>
  );
};

export default Card;
