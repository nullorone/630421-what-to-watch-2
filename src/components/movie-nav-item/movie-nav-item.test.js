import React from "react";
import renderer from "react-test-renderer";
import MovieNavItem from "./movie-nav-item";

describe(`Make snapshot`, () => {
  const initProps = {
    active: false,
    text: `My link, bro`
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieNavItem {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
