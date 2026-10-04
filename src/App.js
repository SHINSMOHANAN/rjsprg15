import React from "react";
import useToggle from "./useToggle";

function App() {

  // TODO:
  // Use the custom useToggle Hook here
  // Example:
  // const [isOn, toggle] = useToggle(false);


  return (
    <div className="container">

      <h1>Custom Toggle Hook</h1>

      <div className="card">

        <h2>
          Status:
          {/* TODO: Display ON when value is true
              and OFF when value is false */}
        </h2>

        <button>
          {/* TODO: Call the toggle function when clicked */}
          Toggle
        </button>

      </div>

    </div>
  );
}

export default App;
