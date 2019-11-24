import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CatalogButton from "../../components/catalog-button/catalog-button";
import {AMOUNT_ADDED_FILMS, AmountSimilarFilms, Value} from "../../constants";

const {bool, number, string, arrayOf, shape} = PropTypes;

const withAddItemButton = (Component) => {
  class WithAddItemButton extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        endIndexFilm: AmountSimilarFilms.DEFAULT,
      };

      this._catalogButtonsClickHandler = this._catalogButtonsClickHandler.bind(this);

    }

    render() {
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

    _catalogButtonsClickHandler(evt) {
      evt.preventDefault();
      this.setState((prevState) => ({
        endIndexFilm: prevState.endIndexFilm + AMOUNT_ADDED_FILMS
      }));

    }
  }

  WithAddItemButton.propTypes = {
    films: arrayOf(shape({
      id: number.isRequired,
      name: string.isRequired,
      image: shape({
        poster: string.isRequired,
        posterAlt: string.isRequired,
        preview: string.isRequired,
        previewAlt: string.isRequired,
        background: string.isRequired,
      }),
      backgroundColor: string.isRequired,
      video: shape({
        link: shape({
          mp4: string.isRequired,
          webm: string.isRequired,
        }),
        poster: string.isRequired,
      }),
      description: string.isRequired,
      rating: number.isRequired,
      scoresCount: number.isRequired,
      director: string.isRequired,
      starring: arrayOf(string.isRequired),
      runTime: number.isRequired,
      genre: string.isRequired,
      released: number.isRequired,
      isFavorite: bool.isRequired,
    })),
  };

  return WithAddItemButton;
};

export default withAddItemButton;
