import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosClient} from "../AxiosClient";

export const getBookAsync = createAsyncThunk(
  "get/book",
  async (payload, toolkit) => {
    return await AxiosClient(
      "GET",
      `/volumes?q=${payload.q}&subject:${payload?.subject}&startIndex=${payload.startIndex}&maxResult=${payload?.maxResults}`,
      [],
      toolkit,
    );
  },
);
export const getTrendingBookAsync = createAsyncThunk(
  "get/trending/book",
  async (payload, toolkit) => {
    return await AxiosClient(
      "GET",
      `/volumes?q=${payload.q}&subject:${payload?.subject}&startIndex=${payload.startIndex}&maxResult=${payload?.maxResults}`,
      [],
      toolkit,
    );
  },
);
export const getNewBookAsync = createAsyncThunk(
  "get/new/book",
  async (payload, toolkit) => {
    return await AxiosClient(
      "GET",
      `/volumes?q=${payload.q}&subject:${payload?.subject}&startIndex=${payload.startIndex}&maxResult=${payload?.maxResults}`,
      [],
      toolkit,
    );
  },
);
