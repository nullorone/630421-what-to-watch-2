import * as React from "react";
import withVideoControls from "../with-video-controls/with-video-controls";
import VideoPlayer from "../../components/video-player/video-player";
import {Film} from "../../types";
import {Assign} from "utility-types";
import {Operation} from "../../reducer/data/data";
import store from "../../reducer/store";
import {Value} from "../../constants";

interface WithTogglePlayerState {
  isPlayer: boolean;
}

interface WithTogglePlayerProps {
  films?: Film[];
  promo?: Film;
  clickedFilm?: Film;
  genres?: string[];
  selectedGenre?: string;
  onSelectedGenreClick?: () => void;
}

const withTogglePlayer = (Component) => {
  type ComponentProps = React.ComponentProps<typeof Component>;
  type AssignProps = Assign<ComponentProps, WithTogglePlayerProps>;

  class WithTogglePlayer extends React.PureComponent<AssignProps, WithTogglePlayerState> {

    constructor(props) {
      super(props);

      this.state = {
        isPlayer: false,
      };

    }

    public render(): JSX.Element {
      const VideoPlayerWrapped = withVideoControls(VideoPlayer);
      const {id, name, video, runTime} = this.props.clickedFilm || this.props.promo;

      return (
        <>
          {this.state.isPlayer &&
            <VideoPlayerWrapped
              name={name}
              video={video}
              runTime={runTime}
              onExitClick={(): void => {
                this.setState((prevState) => ({isPlayer: !prevState.isPlayer}));
              }}
            />}
          {!this.state.isPlayer &&
            <Component
              {...this.props}
              onButtonClick={(): void => {
                this.setState((prevState) => ({isPlayer: !prevState.isPlayer}));
              }}
              onListClick={(add: number): void => {
                if (Number(add) === Value.FULL) {
                  store.dispatch(Operation.sendFavorite(id, Value.EMPTY, this.props.films, (!this.props.clickedFilm && this.props.promo)));
                } else if (Number(add) === Value.EMPTY) {
                  store.dispatch(Operation.sendFavorite(id, Value.FULL, this.props.films, (!this.props.clickedFilm && this.props.promo)));
                }
              }}
            />}
        </>
      );
    }
  }

  return WithTogglePlayer;
};

export default withTogglePlayer;
