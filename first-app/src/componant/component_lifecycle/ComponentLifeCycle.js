import { useState } from "react";
import Componet_Life from "./Componet_Life";

// Parent component managing state and controlling the child component's lifecycle
const ComponentLifeCycle = () => {
  // State for 'count' - passed as prop to trigger Updating phase
  const [count, setCount] = useState(0);

  // State for 'data' - demonstrates updating state without triggering count effect
  const [data, setData] = useState(0);

  // State to toggle Mounting and Unmounting of the child component
  const [display, setDisplay] = useState(true);

  // Handlers to update count and data states
  const updateCount = () => {
    setCount((prev) => prev + 1);
  };

  const updateData = () => {
    setData((prev) => prev + 1);
  };

  // Toggle child component to demonstrate mount (show) and unmount (hide)
  const toggleComponent = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <div>
      {/* Conditionally mount or unmount child component based on display state */}
      {display ? <Componet_Life count={count} data={data} /> : null}

      {/* Button to update count (triggers update phase) */}
      <button onClick={updateCount}>count +1</button>

      <br />
      <br />

      {/* Button to update data */}
      <button onClick={updateData}>data +1</button>

      <br />
      <br />

      {/* Button to mount/unmount child component */}
      <button onClick={toggleComponent}>
        Component: {display ? "Hide (Unmount)" : "Show (Mount)"}
      </button>
    </div>
  );
};

export default ComponentLifeCycle;
