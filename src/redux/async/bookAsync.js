import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosClient} from "../AxiosClient";

export const getBookAsync = createAsyncThunk(
  "get/book",
  async ({payload, params}, toolkit) => {
    return await AxiosClient(
      "GET",
      `/volumes?q=${payload}`,
      [],
      toolkit,
      params,
    );
  },
);
export const getTrendingBookAsync = createAsyncThunk(
  "get/trending/book",
  async ({payload, params}, toolkit) => {
    return await AxiosClient(
      "GET",
      `/volumes?q=${payload}`,
      [],
      toolkit,
      params,
    );
  },
);
export const getNewBookAsync = createAsyncThunk(
  "get/new/book",
  async ({payload, params}, toolkit) => {
    return await AxiosClient(
      "GET",
      `/volumes?q=${payload}`,
      [],
      toolkit,
      params,
    );
  },
);
