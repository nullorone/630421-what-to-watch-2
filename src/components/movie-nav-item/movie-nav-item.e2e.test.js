import React from "react";
import {shallow} from "enzyme";
import MovieNavItem from "./movie-nav-item";
import {Value} from "../../constants";

describe(`Test cases MovieNavItem component`, () =>{
  const initProps = {
    active: false,
    text: `Movie link`,
    onTabClick: jest.fn()
  };

  it(`Call onTabClick`, () => {
    const wrapper = shallow(
        <MovieNavItem {...initProps}/>
    );

    wrapper.find(`.movie-nav__link`).simulate(`click`, {
      preventDefault() {},
      target: {innerText: initProps.text}
    });

    expect(initProps.onTabClick).toBeCalledTimes(Value.FULL);
  });
});
