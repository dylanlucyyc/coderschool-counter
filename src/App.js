import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter</h1>
      <span
        id="value"
        style={{ color: count < 0 ? "red" : count > 0 ? "green" : "" }}
      >
        {count}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-decrease"
          onClick={() => setCount(count - 1)}
        >
          DECREASE
        </button>
        <button className="btn btn-reset" onClick={() => setCount(0)}>
          RESET
        </button>
        <button
          className="btn btn-increase"
          onClick={() => setCount(count + 1)}
        >
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;
