import React, { useState } from "react";

const AddCity = () => {
  const [user, setuser] = useState({ name: "adesh", age: 21 });

  const addSalary = () => setuser((user) => ({ ...user, salrary: 2500 }));
  return (
    <div>
      <h2>name : {user.name}</h2>
      <p>age : {user.age}</p>
      <p> salrary : {user.salrary}</p>

      <button onClick={addSalary}>add salrary</button>
    </div>
  );
};

export default AddCity;
