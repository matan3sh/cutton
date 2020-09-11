const initialState = {
  userAuth: null,
  userProfile: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userAuth: action.payload,
      };
    case 'CLEAR_USER':
      return {
        ...state,
        userAuth: null,
        userProfile: null,
      };
    case 'SET_USER_PROFILE':
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
}
