import * as React from "react";
import renderer from "react-test-renderer";
import MovieCardButton from "./movie-card-button";

describe(`Make snapshot`, () => {
  const initProps = {
    iconName: `keks`,
    classModifier: `success`,
    text: `Javascript`,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieCardButton {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
