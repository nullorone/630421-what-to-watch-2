import * as React from "react";
import IconsWrapper from "../../components/icons-wrapper/icons-wrapper";
import MovieCardButton from "../../components/movie-card-button/movie-card-button";
import {Button} from "../../types";

interface WithVideoControlsState {
  isPause: boolean;
}

const withVideoControls = (Component) => {
  type ComponentProps = React.ComponentProps<typeof Component>;

  class WithVideoControls extends React.PureComponent<ComponentProps, WithVideoControlsState> {
    private readonly _videoPlayerRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);
      this._videoPlayerRef = React.createRef();

      this.state = {
        isPause: false,
      };

    }

    public render(): JSX.Element {
      const buttonPlayProps: Button = {
        className: `player__play`,
        iconName: `play-s`,
        text: `Play`,
      };

      const buttonPauseProps: Button = {
        className: `player__play`,
        iconName: `pause`,
        text: `Pause`,
      };

      const playerButtonProps = this.state.isPause ? buttonPauseProps : buttonPlayProps;

      return (
        <>
          <IconsWrapper iconNames={[`add`, `pause`, `fullscreen`]}/>
          <div className="player">
            <Component ref={this._videoPlayerRef} {...this.props}/>

            <button type="button" className="player__exit">Exit</button>

            <div className="player__controls">
              <div className="player__controls-row">
                <div className="player__time">
                  <progress className="player__progress" value="30" max="100"/>
                  <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
                </div>
                <div className="player__time-value">1:30:29</div>
              </div>

              <div className="player__controls-row">
                <MovieCardButton
                  {...playerButtonProps}
                  onButtonClick={(): void => {
                    const videoPlayer = this._videoPlayerRef.current._videoRef.current;
                    if (this.state.isPause) {
                      videoPlayer.play();
                    } else {
                      videoPlayer.pause();
                    }
                    this.setState((prevState) => ({isPause: !prevState.isPause}));
                  }}/>
                <div className="player__name">Transpotting</div>

                <MovieCardButton
                  className={`player__full-screen`}
                  iconName={`fullscreen`}
                  text={`Full screen`}
                  size={{
                    width: 27,
                    height: 27,
                  }}
                />
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return WithVideoControls;
};

export default withVideoControls;
