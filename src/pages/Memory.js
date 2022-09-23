import React from "react";
import Cards from "../components/Cards";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RenderTime = ({ remainingTime }) => {
  const navigate = useNavigate();

  const [off, setOff] = useState(false);

  if (remainingTime === 0) {
    setOff(true);
  }

  return (
    <div className="timer">
      <div className="text">Temps restant</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
      {off === true ? navigate("/home") : ""}
    </div>
  );
};

const Memory = () => {
  return (
    <div className="memoryContainer">
      <Cards />
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={1000}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default Memory;
