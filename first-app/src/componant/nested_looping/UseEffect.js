import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setcount] = useState(0);

  // Button click function
  const updateCount = () => {
    setcount(count + 1);
  };

  // useEffect runs when count changes
  useEffect(() => {
    functionCall();
  }, [count]);

  // Normal function
  function functionCall() {
    console.log(count);
  }

  return (
    <div>
      <h1>count = {count}</h1>
      <button onClick={updateCount}>+1</button>
    </div>
  );
};

export default UseEffect;
