import { useRef } from "react";

// Component demonstrating the useRef hook for direct DOM manipulation
const UseRefHook = () => {
  // Create references to access DOM elements directly without triggering re-renders
  const inputRef = useRef(null);
  const h1Ref = useRef(null);

  // Input field handler: focuses input, modifies style, placeholder, and value
  const inputHandler = () => {
    console.log("inputRef object:", inputRef);

    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "Enter password";
    inputRef.current.value = "123";
  };

  // Toggle input element visibility using DOM style manipulation
  const toggleHandler = () => {
    if (inputRef.current.style.display !== "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };

  // Change heading text color using h1Ref
  const handleClick = () => {
    h1Ref.current.style.color = "green";
  };

  return (
    <>
      <h1>useRef Hook</h1>

      {/* Attach ref to input element */}
      <input ref={inputRef} type="text" placeholder="Enter your name" />

      <br />
      <br />

      <button onClick={inputHandler}>Focus on input field</button>

      <br />
      <br />

      <button onClick={toggleHandler}>Toggle Input</button>

      <br />
      <br />

      {/* Attach ref to heading element */}
      <h1 ref={h1Ref}>Code step by step</h1>

      <button onClick={handleClick}>Change Heading Color</button>
    </>
  );
};

export default UseRefHook;
