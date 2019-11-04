import React from "react";
import {shallow} from "enzyme";
import CatalogButton from "./catalog-button";
import {Value} from "../../constants";

describe(`Test cases CatalogButton component`, () =>{
  const initProps = {
    text: `Click me`,
    onButtonClick: jest.fn(),
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <CatalogButton {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get node button`, () => {
    const wrapper = shallow(
        <CatalogButton {...initProps}/>
    );

    expect(wrapper.find(`.catalog__button`)).toBeTruthy();
  });

  it(`Get text in button node`, () => {
    const wrapper = shallow(
        <CatalogButton {...initProps}/>
    );

    expect(wrapper.find(`button`).text()).toBe(initProps.text);
  });

  it(`Render component`, () => {
    const wrapper = shallow(
        <CatalogButton {...initProps}/>
    );

    wrapper.find(`button`).simulate(`click`);

    expect(initProps.onButtonClick).toHaveBeenCalledTimes(Value.FULL);
  });
});
