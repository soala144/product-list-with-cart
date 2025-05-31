import React from "react";
import Products from "./Products";

const LeftSection = ({ dispatch, cart }) => {
  return (
    <div className="w-[90%] md:w-[60%] m-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-primary-rose font-bold text-4xl mb-2 ">Desserts</h1>
        {cart.length >= 1 ? (
          <a href="#cart">
            <div className="sm:hidden bg-red py-2 px-3 rounded-xl text-bg text-pale-rose ">
              Cart ({cart.length})
            </div>
          </a>
        ) : (
          ""
        )}
      </div>
      <Products dispatch={dispatch} cart={cart} />
    </div>
  );
};

export default LeftSection;
