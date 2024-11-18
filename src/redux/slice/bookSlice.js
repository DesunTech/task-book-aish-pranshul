import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {getBookAsync} from "../async";

const initialState = {
  isLoading: false,
  bookDataList: [],
  totalItems: 0,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(getBookAsync.pending), state => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(getBookAsync.fulfilled), (state, {payload}) => {
      state.isLoading = false;
      state.totalItems = payload?.data?.totalItems;
      state.bookDataList = payload.data?.items;
    });
    builder.addMatcher(isAnyOf(getBookAsync.rejected), (state, {payload}) => {
      state.isLoading = false;
    });
  },
  reducers: {
    clearBookData: state => {
      state.bookData = [];
    },
  },
});
export const {clearBookData} = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
