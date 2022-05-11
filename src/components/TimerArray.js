import Timer from "./Timer";
const TimerArray = ({ counterArray, deleteCounter }) => {
  return (
    <div className="timer-array">
      {counterArray.map((element) => (
        <Timer
          key={element.id}
          startTime={element.startTime}
          id={element.id}
          deleteCounter={deleteCounter}
        />
      ))}
    </div>
  );
};

export default TimerArray;
