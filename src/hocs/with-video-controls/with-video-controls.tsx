import * as React from "react";
import MovieCardButton from "../../components/movie-card-button/movie-card-button";
import {Button, Video} from "../../types";
import {Assign} from "utility-types";
import {MILLISECONDS_IN_SECOND, MINUTES_IN_HOUR} from "../../constants";

interface WithVideoControlsState {
  isPause: boolean;
}

interface WithVideoControlsProps {
  name: string;
  video: Video;
  runTime: number;
  onExitClick?: () => void;
}

const withVideoControls = (Component) => {
  type ComponentProps = React.ComponentProps<typeof Component>;
  type AssignProps = Assign<ComponentProps, WithVideoControlsProps>;

  class WithVideoControls extends React.PureComponent<AssignProps, WithVideoControlsState> {
    private readonly _videoPlayerRef: React.RefObject<HTMLVideoElement>;
    private readonly _timeValueRef: React.RefObject<HTMLDivElement>;
    private readonly _playerTogglerRef: React.RefObject<HTMLDivElement>;
    private readonly _progressRef: React.RefObject<HTMLProgressElement>;
    private readonly _timePlayFilm: number;
    private _timer: null | NodeJS.Timeout;
    private _progress: number;

    constructor(props) {
      super(props);
      this._videoPlayerRef = React.createRef();
      this._timeValueRef = React.createRef();
      this._playerTogglerRef = React.createRef();
      this._progressRef = React.createRef();
      this._timer = null;
      this._timePlayFilm = Number(this.props.runTime);
      this._progress = 0;

      this._onFullscreenButtonClick = this._onFullscreenButtonClick.bind(this);
      this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
      this._onExitButtonClick = this._onExitButtonClick.bind(this);

      this.state = {
        isPause: false,
      };
    }

    public componentDidMount(): void {
      this._getTimeEverySecond();
    }

    public componentWillUnmount(): void {
      clearInterval(this._timer);
    }

    private _getTimeEverySecond(): void {
      const getTime = (time): string => {
        const minutes = Math.floor(time / MINUTES_IN_HOUR);
        const seconds = Math.round(time % MINUTES_IN_HOUR);

        return `${minutes.toString().padStart(2, `0`)}:${seconds.toString().padStart(2, `0`)}`;
      };

      this._timer = setInterval((): void => {
        const currentFilmTime = this._timePlayFilm - this._videoPlayerRef.current.currentTime;

        // Вставляем убывающее время проигрывания фильма
        this._timeValueRef.current.innerHTML = getTime(currentFilmTime);

        // Считаем value для изменения положения ползунка прогрессбара
        this._progress = Number(((this._videoPlayerRef.current.currentTime * 100) / this._timePlayFilm).toFixed(2));
        this._progressRef.current.value = this._progress;
        this._playerTogglerRef.current.style.left = `${this._progress}%`;
      }, MILLISECONDS_IN_SECOND);
    }

    private _onPlayButtonClick(): void {
      const videoPlayer = this._videoPlayerRef.current;

      if (this.state.isPause) {
        videoPlayer.play();
      } else {
        videoPlayer.pause();
      }

      this.setState((prevState) => ({isPause: !prevState.isPause}));

      if (this.state.isPause) {
        this._getTimeEverySecond();
      } else {
        clearInterval(this._timer);
      }
    }

    private _onFullscreenButtonClick(): void {
      const videoPlayer = this._videoPlayerRef.current;

      if (!document.fullscreenElement) {
        videoPlayer.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }

    private _onExitButtonClick(evt): void {
      evt.preventDefault();
      this._videoPlayerRef.current.pause();
      if (this.props.onExitClick) {
        this.props.onExitClick();
      } else {
        window.history.back();
      }
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

      const {name, video} = this.props;
      const playerButtonProps = this.state.isPause ? buttonPauseProps : buttonPlayProps;

      return (
        <>
          <div className="player">
            <Component
              videoRef={this._videoPlayerRef}
              video={video}/>

            <button
              type="button"
              className="player__exit"
              onClick={this._onExitButtonClick}>
              Exit
            </button>

            <div className="player__controls">
              <div className="player__controls-row">
                <div className="player__time">
                  <progress className="player__progress" ref={this._progressRef} max="100"/>
                  <div className="player__toggler" ref={this._playerTogglerRef}>Toggler</div>
                </div>
                <div className="player__time-value" ref={this._timeValueRef}/>
              </div>

              <div className="player__controls-row">
                <MovieCardButton
                  {...playerButtonProps}
                  iconName={this.state.isPause ? `play-s` : `pause`}
                  onButtonClick={this._onPlayButtonClick}/>

                <div className="player__name">{name}</div>

                <MovieCardButton
                  className={`player__full-screen`}
                  iconName={`full-screen`}
                  text={`Full screen`}
                  size={{
                    width: 27,
                    height: 27,
                  }}
                  onButtonClick={this._onFullscreenButtonClick}
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
