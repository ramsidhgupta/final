import React, {useState} from "react";

const AnalogCard = ({ Data }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    
      <div class="card" style={{height:'13vh', width:'100%', backgroundColor: isHovered ? 'skyblue' : '#fff',
                    transition: 'background-color 0.3s'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div style={{ marginRight: "6px" }}>{Data.svg}</div>
            <span class="fw-bold">{Data.title}</span>
          </div>
        </div>
      </div>
    
  );
};

export default AnalogCard;
