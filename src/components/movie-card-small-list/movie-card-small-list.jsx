import React from "react";
import PropTypes from 'prop-types';
import MovieCardSmall from "../movie-card-small/movie-card-small";

const {string, shape, func, arrayOf} = PropTypes;

const MovieCardSmallList = (props) => {
  const {movies, onMovieCardLinkClick} = props;
  let movieCards = [];

  for (let i = 0; i < movies.length; i++) {
    const keyComponent = `movie-card-${i + 1}`;

    movieCards.push(<MovieCardSmall key={keyComponent} {...props}/>);
  }

  return (
    <div className="catalog__movies-list">
      {movieCards}
    </div>
  );
};

MovieCardSmallList.propTypes = {
  movies: arrayOf(shape({
    title: string.isRequired,
    img: shape({
      src: string.isRequired,
      alt: string.isRequired,
    })
  })),
  onMovieCardLinkClick: func.isRequired,
};

export default MovieCardSmallList;
