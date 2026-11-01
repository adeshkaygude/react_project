import React from "react";

function Student(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.salary}</h3>
    </div>
  );
}

function PropsFirst() {
  return (
    <>
      <Student name="adesh" age={21} salary={20000} />
      <Student name="adesh" age={21} salary={20000} />
      <Student name="omkar" age={21} salary={20000} />
      <Student name="adesh" age={21} salary={20000} />
      <Student name="shantanu" age={21} salary={20000} />
      <Student name="adesh" age={21} salary={20000} />
    </>
  );
}

export default PropsFirst;
