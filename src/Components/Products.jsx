// import React, { useState } from "react";
import data from "../data.json";
import Product from "./Product";
// const products = [
//   {
//     name: "cup",
//     price: 100,
//     id: 44345,
//   },
//   {
//     name: "bottle",
//     price: 100,
//     id: 5335,
//   },
//   {
//     name: "spoon",
//     price: 500,
//     id: 2445,
//   },
// ];
const Products = ({ dispatch, cart }) => {
  return (
    <>
      <div className="max-w-full md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-10 ">
        {data.map((product, i) => (
          <Product product={product} key={i} dispatch={dispatch} cart={cart} />
        ))}
      </div>
    </>
  );
};

export default Products;
