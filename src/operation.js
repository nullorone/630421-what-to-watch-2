import {Url} from "./constants";
import {ActionCreator} from "./reducer";
import Adapter from "./adapter";

const Operation = {
  loadFilms: () => (dispatch, _, api) => {
    return api.get(Url.FILMS)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(Adapter.parseFilms(response.data)));
        dispatch(ActionCreator.uniqueGenres(Adapter.parseFilms(response.data)));
      });
  },
  loadPromo: () => (dispatch, _, api) => {
    return api.get(Url.PROMO)
      .then((response) => {
        dispatch(ActionCreator.loadPromo(Adapter.parseFilm(response.data)));
      });
  },
};

export default Operation;
