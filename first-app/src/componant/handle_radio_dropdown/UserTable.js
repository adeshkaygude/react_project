import React from "react";
function UserTable() {
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
      <h1>loop in jsx using map </h1>
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Id</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Age</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((el) => (
            <tr key={el.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {el.id}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {el.name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {el.email}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {el.age}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;
