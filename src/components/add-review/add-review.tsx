import * as React from "react";
import {Value} from "../../constants";

const MAX_RATING = 5;

interface AddReview {
  id: number;
  formRef: React.RefObject<HTMLFormElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
  onFormSubmit: (id: number) => void;
}

const AddReview: React.FC<AddReview> = (props) => {
  const {onFormSubmit, formRef, buttonRef, id} = props;
  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        ref={formRef}
        onSubmit={(evt): void => {
          evt.preventDefault();
          onFormSubmit(id);
        }}>
        <div className="rating">
          <div className="rating__stars">
            {new Array(MAX_RATING)
              .fill(``)
              .map((value, index) => {
                const currentIndex = index + Value.FULL;
                return (
                  <React.Fragment key={`rating-star-${currentIndex}`}>
                    <input
                      className="rating__input"
                      id={`star-${currentIndex}`}
                      type="radio"
                      name="rating"
                      value={currentIndex}/>
                    <label className="rating__label" htmlFor={`star-${currentIndex}`}>Rating {currentIndex}</label>
                  </React.Fragment>
                );
              })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text" minLength={50} maxLength={400}/>
          <div className="add-review__submit">
            <button ref={buttonRef} className="add-review__btn" type="submit" disabled={false}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddReview;
