import {Url, Value} from "../../constants";
import Adapter from "../../adapter";

const initState = {
  films: [],
  promo: {},
  genres: [],
  isAuthorizationRequired: true,
  user: {},
  comments: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  GENRES: `GENRES`,
  AUTHORIZATION: `AUTHORIZATION`,
  LOAD_USER: `LOAD_USER`,
  GET_COMMENTS: `GET_COMMENTS`,
  UPDATE_FILMS: `UPDATE_FILMS`,
  UPDATE_PROMO: `UPDATE_PROMO`,
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
  loadUser: (data) => ({
    type: ActionType.LOAD_USER,
    payload: data
  }),
  getComments: (comments) => ({
    type: ActionType.GET_COMMENTS,
    payload: comments
  }),
  updateFilms: (films) => ({
    type: ActionType.UPDATE_FILMS,
    payload: films
  }),
  updatePromo: (promo) => ({
    type: ActionType.UPDATE_PROMO,
    payload: promo
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
    case (ActionType.LOAD_USER):
      return Object.assign({}, state, {
        user: action.payload,
      });
    case (ActionType.GET_COMMENTS):
      return Object.assign({}, state, {
        comments: action.payload,
      });
    case (ActionType.UPDATE_FILMS):
      return Object.assign({}, state, {
        films: action.payload,
      });
    case (ActionType.UPDATE_PROMO):
      return Object.assign({}, state, {
        promo: action.payload,
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
  sendUserData: (userData) => (dispatch, _, api) => {
    return api.post(Url.LOGIN, {
      email: userData.email,
      password: userData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.loadUser(Adapter.parseUser(response.data)));
        dispatch(ActionCreator.requireAuthorization(false));
      });
  },
  loadComments: (id) => (dispatch, _, api) => {
    return api.get(`${Url.COMMENTS}/${id}`)
      .then((response) => {
        dispatch(ActionCreator.getComments(response.data));
      });
  },
  sendReview: (reviewData) => (dispatch, _, api) => {
    const {id, rating, comment} = reviewData;
    return api.post(`${Url.COMMENTS}/${id}`, {
      rating,
      comment,
    })
      .then((response) => {
        dispatch(ActionCreator.getComments(response.data));
      });
  },
  sendFavorite: (id, addInFavorite, films, promo) => (dispatch, _, api) => {
    return api.post(`${Url.FAVORITE}/${id}/${addInFavorite}`)
      .then((response) => {
        const receivedFilm = Adapter.parseFilm(response.data);
        const changedFilmIndex = films.findIndex((film) => film.id === receivedFilm.id);
        const updatedFilms = [
          ...films.slice(0, changedFilmIndex),
          receivedFilm,
          ...films.slice(changedFilmIndex + Value.FULL)
        ];
        dispatch(ActionCreator.updateFilms(updatedFilms));
        if (promo) {
          dispatch(ActionCreator.updatePromo(receivedFilm));
        }
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
