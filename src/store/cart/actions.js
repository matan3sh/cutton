export const toggleCart = () => async (dispatch) => {
  try {
    dispatch({ type: 'TOGGLE_CART' });
  } catch (error) {
    console.error(error);
  }
};

export const openCart = () => async (dispatch) => {
  try {
    dispatch({ type: 'OPEN_CART' });
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

export const removeItem = (item) => async (dispatch) => {
  try {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  } catch (error) {
    console.error(error);
  }
};
