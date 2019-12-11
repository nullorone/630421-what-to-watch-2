import * as React from "react";
import renderer from "react-test-renderer";
import {EMPTY_STRING} from "../../constants";
import {UserBlock} from "./user-block";
import {BrowserRouter} from "react-router-dom";

describe(`Make snapshot`, () => {
  const initProps = {
    avatarSrc: EMPTY_STRING,
    hasAuthorization: true,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <UserBlock {...initProps}/>
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
