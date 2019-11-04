import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo";

describe(`Make snapshot`, () => {
  const initProps = {
    light: false,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <Logo {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
