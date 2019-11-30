import * as React from "react";

interface MovieCardColProps {
  type: string;
}

const MovieCardCol: React.FC<MovieCardColProps> = (props) => {
  const {type} = props;

  const colClassName = type && `movie-card__${type}-col`;

  return (
    <div className={colClassName}>
      {props.children}
    </div>
  );
};

export default MovieCardCol;
