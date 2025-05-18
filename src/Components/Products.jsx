// import React, { useState } from "react";
import data from "../data.json";
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
      <h1 className="text-primary-rose mb-2 w-[75%] m-auto">Desserts</h1>
      <div className="max-w-full md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-10 text-end">
        {data.map((product, i) => (
          <div className="relative" key={i}>
            {console.log(product.category)}
            <figure>
              <img
                src={product.image.desktop}
                alt={product.category}
                className="w-full rounded-[0.5rem]"
              />
            </figure>
            <button className="absolute top-full bg-pale-rose border-red left-1/2 transform translate-[-50%] w-40 h-[2.75rem] rounded-full">
              <div className="flex flex-row space-between gap-1.5 pl-5">
                <img src="./images/icon-add-to-cart.svg" alt="" />
                <p>Add to Cart</p>
              </div>
            </button>
          </div>
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
