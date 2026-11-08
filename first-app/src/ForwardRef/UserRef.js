import React from "react";

// In React 19, 'ref' can be passed directly as a standard prop (props.ref)
// without needing React.forwardRef()
const UserRef = (props) => {
  return (
    <div>
      {/* Attach ref directly received from parent component */}
      <input type="text" ref={props.ref} placeholder="Enter your name" />
    </div>
  );
};

export default UserRef;
