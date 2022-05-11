import { useState, useEffect } from "react";
const Timer = ({ startTime, id, deleteCounter }) => {
  const originalInput = startTime;
  const [time, setTime] = useState(startTime);
  const [play, setPlay] = useState(true);
  const [isAtZero, setIsAtZero] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) setTime(time - 1 * play);
      if (time === 0) setIsAtZero(true);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time, play]);

  return (
    <div className="timer">
      <div className="time-display">
        <div className="time">
          {time}
          <div className="second">s</div>
        </div>
      </div>
      <div className="btn-array">
        <button
          className="btn play-pause"
          disabled={isAtZero}
          style={isAtZero ? { opacity: 0.5 } : null}
          onClick={() => {
            setPlay(!play);
          }}
        >
          {play === false ? "Play" : "Pause"}
        </button>
        <button
          className="btn reset"
          disabled={isAtZero}
          style={isAtZero ? { opacity: 0.5 } : null}
          onClick={() => setTime(originalInput)}
        >
          Reset
        </button>
        <button className="btn delete" onClick={() => deleteCounter(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Timer;
