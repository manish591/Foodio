import React from "react";
import "./NotFound.css";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found flex">
      <div className="not-found__wrapper">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__desc">Something Went wrong!</p>
        <Link to="/explore">
          <button className="btn btn--outlined-secondary not-found__action-btn">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export { NotFound };
