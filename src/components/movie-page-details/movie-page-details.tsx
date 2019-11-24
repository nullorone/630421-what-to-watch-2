import * as React from "react";
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
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import withChangeItem from "../../hocs/with-change-item/with-change-item";
import {Film} from "../../types";

interface MoviePageDetailsProps {
  clickedFilm: Film;
  films: Film[];
  icons: string[];
}

const MoviePageDetails: React.FC<MoviePageDetailsProps> = (props) => {
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

  const MovieNavListWrapped = withActiveItem(MovieNavList);
  const MovieCardSmallListWrapped = withChangeItem(MovieCardSmallList);

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
              <MovieNavListWrapped clickedFilm={clickedFilm} navItems={MOVIE_NAV_ITEMS}/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
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

export default MoviePageDetails;
