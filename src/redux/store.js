import authReducer from "./auth/authSlice";
import imageReducer from "./image/imageSlice";
import userReducer from "./user/userSlice";
import {  configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux';

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    images: imageReducer,
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
