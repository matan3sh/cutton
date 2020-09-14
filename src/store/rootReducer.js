import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/reducer';
import cartReducer from './cart/reducer';
import shopReducer from './shop/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  auth: userReducer,
  cart: cartReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
