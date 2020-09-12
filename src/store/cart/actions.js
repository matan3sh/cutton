export const toggleCart = () => async (dispatch) => {
  try {
    dispatch({ type: 'TOGGLE_CART' });
  } catch (error) {
    console.error(error);
  }
};
