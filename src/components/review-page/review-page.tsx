import * as React from "react";
import Logo from "../logo/logo";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import UserBlock from "../user-block/user-block";
import MovieCardPicture from "../movie-card-picture/movie-card-picture";
import {Image} from "../../types";
import {Img, Url} from "../../constants";
import AddReview from "../add-review/add-review";
import withSubmitItem from "../../hocs/with-submit-item/with-submit-item";

interface ReviewPageProps {
  id: number;
  filmName: string;
  image: Image;
  avatar?: string;
}

const ReviewPage: React.FC<ReviewPageProps> = (props) => {
  const {id, filmName, image, avatar} = props;

  const AddReviewWrapped = withSubmitItem(AddReview);

  const {
    poster,
    posterAlt,
    background,
    backgroundAlt,
  } = image;

  const breadcrumbs = [
    {
      text: filmName,
      link: `/films/${id}`
    },
    {
      text: `Add review`,
    }
  ];
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <MovieCardPicture
          className={`movie-card__bg`}
          picture={{
            src: background,
            alt: backgroundAlt,
            width: null,
            height: null,
          }}/>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo light={false}/>

          <Breadcrumbs breadcrumbs={breadcrumbs}/>

          <UserBlock avatarSrc={`${Url.BASE}${avatar}`}/>
        </header>

        <MovieCardPicture
          className={`movie-card__poster movie-card__poster--small`}
          picture={{
            src: poster,
            alt: posterAlt,
            width: Img.BIG.width,
            height: Img.BIG.height,
          }}/>
      </div>

      <AddReviewWrapped id={id}/>

    </section>
  );
};

export default ReviewPage;
