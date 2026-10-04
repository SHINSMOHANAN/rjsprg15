import React from "react";
import useToggle from "./useToggle";

function App() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div className="app">
      <h1>Custom Toggle Hook</h1>

      <div className="toggle-box">
        <h2>
          Status: <span>{isOn ? "ON" : "OFF"}</span>
        </h2>

        <button onClick={toggle}>Toggle</button>
      </div>
    </div>
  );
}

export default App;
