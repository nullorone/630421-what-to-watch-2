import React from "react";
import renderer from "react-test-renderer";
import MovieCardRow from "./movie-card-row";

describe(`Make snapshot`, () => {
  const initProps = {
    type: `text`,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieCardRow {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
