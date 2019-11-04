import React from "react";
import renderer from "react-test-renderer";
import MovieCardDetailsItem from "./movie-card-details-item";

describe(`Make snapshot`, () => {
  const initProps = {
    name: `My dad`,
    value: `Vladimir Putin`,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieCardDetailsItem {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
