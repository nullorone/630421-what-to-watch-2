import React from "react";
import PropTypes from 'prop-types';
import MovieCardSmall from "../movie-card-small/movie-card-small";

const {string, number, bool, shape, arrayOf, func} = PropTypes;

const MovieCardSmallList = (props) => {
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

MovieCardSmallList.propTypes = {
  films: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
    image: shape({
      poster: string.isRequired,
      posterAlt: string.isRequired,
      preview: string.isRequired,
      previewAlt: string.isRequired,
      background: string.isRequired,
    }),
    backgroundColor: string.isRequired,
    video: shape({
      link: shape({
        mp4: string.isRequired,
        webm: string.isRequired,
      }),
      poster: string.isRequired,
    }),
    description: string.isRequired,
    rating: number.isRequired,
    scoresCount: number.isRequired,
    director: string.isRequired,
    starring: arrayOf(string.isRequired),
    runTime: number.isRequired,
    genre: string.isRequired,
    released: number.isRequired,
    isFavorite: bool.isRequired,
  })),
  itemCurrentIndex: number,
  onItemMouseEnter: func.isRequired,
  onItemMouseLeave: func.isRequired,
};

export default MovieCardSmallList;
