function Product({ products }) {
  return (
    <>
      {products.map((products) => {
        return (
          <div key={products.id}>
            <h2>title : {products.title}</h2>
            <p>price : {products.price}</p>

            <p>{products.inStock ? "in Stock" : "Out of Stock"}</p>
          </div>
        );
      })}
    </>
  );
}

export default Product;
