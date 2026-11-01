import React, { useState } from "react";

const AddObject = () => {
  const [property, setproperty] = useState({ name: "adesh", age: 21 });

  const AddCity = () => {
    return setproperty({ ...property, city: "pune" });
  };
  return (
    <div>
      <h2>{property.name}</h2>
      <p>{property.age}</p>
      <p>{property.city}</p>
      <button onClick={AddCity}>AddCity</button>
    </div>
  );
};
export default AddObject;
