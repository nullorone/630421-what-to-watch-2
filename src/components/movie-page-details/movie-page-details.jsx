import React from "react";
import PropTypes from "prop-types";
import IconsWrapper from "../icons-wrapper/icons-wrapper";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import MovieCardPicture from "../movie-card-picture/movie-card-picture";
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import {
  Value,
  MOVIE_CARD_BUTTONS,
  Img,
  MOVIE_NAV_ITEMS,
  TypeCol,
  AmountSimilarFilms,
} from "../../constants";
import MovieCardDescription from "../movie-card-description/movie-card-description";
import MovieCardButtonList from "../movie-card-button-list/movie-card-button-list";
import MovieNavList from "../movie-nav-list/movie-nav-list";
import MovieCardRow from "../movie-card-row/movie-card-row";
import MovieCardCol from "../movie-card-col/movie-card-col";
import MovieCardDetailsItem from "../movie-card-details-item/movie-card-details-item";


const {arrayOf, string, shape, number, bool} = PropTypes;

const MoviePageDetails = (props) => {
  const {
    clickedFilm,
    films,
    icons,
  } = props;

  const {
    name,
    image: {
      poster,
      posterAlt,
      background,
      backgroundAlt,
    },
    director,
    starring,
    runTime,
    genre,
    released,
  } = clickedFilm;

  const similarFilms = films.slice(Value.EMPTY, AmountSimilarFilms.ON_PAGE_FILM);

  return (
    <>
      {icons && <IconsWrapper iconNames={icons}/>}

      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">

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
            <MovieCardDescription
              title={name}
              genre={genre}
              year={released}
            >
              <MovieCardButtonList buttons={MOVIE_CARD_BUTTONS}>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </MovieCardButtonList>
            </MovieCardDescription>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">

            <MovieCardPicture
              className={`movie-card__poster movie-card__poster--big`}
              picture={{
                src: poster,
                alt: posterAlt,
                width: Img.BIG.width,
                height: Img.BIG.height,
              }}/>

            <div className="movie-card__desc">
              <MovieNavList navItems={MOVIE_NAV_ITEMS}/>
              <MovieCardRow type={TypeCol.TEXT}>
                <MovieCardCol type={TypeCol.TEXT}>
                  <MovieCardDetailsItem name={`Director`} value={director}/>
                  <MovieCardDetailsItem
                    name={`Starring`}
                    value={starring}
                  />
                </MovieCardCol>

                <MovieCardCol type={TypeCol.TEXT}>
                  <MovieCardDetailsItem name={`Run Time`} value={runTime}/>
                  <MovieCardDetailsItem name={`Genre`} value={genre}/>
                  <MovieCardDetailsItem name={`Released`} value={released}/>
                </MovieCardCol>
              </MovieCardRow>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {films && <MovieCardSmallList films={similarFilms}/>}
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
};

MoviePageDetails.propTypes = {
  clickedFilm: shape({
    id: number.isRequired,
    name: string.isRequired,
    image: shape({
      poster: string.isRequired,
      posterAlt: string.isRequired,
      preview: string.isRequired,
      previewAlt: string.isRequired,
      background: string.isRequired,
      backgroundAlt: string.isRequired,
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
  films: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
    image: shape({
      poster: string.isRequired,
      posterAlt: string.isRequired,
      preview: string.isRequired,
      previewAlt: string.isRequired,
      background: string.isRequired,
      backgroundAlt: string.isRequired,
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
  icons: arrayOf(string.isRequired),
};

export default MoviePageDetails;
