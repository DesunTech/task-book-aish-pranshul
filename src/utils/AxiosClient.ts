import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { errorMessage } from "../redux/slices/errorSlice";
import configs from "./configs";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface AxiosClientParams {
  type: HttpMethod;
  api: string;
  payload?: any;
  toolkit: {
    dispatch: (action: any) => void;
    fulfillWithValue: (value: any) => any;
    rejectWithValue: (value: any) => any;
  };
  params?: Record<string, any>;
  content?: string;
}

const AxiosClient = async ({
  type,
  api,
  payload,
  toolkit,
  params = {},
  content = "application/json",
}: AxiosClientParams) => {
  const AxiosTypeString: Record<HttpMethod, AxiosRequestConfig["method"]> = {
    GET: "get",
    POST: "post",
    PUT: "put",
    PATCH: "patch",
    DELETE: "delete",
  };
  
  const config: AxiosRequestConfig = {
    method: AxiosTypeString[type],
    url: `${configs.backendUrl}${api}`,
    ...(type !== "GET" && { data: payload ?? null }),
    params,
    headers: {
      "Content-Type": content,
    },
  };

  try {
    const response: AxiosResponse = await axios(config);
    return toolkit.fulfillWithValue(response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      toolkit.dispatch(errorMessage(error.response.data.message));
      return toolkit.rejectWithValue(error.response.data.message);
    }
    return toolkit.rejectWithValue("An unexpected error occurred");
  }
};

export { AxiosClient };
