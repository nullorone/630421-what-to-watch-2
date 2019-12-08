import * as React from "react";
import {Rating} from "../../constants";

interface MovieTabOverviewProps {
  rating: number;
  scoresCount: number;
  description: string;
  starring: string[];
  director: string;
}

const getRating = (value: number): string => {
  switch (true) {
    case (value >= 0 && value < 3):
      return Rating.BAD;
    case (value >= 3 && value < 5):
      return Rating.NORMAL;
    case (value >= 5 && value < 8):
      return Rating.GOOD;
    case (value >= 8 && value < 10):
      return Rating.VERY_GOOD;
    case (value === 10):
      return Rating.AWESOME;
  }

  return ``;
};

const MovieTabOverview: React.FC<MovieTabOverviewProps> = (props) => {
  const {rating, scoresCount, description, starring, director} = props;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRating(rating)}</span>
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

export default MovieTabOverview;
