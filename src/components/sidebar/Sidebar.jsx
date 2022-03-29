import React from "react";
import "./Sidebar.css";

import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <section className="sidebar__top s-top">
        <div className="s-top__wrapper">
          <ul className="s-top__list flex">
            <li className="s-top__items s-top__items--menu">
              <span className="material-icons-round size-30">notes</span>
            </li>
            <li className="s-top__items s-top__items--logo">
              <h2 className="s-top__logo">
                <Link to="/explore">foodio</Link>
              </h2>
            </li>
          </ul>
        </div>
      </section>
      <section className="sidebar__bottom s-bottom grid">
        <ul className="s-bottom__list">
          <li className="s-bottom__items">
            <section className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-outlined size-30">home</span>
              </div>
              <div className="s-bottom-item-name">
                <NavLink to="/explore">Home</NavLink>
              </div>
            </section>
          </li>
          <li className="s-bottom__items">
            <section className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-round size-30">
                  star_border
                </span>
              </div>
              <div className="s-bottom-item-name">
                <p>Trending</p>
              </div>
            </section>
          </li>
          <li className="s-bottom__items">
            <section className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-round size-30">live_tv</span>
              </div>
              <div className="s-bottom-item-name">
                <NavLink to="/explore/liked">Liked</NavLink>
              </div>
            </section>
          </li>
          <li className="s-bottom__items">
            <section className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-outlined size-30">
                  grid_view
                </span>
              </div>
              <div className="s-bottom-item-name">
                <NavLink to="/explore/watchlater">Watch Later</NavLink>
              </div>
            </section>
          </li>
          <li className="s-bottom__items">
            <section className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-outlined size-30">explore</span>
              </div>
              <div className="s-bottom-item-name">
                <NavLink to="/explore/playlist">Playlist</NavLink>
              </div>
            </section>
          </li>
          <li className="s-bottom__items">
            <section className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-outlined size-30">today</span>
              </div>
              <div className="s-bottom-item-name">
                <NavLink to="/explore/history">History</NavLink>
              </div>
            </section>
          </li>
          <li className="s-bottom__items">
            <section className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-outlined size-30">
                  settings
                </span>
              </div>
              <div className="s-bottom-item-name">
                <p>Settings</p>
              </div>
            </section>
          </li>
        </ul>
        <ul className="s-bottom__list s-bottom__list--logout">
          <li className="s-bottom__items">
            <section className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-outlined size-30">logout</span>
              </div>
              <div className="s-bottom-item-name">
                <p>Logout</p>
              </div>
            </section>
          </li>
        </ul>
      </section>
    </div>
  );
};

export { Sidebar };
