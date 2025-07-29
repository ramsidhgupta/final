import React, { useEffect } from "react";
import { balloons, textBalloons } from "balloons-js";

const Balloonsanim = () => {
  useEffect(() => {
    balloons();
    textBalloons([
      {
        text: "🎈🎉🚀",
        fontSize: 100,
        color: "#ff0000",
      },
    ]);
  }, []);

  return (
    <div>
      <h2>🎉 Congratulations! 🎉</h2>
    </div>
  );
};

export default Balloonsanim;