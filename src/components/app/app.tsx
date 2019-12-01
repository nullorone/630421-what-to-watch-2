import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import {AmountSimilarFilms, Value} from "../../constants";
import {Film} from "../../types";
import withTogglePlayer from "../../hocs/with-toggle-player/with-toggle-player";
import Main from "../main/main";
import store from "../../store";

interface StateFromProps {
  genre: string;
  films: Film[];
  filteredFilms: Film[];
  genres: string[];
}

interface DispatchFromProps {
  onGenreClick: (genre: string, films: Film[]) => void;
}


interface AppProps extends StateFromProps {
  promo: Film;
  onGenreClick: () => void;
}

const App: React.FC<AppProps> = (props) => {
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

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(): JSX.Element => (
          <MainWrapped
            promo={promo}
            films={(filteredFilms.length !== 0)
              ? filteredFilms
              : films
            }
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
  promo: state.promo,
  films: state.films,
  filteredFilms: state.filteredFilms,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch): DispatchFromProps => ({
  onGenreClick: (genre, films): void => {
    dispatch(ActionCreator.selectGenre(genre));
    dispatch(ActionCreator.filterFilms(genre, films));
  },
});


export {App};

export default connect<StateFromProps, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(App);
