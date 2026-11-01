import React, { useState } from "react";
const DynamicColor = () => {
  const [color, setcolor] = useState("red");

  const arr = ["yellow", "pink", "green", "black", "orange"];
  const updateColor = () => {
    const random = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
    setcolor(arr.at(random));
  };
  return (
    <div>
      <p style={{ backgroundColor: color }}>background</p>
      <button onClick={updateColor}>change color</button>
    </div>
  );
};

export default DynamicColor;
