import React from "react";
import useResponsiveImage from "../CustomHooks/useResponsiveImage";

const Product = ({ product }) => {
  const imageSrc = useResponsiveImage(product.image);
  return (
    <div className="flex flex-col mb-3">
      <div className="relative">
        {console.log(product.category)}
        <figure>
          <img
            src={imageSrc}
            alt={product.category}
            className="w-full rounded-[0.5rem]"
          />
        </figure>
        <button className="absolute top-full bg-pale-rose border border-red left-1/2 transform translate-[-50%] w-40 h-[2.75rem] rounded-full">
          <div className="flex flex-row space-between gap-1.5 pl-5">
            <img src="./images/icon-add-to-cart.svg" alt="" />
            <p>Add to Cart</p>
          </div>
        </button>
      </div>
      <div className="mt-6">
        <p className="text-sm text-muted-rose font-light mb-[4px]">
          {product.category}
        </p>
        <h2 className="text-base text-primary-rose font-semibold">
          {product.name}
        </h2>
        <p className="text-base text-red font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Product;
