import * as React from "react";
import {shallow} from "enzyme";
import {EMPTY_STRING} from "../../constants";
import UserBlock from "./user-block";

describe(`Test cases UserBlock component`, () =>{
  const initProps = {
    avatarSrc: EMPTY_STRING,
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <UserBlock {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Render node with prop`, () => {
    const wrapper = shallow(
        <UserBlock {...initProps}/>
    );

    expect(wrapper.find(`img`)).toBeTruthy();
  });
});
