import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCardSmall from "../movie-card-small/movie-card-small";
import {AMOUNT_ADDED_FILMS, AmountSimilarFilms, Value} from "../../constants";
import CatalogButton from "../catalog-button/catalog-button";

const {string, number, bool, shape, arrayOf} = PropTypes;

export default class MovieCardSmallList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMovieCardSmallListMouseEnter = this._handleMovieCardSmallListMouseEnter.bind(this);
    this._handleMovieCardSmallListMouseLeave = this._handleMovieCardSmallListMouseLeave.bind(this);
    this._catalogButtonsClickHandler = this._catalogButtonsClickHandler.bind(this);

    this._videoTimer = null;

    this.state = {
      currentIndexCard: null,
      endIndexFilm: AmountSimilarFilms.DEFAULT,
    };
  }

  render() {
    const {films} = this.props;

    return (
      <>
        <div className="catalog__movies-list">
          {films
            .slice(Value.EMPTY, this.state.endIndexFilm)
            .map((film) => {
              const keyComponent = `movie-card-${film.id}`;

              return (
                <MovieCardSmall
                  key={keyComponent}
                  isPlaying={this.state.currentIndexCard === film.id}
                  onCardMouseEnter={this._handleMovieCardSmallListMouseEnter}
                  onCardMouseLeave={this._handleMovieCardSmallListMouseLeave}
                  {...film}
                />
              );
            })}
        </div>
        {(this.state.endIndexFilm < films.length)
          && <CatalogButton onButtonClick={this._catalogButtonsClickHandler}/>}
      </>
    );
  }

  componentWillUnmount() {
    clearTimeout(this._videoTimer);
  }

  _handleMovieCardSmallListMouseEnter(id) {
    this._videoTimer = setTimeout(() => {
      this.setState(() => ({currentIndexCard: id}));
    }, 1000);
  }

  _handleMovieCardSmallListMouseLeave() {
    clearTimeout(this._videoTimer);
    this.setState(() => ({currentIndexCard: null}));
  }

  _catalogButtonsClickHandler(evt) {
    evt.preventDefault();
    this.setState((prevState) => ({
      endIndexFilm: prevState.endIndexFilm + AMOUNT_ADDED_FILMS
    }));
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
};
