import {initState, ActionType, reducer} from "./user";

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
});
