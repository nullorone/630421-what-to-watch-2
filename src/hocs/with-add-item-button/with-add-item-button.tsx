import * as React from "react";
import CatalogButton from "../../components/catalog-button/catalog-button";
import {AMOUNT_ADDED_FILMS, AmountSimilarFilms, Value} from "../../constants";
import {Film} from "../../types";
import {Subtract} from "utility-types";

interface WithAddItemButtonState {
  endIndexFilm: number;
}

const withAddItemButton = (Component) => {
  type ComponentProps = React.ComponentProps<typeof Component>;
  type WithAddItemButtonProps = Subtract<ComponentProps, {films: Film[]}>

  class WithAddItemButton extends React.PureComponent<WithAddItemButtonProps, WithAddItemButtonState> {
    constructor(props) {
      super(props);

      this.state = {
        endIndexFilm: AmountSimilarFilms.DEFAULT,
      };

      this._catalogButtonsClickHandler = this._catalogButtonsClickHandler.bind(this);

    }

    private _catalogButtonsClickHandler(): void {
      this.setState((prevState) => ({
        endIndexFilm: prevState.endIndexFilm + AMOUNT_ADDED_FILMS
      }));
    }

    public render(): JSX.Element {
      const currentFilms = this.props.films.slice(Value.EMPTY, this.state.endIndexFilm);

      return (
        <>
          <Component
            {...this.props}
            films={currentFilms}
          />
          {(this.state.endIndexFilm < this.props.films.length)
          && <CatalogButton onButtonClick={this._catalogButtonsClickHandler}/>}
        </>
      );
    }
  }

  return WithAddItemButton;
};

export default withAddItemButton;
