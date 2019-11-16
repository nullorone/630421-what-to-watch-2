import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "../main/main";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import {AmountSimilarFilms, Value} from "../../constants";

const {string, number, bool, shape, arrayOf, func} = PropTypes;

const App = (props) => {
  const {
    films,
    promo,
    genre,
    genres,
    iconNames,
    onGenreClick
  } = props;


  const getClickedFilm = (filmId) => films.find((film) => film.id === Number(filmId));

  const getSimilarFilms = (clickedFilm) => films.filter((film) => film.genre === clickedFilm.genre);


  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          <Main
            promo={promo}
            films={films}
            genres={genres}
            selectedGenre={genre}
            onSelectedGenreClick={onGenreClick}
            icons={iconNames}/>
        )}/>
        <Route path="/films/:id" render={({match}) => {
          const clickedFilm = getClickedFilm(match.params.id);
          const similarFilms = getSimilarFilms(clickedFilm).slice(Value.EMPTY, AmountSimilarFilms.ON_PAGE_FILM);

          return (
            <MoviePageDetails
              clickedFilm={clickedFilm}
              films={similarFilms}
              icons={iconNames}/>
          );
        }}/>
      </Switch>
    </Router>
  );
};

App.propTypes = {
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
  promo: shape({
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
  genre: string.isRequired,
  genres: arrayOf(string.isRequired),
  iconNames: arrayOf(string.isRequired),
  onGenreClick: func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick: (genre) => {
    if (genre === `All genres`) {
      dispatch(ActionCreator.reset());
    } else {
      dispatch(ActionCreator.selectGenre(genre));
      dispatch(ActionCreator.filteredFilms(genre));
    }
  },
});


export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
