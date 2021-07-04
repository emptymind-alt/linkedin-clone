import { createStore } from '@reduxjs/toolkit';
import UserReducer from '../features/userSlice';

 export const store = createStore({
  reducer: {
    user: UserReducer,
  },
});

