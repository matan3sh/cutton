import { createSelector } from 'reselect';

const selectUser = (state) => state.auth;

export const selectCurrentUser = createSelector(
  [selectUser],
  (auth) => auth.userProfile
);

export const selectUserAuth = createSelector(
  [selectUser],
  (auth) => auth.userAuth
);
