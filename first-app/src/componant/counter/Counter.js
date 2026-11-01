import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const increaseCount = () => {
    setcount((count) => count + 1);
  };

  const decreaseCount = () => {
    setcount((count) => count - 1);
  };
  const resetCount = () => setcount((count) => 0);
  return (
    <div>
      <h1> count : {count}</h1>
      <button onClick={increaseCount}>increase count</button>
      <br />
      <button onClick={decreaseCount}>decrease count</button>
      <br />
      <button onClick={resetCount}>reset count</button>
    </div>
  );
};
export default Counter;
