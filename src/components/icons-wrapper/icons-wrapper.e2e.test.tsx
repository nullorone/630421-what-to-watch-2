import * as React from "react";
import {shallow} from "enzyme";
import IconsWrapper from "./icons-wrapper";

describe(`Test cases IconWrapper component`, () =>{
  const initProps = {
    iconNames: [`ADD`, `PAUSE`]
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <IconsWrapper {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get Icon component`, () => {
    const wrapper = shallow(
        <IconsWrapper {...initProps}/>
    );

    expect(wrapper.find(`Icon`)).toBeTruthy();
  });

  it(`Amount Icon component`, () => {
    const wrapper = shallow(
        <IconsWrapper {...initProps}/>
    );

    expect(wrapper.find(`svg`).children()).toHaveLength(initProps.iconNames.length);
  });
});
