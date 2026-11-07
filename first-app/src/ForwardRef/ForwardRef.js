import React, { useRef } from "react";
import UserRef from "./UserRef";

export default function ForwardRef() {
  // Create a ref to access the child component's input element
  const inputRef = useRef(null);

  // Update input value and focus on the input field
  const updateInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };

  return (
    <>
      <h1>Forward Ref Example</h1>

      {/* Pass the ref from parent to child component */}
      <UserRef ref={inputRef} />

      {/* Update the child input when the button is clicked */}
      <button onClick={updateInput}>Update Input Field</button>
    </>
  );
}
