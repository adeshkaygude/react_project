import React from "react";

const ListProducts = ({ products }) => {
  return (
    <>
      <h3>Product List</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {products?.map((product, i) => (
            <tr key={product.id ?? i}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.quantity}</td>
              <td>₹{product.price * product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListProducts;
