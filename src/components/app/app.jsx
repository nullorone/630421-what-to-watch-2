import React from 'react';
import Main from '../main/main';
import {movies} from "../../mocks/mocks";


const App = () => {
  return (
    <Main
      movies={movies}
      onMovieCardLinkClick={() => {}}
    />
  );
};

export default App;
