import { auth, createUserProfileDocument } from 'config/firebase';

export const setUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_USER', payload: user });
  } catch (error) {
    console.error(error);
  }
};

export const clearUser = () => async (dispatch) => {
  try {
    auth.signOut();
    dispatch({ type: 'CLEAR_USER' });
  } catch (error) {
    console.error(error);
  }
};

export const setUserProfile = (user) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_USER_PROFILE', payload: user });
  } catch (error) {
    console.error(error);
  }
};

export const signUp = (displayName, email, password) => async (dispatch) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(user, { displayName });
  } catch (error) {
    console.error(error);
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    const authUser = await auth.signInWithEmailAndPassword(email, password);
    dispatch({ type: 'SET_USER', payload: authUser });
  } catch (err) {
    alert(err.message);
  }
};
