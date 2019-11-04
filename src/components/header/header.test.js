import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {Value} from "../../constants";

describe(`Make snapshot`, () => {
  const initProps = {
    children: [<div key={Value.FULL}/>],
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <Header>
            {initProps.children}
          </Header>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
