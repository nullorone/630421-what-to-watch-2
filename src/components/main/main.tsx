import * as React from "react";
import GenreList from "../genre-list/genre-list";
import IconsWrapper from "../icons-wrapper/icons-wrapper";
import Logo from "../logo/logo";
import MovieCard from "../movie-card/movie-card";
import {Film} from "../../types";
import {iconNames} from "../../constants";

interface MainProps {
  promo: Film;
  genres: string[];
  selectedGenre: string;
  onSelectedGenreClick: () => void;
  onButtonClick: () => void;
}

const Main: React.FC<MainProps> = (props) => {
  const {
    promo,
    genres,
    selectedGenre,
    onSelectedGenreClick,
    onButtonClick,
  } = props;

  return (
    <>
      <IconsWrapper iconNames={iconNames}/>

      <MovieCard {...promo} onPlayButtonClick={onButtonClick}/>

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

          {props.children}
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

export default Main;
