import React from "react";
import PropTypes from "prop-types";

const {string, number, arrayOf} = PropTypes;

const MovieTabOverview = (props) => {
  const {rating, scoresCount, description, starring, director} = props;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
      </div>
    </>
  );
};

MovieTabOverview.propTypes = {
  rating: number.isRequired,
  scoresCount: number.isRequired,
  description: string.isRequired,
  starring: arrayOf(string.isRequired),
  director: string.isRequired,
};

export default MovieTabOverview;
