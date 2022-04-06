import React from "react";
import "./MobileTopSidebar.css";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";

const MobileTopSidebar = () => {
  const { logoutUser } = useAuth();

  return (
    <div className="mobile-top-sidebar mt-sidebar" id="mt-sidebar">
      <section className="mt-sidebar__shown">
        <div className="mt-sidebar__top flex">
          <a href="#">
            <div className="mt-sidebar__icon">
              <span className="material-icons-outlined">clear</span>
            </div>
          </a>
          <h1 className="mt-sidebar__logo">
            <Link to="/explore">foodio</Link>
          </h1>
        </div>
        <div className="mt-sidebar__bottom mt-sidebar-btm">
          <ul className="mt-sidebar-btm__list grid">
            <li className="mt-sidebar-btm__list">
              <Link to="/explore">Home</Link>
            </li>
            <li className="mt-sidebar-btm__list">
              <Link to="/explore/history">History</Link>
            </li>
            <li className="mt-sidebar-btm__list">
              <Link to="/explore/playlist">Playlist</Link>
            </li>
            <li className="mt-sidebar-btm__list">
              <Link to="/explore/watchlater">Watch Later</Link>
            </li>
            <li className="mt-sidebar-btm__list">
              <Link to="/explore/liked">Liked</Link>
            </li>
            <li className="mt-sidebar-btm__list" onClick={() => logoutUser()}>
              Logout
            </li>
          </ul>
        </div>
      </section>
      <a className="mt-sidebar__hidden" href="#"></a>
    </div>
  );
};

export { MobileTopSidebar };
