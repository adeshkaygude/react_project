import { useState } from "react";
import Clock from "./Clock";
const ClockApp = () => {
  const [color, setcolor] = useState("green");

  const handleOption = (event) => {
    return setcolor(event.target.value);
  };
  return (
    <div>
      <Clock color={color} />
      <select
        style={{
          padding: 10,
          backgroundColor: "yellow",
          color: color,
          width: 200,
          borderRadius: 10,
          border: "3px solid black",
        }}
        onChange={handleOption}
        value={color}
      >
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
        <option value={"orange"}>Orange</option>
      </select>
    </div>
  );
};

export default ClockApp;
