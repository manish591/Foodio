import React, { useState } from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setIsUploadFormOpen }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchVideos = (e) => {
    e.preventDefault();
    if (searchQuery === '') return;
    navigate(`/explore/search?query=${searchQuery}`);
  };

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
          <li className="navbar__item">
            <section className="navbar__search-group flex">
              <div className="navbar__icon navbar-icon--search">
                <span className="material-icons-outlined">search</span>
              </div>
              <form className="navbar__input-field" onSubmit={handleSearchVideos}>
                <input
                  type="text"
                  className="navbar__input"
                  placeholder="Search food here..."
                  name="food-video-search"
                  id="food-video-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <label htmlFor="food-video-search" className="sr-only">
                  search
                </label>
              </form>
              {searchQuery && (
                <button
                  type="button"
                  className="navbar__icon navbar-icon--search navbar-icon__search-clear"
                  onClick={() => {
                    setSearchQuery('');
                  }}>
                  <span className="material-icons-outlined">clear</span>
                </button>
              )}
            </section>
          </li>
        </ul>
        <ul className="navbar__list navbar__list--right flex">
          <li className="navbar__item navbar__item--display">
            <button
              type="button"
              className="btn btn--contained-primary navbar__upload flex"
              onClick={() => setIsUploadFormOpen((uf) => !uf)}>
              <span className="material-icons-outlined">file_upload</span>
              <p>Upload</p>
            </button>
          </li>
          <li className="navbar__item navbar__menu--hide">
            <button
              type="button"
              className="navbar__icon"
              onClick={() => {
                setShowSearchBar(true);
              }}>
              <span className="material-icons-outlined">search</span>
            </button>
          </li>
          <li className="navbar__item navbar__item--profile">
            <Link to="/explore/profile">
              <div className="navbar__icon">
                <span className="material-icons-outlined">person</span>
              </div>
            </Link>
          </li>
        </ul>
        {showSearchBar && (
          <div className="navbar__item navbar--mobile-search mobile-search">
            <section className="mobile-search__search-group flex">
              <button
                type="button"
                className="navbar__icon navbar-icon--search"
                onClick={() => {
                  setSearchQuery('');
                  setShowSearchBar(false);
                }}>
                <span className="material-icons-outlined">arrow_back</span>
              </button>
              <form className="mobile-search__input-field" onSubmit={handleSearchVideos}>
                <input
                  type="text"
                  className="mobile-search__input"
                  placeholder="Search food here..."
                  name="search"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <label htmlFor="search" className="sr-only">
                  search
                </label>
              </form>
            </section>
          </div>
        )}
      </section>
    </div>
  );
};

Navbar.propTypes = {
  setIsUploadFormOpen: PropTypes.func.isRequired
};

export { Navbar };
