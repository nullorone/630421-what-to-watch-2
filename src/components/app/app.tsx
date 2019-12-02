import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer/user/user";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import {AmountSimilarFilms, Value} from "../../constants";
import {Film} from "../../types";
import withTogglePlayer from "../../hocs/with-toggle-player/with-toggle-player";
import Main from "../main/main";
import withAddItemButton from "../../hocs/with-add-item-button/with-add-item-button";
import withChangeItem from "../../hocs/with-change-item/with-change-item";
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import {Assign} from "utility-types";
import NameSpaces from "../../reducer/name-spaces";
import {getFilteredFIlms} from "../../reducer/user/selectors";
import {getUniqueGenres} from "../../reducer/data/selectors";

interface StateFromProps {
  genre: string;
  promo: Film;
  films: Film[];
  filteredFilms: Film[];
  genres: string[];
}

interface DispatchFromProps {
  onGenreClick: (genre: string) => void;
}

const App: React.FC<Assign<StateFromProps, DispatchFromProps>> = (props) => {
  const {
    films,
    filteredFilms,
    promo,
    genre,
    genres,
    onGenreClick,
  } = props;

  const getClickedFilm = (filmId: number): Film => films.find((film) => film.id === Number(filmId));

  const getSimilarFilms = (clickedFilm: Film): Film[] => films.filter((film) => film.genre === clickedFilm.genre);

  const MainWrapped = withTogglePlayer(Main);
  const MoviePageDetailsWrapped = withTogglePlayer(MoviePageDetails);
  const MovieCardSmallListWrapped = withAddItemButton(withChangeItem(MovieCardSmallList));

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(): JSX.Element => (
          <MainWrapped
            promo={promo}
            genres={genres}
            selectedGenre={genre}
            onSelectedGenreClick={onGenreClick}>
            <MovieCardSmallListWrapped
              films={(filteredFilms.length !== 0)
                ? filteredFilms
                : films
              }/>
          </MainWrapped>
        )}/>
        <Route exact path="/films/:id" render={({match}): JSX.Element => {
          const clickedFilm = getClickedFilm(match.params.id);
          const similarFilms = getSimilarFilms(clickedFilm).slice(Value.EMPTY, AmountSimilarFilms.ON_PAGE_FILM);

          return (
            <MoviePageDetailsWrapped
              clickedFilm={clickedFilm}
              films={similarFilms}
              promo={clickedFilm}/>
          );
        }}/>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state): StateFromProps => Object.assign({}, {
  genre: state[NameSpaces.USER].genre,
  promo: state[NameSpaces.DATA].promo,
  films: state[NameSpaces.DATA].films,
  filteredFilms: getFilteredFIlms(state),
  genres: getUniqueGenres(state),
});

const mapDispatchToProps = (dispatch): DispatchFromProps => ({
  onGenreClick: (genre): void => {
    dispatch(ActionCreator.selectGenre(genre));
  },
});


export {App};

export default connect<StateFromProps, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(App);
