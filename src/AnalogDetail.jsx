import React, {useState} from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const AnalogDetail = ({heading1, lottie2}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
  
    <div class="card mr-3"     style={{
      marginRight: '40px',
      height: '15vh',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
      backdropFilter: 'blur(2px)', // Apply blur effect
      border: '1px solid #000', // Add border
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Add box-shadow effect
      transition: 'box-shadow 0.3s' // Add transition for box-shadow
  }}

                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div style={{ marginRight: "10px" }}>
          <Player
            src={lottie2}
            className="player"
            loop
            autoplay
            style={{ height: '40px', width: '40px' }}
        />
           
          </div>
          <span class="fw-bold">{heading1}</span>
        </div>
      </div>
    </div>
    
  )
}

export default AnalogDetail;



// style={{ marginRight: '40px', height:'15vh', width:'100%', backgroundColor: isHovered ? 'red' : '#fff',
//                     transition: 'background-color 0.3s'
//                 }}