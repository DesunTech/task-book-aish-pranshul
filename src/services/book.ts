import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosClient } from "../utils/AxiosClient";

export const getAllBookListAsync = createAsyncThunk(
  "getAllBookListAsync",
  async (payload: any, toolkit) => {
    const { searchTerm, subject, startIndex, maxResults } = payload || {};

    return await AxiosClient({
      type: "GET",
      api: `/books/v1/volumes?q=${searchTerm || ""}:subject:${
        subject || ""
      }&startIndex=${startIndex}&maxResults=${maxResults}`,
      payload: {},
      toolkit,
      params: {},
    });
  }
);

export const getAllBookListBannerAsync = createAsyncThunk(
  "getAllBookListBannerAsync",
  async (payload: any, toolkit) => {
    const { searchTerm, subject, startIndex, maxResults } = payload || {};

    const q = subject ? `${searchTerm}+subject:${subject}` : searchTerm;

    const params = {
      q,
      startIndex,
      maxResults,
    };
    return await AxiosClient({
      type: "GET",
      api: `/books/v1/volumes`,
      payload: {},
      toolkit,
      params: params,
    });
  }
);

export const getAllBookListDetailAsync = createAsyncThunk(
  "getAllBookListDetailAsync",
  async (payload: any, toolkit) => {
    return await AxiosClient({
      type: "GET",
      api: `/books/v1/volumes/${payload.id}`,
      payload: {},
      toolkit,
      params: {},
    });
  }
);
