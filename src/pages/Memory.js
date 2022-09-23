import React from "react";
import Cards from "../components/Cards";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import LostModal from "../components/LostModal";
// import WinModal from "../components/WinModal";

import "./memoryContainer.css";

const RenderTime = ({ remainingTime, elapsedTime }) => {
  const navigate = useNavigate();

  const [timerIsFinished, setTimerIsFinished] = useState(false);

  // useEffect sinon boucle infinie
  useEffect(() => {
    if (elapsedTime === 20) {
      setTimerIsFinished(true);
    }
  }, [elapsedTime]); // 👈️

  return (
    <div className="timer">
      <div className="text">Temps restant</div>
      <div className="value">{remainingTime}</div>
      <div className="text">secondes</div>
      {timerIsFinished === true ? navigate("/looser") : ""}
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
          duration={20}
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
