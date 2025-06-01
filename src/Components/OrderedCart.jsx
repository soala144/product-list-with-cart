import React from "react";
import TotalPriceOrdered from "./TotalPriceOrdered";
import CartCarbonNeutralMessage from "./CartCarbonNeutralMessage";
import OrderButton from "./OrderButton";
import Cart from "./Cart";

const OrderedCart = ({ cart, dispatch }) => {
  const openConfirmOrderModal = () => {
    dispatch({ type: "MODAL_FUNCTION" });
  };
  return (
    <div>
      {cart.map((cartItem) => (
        <Cart dispatch={dispatch} cartItem={cartItem} key={cartItem.id} />
      ))}

      <TotalPriceOrdered cart={cart} />
      <CartCarbonNeutralMessage />
      <OrderButton handleOrderFunction={openConfirmOrderModal}>Confirm Order</OrderButton>
    </div>
  );
};

export default OrderedCart;
