import React from "react";
import Product from "./product";
import { useFetch } from "../9-customHooks/2-useFetch";
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);
  return (
    <>
      <div>
        <h3>Products</h3>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </>
  );
};

export default Index;
