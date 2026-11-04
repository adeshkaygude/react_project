import React, { useEffect } from "react";

// Child component receives counter and data through props
const UseEffectProps = ({ counter, data }) => {
  // useEffect runs when component mounts and counter changes
  useEffect(() => {
    // Call print function whenever counter changes
    print();
  }, [counter]);

  // Function to print updated counter value in console
  function print() {
    console.log("Counter updated:", counter);
  }

  return (
    <div>
      {/* Display counter value received from parent */}
      <h2>counter : {counter}</h2>

      {/* Display data value received from parent */}
      <h2>data : {data}</h2>
    </div>
  );
};

export default UseEffectProps;
