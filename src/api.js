import axios from "axios";
import {API_TIMEOUT, Url} from "src/constants";

const createApi = (dispatch) => {
  const api = axios.create({
    baseUrl: Url.BASE,
    timeout: API_TIMEOUT,
    withCredentials: true,
  });

  return api;
};

export default createApi;

