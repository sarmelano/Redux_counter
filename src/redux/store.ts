// store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice.ts';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
