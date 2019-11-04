import React from "react";
import {shallow} from "enzyme";
import Icon from "./icon";

describe(`Test cases Icon component`, () =>{
  const initProps = {
    name: `PAUSE`,
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <Icon {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Render svg`, () => {
    const wrapper = shallow(
        <Icon {...initProps}/>
    );

    expect(wrapper.find(`svg`)).toBeTruthy();
  });
});
