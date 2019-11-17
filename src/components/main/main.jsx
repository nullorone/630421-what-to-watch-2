import React from "react";
import PropTypes from 'prop-types';
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import GenreList from "../genre-list/genre-list";
import IconsWrapper from "../icons-wrapper/icons-wrapper";
import Logo from "../logo/logo";
import MovieCard from "../movie-card/movie-card";

const {string, shape, number, bool, arrayOf, func} = PropTypes;

const Main = (props) => {
  const {
    films,
    promo,
    genres,
    icons,
    selectedGenre,
    onSelectedGenreClick,
  } = props;

  return (
    <>
      {icons && <IconsWrapper iconNames={icons}/>}

      <MovieCard {...promo}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">
            Catalog
          </h2>

          {genres
          && <GenreList
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreClick={onSelectedGenreClick}/>}

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
  selectedGenre: string.isRequired,
  onSelectedGenreClick: func.isRequired,
  icons: arrayOf(string.isRequired),
};

export default Main;
