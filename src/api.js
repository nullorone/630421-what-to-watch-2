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
    if (error.response && (error.response.status === Status.AUTHORIZATION || error.response.status === Status.FORBIDDEN)) {
      dispatch(ActionCreator.requireAuthorization(true));
      location.href = `/login`;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;

