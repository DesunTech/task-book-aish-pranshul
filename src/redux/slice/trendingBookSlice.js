import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {getTrendingBookAsync} from "../async";

const initialState = {
  isLoading: false,
  trendingBookList: [],
  totalItems: 0,
};

const trendingBookSlice = createSlice({
  name: "trending-book",
  initialState,
  extraReducers: builder => {
    builder.addMatcher(isAnyOf(getTrendingBookAsync.pending), state => {
      state.isLoading = true;
    });
    builder.addMatcher(
      isAnyOf(getTrendingBookAsync.fulfilled),
      (state, {payload}) => {
        state.isLoading = false;
        state.totalItems = payload?.data?.totalItems;

        const bookDataList = payload.data?.items;
        const trendingBooks = [];
        bookDataList.forEach(book => {
          const rating = book?.volumeInfo?.averageRating || 0;
          const reviewsCount = book.volumeInfo.ratingsCount || 0;
          // Check for trending books (for example, rating > 0 or reviewsCount > 1)
          if (rating > 0 || reviewsCount > 1) {
            trendingBooks.push(book);
          }
        });
        state.trendingBookList = bookDataList;
      },
    );
    builder.addMatcher(
      isAnyOf(getTrendingBookAsync.rejected),
      (state, {payload}) => {
        state.isLoading = false;
      },
    );
  },
  reducers: {
    clearTrendingBookData: state => {
      state.trendingBookList = [];
    },
  },
});
export const {clearTrendingBookData} = trendingBookSlice.actions;
export const trendingBookReducer = trendingBookSlice.reducer;
