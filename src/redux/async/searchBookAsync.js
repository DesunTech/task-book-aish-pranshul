import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosClient} from "../AxiosClient";

export const searchBookAsync = createAsyncThunk(
  "get/new/book",
  async ({payload, params}, toolkit) => {
    console.log("payload...", payload, "params", params);

    return await AxiosClient(
      "GET",
      `/volumes?q=${payload}`,
      [],
      toolkit,
      params,
    );
  },
);
