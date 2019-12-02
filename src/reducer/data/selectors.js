import {getLoadedFilms} from "../user/selectors";
import {createSelector} from "reselect";

const defaultGenre = `All genres`;


const getGenres = (filmsOnPage) => {
  return new Set(filmsOnPage.map((film) => film.genre));
};

const getUniqueGenres = createSelector(
    getLoadedFilms,
    (films) => [defaultGenre, ...getGenres(films)]
);

export {getUniqueGenres};
