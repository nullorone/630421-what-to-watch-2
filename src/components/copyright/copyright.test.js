import React from "react";
import renderer from "react-test-renderer";
import Copyright from "./copyright";

describe(`Make snapshot`, () => {
  const initProps = {
    text: `Hello, world!`
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <Copyright {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
