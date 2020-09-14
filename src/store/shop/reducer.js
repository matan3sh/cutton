import db from 'data/shopDB';

const initialState = {
  collections: db.getDefaultData(),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
