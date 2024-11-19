import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getAllBookListAsync,
  getAllBookListBannerAsync,
  getAllBookListDetailAsync,
} from "../../services/book";
interface BookState {
  isLoading: boolean;
  isLoadingDetail: boolean;
  selectedBook: any[];
  selectedBookBanner: any[];
  selectedBookDetail: any[];
}

const initialState: BookState = {
  isLoading: false,
  isLoadingDetail: false,
  selectedBook: [],
  selectedBookBanner: [],
  selectedBookDetail: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: (books) => {
    books.addMatcher(isAnyOf(getAllBookListAsync.pending), (state) => {
      state.isLoading = true;
    });

    books.addMatcher(
      isAnyOf(getAllBookListAsync.fulfilled),
      (state, action) => {
        state.isLoading = false;
        state.selectedBook = action?.payload?.items || [];
      }
    );

    books.addMatcher(isAnyOf(getAllBookListAsync.rejected), (state, action) => {
      state.isLoading = false;
    });

    books.addMatcher(isAnyOf(getAllBookListBannerAsync.pending), (state) => {
      state.isLoading = true;
    });

    books.addMatcher(
      isAnyOf(getAllBookListBannerAsync.fulfilled),
      (state, action) => {
        state.isLoading = false;
        state.selectedBookBanner = action?.payload?.items || [];
      }
    );

    books.addMatcher(
      isAnyOf(getAllBookListBannerAsync.rejected),
      (state, action) => {
        state.isLoading = false;
      }
    );

    books.addMatcher(isAnyOf(getAllBookListDetailAsync.pending), (state) => {
      state.isLoadingDetail = true;
    });

    books.addMatcher(
      isAnyOf(getAllBookListDetailAsync.fulfilled),
      (state, action) => {
        state.isLoadingDetail = false;
        state.selectedBookDetail = action.payload;
      }
    );

    books.addMatcher(
      isAnyOf(getAllBookListDetailAsync.rejected),
      (state, action) => {
        state.isLoadingDetail = false;
      }
    );
  },
  reducers: {
    emptyServices: (state) => {
      return {
        ...initialState,
      };
    },
  },
});
export const { emptyServices } = booksSlice.actions;
export default booksSlice.reducer;
