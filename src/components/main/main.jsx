import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import GenreList from "../genre-list/genre-list";
import IconsWrapper from "../icons-wrapper/icons-wrapper";
import CatalogButton from "../catalog-button/catalog-button";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import MovieCardPicture from "../movie-card-picture/movie-card-picture";
import MovieCardButtonList from "../movie-card-button-list/movie-card-button-list";
import {
  MOVIE_CARD_BUTTONS,
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

    this._catalogButtonsClickHandler = this._catalogButtonsClickHandler.bind(this);

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

    const favoriteFilm = films.find((film) => film.isFavorite);
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
    } = favoriteFilm;

    return (
      <>
        {icons && <IconsWrapper iconNames={icons}/>}

        <section className="movie-card">

          <MovieCardPicture
            className={`movie-card__bg`}
            picture={{
              src: background,
              alt: backgroundAlt,
            }}/>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo light={false}/>
            <UserBlock avatarSrc={`./img/avatar.jpg`}/>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">

              <MovieCardPicture
                className={`movie-card__poster`}
                picture={{
                  src: poster,
                  alt: posterAlt,
                  width: Img.BIG.width,
                  height: Img.BIG.height,
                }}/>

              <MovieCardDescription
                title={name}
                genre={genre}
                year={released}
              >
                <MovieCardButtonList buttons={MOVIE_CARD_BUTTONS}/>
              </MovieCardDescription>
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
      const {
        films,
        hasCatalogButton
      } = this.state;

      let newStateCatalogButton = hasCatalogButton;
      const endIndexFilm = films.length + AMOUNT_ADDED_FILMS;

      if (endIndexFilm > this.props.films.length) {
        newStateCatalogButton = false;
      }

      return {
        films: this.props.films.slice(Value.EMPTY, endIndexFilm),
        hasCatalogButton: newStateCatalogButton,
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
  genres: arrayOf(string.isRequired),
  icons: arrayOf(string.isRequired),
};

