import React from "react";
import {mount} from "enzyme";
import VideoPlayer from "./video-player";

describe(`Render Component`, () => {
  const initProps = {
    video: {
      link: {
        mp4: `New Year`,
        webm: `Christmas`,
      },
      poster: `./img/Holly`,
    },
    isMuted: false,
  };

  jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});

  it(`Get component`, () => {
    const wrapper = mount(
        <VideoPlayer
          {...initProps}
        />
    );

    expect(wrapper).toBeTruthy();
  });

  it(`Get amount source node`, () => {
    const wrapper = mount(
        <VideoPlayer
          {...initProps}
        />
    );

    expect(wrapper.find(`source`).length).toBe(2);
  });
});
