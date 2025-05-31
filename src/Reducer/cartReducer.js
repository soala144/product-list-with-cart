export const intialState = {
  cart: [],
  isModalOpen: false,
};
export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item
        );
        console.log(action.payload);
        return { ...state, cart: updatedCart };
      }
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...product, quantity: 1, totalPrice: product.price * 1 },
        ],
      };
    }
    case "INCREASE_QUANTITY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            }
          : item
      );
      return { ...state, cart: updatedCart };
    }
    case "DECREASE_QUANTITY": {
      const existing = state.cart.find((item) => item.id === action.payload);
      if (!existing) return state;
      // if the quantity is less than one it should be deleted
      if (existing.quantity === 1) {
        const filteredCart = state.cart.filter(
          (item) => item.id !== action.payload
        );
        return { ...state, cart: filteredCart };
      }

      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * item.price,
            }
          : item
      );
      return { ...state, cart: updatedCart };
    }

    case "DELETE_ITEM": {
     

      return { ...state, cart: state.cart.filter(
        (item) => item.id !== action.payload
      ) };
    }

    case "OPEN_MODAL": {
      return { ...state, isModalOpen: true };
    }

    default:
      return state;
  }
}
