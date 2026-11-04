import { useEffect } from "react";

// Child component to demonstrate React Component Lifecycle phases using useEffect
const Componet_Life = ({ count, data }) => {
  // 1. MOUNTING PHASE (equivalent to componentDidMount)
  // Empty dependency array [] means this runs only once when the component is inserted into the DOM
  useEffect(() => {
    console.log("Mounting Phase: Component has been mounted to the DOM");
  }, []);

  // 2. UPDATING PHASE (equivalent to componentDidUpdate)
  // Runs whenever the 'count' prop changes
  useEffect(() => {
    console.log("Updating Phase: 'count' prop updated to:", count);
  }, [count]);

  // 3. UNMOUNTING PHASE (equivalent to componentWillUnmount)
  // The cleanup function returned here runs right before the component is destroyed/removed from the DOM
  useEffect(() => {
    return () => {
      console.log("Unmounting Phase: Component is being removed from the DOM (cleanup)");
    };
  }, []);

  return (
    <div>
      {/* Display count received from parent */}
      <h1>Count is {count}</h1>

      {/* Display data received from parent */}
      <h1>Data is {data}</h1>
    </div>
  );
};

export default Componet_Life;
