import * as React from "react";
import MovieCardPicture from "../movie-card-picture/movie-card-picture";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {Img} from "../../constants";
import MovieCardDescription from "../movie-card-description/movie-card-description";
import {Image} from "../../types";
import MovieCardButton from "../movie-card-button/movie-card-button";

interface MovieCardProps {
  id: number;
  name: string;
  image: Image;
  genre: string;
  released: number;
  onPlayButtonClick?: () => void;
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
    onPlayButtonClick,
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
            <div className="movie-card__buttons">
              <MovieCardButton
                text={`Play`}
                iconName={`play-s`}
                classModifier={`play`}
                onButtonClick={onPlayButtonClick}
              />

              <MovieCardButton text={`My list`} iconName={`add`} classModifier={`list`}/>
            </div>
          </MovieCardDescription>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
