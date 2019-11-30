import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';
import {promo} from "./mocks/promo";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer";

declare const __REDUX_DEVTOOLS_EXTENSION__: () => any;

const initData = {
  promo,
  films,
};

const init = (initialData) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
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
