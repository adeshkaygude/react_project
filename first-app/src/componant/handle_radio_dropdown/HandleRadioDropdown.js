import React, { useState } from "react";

function HandleRadioDropdown() {
  const [gender, setgender] = useState("female");

  const [city, setcity] = useState("delhi");
  return (
    <div>
      <h1>handle radio and droupdown </h1>
      <h4>select gender</h4>
      <input
        onChange={(event) => {
          setgender(event.target.value);
        }}
        checked={gender === "male"}
        value={"male"}
        type="radio"
        name="gender"
        id="male"
      />
      <label htmlFor="male">male</label>
      <input
        onChange={(event) => {
          setgender(event.target.value);
        }}
        checked={gender === "female"}
        value={"female"}
        type="radio"
        name="gender"
        id="female"
      />
      <label htmlFor="female">female</label>

      <h1>{gender}</h1>
      <br />
      <br />
      <br />
      <br />
      <h1>select city</h1>
      <select onChange={(event) => setcity(event.target.value)} value={city}>
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="delhi">Delhi</option>
      </select>

      <h1>selected city : {city}</h1>
    </div>
  );
}

export default HandleRadioDropdown;
