const initialState = {
  cartOpen: false,
  cartItems: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CART':
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };
    default:
      return state;
  }
}
