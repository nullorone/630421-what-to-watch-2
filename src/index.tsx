import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';
import {promo} from "./mocks/promo";
import {iconNames} from "./constants";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer";


const initData = {
  promo,
  films,
  iconNames,
};

const init = (initialData) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  /* eslint-enable */

  ReactDOM.render(
      <Provider store={store}>
        <App
          {...initialData}
        />
      </Provider>
      ,
      document.querySelector(`#root`)
  );
};

init(initData);
