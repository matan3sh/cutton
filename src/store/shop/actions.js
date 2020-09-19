export const loadCollections = (collectionsMap) => async (dispatch) => {
  try {
    dispatch({ type: 'LOAD_COLLECTIONS', payload: collectionsMap });
  } catch (error) {
    console.error(error);
  }
};
