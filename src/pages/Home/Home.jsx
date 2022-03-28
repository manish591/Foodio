import React from "react";
import "./Home.css";

import food from "../../assets/photo-1475090169767-40ed8d18f67d-removebg-preview.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page hm-pg">
      <div className="hm-pg__wrapper">
        <header className="hm-pg__header">
          <div className="hm-pg__header-wrapper">
            <nav className="hm-pg__navbar home-nav flex">
              <ul className="home-nav__list">
                <li>
                  <h3 className="home-nav__title">foodio</h3>
                </li>
              </ul>
              <ul className="home-nav__list home-nav__list--links flex">
                <li className="home-nav__items">Home</li>
                <li className="home-nav__items">Delivery</li>
                <li className="home-nav__items">Pricing</li>
                <li className="home-nav__items">Faq</li>
                <li className="home-nav__items">Contact</li>
                <li className="home-nav__items">
                  <button className="btn btn--contained-primary home-nav__get-started">
                    <Link to="/login">Get Started</Link>
                  </button>
                </li>
              </ul>
            </nav>
            <section className="home-hero grid">
              <div className="home-hero__content">
                <p>The No 1 Food Related Videos</p>
                <h1 className="home-hero__title">
                  Foodio Brings you the best food content ever, Join The
                  Community!
                </h1>
                <p>
                  Foodio brings you the best curated resources about food, so
                  that you don't have to waste time searching about food videos.
                  Join the exiciting and growing community.
                </p>
                <div className="home-hero__actions flex">
                  <button className="btn btn--contained-primary">
                    <Link to="/login">Get Started</Link>
                  </button>
                  <button className="btn btn--text home-hero__explore">
                    <Link to="/explore">Explore</Link>
                  </button>
                </div>
              </div>
              <div className="home-hero__img-container">
                <img src={food} alt="" />
              </div>
            </section>
          </div>
        </header>
        <main className="hm-pg__main home-main-pg">
          <div className="home-main-pg__wrapper">
            <h1 className="home-main-pg__title">
              Foodio Is Video Library For The Food Lovers! We Have Curated The
              Best Food Content For You!
            </h1>
            <p className="home-main-pg__description">
              Enjoy food here! Watch Videos, like videos, save them to watch
              later, you can always see your history and many more features
              coming.
            </p>
          </div>
        </main>
        <footer className="footer">
          <div className="footer__wrapper flow-space-2">
            <p className="footer__brand">foodio</p>
            <ul className="footer__list flex">
              <li className="footer__items">Home</li>
              <li className="footer__items">Explore</li>
              <li className="footer__items">Login</li>
              <li className="footer__items">Signup</li>
            </ul>
            <p className="footer__description">
              Foodio provides you the best food curated videos. Join the
              community and start exploring food content.
            </p>
            <p className="footer__copyright">
              Copyright 2022. All Rights Reserved
            </p>
            <ul className="footer__socials flex">
              <li className="footer__items">
                <a href="#">Github</a>
              </li>
              <li className="footer__items">
                <a href="#">Twitter</a>
              </li>
              <li className="footer__items">
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Home };
