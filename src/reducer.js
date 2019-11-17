import {films} from "./mocks/films";
import {ActionType} from "./constants";

const getGenres = (filmsOnPage) => {
  return new Set(filmsOnPage.map((film) => film.genre));
};

const genres = [`All genres`, ...getGenres(films)];

const initState = {
  genre: `All genres`,
  films,
  genres,
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
  }

  return state;
};

export {
  initState,
  ActionCreator,
  reducer,
};
