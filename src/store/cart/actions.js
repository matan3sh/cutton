export const toggleCart = () => async (dispatch) => {
  try {
    dispatch({ type: 'TOGGLE_CART' });
  } catch (error) {
    console.error(error);
  }
};

export const addItem = (item) => async (dispatch) => {
  try {
    dispatch({ type: 'ADD_ITEM', payload: item });
  } catch (error) {
    console.error(error);
  }
};
