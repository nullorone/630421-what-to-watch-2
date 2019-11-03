import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';
import {genres} from './mocks/genres';
import {iconNames} from "./constants";

const initData = {
  films,
  genres,
  iconNames,
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
