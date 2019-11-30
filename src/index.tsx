import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";
import {compose} from "recompose";
import createApi from "./api";

declare const __REDUX_DEVTOOLS_EXTENSION__: () => any;

const init = (): void => {
  const api = createApi((...args) => store.dispatch(...args));
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
      ),
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
