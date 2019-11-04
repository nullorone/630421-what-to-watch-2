import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import GenreList from "../genre-list/genre-list";
import IconsWrapper from "../icons-wrapper/icons-wrapper";
import CatalogButton from "../catalog-button/catalog-button";
import Copyright from "../copyright/copyright";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import Header from "../header/header";
import Title from "../title/title";
import MovieCardPicture from "../movie-card-picture/movie-card-picture";
import MovieCardButtonList from "../movie-card-button-list/movie-card-button-list";
import {
  MOVIE_CARD_BUTTONS,
  COPYRIGHT,
  CINEMA_NAME,
  Img,
  AmountSimilarFilms,
  AMOUNT_ADDED_FILMS,
  Value,
} from "../../constants";
import MovieCardDescription from "../movie-card-description/movie-card-description";

const {string, shape, number, bool, arrayOf} = PropTypes;

export default class Main extends PureComponent {
  constructor(props) {
    super(props);

    this._currentAmountSimilarFilm = AmountSimilarFilms.DEFAULT;

    this.state = {
      films: this.props.films.slice(Value.EMPTY, AmountSimilarFilms.DEFAULT),
      hasCatalogButton: true,
    };
  }

  render() {
    const {
      films,
      genres,
      icons,
    } = this.props;

    const favoriteFilm = films.findIndex((film) => film.isFavorite);
    const {
      name,
      image: {
        poster,
        posterAlt,
        background,
        backgroundAlt,
      },
      genre,
      released,
    } = films[favoriteFilm];

    return (
      <>
        {icons && <IconsWrapper iconNames={icons}/>}

        <section className="movie-card">

          {<MovieCardPicture
            className={`movie-card__bg`}
            picture={{
              src: background,
              alt: backgroundAlt,
            }}/>}

          {<Title className={`visually-hidden`} text={CINEMA_NAME}/>}

          {<Header>
            <Logo light={false}/>
            <UserBlock avatarSrc={`./img/avatar.jpg`}/>
          </Header>}

          <div className="movie-card__wrap">
            <div className="movie-card__info">

              {<MovieCardPicture
                className={`movie-card__poster`}
                picture={{
                  src: poster,
                  alt: posterAlt,
                  width: Img.BIG.width,
                  height: Img.BIG.height,
                }}/>}

              {<MovieCardDescription
                title={name}
                genre={genre}
                year={released}
              >
                <MovieCardButtonList buttons={MOVIE_CARD_BUTTONS}/>
              </MovieCardDescription>}
            </div>
          </div>
        </section>

        <div className="page-content" >
          <section className="catalog" >
            <h2 className="catalog__title visually-hidden">
              Catalog
            </h2>

            {genres && <GenreList genres={genres}/>}

            {this.state.films && <MovieCardSmallList films={this.state.films}/>}

            {this.state.hasCatalogButton && <CatalogButton
              text={`ShowMore`}
              onButtonClick={(evt) => {
                evt.preventDefault();
                this.setState((prevState) => {
                  const startIndexFilm = this._currentAmountSimilarFilm;
                  let hasCatalogButton = this.state.hasCatalogButton;
                  let endIndexFilm = Value.EMPTY;

                  if ((startIndexFilm + AMOUNT_ADDED_FILMS) > this.props.films.length) {
                    hasCatalogButton = false;
                    endIndexFilm = this.props.films.length;
                  } else {
                    endIndexFilm = startIndexFilm + AMOUNT_ADDED_FILMS;
                    this._currentAmountSimilarFilm = endIndexFilm;
                  }

                  return {
                    films: [...prevState.films, ...this.props.films.slice(startIndexFilm, endIndexFilm)],
                    hasCatalogButton,
                  };
                });
              }}/>}
          </section>

          <footer className="page-footer">
            {<Logo light={true}/>}
            {<Copyright text={COPYRIGHT}/>}
          </footer>
        </div>
      </>
    );
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
  genres: arrayOf(string.isRequired),
  icons: arrayOf(string.isRequired),
};

