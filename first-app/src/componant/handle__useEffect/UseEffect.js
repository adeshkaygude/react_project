import { useEffect, useState } from "react";

// Component demonstrating useEffect dependency on local state
const UseEffect = () => {
  const [count, setcount] = useState(0);

  // Button click handler to increment count state
  const updateCount = () => {
    setcount(count + 1);
  };

  // useEffect runs on initial render and whenever 'count' state changes
  useEffect(() => {
    functionCall();
  }, [count]);

  // Helper function to log current count
  function functionCall() {
    console.log("Current count:", count);
  }

  return (
    <div>
      <h1>count = {count}</h1>
      <button onClick={updateCount}>+1</button>
    </div>
  );
};

export default UseEffect;
