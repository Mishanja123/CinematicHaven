import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';


const persistedUserState = localStorage.getItem('reduxUser') 
  ? JSON.parse(localStorage.getItem('reduxUser'))
  : {};

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState: {
        user: persistedUserState,
    }
}); 