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

  it(`Get amount source node`, () => {
    const wrapper = mount(
        <VideoPlayer
          {...initProps}
        />
    );

    const spy = jest.spyOn(wrapper.instance()._videoRef.current, `play`);
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
