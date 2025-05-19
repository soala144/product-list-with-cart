import React from "react";

const RightSection = () => {
  return (
    <div className="w-[25%] m-auto bg-pale-rose p-3">
      <h1 className="text-red">Your Cart(7)</h1>
      <div className="w-[90%] m-auto">
        <div className="flex gap-5 space-between">
          <div className="flex flex-col">
            <p>Classico </p>
            <div className="flex">
              <p>1x</p>
              <p>@ $5.50</p>
              <p>$5.50</p>
            </div>
          </div>
          <figure>
            <img src="./images/icon-remove-item.svg" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
