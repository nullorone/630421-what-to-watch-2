import * as React from "react";
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import GenreList from "../genre-list/genre-list";
import IconsWrapper from "../icons-wrapper/icons-wrapper";
import Logo from "../logo/logo";
import MovieCard from "../movie-card/movie-card";
import withChangeItem from "../../hocs/with-change-item/with-change-item";
import withAddItemButton from "../../hocs/with-add-item-button/with-add-item-button";
import {Film} from "../../types";

interface MainProps {
  films: Film[];
  promo: Film;
  genres: string[];
  selectedGenre: string;
  onSelectedGenreClick: () => void;
  icons: string[];
}

const Main: React.FC<MainProps> = (props) => {
  const {
    films,
    promo,
    genres,
    icons,
    selectedGenre,
    onSelectedGenreClick,
  } = props;

  const MovieCardSmallListWrapped = withAddItemButton(withChangeItem(MovieCardSmallList));

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

          <MovieCardSmallListWrapped films={films}/>
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
