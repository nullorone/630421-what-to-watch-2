import React from "react";
import {shallow} from "enzyme";
import {Value} from "../../constants";
import MovieCardPicture from "./movie-card-picture";

describe(`Test cases MovieCardPicture component`, () =>{
  const initProps = {
    className: `my-picture`,
    picture: {
      src: `.img/empty.jpg`,
      alt: `Empty picture`,
      width: Value.FULL.toString(),
      height: Value.FULL.toString(),
    },
    onImgClick: jest.fn(),
  };

  it(`Render component`, () => {
    const wrapper = shallow(
        <MovieCardPicture {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get className node`, () => {
    const wrapper = shallow(
        <MovieCardPicture {...initProps}/>
    );

    expect(wrapper.hasClass(initProps.className)).toBeTruthy();
  });

  it(`Simulate click on picture node`, () => {
    const wrapper = shallow(
        <MovieCardPicture {...initProps}/>
    );

    wrapper.simulate(`click`);

    expect(initProps.onImgClick).toBeCalledTimes(Value.FULL);
  });

  it(`Get img node`, () => {
    const wrapper = shallow(
        <MovieCardPicture {...initProps}/>
    );

    expect(wrapper.find(`img`)).toBeTruthy();
  });
});
