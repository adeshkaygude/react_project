import ProductPractice from "./ProductPractice";

const ProductTablePractice = () => {
  const information = [
    { product: "laptop", price: 500 },
    { product: "mobile", price: 900 },
    { product: "monitor", price: 890 },
  ];

  return <ProductPractice information={information} />;
};
export default ProductTablePractice;
