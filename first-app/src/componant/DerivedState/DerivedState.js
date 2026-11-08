import React, { useState } from "react";

// Component demonstrating the concept of Derived State in React.
// Derived state is computed directly from existing state during render,
// avoiding redundant useState calls and synchronization issues.
const DerivedState = () => {
  // Primary state: Store all users in an array
  const [users, setUsers] = useState([]);

  // Input state: Store current text being typed
  const [user, setUser] = useState("");

  // Handler to add new user to the list
  const handleAddUser = () => {
    if (user.trim() === "") return;

    setUsers([...users, user.trim()]);

    // Clear input field after adding user
    setUser("");
  };

  // Derived State 1: Total count calculated directly from users.length
  // (No separate useState/useEffect needed to track total count)
  const total = users.length;

  // Derived State 2: Get the last added user from the array
  const lastUser = users.length > 0 ? users[users.length - 1] : "No user";

  // Derived State 3: Count unique users dynamically using Set
  const unique = new Set(users).size;

  return (
    <div>
      <h1>Derived State Example</h1>

      {/* Display derived values computed during render */}
      <h2>Total Users: {total}</h2>
      <h2>Last User: {lastUser}</h2>
      <h2>Unique Total Users: {unique}</h2>

      {/* Controlled input field for adding a new user */}
      <input
        type="text"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder="Add new user"
      />

      <button onClick={handleAddUser}>Add User</button>

      {/* Display all users using map() */}
      {users.map((el, ind) => (
        <h2 key={ind}>{el}</h2>
      ))}
    </div>
  );
};

export default DerivedState;
