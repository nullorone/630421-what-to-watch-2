import * as React from "react";
import {Value} from "../../constants";
import {Link} from "react-router-dom";

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
          const {text, link = `#`} = breadcrumb;
          return (
            <li className="breadcrumbs__item" key={`breadcrumb-review-${index + Value.FULL}`}>
              <Link to={link} className="breadcrumbs__link">{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
