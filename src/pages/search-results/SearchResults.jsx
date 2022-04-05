import React from "react";
import "./SearchResults.css";
import { Thumbnail } from "../../components";

const SearchResults = () => {
  return (
    <div className="search-results">
      <div className="search-results__wrapper">
        <h2 className="search-results__title fw-100">
          Showing Search Results for <strong>"Fruits Salad</strong>"
        </h2>
        <section className="search-results__container grid">
          <div
            className="box"
            style={{ blockSize: "200px", background: "var(--surface3)" }}
          ></div>
          <div
            className="box"
            style={{ blockSize: "200px", background: "var(--surface3)" }}
          ></div>
          <div
            className="box"
            style={{ blockSize: "200px", background: "var(--surface3)" }}
          ></div>
          <div
            className="box"
            style={{ blockSize: "200px", background: "var(--surface3)" }}
          ></div>
        </section>
      </div>
    </div>
  );
};

export { SearchResults };
