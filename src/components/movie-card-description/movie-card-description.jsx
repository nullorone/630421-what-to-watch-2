import React from "react";
import PropTypes from "prop-types";

const {any, string} = PropTypes;

const MovieCardDescription = (props) => {
  const {title, genre, year} = props;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{year}</span>
      </p>

      {props.children}

    </div>
  );
};

MovieCardDescription.propTypes = {
  title: string.isRequired,
  genre: string.isRequired,
  year: string.isRequired,
  children: any,
};

export default MovieCardDescription;
