import React from "react";

const Cart = ({ cartItem, dispatch }) => {
  const handleDelete = () => {
    dispatch({ type: "DELETE_ITEM", payload: cartItem.id });
    console.log("dispatched delete Item for");
  };
  return (
    <div key={cartItem.id}>
      <li className="flex mb-4 w-full justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-primary-rose font-semibold">
            {cartItem.name}
          </h3>
          <p>
            <span className="text-red font-bold mr-2.5 ">
              {cartItem.quantity}
            </span>
            <span className="text-muted-rose mr-1.5 ">@ ${cartItem.price}</span>
            <span className="text-muted-rose font-bold">
              ${cartItem.totalPrice}
            </span>
          </p>
        </div>

        <figure
          className="group grid place-content-center w-[1.125rem] h-[1.125rem] rounded-full border border-dusty-rose hover:border-primary-rose hover:stroke-primary-rose  cursor-pointer"
          onClick={() => console.log(cartItem.id)}
        >
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
        </figure>
        <button onClick={handleDelete}>X</button>
      </li>
      <div className="flex w-full h-0.5 bg-gray-50 mt-4"></div>
    </div>
  );
};

export default Cart;
