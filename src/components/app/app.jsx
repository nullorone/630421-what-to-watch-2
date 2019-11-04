import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PageScreen from "../page-screen/page-screen";

const {string, number, bool, shape, arrayOf} = PropTypes;

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <PageScreen {...this.props}/>;
  }
}

App.propTypes = {
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
      link: string.isRequired,
      preview: string.isRequired,
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
  genres: arrayOf(string.isRequired),
  iconNames: arrayOf(string.isRequired),
};
