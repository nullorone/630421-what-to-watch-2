import React from 'react';
import PropTypes from 'prop-types';
import {AmountSimilarFilms, Pathname, Value} from "../../constants";
import Main from "../main/main";
import MoviePageDetails from "../movie-page-details/movie-page-details";

const {string, number, bool, shape, arrayOf} = PropTypes;

const App = (props) => {
  const {
    films,
    promo,
    genres,
    iconNames,
  } = props;

  switch (location.pathname) {
    case Pathname.DEFAULT:
      return (
        <Main
          promo={promo}
          films={films}
          genres={genres}
          icons={iconNames}
        />
      );
    case (location.pathname):
      const indexPathname = location.pathname.lastIndexOf(`/`) + Value.FULL;
      const filmId = location.pathname.slice(indexPathname);
      const similarFilms = films.slice(Value.EMPTY, AmountSimilarFilms.ON_PAGE_FILM);
      const clickedFilm = films.find((film) => film.id === Number(filmId));

      return (
        <MoviePageDetails
          clickedFilm={clickedFilm}
          films={similarFilms}
          icons={iconNames}
        />
      );
  }

  return null;
};

App.propTypes = {
  films: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
    image: shape({
      poster: string.isRequired,
      posterAlt: string.isRequired,
      preview: string.isRequired,
      previewAlt: string.isRequired,
      background: string.isRequired,
      backgroundAlt: string.isRequired,
    }),
    backgroundColor: string.isRequired,
    video: shape({
      link: string.isRequired,
      preview: string.isRequired,
    }),
    description: string.isRequired,
    rating: number.isRequired,
    scoresCount: number.isRequired,
    director: string.isRequired,
    starring: arrayOf(string.isRequired),
    runTime: number.isRequired,
    genre: string.isRequired,
    released: number.isRequired,
    isFavorite: bool.isRequired,
  })),
  promo: shape({
    id: number.isRequired,
    name: string.isRequired,
    image: shape({
      poster: string.isRequired,
      posterAlt: string.isRequired,
      preview: string.isRequired,
      previewAlt: string.isRequired,
      background: string.isRequired,
      backgroundAlt: string.isRequired,
    }),
    backgroundColor: string.isRequired,
    video: shape({
      link: string.isRequired,
      preview: string.isRequired,
    }),
    description: string.isRequired,
    rating: number.isRequired,
    scoresCount: number.isRequired,
    director: string.isRequired,
    starring: arrayOf(string.isRequired),
    runTime: number.isRequired,
    genre: string.isRequired,
    released: number.isRequired,
    isFavorite: bool.isRequired,
  }),
  genres: arrayOf(string.isRequired),
  iconNames: arrayOf(string.isRequired),
};

export default App;
