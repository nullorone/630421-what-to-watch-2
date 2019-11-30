import * as React from "react";
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
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      preventDefault() {},
      target: {innerText: initProps.text}
    });

    expect(initProps.onTabClick).toBeCalledTimes(Value.FULL);
    expect(initProps.onTabClick).toBeCalledWith(initProps.text.toLowerCase());
  });
});
