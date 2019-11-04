import React from "react";
import renderer from "react-test-renderer";
import Title from "./title";

describe(`Make snapshot`, () => {
  const initProps = {
    text: `Hello`,
    className: `page-title`,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <Title {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
