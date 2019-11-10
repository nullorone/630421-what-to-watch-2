import React from "react";
import renderer from "react-test-renderer";
import {Value} from "../../constants";
import MovieCardDescription from "./movie-card-description";

describe(`Make snapshot`, () => {
  const initProps = {
    title: `New Year`,
    genre: `Art - House`,
    year: Value.FULL,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieCardDescription {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
