import React, { useState } from "react";

const AddProduct = ({ getProduct }) => {
  const [data, setData] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    getProduct({
      id: Date.now(),
      name: data.name.trim(),
      price: Number(data.price),
      quantity: Number(data.quantity),
    });

    setData({
      name: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
      <h3>Add Product</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product name"
          value={data.name}
          onChange={handleChange}
          pattern=".*\S.*"
          required
        />

        <br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          min="0"
          value={data.price}
          onChange={handleChange}
          required
        />

        <br />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          min="1"
          value={data.quantity}
          onChange={handleChange}
          required
        />

        <br />

        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default AddProduct;
