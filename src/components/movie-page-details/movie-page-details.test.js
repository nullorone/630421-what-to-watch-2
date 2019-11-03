import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details";

describe(`Make snapshot`, () => {
  const initProps = {};

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MoviePageDetails {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
