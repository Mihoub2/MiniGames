import { CountdownCircleTimer } from "react-countdown-circle-timer";

import React from "react";

import "../components/countdown.css";

import Cards from "../components/Cards";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const Memory = () => {
  return (
    <div className="memoryContainer">
      <Cards />
      <div className="App">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: false, delay: 1 })}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
      </div>
    </div>
  );
};

export default Memory;
