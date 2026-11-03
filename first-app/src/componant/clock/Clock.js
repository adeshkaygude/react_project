import React, { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [time, settime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      settime(new Date().toLocaleTimeString());
    }, 1000);
  }, []); 
  return (
    <div>
      <h1
        style={{
          padding: 10,
          backgroundColor: "yellow",
          color: color,
          width: 200,
          borderRadius: 10,
          border: "3px solid black",
        }}
      >
        {time}
      </h1>
    </div>
  );
};

export default Clock;
