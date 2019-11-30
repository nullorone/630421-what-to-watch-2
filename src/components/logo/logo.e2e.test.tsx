import * as React from "react";
import {shallow} from "enzyme";
import Logo from "./logo";

describe(`Test cases Logo component`, () =>{
  const initProps = {
    light: true,
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <Logo {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get node with className prop light`, () => {
    const wrapper = shallow(
        <Logo {...initProps}/>
    );

    expect(wrapper.find(`.logo__link`)).toBeTruthy();
  });

  it(`Get className with prop light === true`, () => {
    const wrapper = shallow(
        <Logo {...initProps}/>
    );

    expect(wrapper.find(`.logo__link--light`)).toBeTruthy();
  });
});
