import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCardSmall from "../movie-card-small/movie-card-small";

const {string, number, bool, shape, arrayOf} = PropTypes;

export default class MovieCardSmallList extends PureComponent {
  constructor(props) {
    super(props);

    this._onMovieCardClick = this._onMovieCardClick.bind(this);
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films
          .map((film, index) => {
            const keyComponent = `movie-card-${index + 1}`;

            return (
              <MovieCardSmall
                key={keyComponent}
                onLinkClick={this._onMovieCardClick}
                {...film}
              />
            );
          })}
      </div>
    );
  }

  _onMovieCardClick(evt, ...filmData) {
    evt.preventDefault();
    const {
      id,
    } = filmData[0];

    location.href = (`${location.origin}/${id}`);
  }
}

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
  })),
};
