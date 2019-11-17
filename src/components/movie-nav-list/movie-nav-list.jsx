import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieNavItem from "../movie-nav-item/movie-nav-item";
import {comments} from "../../mocks/comments";
import MovieTabReviews from "../movie-tab-reviews/movie-tab-reviews";
import MovieTabOverview from "../movie-tab-overview/movie-tab-overview";
import MovieTabDetails from "../movie-tab-details/movie-tab-details";

const {arrayOf, shape, string, bool, number} = PropTypes;

class MovieNavList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleMovieNavListClick = this._handleMovieNavListClick.bind(this);

    this.state = {
      tab: `details`,
    };
  }

  render() {
    const {navItems} = this.props;

    return (
      <>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {navItems
              .map((item, index) => {
                const itemKey = `movie-nav-item-${index + 1}`;
                const isActiveTab = item.text.toLowerCase() === this.state.tab;

                return (
                  <MovieNavItem
                    key={itemKey}
                    onTabClick={this._handleMovieNavListClick}
                    active={isActiveTab}
                    text={item.text}/>
                );
              })}
          </ul>
        </nav>
        {this._getTabDescription()}
      </>
    );
  }

  _getTabDescription() {
    const {
      rating,
      scoresCount,
      description,
      director,
      starring,
      runTime,
      genre,
      released
    } = this.props.clickedFilm;

    switch (this.state.tab) {
      case (`overview`):
        return (
          <MovieTabOverview
            rating={rating}
            scoresCount={scoresCount}
            description={description}
            director={director}
            starring={starring}
          />
        );
      case (`details`):
        return (
          <MovieTabDetails
            director={director}
            runTime={runTime}
            genre={genre}
            released={released}
            starring={starring}
          />
        );
      case (`reviews`):
        return <MovieTabReviews comments={comments}/>;
      default:
        return null;
    }
  }

  _handleMovieNavListClick(tabName) {
    this.setState({tab: tabName});
  }
}

MovieNavList.propTypes = {
  navItems: arrayOf(
      shape({
        active: bool.isRequired,
        text: string.isRequired,
      })
  ),
  clickedFilm: shape({
    name: string.isRequired,
    image: shape({
      poster: string.isRequired,
      posterAlt: string.isRequired,
      background: string.isRequired,
      backgroundAlt: string.isRequired,
    }),
    director: string.isRequired,
    starring: arrayOf(string.isRequired),
    runTime: number.isRequired,
    genre: string.isRequired,
    released: number.isRequired,
  }),
};

export default MovieNavList;
