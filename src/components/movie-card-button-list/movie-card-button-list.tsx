import * as React from "react";
import MovieCardButton from "../movie-card-button/movie-card-button";
import {Value} from "../../constants";
import {Button} from "../../types";

interface MovieCardButtonListProps {
  buttons: Button[];
}

const MovieCardButtonList: React.FC<MovieCardButtonListProps> = (props) => {
  const {buttons} = props;

  return (
    <div className="movie-card__buttons">
      {buttons.map((button, index) => {
        const buttonKey = `movie-card-button-${index + Value.FULL}`;

        return <MovieCardButton key={buttonKey} {...button}/>;
      })}
      {props.children}
    </div>
  );
};

export default MovieCardButtonList;
