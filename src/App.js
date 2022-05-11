import "./styles.css";
import { useState } from "react";
import Main from "./components/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TimerArray from "./components/TimerArray";

function App() {
  const [counterArray, setcounterArray] = useState([]);

  const notify = (message) => {
    toast.warn(message, { autoClose: 2000 });
  };

  const addCounter = (time) => {
    setcounterArray([...counterArray, { id: Date.now(), startTime: time }]);
  };

  const deleteCounter = (id) => {
    const temp = counterArray.filter((counter) => counter.id !== id);
    setcounterArray(temp);
  };

  return (
    <div className="App">
      <Main
        addCounter={addCounter}
        counterArray={counterArray}
        notify={notify}
      />
      <TimerArray counterArray={counterArray} deleteCounter={deleteCounter} />
      <ToastContainer limit={2} />
    </div>
  );
}

export default App;
