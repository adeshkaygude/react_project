import { useState } from "react";
import Clock from "./Clock";
const ClockApp = () => {
  const [color, setcolor] = useState("green");

  const handleOption = (event) => {
    return setcolor(event.target.value);
  };
  return (
    <div>
      <select onChange={handleOption} value={color}>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
        <option value={"orange"}>Orange</option>
      </select>
      <Clock color={color} />
    </div>
  );
};

export default ClockApp;
