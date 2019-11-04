import React from "react";
import {shallow} from "enzyme";
import Title from "./title";

describe(`Test cases Title component`, () =>{
  const initProps = {
    text: `Hi, Man`,
    className: `title`,
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <Title {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get text prop`, () => {
    const wrapper = shallow(
        <Title {...initProps}/>
    );

    expect(wrapper.text()).toEqual(initProps.text);
  });

  it(`Get node className prop`, () => {
    const wrapper = shallow(
        <Title {...initProps}/>
    );

    expect(wrapper.props().className).toEqual(initProps.className);
  });
});
