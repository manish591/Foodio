import React from "react";
import "./MobileBottomSidebar.css";

const MobileBottomSidebar = () => {
  return (
    <div className="mb-sidebar">
      <section className="mb-sidebar__wrapper">
        <ul className="mb-sidebar__list flex">
          <li className="mb-sidebar__item">
            <section className="mb-sidebar__item-wrapper flex">
              <div className="mb__item-icon">
                <span className="material-icons-outlined">home</span>
              </div>
              <div className="mb-item-name">
                <p>Home</p>
              </div>
            </section>
          </li>
          <li className="mb-sidebar__item">
            <section className="mb-sidebar__item-wrapper flex">
              <div className="mb__item-icon">
                <span className="material-icons-outlined">explore</span>
              </div>
              <div className="mb-item-name">
                <p>Discover</p>
              </div>
            </section>
          </li>
          <li className="mb-sidebar__item">
            <section className="mb-sidebar__item-wrapper flex">
              <div className="mb__item-icon mb__item-icon--main">
                <span className="material-icons-outlined upload-icon">
                  videocam
                </span>
              </div>
            </section>
          </li>
          <li className="mb-sidebar__item">
            <section className="mb-sidebar__item-wrapper flex">
              <div className="mb__item-icon">
                <span className="material-icons-round">star_border</span>
              </div>
              <div className="mb-item-name">
                <p>Trending</p>
              </div>
            </section>
          </li>
          <li className="mb-sidebar__item">
            <section className="mb-sidebar__item-wrapper flex">
              <div className="mb__item-icon">
                <span className="material-icons-outlined">notifications</span>
              </div>
              <div className="mb-item-name">
                <p>Activity</p>
              </div>
            </section>
          </li>
        </ul>
      </section>
    </div>
  );
};

export { MobileBottomSidebar };
