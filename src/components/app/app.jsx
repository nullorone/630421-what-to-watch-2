import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import {genres as mockGenres} from "../../mocks/genres";

const {string, arrayOf, shape, func, oneOf} = PropTypes;

const App = (props) => {
  const {films, genres} = props;
  return (
    <Main
      films={films}
      genres={genres}
      onMovieCardLinkClick={() => {}}
    />
  );
};

App.propTypes = {
  films: arrayOf(shape({
    title: string.isRequired,
    img: {
      src: string.isRequired,
      alt: string.isRequired,
    },
  })),
  genres: oneOf(mockGenres),
  onMovieCardLinkClick: func.isRequired,
};

export default App;
