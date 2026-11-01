import { useState } from "react";

function Color() {
  const [color, setcolor] = useState("red");

  function changeColor() {
    setcolor("yellow");
  }
  return (
    <div>
      <h1 style={{ color: color }}>hello adesh</h1>
      <button onClick={changeColor}>change color</button>
    </div>
  );
}
export default Color;
