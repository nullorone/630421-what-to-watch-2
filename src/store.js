import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";
import {compose} from "recompose";
import createApi from "./api";

const api = createApi((...args) => store.dispatch(...args));
/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    ),
);
/* eslint-enable */

export default store;
