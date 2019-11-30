import {films} from "./mocks/films";
import {ActionType, Url} from "./constants";
import createApi from "src/api";

const getGenres = (filmsOnPage) => {
  return new Set(filmsOnPage.map((film) => film.genre));
};

const initState = {
  genre: `All genres`,
  films,
  genres: ``,
};

const ActionCreator = {
  selectGenre: (selectedGenre) => ({
    type: ActionType.SELECT_GENRE,
    payload: selectedGenre
  }),
  reset: () => ({
    type: ActionType.RESET,
  }),
  filteredFilms: (genre) => ({
    type: ActionType.FILTERED_FILMS,
    payload: initState.films.filter((film) => film.genre === genre)
  }),
  loadFilms: (loadedFilms) => ({
    type: ActionType.LOAD_FILMS,
    payload: loadedFilms,
  }),
  uniqueGenres: () => ({
    type: ActionType.GENRES,
    payload: [initState.genre, ...getGenres(initState.films)],
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
        films: action.payload,
      });
    case (ActionType.LOAD_FILMS):
      return Object.assign({}, state, {
        films: action.payload,
      });
    case (ActionType.GENRES):
      return Object.assign({}, state, {
        genres: action.payload,
      });
  }

  return state;
};

const Operation = {
  loadFilms: () => (dispatch) => {
    return createApi(dispatch)
      .get(Url.FILMS)
      .then((response) => {
        return dispatch(ActionCreator.loadFilms(response.data));
      });
  }
};

export {
  initState,
  ActionCreator,
  reducer,
  Operation,
};
