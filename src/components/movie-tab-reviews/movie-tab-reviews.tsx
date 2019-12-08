import * as React from "react";
import {AMOUNT_COMMENT_IN_COL, TypeCol, Value} from "../../constants";
import MovieCardReview from "../movie-card-review/movie-card-review";
import MovieCardCol from "../movie-card-col/movie-card-col";
import MovieCardRow from "../movie-card-row/movie-card-row";
import {Comment} from "../../types";

interface MovieTabReviewsProps {
  comments: Comment[];
  rating?: number;
  comment?: string;
  date?: string;
}

const MovieTabReviews: React.FC<MovieTabReviewsProps> = (props) => {
  const {comments} = props;
  const commentReview = [];

  for (let i = Value.EMPTY; i < comments.length; i = i + AMOUNT_COMMENT_IN_COL) {
    const sortedComments = comments
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

    const cardReviews = sortedComments
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

export default MovieTabReviews;
