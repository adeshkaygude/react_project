import React from "react";

const ProductPractice = ({ information }) => {
  return (
    <>
      {information.map((el) => (
        <div key={el.product}>
          <h2>{el.product}</h2>
          <p>{el.price}</p>
        </div>
      ))}
    </>
  );
};
export default ProductPractice;
