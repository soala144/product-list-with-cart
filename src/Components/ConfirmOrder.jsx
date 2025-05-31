import React from "react";

const ConfirmOrder = ({ cart, dispatch }) => {
  return (
    <>
      <div className="fixed top-25  w-full h-full bg-white py-10 px-6 rounded-t-xl z-20 md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-50%] md:w-[592px] md:h-auto md:rounded-xl">
        <div className="flex justify-between ">
          <p>Cofirm order</p>
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
        {cart.map((cartItem) => (
          <div key={cartItem.id}>
            <img src={cartItem.image.thumbnail} />
          </div>
        ))}
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] z-10"></div>
    </>
  );
};

export default ConfirmOrder;
