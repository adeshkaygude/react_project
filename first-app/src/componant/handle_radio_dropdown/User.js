import React from "react";

const User = ({ user }) => {
  return (
    <>
      <h3>Name : {user.name}</h3>
      <h3>Email : {user.email}</h3>
      <h3>Age : {user.age}</h3>
      <br />
    </>
  );
};

export default User;
