import React, { useState } from "react";
import AddProduct from "./AddProduct";
import ListProducts from "./ListProducts";

const ProductApp = () => {
  const [products, setProducts] = useState([]);

  const getProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <>
      <h2>Product Management</h2>

      <AddProduct getProduct={getProduct} />

      <hr />

      <ListProducts products={products} />
    </>
  );
};

export default ProductApp;
