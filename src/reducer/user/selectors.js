import {createSelector} from "reselect";
import NameSpaces from "../name-spaces";

const getLoadedFilms = (state) => state[NameSpaces.DATA].films;

const getSelectedGenre = (state) => state[NameSpaces.USER].genre;

const getFilteredFIlms = createSelector(
    getLoadedFilms,
    getSelectedGenre,
    (resultOne, resultTwo) => resultOne
      .filter((film) => resultTwo === `All genres`
        ? film
        : film.genre === resultTwo)
);

export {
  getLoadedFilms,
  getFilteredFIlms
};
