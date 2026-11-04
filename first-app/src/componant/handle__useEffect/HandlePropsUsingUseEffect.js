import { useState } from "react";
import UseEffectProps from "./UseEffectProps";

// Parent component managing state and passing values as props
const HandlePropsUsingUseEffect = () => {
  // State variables for counter and data
  const [counter, setcounter] = useState(0);
  const [data, setdata] = useState(0);

  // Handler to increment counter state
  const handlecount = () => {
    setcounter(counter + 1);
  };

  // Handler to increment data state
  const handledata = () => {
    setdata(data + 1);
  };

  return (
    <div>
      {/* Passing counter and data state as props to child component */}
      <UseEffectProps counter={counter} data={data} />
      <button onClick={handlecount}>count +1</button>
      <button onClick={handledata}>data +1</button>
    </div>
  );
};

export default HandlePropsUsingUseEffect;
