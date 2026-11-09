import React from "react";

// Child 1 component: receives the state updater function from parent
const AddUser = ({ setUser }) => {
  // Updates the parent state on input change
  const handleInput = (event) => {
    setUser(event.target.value);
  };

  return (
    <div>
      <h2>Add User</h2>

      <input type="text" onChange={handleInput} placeholder="Enter User name" />

      <hr />
    </div>
  );
};

export default AddUser;
