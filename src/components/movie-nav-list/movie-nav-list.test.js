import React from "react";
import renderer from "react-test-renderer";
import MovieNavList from "./movie-nav-list";

describe(`Make snapshot`, () => {
  const initProps = {
    navItems: [{
      active: true,
      text: `Describe`,
    }]
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieNavList {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
