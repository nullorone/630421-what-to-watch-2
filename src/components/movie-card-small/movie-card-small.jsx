import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import MovieCardPicture from "../movie-card-picture/movie-card-picture";
import VideoPlayer from "../video-player/video-player";

const {string, number, bool, shape, func, arrayOf} = PropTypes;

const MovieCardSmall = (props) => {
  const {
    id,
    name,
    image: {
      preview,
      previewAlt,
    },
    video,
    isPlaying,
    onCardMouseEnter,
    onCardMouseLeave,
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onCardMouseEnter(id)}
      onMouseLeave={onCardMouseLeave}>
      {isPlaying
        ? <VideoPlayer video={video}/>
        : <MovieCardPicture
          className={`small-movie-card__image`}
          picture={{
            src: preview,
            alt: previewAlt,
          }}
        />}
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

MovieCardSmall.propTypes = {
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
  isPlaying: bool.isRequired,
  onCardMouseEnter: func.isRequired,
  onCardMouseLeave: func.isRequired,
};

export default MovieCardSmall;
