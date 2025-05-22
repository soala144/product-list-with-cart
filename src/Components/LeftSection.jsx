import React from "react";
import Products from "./Products";

const LeftSection = () => {
  return (
    <div className="w-[90%] md:w-[60%] m-auto">
      <h1 className="text-primary-rose font-bold text-4xl mb-2 ">Desserts</h1>
      <Products />
    </div>
  );
};

export default LeftSection;
