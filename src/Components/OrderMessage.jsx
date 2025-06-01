import React from "react";

const OrderMessage = ({ dispatch }) => {
  return (
    <div>
      <div className="flex justify-between">
        
        <img
          src="./images/icon-order-confirmed.svg"
          alt="order-confirmed_icon"
        />
        <button onClick={() => dispatch({ type: "MODAL_FUNCTION" })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              className="fill-[#CAAFA7] group-hover:fill-primary-rose"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </button>
      </div>
      <h2 className="text-[2.5rem] leading-[3rem] text-primary-rose font-bold mt-6">
        Order Confirmed
      </h2>
      <p className="text-base text-muted-rose mt-2">
        We hope you enjoy your food!
      </p>
    </div>
  );
};

export default OrderMessage;
