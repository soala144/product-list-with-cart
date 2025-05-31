import React from "react";

const TotalPriceOrdered = ({ total }) => {
  return (
    <div className="flex justify-between items-center mt-2 text-primary-rose">
      <p className="text-sm">Order Total</p>
      <span className="text-2xl font-bold">${total}</span>
    </div>
  );
};

export default TotalPriceOrdered;
