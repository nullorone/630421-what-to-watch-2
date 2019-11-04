import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCardSmall from "../movie-card-small/movie-card-small";
import {EMPTY_STRING, Value} from "../../constants";

const {string, number, bool, shape, arrayOf} = PropTypes;

export default class MovieCardSmallList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: Value.EMPTY,
      title: EMPTY_STRING,
      genre: EMPTY_STRING,
      year: Value.EMPTY,
      image: {
        poster: EMPTY_STRING,
        posterAlt: EMPTY_STRING,
        background: EMPTY_STRING,
        backgroundAlt: EMPTY_STRING,
      },
    };

    this.onMovieCardClick = (evt, ...filmData) => {
      evt.preventDefault();
      const {
        id,
        name,
        genre,
        released,
        image: {
          poster,
          posterAlt,
          background,
          backgroundAlt,
        }
      } = filmData[0];

      this.setState(() => ({
        id,
        title: name,
        genre,
        year: released,
        image: {
          poster,
          posterAlt,
          background,
          backgroundAlt,
        },
      }), () => {
        location.href = (`${location.origin}/${id}`);
      });
    };
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
                onLinkClick={this.onMovieCardClick}
                {...film}
              />
            );
          })}
      </div>
    );
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
