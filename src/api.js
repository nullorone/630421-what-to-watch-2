import axios from "axios";
import {API_TIMEOUT, Status, Url} from "./constants";
import {ActionCreator} from "./reducer/data/data";

const createApi = (dispatch) => {
  const api = axios.create({
    baseURL: Url.BASE,
    timeout: API_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === Status.AUTHORIZATION) {
      dispatch(ActionCreator.requireAuthorization(true));
    }

    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;

