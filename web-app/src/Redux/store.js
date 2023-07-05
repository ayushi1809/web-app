import { createStore } from "redux";
import AuthReducer from "./reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, AuthReducer);

export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistedStore = persistStore(store);

