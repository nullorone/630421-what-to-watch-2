import {reducer, initState} from "./reducer";
import {ActionType, Status, Url, Value} from "./constants";
import MockAdapter from "axios-mock-adapter";
import createApi from "./api";
import Operation from "./operation";
import Adapter from "./adapter";

const lastFilm = initState.films[initState.films.length - Value.FULL];

describe(`Test actions`, () => {

  it(`Select genre`, () => {
    expect(reducer(initState, {
      type: ActionType.SELECT_GENRE,
      payload: `Drama`,
    }))
      .toEqual(Object.assign({}, initState, {
        genre: `Drama`,
      }));
  });

  it(`Select all genres`, () => {
    expect(reducer(initState, {
      type: ActionType.RESET,
    }))
      .toEqual(initState);
  });

  it(`Filter films`, () => {
    expect(reducer(initState, {
      type: ActionType.FILTERED_FILMS,
      payload: [lastFilm]
    }))
      .toEqual(Object.assign({}, initState, {
        filteredFilms: [lastFilm]
      }));
  });

  it(`Get all films`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const mockApi = new MockAdapter(api);
    const loadFilms = Operation.loadFilms();
    const {genre} = [...Adapter.parseFilms([{fake: true}])];

    mockApi
      .onGet(Url.FILMS)
      .reply(Status.SUCCESS, [{fake: true}]);

    return loadFilms(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).nthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: Adapter.parseFilms([{fake: true}]),
        });
        expect(dispatch).nthCalledWith(2, {
          type: ActionType.GENRES,
          payload: [initState.genre, genre],
        },
        );
      });
  });

  it(`Get promo`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const mockApi = new MockAdapter(api);
    const loadPromo = Operation.loadPromo();

    mockApi
      .onGet(Url.PROMO)
      .reply(Status.SUCCESS, [{fake: true}]);

    return loadPromo(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(Value.FULL);
        expect(dispatch).nthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: Adapter.parseFilm([{fake: true}]),
        });
      });
  });
});
