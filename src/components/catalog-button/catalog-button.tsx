import * as React from "react";

interface CatalogButtonProps {
  onButtonClick: () => void;
}

const CatalogButton: React.FC<CatalogButtonProps> = (props) => {
  const {onButtonClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(evt): void => {
          evt.preventDefault();
          onButtonClick();
        }}
      >
        ShowMore
      </button>
    </div>
  );
};

export default CatalogButton;
