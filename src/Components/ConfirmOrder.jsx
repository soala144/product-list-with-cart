import React from "react";
import OrderMessage from "./OrderMessage";
import OrderedProduct from "./OrderedProduct";
import TotalPriceOrdered from "./TotalPriceOrdered";
import OrderButton from "./OrderButton";

const ConfirmOrder = ({ cart, dispatch }) => {
  const handleResetCart = () => {
    dispatch({ type: "RESET_CART" });
  };
  return (
    <>
      <div className="fixed top-25  w-full h-full bg-white py-10 px-6 rounded-t-xl z-20 md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-50%] md:w-[592px] md:h-auto md:rounded-xl">
        <OrderMessage dispatch={dispatch} />
        <div className="w-full bg-pale-rose p-6 my-8 rounded-[0.5rem]">
          <OrderedProduct cart={cart} />
          <TotalPriceOrdered cart={cart} />
        </div>
        <OrderButton handleOrderFunction={handleResetCart}>
          Start New Order
        </OrderButton>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] z-10"></div>
    </>
  );
};

export default ConfirmOrder;
