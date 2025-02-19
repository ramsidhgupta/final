import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from './lottieFiles/BackGround1.json'; 

function LottieBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        width: '100%',
        height: '50vh',
        top: 0,
        left: 0,
      }}
    />
  );
}

export default LottieBackground;
