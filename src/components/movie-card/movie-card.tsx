import * as React from "react";
import MovieCardPicture from "../movie-card-picture/movie-card-picture";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {Img, MOVIE_CARD_BUTTONS} from "../../constants";
import MovieCardDescription from "../movie-card-description/movie-card-description";
import MovieCardButtonList from "../movie-card-button-list/movie-card-button-list";
import {Image} from "../../types";

interface MovieCardProps {
  name: string;
  image: Image;
  genre: string;
  released: number;
}

const MovieCard: React.FC<MovieCardProps> = (props) => {
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
  } = props;

  return (
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
  );
};

export default MovieCard;
