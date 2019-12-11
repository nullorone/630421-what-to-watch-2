import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer/user/user";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import {Film, UserData} from "../../types";
import withTogglePlayer from "../../hocs/with-toggle-player/with-toggle-player";
import Main from "../main/main";
import {Assign} from "utility-types";
import NameSpaces from "../../reducer/name-spaces";
import {getFilteredFIlms} from "../../reducer/user/selectors";
import {getUniqueGenres} from "../../reducer/data/selectors";
import UserPage from "../user-page/user-page";
import ReviewPage from "../review-page/review-page";

interface StateFromProps {
  genre: string;
  promo: Film;
  films: Film[];
  filteredFilms: Film[];
  genres: string[];
  isAuthorizationRequired: boolean;
  user: UserData;
  comments: Comment[];
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
    isAuthorizationRequired,
    user,
    comments,
  } = props;

  const getClickedFilm = (filmId: number): Film => films.find((film) => film.id === Number(filmId));

  const MainWrapped = withTogglePlayer(Main);
  const MoviePageDetailsWrapped = withTogglePlayer(MoviePageDetails);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(): JSX.Element => {
          return (
            <MainWrapped
              promo={promo}
              genres={genres}
              selectedGenre={genre}
              onSelectedGenreClick={onGenreClick}
              films={films}
              filteredFilms={filteredFilms}
              user={user}>
            </MainWrapped>
          );
        }}/>
        <Route exact path="/films/:id" render={({match}): JSX.Element => {
          const clickedFilm = getClickedFilm(match.params.id);

          return (
            <MoviePageDetailsWrapped
              films={films}
              clickedFilm={clickedFilm}
              user={user}
              comments={comments}
              hasAuthorization={isAuthorizationRequired}/>
          );
        }}/>
        <Route exact path="/films/:id/review" render={({match}): JSX.Element => {
          const clickedFilm = getClickedFilm(match.params.id);
          const {id, name, image} = clickedFilm;

          return (
            <ReviewPage
              id={id}
              filmName={name}
              image={image}
              avatar={user.avatarUrl}
            />);
        }}/>
        <Route exact path="/login" render={(): JSX.Element => {
          return isAuthorizationRequired ? <UserPage/> : <Redirect to="/"/>;
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
  isAuthorizationRequired: state[NameSpaces.DATA].isAuthorizationRequired,
  user: state[NameSpaces.DATA].user,
  comments: state[NameSpaces.DATA].comments,
});

const mapDispatchToProps = (dispatch): DispatchFromProps => ({
  onGenreClick: (genre): void => {
    dispatch(ActionCreator.selectGenre(genre));
  },
});


export {App};

export default connect<StateFromProps, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(App);
