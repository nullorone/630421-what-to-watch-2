import React from "react";
import PropTypes from "prop-types";
import {AMOUNT_COMMENT_IN_COL, TypeCol, Value} from "../../constants";
import MovieCardReview from "../movie-card-review/movie-card-review";
import MovieCardCol from "../movie-card-col/movie-card-col";
import MovieCardRow from "../movie-card-row/movie-card-row";

const {string, number, arrayOf, shape} = PropTypes;

const MovieTabReviews = (props) => {
  const {comments} = props;
  const commentReview = [];

  for (let i = Value.EMPTY; i < comments.length; i = i + AMOUNT_COMMENT_IN_COL) {
    const cardReviews = comments
      .slice(i, i + AMOUNT_COMMENT_IN_COL)
      .map((comment) => {
        const keyReview = `movie-card-review-${comment.id}`;
        return (
          <MovieCardReview key={keyReview} comment={comment}/>
        );
      });

    commentReview.push(
        <MovieCardCol key={`card-col-${i}`} type={TypeCol.REVIEWS}>
          {cardReviews}
        </MovieCardCol>
    );
  }

  return (
    <MovieCardRow type={TypeCol.REVIEWS}>
      {commentReview}
    </MovieCardRow>
  );
};

MovieTabReviews.propTypes = {
  comments: arrayOf(shape({
    id: number.isRequired,
    user: shape({
      id: number.isRequired,
      name: string.isRequired,
    }),
    rating: number.isRequired,
    comment: string.isRequired,
    date: string.isRequired,
  })),
};

export default MovieTabReviews;
