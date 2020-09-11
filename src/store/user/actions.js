import { auth } from 'config/firebase';

export const setUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_USER', payload: user });
  } catch (err) {
    console.log(err);
  }
};

export const clearUser = () => async (dispatch) => {
  try {
    auth.signOut();
    dispatch({ type: 'CLEAR_USER' });
  } catch (err) {
    console.log(err);
  }
};
