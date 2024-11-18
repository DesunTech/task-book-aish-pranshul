import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {getNewBookAsync} from "../async";

const initialState = {
  isLoading: false,
  newBookList: [],
  totalItems: 0,
};

const newBookSlice = createSlice({
  name: "latest-book",
  initialState,
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(getNewBookAsync.pending), state => {
      state.isLoading = true;
    });
    builder.addMatcher(
      isAnyOf(getNewBookAsync.fulfilled),
      (state, {payload}) => {
        state.isLoading = false;
        state.totalItems = payload.data?.totalItems;
        state.newBookList = payload?.data?.items;
        // const newBooks = payload?.data?.items || [];
        // state.newBookList = [...state.newBookList, ...newBooks];
      },
    );
    builder.addMatcher(
      isAnyOf(getNewBookAsync.rejected),
      (state, {payload}) => {
        state.isLoading = false;
      },
    );
  },
  reducers: {
    clearLatestBookData: state => {
      state.newBookList = [];
    },
  },
});
export const {clearLatestBookData} = newBookSlice.actions;
export const newBookReducer = newBookSlice.reducer;
