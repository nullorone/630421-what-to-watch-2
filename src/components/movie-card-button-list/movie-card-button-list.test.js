import React from "react";
import renderer from "react-test-renderer";
import MovieCardButtonList from "./movie-card-button-list";

describe(`Make snapshot`, () => {
  const initProps = {
    buttons: [{
      iconName: `pepper`,
      classModifier: `inactive`,
      text: `Red Hot Chili Peppers`,
    }]
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <MovieCardButtonList {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
