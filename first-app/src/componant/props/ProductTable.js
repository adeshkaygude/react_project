import Product from "./Product";

function ProductTab() {
  const products = [
    { id: 1, title: "Phone", price: 30000, inStock: true },
    { id: 2, title: "Laptop", price: 50000, inStock: false },
    { id: 3, title: "Tablet", price: 20000, inStock: true },
    { id: 4, title: "Keyboard", price: 1500, inStock: false },
  ];

  return (
    <>
      <Product products={products} />
    </>
  );
}

export default ProductTab;
