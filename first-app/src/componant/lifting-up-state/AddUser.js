import React, { useState } from "react";
const AddUser = ({ getUser }) => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    city: "",
  });
  const handleChange = (event) => {
    // event?.target==dom node
    // domnode.value=current value of the textfield
    // const value=event?.target?.value
    // const name=event?.target?.name
    const { name, value } = event?.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    getUser(data);
  };
  return (
    <>
      <h3> Add user</h3>
      <div style={{ padding: 10, margin: "auto", border: "1px solid #000a" }}>
        <label htmlFor="product">product</label>
        <input
          type="text"
          id="product"
          name="name"
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">mobile</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" onChange={handleChange} />{" "}
        <br />
        <button onClick={handleSubmit}> Create user</button>
      </div>
    </>
  );
};
export default AddUser;
