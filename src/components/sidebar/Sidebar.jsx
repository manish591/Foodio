import React from 'react';
import './Sidebar.css';
import { Link, NavLink } from 'react-router-dom';

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
            <NavLink to="/explore" className="s-bottom__items__link">
              <section className="s-bottom__item-wrapper flex">
                <div className="s-bottom__item-icon">
                  <span className="material-icons-outlined size-30">home</span>
                </div>
                <div className="s-bottom-item-name">
                  <p>Home</p>
                </div>
              </section>
            </NavLink>
          </li>
          <li className="s-bottom__items">
            <section className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-round size-30">star_border</span>
              </div>
              <div className="s-bottom-item-name">
                <p>Trending</p>
              </div>
            </section>
          </li>
          <li className="s-bottom__items">
            <NavLink to="/explore/liked" className="s-bottom__items__link">
              <section className="s-bottom__item-wrapper flex">
                <div className="s-bottom__item-icon">
                  <span className="material-icons-outlined">favorite_border</span>
                </div>
                <div className="s-bottom-item-name">
                  <p>Liked</p>
                </div>
              </section>
            </NavLink>
          </li>
          <li className="s-bottom__items">
            <NavLink to="/explore/watchlater" className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-outlined">watch_later</span>
              </div>
              <div className="s-bottom-item-name">
                <p>Watch Later</p>
              </div>
            </NavLink>
          </li>
          <li className="s-bottom__items">
            <NavLink to="/explore/playlist" className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-outlined">playlist_play</span>
              </div>
              <div className="s-bottom-item-name">
                <p>Playlist</p>
              </div>
            </NavLink>
          </li>
          <li className="s-bottom__items">
            <NavLink to="/explore/history" className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-outlined">history</span>
              </div>
              <div className="s-bottom-item-name">
                <p>History</p>
              </div>
            </NavLink>
          </li>
          <li className="s-bottom__items">
            <NavLink to="/explore/uploads" className="s-bottom__item-wrapper flex">
              <div className="s-bottom__item-icon">
                <span className="material-icons-outlined">videocam</span>
              </div>
              <div className="s-bottom-item-name">
                <p>Your Uploads</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
};

export { Sidebar };
