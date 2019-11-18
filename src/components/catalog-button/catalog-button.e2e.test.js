import React from "react";
import {shallow} from "enzyme";
import CatalogButton from "./catalog-button";
import {Value} from "../../constants";

describe(`Test cases CatalogButton component`, () =>{
  const initProps = {
    onButtonClick: jest.fn(),
  };

  it(`Called onButtonClick`, () => {
    const wrapper = shallow(
        <CatalogButton {...initProps}/>
    );

    wrapper.find(`button`).simulate(`click`);

    expect(initProps.onButtonClick).toHaveBeenCalledTimes(Value.FULL);
  });
});
