import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import {Pathname} from "../../constants";

const {arrayOf, shape, string} = PropTypes;

const PageScreen = (props) => {
  const {
    films,
    genres,
    iconNames,
  } = props;

  switch (location.pathname) {
    case Pathname.DEFAULT:
      return (
        <Main
          films={films}
          genres={genres}
          icons={iconNames}
        />
      );
    case Pathname.DETAILS:
      return (
        <MoviePageDetails
          films={films}
          icons={iconNames}
        />
      );
  }

  return null;
};

PageScreen.propTypes = {
  films: arrayOf(shape({
    title: string.isRequired,
    img: shape({
      src: string.isRequired,
      alt: string.isRequired,
    }),
  })),
  genres: arrayOf(string.isRequired),
  iconNames: arrayOf(string.isRequired),
};

export default PageScreen;
