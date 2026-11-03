import React from "react";
import User from "./User";

function ReuseComponent() {
  const userData = [
    { name: "adesh", age: 21, email: "adesh@gmail.com", id: 1 },
    { name: "omkar", age: 22, email: "omkar@gmail.com", id: 2 },
    { name: "shantanu", age: 25, email: "shantanu@gmail.com", id: 3 },
    { name: "laxman", age: 23, email: "laxman@gmail.com", id: 4 },
    { name: "shubham", age: 26, email: "shubham@gmail.com", id: 5 },
    { name: "vishal", age: 21, email: "vishal@gmail.com", id: 6 },
  ];
  return (
    <div>
      {userData.map((user) => (
        <div
          style={{
            border: "1px solid green",
            padding: 5,
            margin: 5,
            width: 400,
            borderRadius: 10,
          }}
          key={user.id}
        >
          <User user={user} />
        </div>
      ))}
    </div>
  );
}
export default ReuseComponent;
