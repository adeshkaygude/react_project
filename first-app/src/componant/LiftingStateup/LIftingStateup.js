import React, { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

// Parent component demonstrating Lifting State Up in React.
// When two sibling components need to share state, the state is lifted
// to their closest common ancestor.
const LIftingStateup = () => {
  // Shared state held in the parent component
  const [user, setUser] = useState("");

  return (
    <div>
      <h1>Lifting State Up</h1>

      {/* Pass the state updater function to child 1 */}
      <AddUser setUser={setUser} />

      {/* Pass the shared state value to child 2 */}
      <DisplayUser user={user} />
    </div>
  );
};

export default LIftingStateup;
