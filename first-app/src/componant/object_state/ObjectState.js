import React, { useState } from "react";

export default function ObjectState() {
  const [moves, setmoves] = useState({
    blue: 0,
    red: 0,
    green: 0,
    yellow: 0,
  });

  const updateBlue = () => {
    setmoves((prev) => ({ ...prev, blue: prev.blue + 1 }));
  };

  const updateRed = () => {
    setmoves((prev) => ({ ...prev, red: prev.red + 1 }));
  };
  return (
    <div>
      <p> blue = {moves.blue}</p>
      <button
        onClick={updateBlue}
        style={{ backgroundColor: "blue", Color: "black" }}
      >
        +1
      </button>

      <p>red = {moves.red}</p>
      <button
        onClick={updateRed}
        style={{ backgroundColor: "red", color: "black" }}
      >
        +1
      </button>
    </div>
  );
}
