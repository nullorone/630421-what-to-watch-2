import * as React from "react";
import Logo from "../logo/logo";
import withChangeItem from "../../hocs/with-change-item/with-change-item";
import MovieCardSmallList from "../movie-card-small-list/movie-card-small-list";
import {Film, UserData} from "../../types";
import UserBlock from "../user-block/user-block";
import {Url} from "../../constants";

interface MyListPageProps {
  favoriteFilms: Film[];
  user: UserData;
}

const MovieCardSmallListWrapped = withChangeItem(MovieCardSmallList);

const MyListPage: React.FC<MyListPageProps> = (props) => {
  const {favoriteFilms, user} = props;
  const {avatarUrl} = user;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light={false}/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock avatarSrc={`${Url.BASE}${avatarUrl}`}/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieCardSmallListWrapped films={favoriteFilms}/>
      </section>

      <footer className="page-footer">
        <Logo light={true}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default MyListPage;
