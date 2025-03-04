import { configureStore } from "@reduxjs/toolkit";
// cydb - EXPORT DEFAULT trong CounterSlice
import counterReducer from "./slices/CounterSlice";
import { apiSlice } from "./slices/ApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // [apiSlice.reducerPath] = 'api'
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type Store = ReturnType<typeof store.getState>;
