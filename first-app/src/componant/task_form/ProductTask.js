import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const Product = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      Products: [{ name: "", price: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "Products",
  });

  const handleUser = (data) => {
    console.log(data);
  };

  return (
    <section
      style={{
        width: 500,
        border: "2px solid #000",
        padding: 10,
        margin: "20px auto",
      }}
    >
      <h3>Product Form</h3>

      <form onSubmit={handleSubmit(handleUser)}>
        {fields.map((product, i) => (
          <div key={product.id} style={{ marginBottom: 15 }}>
            <h4>Product {i + 1}</h4>

            <input
              type="text"
              placeholder="Product name"
              {...register(`Products.${i}.name`)}
            />

            <input
              type="number"
              placeholder="Product price"
              {...register(`Products.${i}.price`, {
                valueAsNumber: true,
              })}
            />

            <button type="button" onClick={() => remove(i)}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={() => append({ name: "", price: 0 })}>
          Add Product
        </button>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Product;
