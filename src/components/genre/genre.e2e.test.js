import React from "react";
import {shallow} from "enzyme";
import Genre from "./genre";
import {Value} from "../../constants";


describe(`Test Genre component`, () => {
  const initProps = {
    genre: `Academy`,
  };

  it(`Return li node with className catalog__genres-item`, () => {
    const wrapper = shallow(
        <Genre
          {...initProps}
        />
    );

    expect(wrapper.find(`.catalog__genres-item`)).toHaveLength(Value.FULL);
  });

  it(`Return a node with className catalog__genres-link`, () => {
    const wrapper = shallow(
        <Genre
          {...initProps}
        />
    );

    expect(wrapper.find(`.catalog__genres-link`)).toHaveLength(Value.FULL);
  });

  it(`Compare genre props value`, () => {
    const wrapper = shallow(
        <Genre
          {...initProps}
        />
    );

    expect(wrapper.find(`.catalog__genres-link`).text()).toEqual(initProps.genre);
  });
});
