import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {reducer, Operation} from "./reducer";
import thunk from "redux-thunk";
import {compose} from "recompose";
import createApi from "./api";

declare const __REDUX_DEVTOOLS_EXTENSION__: () => any;

const init = (): void => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(createApi((...args) => store.dispatch({...args})))),
          __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
      ),
  );
  /* eslint-enable */

  store.dispatch(Operation.loadFilms());

  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>
      ,
      document.querySelector(`#root`)
  );
};

init();
