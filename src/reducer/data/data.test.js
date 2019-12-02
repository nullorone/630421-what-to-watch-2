import createApi from "../../api";
import MockAdapter from "axios-mock-adapter";
import Adapter from "../../adapter";
import {Status, Url, Value} from "../../constants";
import {ActionType, Operation} from "./data";

describe(`Test actions`, () => {
  it(`Get all films`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const mockApi = new MockAdapter(api);
    const loadFilms = Operation.loadFilms();

    mockApi
      .onGet(Url.FILMS)
      .reply(Status.SUCCESS, [{fake: true}]);

    return loadFilms(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(Value.FULL);
        expect(dispatch).nthCalledWith(Value.FULL, {
          type: ActionType.LOAD_FILMS,
          payload: Adapter.parseFilms([{fake: true}]),
        });
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
