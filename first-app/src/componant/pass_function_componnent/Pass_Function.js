import React from "react";
import User from "./User";

// Parent component demonstrating how to pass functions as props to child components
function Pass_Function() {
  // Parent function that accepts an argument (name) passed from child component
  const displayname = (name) => {
    console.log("Display name function called with:", name);
    return alert("Display name function: " + name);
  };

  // Parent callback function passed to child to be triggered on click
  const getUser = () => alert("get user function is called");

  return (
    <div>
      <h1>Call Parent Component Function from Child Component</h1>

      {/* Passing functions (displayname, onClick) and props (name) to child */}
      <User displayname={displayname} name={"adesh"} onClick={getUser} />
      <User displayname={displayname} name={"omkar"} onClick={getUser} />
      <User displayname={displayname} name={"suresh"} onClick={getUser} />
      <User displayname={displayname} name={"rahul"} onClick={getUser} />
    </div>
  );
}

export default Pass_Function;
