import * as React from "react";
import renderer from "react-test-renderer";
import IconsWrapper from "./icons-wrapper";

describe(`Make snapshot`, () => {
  const initProps = {
    iconNames: [`ADD`, `PAUSE`]
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <IconsWrapper {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
