import React, { useEffect } from "react";

// Child component that receives counter and data as props
const UseEffectProps = ({ counter, data }) => {
  // useEffect hook configured with [counter] dependency array:
  // Runs on initial mount and ONLY when the 'counter' prop changes.
  // It will NOT trigger when 'data' prop updates.
  useEffect(() => {
    print();
  }, [counter]);

  // Helper function to log the updated counter value
  function print() {
    console.log("Counter updated:", counter);
  }

  return (
    <div>
      <h2>counter : {counter}</h2>
      <h2>data : {data}</h2>
    </div>
  );
};

export default UseEffectProps;
