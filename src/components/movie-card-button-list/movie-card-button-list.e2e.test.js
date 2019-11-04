import React from "react";
import {shallow, mount} from "enzyme";
import MovieCardButtonList from "./movie-card-button-list";

describe(`Test cases MovieCardButtonList component`, () =>{
  const initProps = {
    buttons: [{
      iconName: `pepper`,
      classModifier: `inactive`,
      text: `Red Hot Chili Peppers`,
    }]
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <MovieCardButtonList {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get returned component MovieCardButton`, () => {
    const wrapper = mount(
        <MovieCardButtonList {...initProps}/>
    );

    expect(wrapper.find(`MovieCardButton`)).toBeTruthy();
  });
});
