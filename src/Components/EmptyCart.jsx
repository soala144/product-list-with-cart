import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex w-3/4 m-auto flex-col items-center">
      <img src="./images/illustration-empty-cart.svg" alt="" />
      <p className="text-sm text-muted-rose">
        Your added items will appear here
      </p>
    </div>
  );
};

export default EmptyCart;
