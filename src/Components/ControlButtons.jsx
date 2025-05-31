import React from "react";

const ControlButtons = ({ cartItem, handleIncrease, handleDecrease }) => {
  return (
    <div className="absolute top-full bg-red  left-1/2 transform translate-[-50%] w-40 h-[2.75rem] rounded-full">
      <div className="flex mx-4 items-center justify-between py-2  ">
        <button onClick={handleDecrease} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            fill="none"
            viewBox="0 0 10 2"
          >
            <path
              className="fill-white group-hover:fill-red"
              d="M0 .375h10v1.25H0V.375Z"
            />
          </svg>
        </button>

        <p>{cartItem.quantity}</p>
        <button onClick={handleIncrease} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              className="fill-white group-hover:fill-red"
              d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ControlButtons;
