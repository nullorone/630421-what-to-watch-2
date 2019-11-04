import React from "react";
import renderer from "react-test-renderer";
import {EMPTY_STRING} from "../../constants";
import UserBlock from "./user-block";

describe(`Make snapshot`, () => {
  const initProps = {
    avatarSrc: EMPTY_STRING,
  };

  it(`Get snapshot component`, () => {
    const tree = renderer
      .create(
          <UserBlock {...initProps}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
