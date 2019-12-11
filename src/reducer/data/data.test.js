import createApi from "../../api";
import MockAdapter from "axios-mock-adapter";
import Adapter from "../../adapter";
import {EMPTY_STRING, MASK_AVATAR, Status, Url, Value} from "../../constants";
import {ActionType, Operation, reducer} from "./data";

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

  it(`Send user data`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const mockApi = new MockAdapter(api);
    const sendUserData = Operation.sendUserData({email: `keks@gmail.com`, password: `12345`});

    mockApi
      .onPost(Url.LOGIN)
      .reply(Status.SUCCESS, {"avatar_url": MASK_AVATAR});

    return sendUserData(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).nthCalledWith(1, {
          type: ActionType.LOAD_USER,
          payload: Adapter.parseUser({"avatar_url": MASK_AVATAR}),
        });
        expect(dispatch).nthCalledWith(2, {
          type: ActionType.AUTHORIZATION,
          payload: false,
        });
      });
  });

  it(`Get comments`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const mockApi = new MockAdapter(api);
    const loadComments = Operation.loadComments(Value.FULL);

    mockApi
      .onGet(`${Url.COMMENTS}/${Value.FULL}`)
      .reply(Status.SUCCESS, [{fake: true}]);

    return loadComments(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(Value.FULL);
        expect(dispatch).nthCalledWith(1, {
          type: ActionType.GET_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Send comment`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const mockApi = new MockAdapter(api);
    const sendReview = Operation.sendReview({
      id: Value.FULL,
      rating: Value.FULL,
      comment: EMPTY_STRING
    });

    mockApi
      .onPost(`${Url.COMMENTS}/${Value.FULL}`)
      .reply(Status.SUCCESS, [
        {
          id: Value.FULL,
          user: {
            id: Value.FULL,
            name: EMPTY_STRING
          },
          rating: Value.FULL,
          comment: EMPTY_STRING,
          date: EMPTY_STRING
        }
      ]);

    return sendReview(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(Value.FULL);
        expect(dispatch).nthCalledWith(1, {
          type: ActionType.GET_COMMENTS,
          payload: [
            {
              id: Value.FULL,
              user: {
                id: Value.FULL,
                name: EMPTY_STRING
              },
              rating: Value.FULL,
              comment: EMPTY_STRING,
              date: EMPTY_STRING
            }
          ],
        });
      });
  });

  it(`Update favorite film`, () => {
    const mockFilm = {
      id: Value.EMPTY,
      name: `Keks`,
      image: {
        poster: EMPTY_STRING,
        posterAlt: `1`,
        preview: EMPTY_STRING,
        previewAlt: EMPTY_STRING,
        background: EMPTY_STRING,
        backgroundAlt: EMPTY_STRING,
      },
      backgroundColor: EMPTY_STRING,
      video: {
        link: {
          mp4: EMPTY_STRING,
        },
        poster: EMPTY_STRING,
      },
      description: EMPTY_STRING,
      rating: Value.FULL,
      scoresCount: Value.FULL,
      director: `Keks`,
      starring: [`Me`, `You`, `They`],
      runTime: Value.EMPTY,
      genre: EMPTY_STRING,
      released: Value.FULL,
      isFavorite: true,
    };

    expect(reducer({films: [mockFilm]}, {
      type: ActionType.UPDATE_FILMS,
      payload: [mockFilm]
    })).toEqual({films: [mockFilm]});
  });

  it(`Update promo`, () => {
    const mockFilm = {
      id: Value.EMPTY,
      name: `Keks`,
      image: {
        poster: EMPTY_STRING,
        posterAlt: `1`,
        preview: EMPTY_STRING,
        previewAlt: EMPTY_STRING,
        background: EMPTY_STRING,
        backgroundAlt: EMPTY_STRING,
      },
      backgroundColor: EMPTY_STRING,
      video: {
        link: {
          mp4: EMPTY_STRING,
        },
        poster: EMPTY_STRING,
      },
      description: EMPTY_STRING,
      rating: Value.FULL,
      scoresCount: Value.FULL,
      director: `Keks`,
      starring: [`Me`, `You`, `They`],
      runTime: Value.EMPTY,
      genre: EMPTY_STRING,
      released: Value.FULL,
      isFavorite: true,
    };

    expect(reducer({promo: mockFilm}, {
      type: ActionType.UPDATE_PROMO,
      payload: mockFilm
    })).toEqual({promo: mockFilm});
  });
});
