const initialState = {
  collections: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_COLLECTIONS':
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
}
