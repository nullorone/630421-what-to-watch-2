import React from "react";
import {shallow} from "enzyme";
import {EMPTY_STRING} from "../../constants";
import PageScreen from "./page-screen";

describe(`Test cases PageScreen component`, () =>{
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

  it(`Render component`, () => {
    const wrapper = shallow(
        <PageScreen {...initProps}/>
    );

    expect(wrapper).toBeTruthy();
  });
});
