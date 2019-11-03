import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCardPicture from "../movie-card-picture/movie-card-picture";

const {string, shape, func} = PropTypes;

export default class MovieCardSmall extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      img: {
        src,
        alt,
      },
      onLinkEnter,
    } = this.props;

    return (
      <article className="small-movie-card catalog__movies-card">
        {<MovieCardPicture
          className={`small-movie-card__image`}
          picture={{
            src,
            alt,
          }}
        />}
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html"
            onMouseEnter={onLinkEnter}>{title}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCardSmall.propTypes = {
  title: string.isRequired,
  img: shape({
    src: string.isRequired,
    alt: string.isRequired,
  }),
  onLinkEnter: func.isRequired,
};
