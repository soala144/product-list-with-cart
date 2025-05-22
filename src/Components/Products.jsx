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
const Products = () => {
  // const [cart, setCart] = useState([]);
  // function handleAddToCart(product) {
  //   setCart([...cart, product]);
  // }
  return (
    <>
      <div className="max-w-full md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-10 ">
        {data.map((product, i) => (
          <Product product={product} key={i} />
        ))}
        {/* {console.log(products)}
      {products.map((product) => (
        <div key={product.id}>
        console.log(product)
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>
        ))}
        <h2>Cart</h2>
        {cart.map((cart) => (
          <div>{cart.name}</div>
          ))} */}
      </div>
    </>
  );
};

export default Products;
