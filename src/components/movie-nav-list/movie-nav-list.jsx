import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieNavItem from "../movie-nav-item/movie-nav-item";
import {TypeCol, AMOUNT_COMMENT_IN_COL, Value} from "../../constants";
import MovieCardCol from "../movie-card-col/movie-card-col";
import MovieCardDetailsItem from "../movie-card-details-item/movie-card-details-item";
import MovieCardRow from "../movie-card-row/movie-card-row";
import {comments} from "../../mocks/comments";
import MovieCardReview from "../movie-card-review/movie-card-review";

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
      scoreCount,
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
          <>
            <div className="movie-rating">
              <div className="movie-rating__score">{rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">Very good</span>
                <span className="movie-rating__count">{scoreCount} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>{description}</p>

              <p className="movie-card__director"><strong>Director: {director}</strong></p>

              <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
            </div>
          </>
        );
      case (`details`):
        return (
          <MovieCardRow type={TypeCol.TEXT}>
            <MovieCardCol type={TypeCol.TEXT}>
              <MovieCardDetailsItem name={`Director`} value={director}/>
              <MovieCardDetailsItem
                name={`Starring`}
                value={starring}
              />
            </MovieCardCol>

            <MovieCardCol type={TypeCol.TEXT}>
              <MovieCardDetailsItem name={`Run Time`} value={runTime}/>
              <MovieCardDetailsItem name={`Genre`} value={genre}/>
              <MovieCardDetailsItem name={`Released`} value={released}/>
            </MovieCardCol>
          </MovieCardRow>
        );
      case (`reviews`):
        let commentReview = [];

        for (let i = Value.EMPTY; i < comments.length; i = i + AMOUNT_COMMENT_IN_COL) {
          const cardReviews = comments
            .slice(i, i + AMOUNT_COMMENT_IN_COL)
            .map((comment) => {
              const keyReview = `movie-card-review-${comment.id}`;
              return (
                <MovieCardReview key={keyReview} comment={comment}/>
              );
            });

          commentReview.push(
              <MovieCardCol key={`card-col-${i}`} type={TypeCol.REVIEWS}>
                {cardReviews}
              </MovieCardCol>
          );
        }

        return (
          <MovieCardRow type={TypeCol.REVIEWS}>
            {commentReview}
          </MovieCardRow>
        );
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
