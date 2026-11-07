import React, { forwardRef } from "react";

// forwardRef allows the parent to access the child input element
const UserRef = forwardRef((props, ref) => {
  return (
    <div>
      {/* Attach the forwarded ref to the actual input element */}
      <input type="text" ref={ref} placeholder="Enter your name" />
    </div>
  );
});

export default UserRef;
