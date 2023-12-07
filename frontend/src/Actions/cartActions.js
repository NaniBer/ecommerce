export const initializeCart = (items) => ({
  type: "INITIALIZE_CART",
  payload: items,
});
export const addToCart = () => ({
  type: "ADD_TO_CART",
});

export const deleteFromCart = () => ({
  type: "DELETE_FROM_CART",
});

export const emptyCart = () => ({
  type: "EMPTY_CART",
});
