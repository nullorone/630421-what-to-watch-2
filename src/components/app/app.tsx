import * as React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "../main/main";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import withVideoControls from "../../hocs/with-video-controls/with-video-controls";
import {AmountSimilarFilms, Value} from "../../constants";
import {Film} from "../../types";
import VideoPlayer from "../video-player/video-player";

interface AppProps {
  films: Film[];
  promo: Film;
  genre: string;
  genres: string[];
  iconNames: string[];
  onGenreClick: () => void;
}

interface StateFromProps {
  genre: string;
  films: Film[];
  genres: string[];
}

interface DispatchFromProps {
  onGenreClick: (genre: string) => void;
}

const App: React.FC<AppProps> = (props) => {
  const {
    films,
    promo,
    genre,
    genres,
    iconNames,
    onGenreClick
  } = props;

  const getClickedFilm = (filmId: number): Film => films.find((film) => film.id === Number(filmId));

  const getSimilarFilms = (clickedFilm: Film): Film[] => films.filter((film) => film.genre === clickedFilm.genre);

  const VideoPlayerWrapped = withVideoControls(VideoPlayer);
  const videoProps = {
    link: {
      mp4: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      webm: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
    poster: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(): JSX.Element => (
          <Main
            promo={promo}
            films={films}
            genres={genres}
            selectedGenre={genre}
            onSelectedGenreClick={onGenreClick}
            icons={iconNames}/>
        )}/>
        <Route path="/films/:id" render={({match}): JSX.Element => {
          const clickedFilm = getClickedFilm(match.params.id);
          const similarFilms = getSimilarFilms(clickedFilm).slice(Value.EMPTY, AmountSimilarFilms.ON_PAGE_FILM);

          return (
            <MoviePageDetails
              clickedFilm={clickedFilm}
              films={similarFilms}
              icons={iconNames}/>
          );
        }}/>
        <Route path="/player" render={(): JSX.Element => {
          return (
            <VideoPlayerWrapped
              video={{
                link: videoProps.link,
                poster: videoProps.poster,
              }}/>
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
