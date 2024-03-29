import * as React from "react";
import {Link} from "react-router-dom";
import MovieCardPicture from "../movie-card-picture/movie-card-picture";
import VideoPlayer from "../video-player/video-player";
import {Video} from "../../types";
import store from "../../reducer/store";
import {Operation} from "../../reducer/data/data";

interface MovieCardSmallProps {
  id: number;
  name: string;
  image: {
    preview?: string;
    previewAlt?: string;
  };
  video: Video;
  isPlaying: boolean;
  onCardMouseEnter: (id: number) => void;
  onCardMouseLeave: () => void;
}

const MovieCardSmall: React.FC<MovieCardSmallProps> = (props) => {
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
      onMouseEnter={(): void => onCardMouseEnter(id)}
      onMouseLeave={onCardMouseLeave}>
      {isPlaying
        ? <VideoPlayer video={video}/>
        : <Link
          to={`/films/${id}`}
          onClick={(): void => {
            store.dispatch(Operation.loadComments(id));
          }}>
          <MovieCardPicture
            className={`small-movie-card__image`}
            picture={{
              src: preview,
              alt: previewAlt,
            }}
          />
        </Link>}
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/films/${id}`}
          onClick={(): void => {
            store.dispatch(Operation.loadComments(id));
          }}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

export default MovieCardSmall;
