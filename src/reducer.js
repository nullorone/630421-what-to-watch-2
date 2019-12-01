import {ActionType} from "./constants";

const getGenres = (filmsOnPage) => {
  return new Set(filmsOnPage.map((film) => film.genre));
};

const initState = {
  genre: `All genres`,
  films: [],
  filteredFilms: [],
  promo: {},
  genres: ``,
  isAuthorization: true,
};

const ActionCreator = {
  selectGenre: (selectedGenre) => ({
    type: ActionType.SELECT_GENRE,
    payload: selectedGenre
  }),
  reset: () => ({
    type: ActionType.RESET,
  }),
  filterFilms: (genre, stateFilms) => ({
    type: ActionType.FILTERED_FILMS,
    payload: genre === initState.genre
      ? stateFilms.slice()
      : stateFilms.slice().filter((film) => film.genre === genre)
  }),
  loadFilms: (loadedFilms) => ({
    type: ActionType.LOAD_FILMS,
    payload: loadedFilms,
  }),
  loadPromo: (loadedPromo) => ({
    type: ActionType.LOAD_PROMO,
    payload: loadedPromo,
  }),
  uniqueGenres: (loadedFilms) => ({
    type: ActionType.GENRES,
    payload: [initState.genre, ...getGenres(loadedFilms)],
  }),
  requireAuthorization: (status) => ({
    type: ActionType.AUTHORIZATION,
    payload: status
  }),
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case (ActionType.SELECT_GENRE):
      return Object.assign({}, state, {
        genre: action.payload,
      });
    case (ActionType.RESET):
      return Object.assign({}, initState);
    case (ActionType.FILTERED_FILMS):
      return Object.assign({}, state, {
        filteredFilms: action.payload,
      });
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
        isAuthorization: action.payload,
      });
  }

  return state;
};

export {
  initState,
  ActionCreator,
  reducer,
};
