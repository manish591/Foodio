import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <section className="navbar__wrapper flex">
        <ul className="navbar__list navbar__list--logos flex">
          <li className="navbar__item navbar__menu--hide">
            <a href="#mt-sidebar">
              <div className="navbar__icon">
                <span className="material-icons-outlined">notes</span>
              </div>
            </a>
          </li>
          <li className="navbar__item navbar__item--logo">
            <h1 className="navbar__logo">foodio</h1>
          </li>
          <li className="navbar__item navbar--hide">
            <section className="navbar__search-group flex">
              <div className="navbar__icon navbar-icon--search">
                <span className="material-icons-outlined">search</span>
              </div>
              <div className="navbar__input-field">
                <input
                  type="text"
                  className="navbar__input"
                  placeholder="Search food here..."
                />
              </div>
              <div className="navbar__icon navbar-icon--search">
                <span
                  className="material-icons-outlined"
                  style={{ opacity: "0.5" }}
                >
                  keyboard_voice
                </span>
              </div>
            </section>
          </li>
        </ul>
        <ul className="navbar__list navbar__list--right flex">
          <li className="navbar__item navbar__item--display">
            <button className="btn btn--contained-primary navbar__upload">
              Upload Video
            </button>
          </li>
          <li className="navbar__item navbar__item--display">
            <div className="navbar__icon">
              <span className="material-icons-outlined">notifications</span>
            </div>
          </li>
          <li className="navbar__item navbar__menu--hide">
            <div className="navbar__icon">
              <span className="material-icons-outlined">search</span>
            </div>
          </li>
          <li className="navbar__item navbar__item--profile">
            <div className="navbar__icon">
              <span className="material-icons-outlined">person</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export { Navbar };
