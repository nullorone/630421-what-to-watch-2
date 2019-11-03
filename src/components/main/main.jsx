import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import GenreList from "../genre-list/genre-list";
import IconsWrapper from "../icons-wrapper/icons-wrapper";
import CatalogButton from "../catalog-button/catalog-button";
import Copyright from "../copyright/copyright";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import Header from "../header/header";
import Title from "../title/title";
import MovieCardPicture from "../movie-card-picture/movie-card-picture";
import MovieCardButtonList from "../movie-card-button-list/movie-card-button-list";
import {MOVIE_CARD_BUTTONS, COPYRIGHT, CINEMA_NAME} from "../../constants";
import MovieCardDescription from "../movie-card-description/movie-card-description";

const {string, shape, exact, arrayOf} = PropTypes;

export default class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      films,
      genres,
      icons,
    } = this.props;
    return (
      <>
        {icons && <IconsWrapper iconNames={icons}/>}

        <section className="movie-card">

          {<MovieCardPicture
            className={`movie-card__bg`}
            picture={{
              src: `./img/bg-the-grand-budapest-hotel.jpg`,
              alt: `The Grand Budapest Hotel`,
            }}/>}

          {<Title className={`visually-hidden`} text={CINEMA_NAME}/>}

          {<Header>
            <Logo light={false}/>
            <UserBlock avatarSrc={`./img/avatar.jpg`}/>
          </Header>}

          <div className="movie-card__wrap">
            <div className="movie-card__info">

              {<MovieCardPicture
                className={`movie-card__poster`}
                picture={{
                  src: `./img/bg-the-grand-budapest-hotel.jpg`,
                  alt: `The Grand Budapest Hotel`,
                  width: `218`,
                  height: `327`
                }}/>}

              {<MovieCardDescription
                title={`The Grand Budapest Hotel`}
                genre={`Drama`}
                year={`2014`}
              >
                <MovieCardButtonList buttons={MOVIE_CARD_BUTTONS}/>
              </MovieCardDescription>}
            </div>
          </div>
        </section>

        <div className="page-content" >
          <section className="catalog" >
            <h2 className="catalog__title visually-hidden">
              Catalog
            </h2>

            {genres && <GenreList genres={genres}/>}

            {films && <MovieCardSmallList films={films}/>}

            {<CatalogButton
              text={`ShowMore`}
              onButtonClick={() => console.log(`click-clack`)}/>}
          </section>

          <footer className="page-footer">
            {<Logo light={true}/>}
            {<Copyright text={COPYRIGHT}/>}
          </footer>
        </div>
      </>
    );
  }
}


Main.propTypes = {
  films: arrayOf(
      shape({
        title: string.isRequired,
        img: exact({
          src: string.isRequired,
          alt: string.isRequired
        }),
      })
  ),
  genres: arrayOf(string.isRequired),
  icons: arrayOf(string.isRequired),
};

