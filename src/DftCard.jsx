import React, {useState} from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const DftCard = ({Data}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    // <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-4">
    <div class="card" style={{height:'15vh', backgroundColor: isHovered ? 'skyblue' : '#fff',
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
    // </div>
  )
}

export default DftCard