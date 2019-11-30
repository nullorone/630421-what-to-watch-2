import * as React from "react";
import {shallow} from "enzyme";
import MovieCardButton from "./movie-card-button";

describe(`Test cases MovieCardButton component`, () =>{
  const initProps = {
    iconName: `keks`,
    classModifier: `success`,
    text: `Javascript`,
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <MovieCardButton {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get className with prop classModifier`, () => {
    const wrapper = shallow(
        <MovieCardButton {...initProps}/>
    );

    expect(wrapper.hasClass(`btn--${initProps.classModifier}`)).toBeTruthy();
  });

  it(`Get node with prop text`, () => {
    const wrapper = shallow(
        <MovieCardButton {...initProps}/>
    );

    expect(wrapper.find(`span`)).toBeTruthy();
  });

  it(`Get prop text`, () => {
    const wrapper = shallow(
        <MovieCardButton {...initProps}/>
    );

    expect(wrapper.find(`span`).text()).toBe(initProps.text);
  });
});
