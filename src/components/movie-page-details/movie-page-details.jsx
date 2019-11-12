import React from "react";
import PropTypes from "prop-types";
import IconsWrapper from "../icons-wrapper/icons-wrapper";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import MovieCardPicture from "../movie-card-picture/movie-card-picture";
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import {
  MOVIE_CARD_BUTTONS,
  Img,
  MOVIE_NAV_ITEMS,
} from "../../constants";
import MovieCardDescription from "../movie-card-description/movie-card-description";
import MovieCardButtonList from "../movie-card-button-list/movie-card-button-list";
import MovieNavList from "../movie-nav-list/movie-nav-list";


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
    genre,
    released,
  } = clickedFilm;

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
            <UserBlock avatarSrc={`../img/avatar.jpg`}/>
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
              <MovieNavList clickedFilm={clickedFilm} navItems={MOVIE_NAV_ITEMS}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {films && <MovieCardSmallList films={films}/>}
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
  icons: arrayOf(string.isRequired),
};

export default MoviePageDetails;
