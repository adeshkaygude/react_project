import React, { useRef } from "react";

function UncontrolledComponent() {
  // Create references to access input elements directly
  const userRef = useRef();
  const passwordRef = useRef();

  // Uncontrolled form using document.querySelector()
  const handleform = (event) => {
    // Prevent the browser from refreshing the page on form submission
    event.preventDefault();

    // Get input values directly from the DOM using their IDs
    const user = document.querySelector("#user").value;
    const pass = document.querySelector("#password").value;

    // Display the entered username and password in the console
    console.log("Username:", user);
    console.log("Password:", pass);
  };

  // Uncontrolled form using useRef()
  const handleformRef = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Access the input element through ref.current and get its value
    const user = userRef.current.value;
    const pass = passwordRef.current.value;

    // Display the entered values in the console
    console.log("Username:", user);
    console.log("Password:", pass);
  };

  return (
    <>
      {/* Uncontrolled Component using DOM */}
      <h1>Uncontrolled Component</h1>

      <form onSubmit={handleform}>
        {/* Input values are accessed using document.querySelector() */}
        <input type="text" id="user" placeholder="Enter user name" />

        <input
          type="password"
          id="password"
          placeholder="Enter user password"
        />

        <button type="submit">Submit</button>
      </form>

      <hr />

      {/* Uncontrolled Component using React useRef Hook */}
      <h1>Uncontrolled Component with useRef</h1>

      <form onSubmit={handleformRef}>
        {/* Attach userRef to access this input element */}
        <input type="text" ref={userRef} placeholder="Enter user name" />

        {/* Attach passwordRef to access this input element */}
        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter user password"
        />

        <button type="submit">Submit with Ref</button>
      </form>
    </>
  );
}

export default UncontrolledComponent;
