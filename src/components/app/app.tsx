import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer";
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import {AmountSimilarFilms, Value} from "../../constants";
import {Film} from "../../types";
import withTogglePlayer from "../../hocs/with-toggle-player/with-toggle-player";
import Main from "../main/main";

interface StateFromProps {
  genre: string;
  films: Film[];
  genres: string[];
}

interface DispatchFromProps {
  onGenreClick: (genre: string) => void;
}


interface AppProps extends StateFromProps {
  promo: Film;
  onGenreClick: () => void;
}

const App: React.FC<AppProps> = (props) => {
  const {
    films,
    promo,
    genre,
    genres,
    onGenreClick
  } = props;

  const history = createBrowserHistory();

  const getClickedFilm = (filmId: number): Film => films.find((film) => film.id === Number(filmId));

  const getSimilarFilms = (clickedFilm: Film): Film[] => films.filter((film) => film.genre === clickedFilm.genre);

  const MainWrapped = withTogglePlayer(Main);
  const MoviePageDetailsWrapped = withTogglePlayer(MoviePageDetails);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={(): JSX.Element => (
          <MainWrapped
            promo={promo}
            films={films}
            genres={genres}
            selectedGenre={genre}
            onSelectedGenreClick={onGenreClick}/>
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
  genre: state.genre,
  films: state.films,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch): DispatchFromProps => ({
  onGenreClick: (genre): void => {
    if (genre === `All genres`) {
      dispatch(ActionCreator.reset());
    } else {
      dispatch(ActionCreator.selectGenre(genre));
      dispatch(ActionCreator.filteredFilms(genre));
    }
  },
});


export {App};

export default connect<StateFromProps, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(App);
