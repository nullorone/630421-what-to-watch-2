import React from "react";
import renderer from "react-test-renderer";
import MovieTabReviews from "./movie-tab-reviews";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    comments: [{
      id: Value.FULL,
      user: {
        id: Value.EMPTY,
        name: `Keks`,
      },
      rating: Value.FULL,
      comment: EMPTY_STRING,
      date: `2020`,
    }]
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieTabReviews {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
