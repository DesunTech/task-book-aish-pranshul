import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {storage} from "../utils";
import Toast from "react-native-toast-message";
import {StringValues} from "../constants";

const AxiosLog = process.env.EXPO_PUBLIC_AXIOS_LOG;
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const AxiosClient = async (
  type,
  api,
  payload,
  toolkit,
  params,
  content = "application/json",
) => {
  const {auth: {token = ""} = {}} = toolkit.getState();

  const localStorageToken = await AsyncStorage.getItem("token");

  const AxiosTypeString = {
    GET: "get",
    POST: "post",
    PUT: "put",
    PATCH: "patch",
    DELETE: "delete",
  };

  if (!Boolean(payload.token)) {
    delete payload.token;
  }
  if (AxiosLog === "true") {
    console.log(
      "\x1b[1m\x1b[36m%s\x1b[0m",
      `AXIOS CLIENT PAYLOAD --> ${JSON.stringify(payload)} ${api}`,
    );
  }
  const auth = !!payload?.token
    ? payload?.token
    : !!token
      ? token
      : !!localStorageToken
        ? localStorageToken
        : null;
  if (AxiosLog === "true") {
    console.log("auth........=>", auth);
    console.log("BASE_URL........=>", BASE_URL);
  }
  const axios_config = {
    method: AxiosTypeString[type],
    url: `${BASE_URL}${api}`,
    data: payload,
    params,
    headers: {
      "Content-Type": content,
      ...(auth ? {Authorization: auth} : {}),
    },
  };

  if (AxiosTypeString[type] === "get") {
    delete axios_config.data;
  }

  return await axios(axios_config)
    .then(response => {
      if (AxiosLog === "true") {
        console.log(
          "\x1b[1m\x1b[33m%s\x1b[0m",
          `AXIOS CLIENT SUCCESS --> ${api}\n`,
        );
        console.log("\x1b[32m%s\x1b[0m", response.data);
      }
      return toolkit.fulfillWithValue({
        ...response,
      });
    })
    .catch(async error => {
      if (AxiosLog === "true") {
        console.log(
          "\x1b[1m\x1b[31m%s\x1b[0m",
          `AXIOS CLIENT ERROR -->${api}\n`,
        );
        console.log(
          "\x1b[1m\x1b[31m%s\x1b[0m",
          `AXIOS CLIENT ERROR -->${error}\n${BASE_URL}${api}`,
        );
      }
      if (error.response) {
        if (AxiosLog === "true") {
          console.log("\x1b[31m%s\x1b[0m", error.response.data);
        }
        if (error.response.status === 401) {
          await storage.clear();
        } else {
          console.log(error.response.data.message);
          Toast.show({
            type: "error",
            text1: `${error.response.data.message}`,
          });
        }
      } else if (error.request) {
        console.log("Please check your internet connection and try again.");
        Toast.show({
          type: "error",
          text1: `${StringValues.PleaseCheckInternet}`,
        });
      } else {
        console.log(error.message);
      }
      return toolkit.rejectWithValue(error.response.data.message);
    });
};
