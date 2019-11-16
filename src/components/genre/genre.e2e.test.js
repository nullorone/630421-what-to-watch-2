import React from "react";
import {shallow} from "enzyme";
import Genre from "./genre";
import {Value} from "../../constants";


describe(`Test Genre component`, () => {
  const initProps = {
    genre: `Academy`,
    isSelected: false,
    onGenreClick: jest.fn(),
  };

  it(`Call onGenreClick`, () => {
    const wrapper = shallow(
        <Genre
          {...initProps}
        />
    );

    wrapper.find(`.catalog__genres-link`).simulate(`click`, {preventDefault() {}});

    expect(initProps.onGenreClick).toBeCalledTimes(Value.FULL);
  });
});
