import * as React from "react";
import MovieNavItem from "../movie-nav-item/movie-nav-item";
import {comments} from "../../mocks/comments";
import MovieTabReviews from "../movie-tab-reviews/movie-tab-reviews";
import MovieTabOverview from "../movie-tab-overview/movie-tab-overview";
import MovieTabDetails from "../movie-tab-details/movie-tab-details";
import {MovieNavTabs} from "../../constants";
import {Film, Item, Image, Video} from "../../types";
import {Subtract} from "utility-types";

interface MovieNavListProps {
  navItems: Item[];
  clickedFilm: Film;
  activeItem: string;
  onItemClick: () => void;
}

interface SubtractProps {
  id: number;
  name: string;
  image: Image;
  backgroundColor: string;
  video: Video;
  isFavorite: boolean;
}

const getTabDescription = (film: Subtract<Film, SubtractProps>, activeTab: string): JSX.Element | null => {
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

const MovieNavList: React.FC<MovieNavListProps> = (props) => {
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

export default MovieNavList;
