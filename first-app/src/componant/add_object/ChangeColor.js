import React, { useState } from "react";

const ChangeColor = () => {
  const [moves, setmoves] = useState([
    {
      color: "yellow",
      count: 0,
    },
    {
      color: "red",
      count: 0,
    },
    {
      color: "black",
      count: 0,
    },
  ]);

  const updateColor = (color) => {
    setmoves((prev) =>
      prev.map((moves) =>
        moves.color === color ? { ...moves, count: moves.count + 1 } : moves,
      ),
    );
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
export default ChangeColor;
