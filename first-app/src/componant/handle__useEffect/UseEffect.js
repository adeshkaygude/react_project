import { useEffect, useState } from "react";

// Component demonstrating useEffect dependency on local state
const UseEffect = () => {
  const [count, setCount] = useState(0);

  // Button click handler to increment count state
  const updateCount = () => {
    setCount(count + 1);
  };

  // useEffect runs on initial render and whenever 'count' state changes
  useEffect(() => {
    // Helper function defined inside useEffect to satisfy dependency requirements
    function functionCall() {
      console.log("Current count:", count);
    }
    functionCall();
  }, [count]);

  return (
    <div>
      <h1>count = {count}</h1>
      <button onClick={updateCount}>+1</button>
    </div>
  );
};

export default UseEffect;
