import * as React from "react";
import MovieCardSmall from "../movie-card-small/movie-card-small";
import {Film} from "../../types";

interface MovieCardSmallListProps {
  films: Film[];
  itemCurrentIndex: number;
  onItemMouseEnter: () => void;
  onItemMouseLeave: () => void;
}

const MovieCardSmallList: React.FC<MovieCardSmallListProps> = (props) => {
  const {
    films,
    itemCurrentIndex,
    onItemMouseEnter,
    onItemMouseLeave
  } = props;

  return (
    <div className="catalog__movies-list">
      {films
        .map((film) => {
          const keyComponent = `movie-card-${film.id}`;

          return (
            <MovieCardSmall
              key={keyComponent}
              isPlaying={itemCurrentIndex === film.id}
              onCardMouseEnter={onItemMouseEnter}
              onCardMouseLeave={onItemMouseLeave}
              {...film}
            />
          );
        })}
    </div>
  );
};

export default MovieCardSmallList;
