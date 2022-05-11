import { useEffect, useRef } from "react";

const Main = ({ addCounter, counterArray, notify }) => {
  const inputBar = useRef(null);

  const handleClick = () => {
    if (counterArray.length === 10) {
      notify("Only 10 counters are allowed");
    } else if (inputBar.current.value > 0) {
      addCounter(inputBar.current.value);
      inputBar.current.value = "";
    } else {
      notify("Please enter a positive value");
    }
  };
  useEffect(() => {
    inputBar.current.focus();
  }, []);

  return (
    <div className="main">
      <h1>Timer Value</h1>
      <div className="bar-component">
        <input
          type="number"
          placeholder="Enter time in seconds"
          min="1"
          ref={inputBar}
          required
          onKeyUp={(e) => {
            if (e.key === "Enter") handleClick();
          }}
        />
        <button className="btn" onClick={handleClick}>
          Add timer
        </button>
      </div>
    </div>
  );
};

export default Main;
