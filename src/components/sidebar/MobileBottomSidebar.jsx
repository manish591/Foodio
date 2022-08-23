import React from 'react';
import { Link } from 'react-router-dom';
import './MobileBottomSidebar.css';
import PropTypes from 'prop-types';

const MobileBottomSidebar = ({ setIsUploadFormOpen }) => {
  return (
    <div className="mb-sidebar">
      <section className="mb-sidebar__wrapper">
        <ul className="mb-sidebar__list flex">
          <li className="mb-sidebar__item">
            <section className="mb-sidebar__item-wrapper flex">
              <div className="mb__item-icon">
                <span className="material-icons-outlined">home</span>
              </div>
              <Link to="/explore" className="mb-item-name">
                <p>Home</p>
              </Link>
            </section>
          </li>
          <li className="mb-sidebar__item">
            <section className="mb-sidebar__item-wrapper flex">
              <div className="mb__item-icon">
                <span className="material-icons-outlined">favorite_border</span>
              </div>
              <Link to="/explore/liked" className="mb-item-name">
                <p>Liked</p>
              </Link>
            </section>
          </li>
          <li className="mb-sidebar__item">
            <section className="mb-sidebar__item-wrapper flex">
              <button
                type="button"
                className="mb__item-icon mb__item-icon--main"
                onClick={() => setIsUploadFormOpen((uf) => !uf)}>
                <span className="material-icons-outlined upload-icon">videocam</span>
              </button>
            </section>
          </li>
          <li className="mb-sidebar__item">
            <section className="mb-sidebar__item-wrapper flex">
              <div className="mb__item-icon">
                <span className="material-icons-outlined">playlist_play</span>
              </div>
              <Link to="/explore/playlist" className="mb-item-name">
                <p>Playlist</p>
              </Link>
            </section>
          </li>
          <li className="mb-sidebar__item">
            <Link to="/explore/profile">
              <section className="mb-sidebar__item-wrapper flex">
                <div className="mb__item-icon">
                  <span className="material-icons-outlined">person</span>
                </div>
                <div className="mb-item-name">
                  <p>Profile</p>
                </div>
              </section>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

MobileBottomSidebar.propTypes = {
  setIsUploadFormOpen: PropTypes.func.isRequired
};

export { MobileBottomSidebar };
