import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "../slices/transactionsSlice";


export const store = configureStore({
  reducer: {
    transaction: transactionsSlice,
  }
})