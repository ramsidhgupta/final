import React, {useState} from "react";

const AsicCard = ({ Data }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    
      <div class="card" style={{height:'18vh', backgroundColor: isHovered ? 'skyblue' : '#fff',
                    transition: 'background-color 0.3s'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div style={{ marginRight: "10px" }}>{Data.svg}</div>
            <span class="fw-bold">{Data.title}</span>
          </div>
        </div>
      </div>
    
  );
};

export default AsicCard;
