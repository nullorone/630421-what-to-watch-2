import React from "react";
import renderer from "react-test-renderer";
import MovieTabOverview from "./movie-tab-overview";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    rating: Value.FULL,
    scoresCount: Value.FULL,
    description: EMPTY_STRING,
    starring: [EMPTY_STRING],
    director: EMPTY_STRING,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieTabOverview {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
