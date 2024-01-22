import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
    /* 
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state -= action.payload;
    },
    */
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    reset: () => {
      return initialState;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;