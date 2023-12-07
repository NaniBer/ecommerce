const initialState = {
  items: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_CART":
      return {
        ...state,
        items: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        items: state.items + 1,
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        items: state.items - 1,
      };
    case "EMPTY_CART":
      return {
        ...state,
        items: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
