import React from "react";
import renderer from "react-test-renderer";
import Icon from "./icon";

describe(`Make snapshot`, () => {
  const initProps = {
    name: `PAUSE`,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <Icon {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
