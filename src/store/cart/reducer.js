const initialState = {
  openCart: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CART':
      return {
        ...state,
        openCart: !state.openCart,
      };
    default:
      return state;
  }
}
