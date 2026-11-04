import { useState } from "react";
import UseEffectProps from "./UseEffectProps";

// Parent component
const HandlePropsUsingUseEffect = () => {
  // Create two state variables: counter and data
  const [counter, setcounter] = useState(0);
  const [data, setdata] = useState(0);

  // Function to increase counter by 1
  const handlecount = () => {
    setcounter(counter + 1);
  };

  // Function to increase data by 1
  const handledata = () => {
    setdata(data + 1);
  };

  return (
    <div>
      {/* Pass counter and data values to child component using props */}
      <UseEffectProps counter={counter} data={data} />

      {/* Call handlecount function when button is clicked */}
      <button onClick={handlecount}>count +1</button>

      {/* Call handledata function when button is clicked */}
      <button onClick={handledata}>data +1</button>
    </div>
  );
};

export default HandlePropsUsingUseEffect;
