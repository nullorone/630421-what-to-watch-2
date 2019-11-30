import axios from "axios";
import {API_TIMEOUT, Status, Url} from "src/constants";

const createApi = (dispatch) => {
  const api = axios.create({
    baseUrl: Url.BASE,
    timeout: API_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === Status.AUTHORIZATION) {
      dispatch();
    }

    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;

