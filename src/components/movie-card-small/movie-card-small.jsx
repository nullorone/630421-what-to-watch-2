import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCardPicture from "../movie-card-picture/movie-card-picture";

const {string, number, bool, shape, func, arrayOf} = PropTypes;

export default class MovieCardSmall extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      name,
      image: {
        preview,
        previewAlt,
      },
      onLinkClick,
    } = this.props;

    return (
      <article className="small-movie-card catalog__movies-card">
        {<MovieCardPicture
          className={`small-movie-card__image`}
          picture={{
            src: preview,
            alt: previewAlt,
          }}
          onImgClick={(evt) => onLinkClick(evt, this.props)}
        />}
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href={`/${id}`}
            onClick={(evt) => onLinkClick(evt, this.props)}>
            {name}
          </a>
        </h3>
      </article>
    );
  }
}

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
    link: string.isRequired,
    preview: string.isRequired,
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
  onLinkClick: func.isRequired,
};
