import React, {useState} from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const EmulCard = ({Data}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div class="card" style={{height:"15vh", backgroundColor: isHovered ? 'skyblue' : '#fff',
                    transition: 'background-color 0.3s'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div style={{ marginRight: "10px" }}>
          <Player
            src={Data.lottie}
            className="player"
            loop
            autoplay
            style={{ height: '40px', width: '40px' }}
        />
           
          </div>
          <span class="fw-bold">{Data.title}</span>
        </div>
      </div>
    </div>
  )
}

export default EmulCard