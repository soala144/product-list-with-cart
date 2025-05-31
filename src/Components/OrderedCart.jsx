import React from "react";
import TotalPriceOrdered from "./TotalPriceOrdered";
import CartCarbonNeutralMessage from "./CartCarbonNeutralMessage";
import OrderButton from "./OrderButton";
import Cart from "./Cart";

const OrderedCart = ({ total, cart, dispatch }) => {
  return (
    <div>
      {cart.map((cartItem) => (
        <Cart dispatch={dispatch} cartItem={cartItem} key={cartItem.id} />
      ))}
      <TotalPriceOrdered total={total} />
      <CartCarbonNeutralMessage />
      <OrderButton dispatch={dispatch}>Confirm Order</OrderButton>
    </div>
  );
};

export default OrderedCart;
