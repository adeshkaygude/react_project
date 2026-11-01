import { useState } from "react";

const Count = () => {
  let [count, setcount] = useState(0);

  const increaseCount = () => {
    setcount(count + 1);
  };

  const decreaseCount = () => {
    setcount(count - 1);
  };

  const resetCount = () => {
    setcount((count = 0));
  };
  return (
    <div>
      <h2>count : {count}</h2>
      <button onClick={increaseCount}>increase Count</button>
      <br />
      <button onClick={decreaseCount}>decrease Count</button>
      <br />
      <button onClick={resetCount}>reset Count</button>
    </div>
  );
};
export default Count;
