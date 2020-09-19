import { firestore, convertCollectionsSnapshotToMap } from 'config/firebase';

export const fetchCollectionsStart = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_COLLECTIONS_START' });
  } catch (error) {
    console.error(error);
  }
};

export const fetchCollectionsSuccess = (collectionMap) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_COLLECTIONS_SUCCESS', payload: collectionMap });
  } catch (error) {
    console.error(error);
  }
};

export const fetchCollectionsFailure = (errorMessage) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_COLLECTIONS_FAILURE', payload: errorMessage });
  } catch (error) {
    console.error(error);
  }
};

export const fetchCollectionsStartAsync = () => async (dispatch) => {
  try {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionMap));
    });
  } catch (error) {
    dispatch(fetchCollectionsFailure(error.message));
  }
};
