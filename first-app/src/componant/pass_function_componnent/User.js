import React from "react";

// Child component that receives functions (displayname, onClick) and data (name) via props
const User = ({ displayname, name, onClick }) => {
  return (
    <div>
      <h2>{name}</h2>

      {/* Calling parent function passing child's name argument */}
      <button onClick={() => displayname(name)}>Display Name</button>

      {/* Calling parent's onClick handler directly */}
      <button onClick={onClick}>Get user</button>
    </div>
  );
};

export default User;
