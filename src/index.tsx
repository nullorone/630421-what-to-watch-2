import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from "react-redux";
import {Operation} from "./reducer/data/data";
import store from "./reducer/store";
import NameSpace from "./reducer/name-spaces";

const init = (): void => {
  store.dispatch(Operation.loadFilms());
  store.dispatch(Operation.loadPromo());

  store.subscribe((): JSX.Element => {
    const films = store.getState()[NameSpace.DATA].films;

    if (films.length !== 0) {
      ReactDOM.render(
          <Provider store={store}>
            <App/>
          </Provider>
          ,
          document.querySelector(`#root`)
      );
    }

    return <p>Loading...</p>;
  });
};

init();
