import * as React from "react";
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

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    wrapper.find(`button`).simulate(`click`, {preventDefault() {}});

    expect(initProps.onButtonClick).toHaveBeenCalledTimes(Value.FULL);
  });
});
