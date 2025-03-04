import { configureStore } from "@reduxjs/toolkit";
// cydb - EXPORT DEFAULT trong CounterSlice
import counterReducer from "./slices/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type Store = ReturnType<typeof store.getState>;
