import { useState } from "react";
import UseEffectProps from "./UseEffectProps";

// Parent component managing state and passing values as props
const HandlePropsUsingUseEffect = () => {
  // State variables for counter and data
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  // Handler to increment counter state
  const handleCount = () => {
    setCounter((prev) => prev + 1);
  };

  // Handler to increment data state
  const handleData = () => {
    setData((prev) => prev + 1);
  };

  return (
    <div>
      {/* Passing counter and data state as props to child component */}
      <UseEffectProps counter={counter} data={data} />
      <button onClick={handleCount}>count +1</button>
      <button onClick={handleData} style={{ marginLeft: "10px" }}>
        data +1
      </button>
    </div>
  );
};

export default HandlePropsUsingUseEffect;
