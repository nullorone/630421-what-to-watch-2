import React from "react";
import PropTypes from "prop-types";
import {Value} from "../../constants";

const {string, number, shape} = PropTypes;

const MovieCardReview = (props) => {
  const {
    user: {
      name,
    },
    rating,
    comment,
    date
  } = props.comment;

  const dateOptions = {
    year: `numeric`,
    month: `long`,
    day: `numeric`,
  };
  const indexTimeSeparator = date.indexOf(`T`);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={date.slice(Value.EMPTY, indexTimeSeparator)}>{new Date(date).toLocaleString(`en-US`, dateOptions)}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
};

MovieCardReview.propTypes = {
  comment: shape({
    id: number.isRequired,
    user: shape({
      id: number.isRequired,
      name: string.isRequired,
    }),
    rating: number.isRequired,
    comment: string.isRequired,
    date: string.isRequired,
  })
};

export default MovieCardReview;
