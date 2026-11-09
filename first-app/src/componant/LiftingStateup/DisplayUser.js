import React from "react";

// Child 2 component: receives the shared state value from parent through props
const DisplayUser = ({ user }) => {
  return (
    <div>
      <h2>Display User</h2>

      {/* Conditionally displays the user name or a fallback message */}
      {user ? <h3>User: {user}</h3> : <h3>No User Found</h3>}
    </div>
  );
};

export default DisplayUser;
