import * as React from "react";
import GenreList from "../genre-list/genre-list";
import IconsWrapper from "../icons-wrapper/icons-wrapper";
import Logo from "../logo/logo";
import MovieCard from "../movie-card/movie-card";
import {Film, UserData} from "../../types";
import {iconNames} from "../../constants";
import withAddItemButton from "../../hocs/with-add-item-button/with-add-item-button";
import withChangeItem from "../../hocs/with-change-item/with-change-item";
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";

interface MainProps {
  promo: Film;
  filteredFilms: Film[];
  films: Film[];
  genres: string[];
  selectedGenre: string;
  onSelectedGenreClick: () => void;
  onListClick?: (favorite: boolean) => void;
  onButtonClick: () => void;
  user: UserData;
}

const Main: React.FC<MainProps> = (props) => {
  const {
    promo,
    genres,
    selectedGenre,
    onSelectedGenreClick,
    onButtonClick,
    onListClick,
    user,
    filteredFilms,
    films,
  } = props;

  const MovieCardSmallListWrapped = withAddItemButton(withChangeItem(MovieCardSmallList));

  return (
    <>
      <IconsWrapper iconNames={iconNames}/>

      <MovieCard {...promo} user={user} onPlayButtonClick={onButtonClick} onListClick={onListClick}/>

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

          <MovieCardSmallListWrapped
            films={(filteredFilms.length !== 0)
              ? filteredFilms
              : films
            }/>
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
