import {reducer, initState} from "./reducer";
import {films} from "./mocks/films";
import {ActionType, Value} from "./constants";

const lastFilm = initState.films[initState.films.length - Value.FULL];

describe(`Test actions`, () => {

  it(`Select genre`, () => {
    expect(reducer(initState, {
      type: ActionType.SELECT_GENRE,
      payload: `Drama`,
    }))
      .toEqual({
        genre: `Drama`,
        films,
      });
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
      .toEqual({
        genre: initState.genre,
        films: [lastFilm]
      });
  });
});
