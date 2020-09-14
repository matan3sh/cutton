import { addItemToCart, removeItemFromCart } from 'services/cartUtils';

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
    case 'OPEN_CART':
      return {
        ...state,
        cartOpen: true,
      };
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case 'REMOVE_COMPLETE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
