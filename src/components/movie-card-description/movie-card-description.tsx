import * as React from "react";

interface MovieCardDescriptionProps {
  title: string;
  genre: string;
  year: number;
}

const MovieCardDescription: React.FC<MovieCardDescriptionProps> = (props) => {
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

export default MovieCardDescription;
