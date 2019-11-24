import * as React from "react";

interface MovieCardRowProps {
  type: string;
}

const MovieCardRow: React.FC<MovieCardRowProps> = (props) => {
  const {type} = props;

  const rowClassName = type ? `movie-card__${type} movie-card__row` : `movie-card__row`;

  return (
    <div className={rowClassName}>
      {props.children}
    </div>
  );
};

export default MovieCardRow;
