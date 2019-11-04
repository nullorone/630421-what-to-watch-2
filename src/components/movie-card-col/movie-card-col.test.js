import React from "react";
import renderer from "react-test-renderer";
import MovieCardCol from "./movie-card-col";

describe(`Make snapshot`, () => {
  const initProps = {
    type: `academy`,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieCardCol {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
