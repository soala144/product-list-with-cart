import React from "react";

const TotalPriceOrdered = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  return (
    <div className="flex justify-between items-center mt-2 text-primary-rose">
      <p className="text-sm">Order Total</p>
      <span className="text-2xl font-bold">${total}</span>
    </div>
  );
};

export default TotalPriceOrdered;
