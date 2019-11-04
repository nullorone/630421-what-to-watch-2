import React from "react";
import {shallow} from "enzyme";
import Copyright from "./copyright";

describe(`Test cases Copyright component`, () =>{
  const initProps = {
    text: `Hello, world!`
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <Copyright {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get node with prop text`, () => {
    const wrapper = shallow(
        <Copyright {...initProps}/>
    );

    expect(wrapper.find(`p`)).toBeTruthy();
  });

  it(`Get prop text`, () => {
    const wrapper = shallow(
        <Copyright {...initProps}/>
    );

    expect(wrapper.find(`p`).text()).toBe(initProps.text);
  });
});
