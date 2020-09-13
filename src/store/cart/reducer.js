import { addItemToCart } from 'services/cartUtils';

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
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
}
