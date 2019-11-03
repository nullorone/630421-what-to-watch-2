import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import IconsWrapper from "../icons-wrapper/icons-wrapper";
import Header from "../header/header";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import Title from "../title/title";
import MovieCardPicture from "../movie-card-picture/movie-card-picture";
import Copyright from "../copyright/copyright";
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import {Value, COPYRIGHT, CINEMA_NAME, MOVIE_CARD_BUTTONS, Img, MOVIE_NAV_ITEMS, TypeCol, AMOUNT_SIMILAR_FILMS} from "../../constants";
import MovieCardDescription from "../movie-card-description/movie-card-description";
import MovieCardButtonList from "../movie-card-button-list/movie-card-button-list";
import MovieNavList from "../movie-nav-list/movie-nav-list";
import MovieCardRow from "../movie-card-row/movie-card-row";
import MovieCardCol from "../movie-card-col/movie-card-col";
import MovieCardDetailsItem from "../movie-card-details-item/movie-card-details-item";


const {arrayOf, string, shape, exact} = PropTypes;

export default class MoviePageDetails extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      films,
      icons,
    } = this.props;

    const similarFilms = films.slice(Value.EMPTY, AMOUNT_SIMILAR_FILMS);

    return (
      <>
        {icons && <IconsWrapper iconNames={icons}/>}

        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">

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
              {<MovieCardDescription
                title={`The Grand Budapest Hotel`}
                genre={`Drama`}
                year={`2014`}
              >
                <MovieCardButtonList buttons={MOVIE_CARD_BUTTONS}>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </MovieCardButtonList>
              </MovieCardDescription>}
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">

              {<MovieCardPicture
                className={`movie-card__poster movie-card__poster--big`}
                picture={{
                  src: `./img/the-grand-budapest-hotel-poster.jpg`,
                  alt: `The Grand Budapest Hotel poster`,
                  width: Img.BIG.width,
                  height: Img.BIG.height,
                }}/>}

              <div className="movie-card__desc">
                {<MovieNavList navItems={MOVIE_NAV_ITEMS}/>}
                {<MovieCardRow type={TypeCol.TEXT}>
                  <MovieCardCol type={TypeCol.TEXT}>
                    <MovieCardDetailsItem name={`Director`} value={`Wes Andreson`}/>
                    <MovieCardDetailsItem
                      name={`Starring`}
                      value={[
                        `Bill Murray`,
                        `Edward Norton`,
                        `Jude Law`,
                        `Willem Dafoe`,
                        `Saoirse Ronan`,
                        `Tony Revoloru`,
                        `Tilda Swinton`,
                        `Tom Wilkinson`,
                        `Owen Wilkinson`,
                        `Adrien Brody`,
                        `Ralph Fiennes`,
                        `Jeff Goldblum`
                      ]}
                    />
                  </MovieCardCol>

                  <MovieCardCol type={TypeCol.TEXT}>
                    <MovieCardDetailsItem name={`Run Time`} value={99} />
                    <MovieCardDetailsItem name={`Genre`} value={`Comedy`} />
                    <MovieCardDetailsItem name={`Released`} value={`2014`} />
                  </MovieCardCol>
                </MovieCardRow>}
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
            {<Logo light={true}/>}
            {<Copyright text={COPYRIGHT}/>}
          </footer>
        </div>
      </>
    );
  }
}

MoviePageDetails.propTypes = {
  films: arrayOf(
      shape({
        title: string.isRequired,
        img: exact({
          src: string.isRequired,
          alt: string.isRequired
        }),
      })
  ),
  icons: arrayOf(string.isRequired),
};
