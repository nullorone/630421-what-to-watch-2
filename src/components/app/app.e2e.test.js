import React from "react";
import {shallow} from "enzyme";
import App from "./app";
import {EMPTY_STRING, Value} from "../../constants";

describe(`Test App component`, () => {
  const initProps = {
    films: [{
      title: `My Awesome Movie`,
      img: {
        src: EMPTY_STRING,
        alt: EMPTY_STRING,
      },
    }],
    genres: [`Academy`]
  };

  it(`Return Main component`, () => {
    const wrapper = shallow(
        <App
          {...initProps}
        />
    );

    expect(wrapper.find(`Main`)).toHaveLength(Value.FULL);
  });

  it(`Compare props Main and App components`, () => {
    const wrapper = shallow(
        <App
          {...initProps}
        />
    );

    expect(wrapper.find(`Main`).props()).toEqual(initProps);
  });
});
