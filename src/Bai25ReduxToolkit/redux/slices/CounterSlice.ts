import { createSlice } from "@reduxjs/toolkit";

// 1. SLICE:
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // -----------------------------------
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// 2. ACTION:
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 3. REDUCER:
export default counterSlice.reducer;
