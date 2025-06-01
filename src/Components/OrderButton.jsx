import React from "react";

const OrderButton = ({ children, handleOrderFunction }) => {
  return (
    <button
      className="w-full text-white bg-red rounded-full text-base text-center h-[53px] duration-200 cursor-pointer hover:bg-[#952c0b]"
      onClick={handleOrderFunction}
    >
      {children}
    </button>
  );
};

export default OrderButton;
