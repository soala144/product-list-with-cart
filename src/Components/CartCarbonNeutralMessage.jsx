import React from "react";

const CartCarbonNeutralMessage = () => {
  return (
    <div className="flex justify-center text-primary-rose bg-pale-rose w-full h-[3.25rem] my-6 gap-1 py-3 rounded-[0.5rem]">
      <figure>
        <img src="./images/icon-carbon-neutral.svg" alt="" />
      </figure>
      <p>This is a carbon netral delivery</p>
    </div>
  );
};

export default CartCarbonNeutralMessage;
