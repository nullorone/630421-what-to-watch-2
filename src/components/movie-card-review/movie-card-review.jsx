import React from "react";
import PropTypes from "prop-types";

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

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime="2016-12-24">{date}December 24, 2016</time>
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
