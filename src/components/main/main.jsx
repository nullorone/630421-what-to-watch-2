import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import GenreList from "../genre-list/genre-list";
import IconsWrapper from "../icons-wrapper/icons-wrapper";
import CatalogButton from "../catalog-button/catalog-button";
import Logo from "../logo/logo";
import {
  AmountSimilarFilms,
  AMOUNT_ADDED_FILMS,
  Value,
} from "../../constants";
import MovieCard from "../movie-card/movie-card";

const {string, shape, number, bool, arrayOf} = PropTypes;

export default class Main extends PureComponent {
  constructor(props) {
    super(props);

    this._catalogButtonsClickHandler = this._catalogButtonsClickHandler.bind(this);

    this.state = {
      films: this.props.films.slice(Value.EMPTY, AmountSimilarFilms.DEFAULT),
      hasCatalogButton: true,
    };
  }

  render() {
    const {
      promo,
      genres,
      icons,
    } = this.props;

    return (
      <>
        {icons && <IconsWrapper iconNames={icons}/>}

        <MovieCard {...promo}/>

        <div className="page-content" >
          <section className="catalog" >
            <h2 className="catalog__title visually-hidden">
              Catalog
            </h2>

            {genres && <GenreList genres={genres}/>}

            {this.state.films && <MovieCardSmallList films={this.state.films}/>}

            {this.state.hasCatalogButton && <CatalogButton
              text={`ShowMore`}
              onButtonClick={this._catalogButtonsClickHandler}/>}
          </section>

          <footer className="page-footer">
            <Logo light={true}/>
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }

  _catalogButtonsClickHandler(evt) {
    evt.preventDefault();
    this.setState(() => {
      const endIndexFilm = this.state.films.length + AMOUNT_ADDED_FILMS;

      return {
        films: this.props.films.slice(Value.EMPTY, endIndexFilm),
        hasCatalogButton: endIndexFilm > this.props.films.length,
      };
    });
  }
}


Main.propTypes = {
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
  promo: shape({
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
  }),
  genres: arrayOf(string.isRequired),
  icons: arrayOf(string.isRequired),
};

