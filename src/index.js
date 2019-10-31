import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';
import {genres} from './mocks/genres';

const initData = {
  films,
  genres,
};

const init = (initialData) => {
  ReactDOM.render(
      <App
        {...initialData}
      />,
      document.querySelector(`#root`)
  );
};

init(initData);
