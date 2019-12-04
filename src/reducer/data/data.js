import {Url} from "../../constants";
import Adapter from "../../adapter";

const initState = {
  films: [],
  promo: {},
  genres: [],
  isAuthorizationRequired: true,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  GENRES: `GENRES`,
  AUTHORIZATION: `AUTHORIZATION`,
};

const ActionCreator = {
  loadFilms: (loadedFilms) => ({
    type: ActionType.LOAD_FILMS,
    payload: loadedFilms,
  }),
  loadPromo: (loadedPromo) => ({
    type: ActionType.LOAD_PROMO,
    payload: loadedPromo,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.AUTHORIZATION,
    payload: status
  }),
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case (ActionType.LOAD_FILMS):
      return Object.assign({}, state, {
        films: action.payload,
      });
    case (ActionType.LOAD_PROMO):
      return Object.assign({}, state, {
        promo: action.payload,
      });
    case (ActionType.GENRES):
      return Object.assign({}, state, {
        genres: action.payload,
      });
    case (ActionType.AUTHORIZATION):
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });
  }

  return state;
};


const Operation = {
  loadFilms: () => (dispatch, _, api) => {
    return api.get(Url.FILMS)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(Adapter.parseFilms(response.data)));
      });
  },
  loadPromo: () => (dispatch, _, api) => {
    return api.get(Url.PROMO)
      .then((response) => {
        dispatch(ActionCreator.loadPromo(Adapter.parseFilm(response.data)));
      });
  },
};

export {
  initState,
  ActionType,
  ActionCreator,
  reducer,
  Operation,
};
