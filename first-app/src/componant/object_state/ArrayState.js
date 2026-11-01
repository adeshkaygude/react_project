import React, { useState } from "react";

const ArrayState = () => {
  const [moves, setmoves] = useState([
    {
      color: "yellow",
      count: 0,
    },
    {
      color: "pink",
      count: 0,
    },
    {
      color: "black",
      count: 0,
    },
  ]);

  const updateColor = (color) => {
    setmoves((prev) => {
      prev.map((el) =>
        el.color === color ? { ...prev, color: prev.color + 1 } : prev,
      );
    });
  };

  return (
    <>
      {moves.map((el) => (
        <div key={el.color}>
          <h2>
            {el.color} = {el.count}
          </h2>
          <button
            onClick={() => {
              updateColor(el.color);
            }}
            style={{
              backgroundColor: el.color,
              color: el.color === "black" ? "white" : "black",
              padding: 10,
            }}
          >
            +1
          </button>
        </div>
      ))}
    </>
  );
};

export default ArrayState;
