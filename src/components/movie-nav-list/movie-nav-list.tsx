import React from "react";
import PropTypes from "prop-types";
import MovieNavItem from "../movie-nav-item/movie-nav-item";
import {comments} from "../../mocks/comments";
import MovieTabReviews from "../movie-tab-reviews/movie-tab-reviews";
import MovieTabOverview from "../movie-tab-overview/movie-tab-overview";
import MovieTabDetails from "../movie-tab-details/movie-tab-details";
import {MovieNavTabs} from "../../constants";

const {arrayOf, shape, string, bool, number, func} = PropTypes;

const getTabDescription = (film, activeTab) => {
  const {
    rating,
    scoresCount,
    description,
    director,
    starring,
    runTime,
    genre,
    released
  } = film;

  switch (activeTab) {
    case (MovieNavTabs.OVERVIEW):
      return (
        <MovieTabOverview
          rating={rating}
          scoresCount={scoresCount}
          description={description}
          director={director}
          starring={starring}
        />
      );
    case (MovieNavTabs.DETAILS):
      return (
        <MovieTabDetails
          director={director}
          runTime={runTime}
          genre={genre}
          released={released}
          starring={starring}
        />
      );
    case (MovieNavTabs.REVIEWS):
      return <MovieTabReviews comments={comments}/>;
    default:
      return null;
  }
};

const MovieNavList = (props) => {
  const {navItems, activeItem, onItemClick, clickedFilm} = props;

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {navItems
            .map((item, index) => {
              const itemKey = `movie-nav-item-${index + 1}`;
              const isActiveTab = item.text.toLowerCase() === activeItem;

              return (
                <MovieNavItem
                  key={itemKey}
                  onTabClick={onItemClick}
                  active={isActiveTab}
                  text={item.text}/>
              );
            })}
        </ul>
      </nav>
      {getTabDescription(clickedFilm, activeItem)}
    </>
  );
};

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
  activeItem: string.isRequired,
  onItemClick: func.isRequired,
};

export default MovieNavList;
