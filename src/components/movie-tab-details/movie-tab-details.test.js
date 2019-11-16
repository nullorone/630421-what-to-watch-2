import React from "react";
import renderer from "react-test-renderer";
import MovieTabDetails from "./movie-tab-details";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    director: EMPTY_STRING,
    starring: [EMPTY_STRING],
    runTime: Value.FULL,
    genre: EMPTY_STRING,
    released: Value.FULL,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieTabDetails {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
