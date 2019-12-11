import * as React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo";
import {BrowserRouter} from "react-router-dom";

describe(`Make snapshot`, () => {
  const initProps = {
    light: false,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Logo {...initProps}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
