import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./slices/booksSlice";

const store = configureStore({
  reducer: {
    books: booksSlice,
  },
});

export default store;
