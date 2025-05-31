import React from "react";
import TotalPriceOrdered from "./TotalPriceOrdered";
import CartCarbonNeutralMessage from "./CartCarbonNeutralMessage";
import OrderButton from "./OrderButton";
import OrderedCart from "./OrderedCart";
import EmptyCart from "./EmptyCart";

const RightSection = ({ cart, dispatch }) => {
  const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  return (
    <div
      className=" w-full md:w-[35%] rounded-xl min-h-[299px] max-h-[550px] h-auto overflow-y-auto p-6 lg:max-w-[380px] mt-4 bg-white  "
      id="cart"
    >
      <h3 className="text-2xl text-red font-bold mb-5">
        Your Cart({cart.length})
      </h3>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <OrderedCart cart={cart} total={total} dispatch={dispatch} />
      )}
    </div>
  );
};

export default RightSection;
