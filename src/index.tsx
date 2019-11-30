import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./reducer";

declare const __REDUX_DEVTOOLS_EXTENSION__: () => any;

const init = () => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */

  ReactDOM.render(
      <Provider store={store}>
        <App
        />
      </Provider>
      ,
      document.querySelector(`#root`)
  );
};

init();
