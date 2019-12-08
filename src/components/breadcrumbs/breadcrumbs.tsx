import * as React from "react";
import {Value} from "../../constants";

type BreadcrumbsType = {
  text: string;
  link?: string;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbsType[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {props.breadcrumbs.map((breadcrumb, index) => {
          const {text, link} = breadcrumb;
          return (
            <li className="breadcrumbs__item" key={`breadcrumb-review-${index + Value.FULL}`}>
              <a href={link} className="breadcrumbs__link">{text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
