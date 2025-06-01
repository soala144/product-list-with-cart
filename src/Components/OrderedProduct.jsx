import React from "react";

const OrderedProduct = ({ cart }) => {
  return (
    <div className="max-h-[150px] md:max-h-[150px] overflow-y-scroll ">
      {cart.map((cartItem) => (
        <div key={cartItem.id}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src={cartItem.image.thumbnail}
                className="w-12 rounded-[4px]"
                alt="product thumbnail"
              />
              <div>
                <h2 className="text-sm text-primary-rose font-semibold">
                  {cartItem.name}
                </h2>
                <div className="flex items-center gap-3">
                  <p className="text-sm text-red font-semibold">
                    {cartItem.quantity}x
                  </p>
                  <p className="text-sm text-muted-rose">@ ${cartItem.price}</p>
                </div>
              </div>
            </div>
            <p>${cartItem.totalPrice}</p>
          </div>
          <div className="line my-4"></div>
        </div>
      ))}
      {/* <div key={cartItem.id}>
              <div  className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                   <img
                    src={cartItem.image.thumbnail}
                    className="w-12 rounded-[4px]"
                    alt="product thumbnail"
                    />
                 <div>
                   <h2 className="text-sm text-primary-rose font-semibold">{cartItem.name}</h2>
              <div className="flex items-center gap-3">
                <p className="text-sm text-red font-semibold">{cartItem.quantity}x</p>
                <p className="text-sm text-muted-rose">@ ${cartItem.price}</p>
              </div>
              <p>${cartItem.totalPrice}</p>
            </div>
            </div>
            </div>
            <div className="line my-4"></div> */}
    </div>
  );
};

export default OrderedProduct;
