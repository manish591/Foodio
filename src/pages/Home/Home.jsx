import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { ACTION_TYPES } from 'reducer';
import { CategoryCard } from 'components';
import { useAuthContext, useAuth, useStateContext, useScrollToTop } from 'hooks';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { state, stateDispatch } = useStateContext();
  const { myToken } = useAuthContext();
  const { logoutUser } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/categories');
        if (res.status === 200) {
          stateDispatch({
            type: ACTION_TYPES.GET_CATEGORIES,
            payload: { categories: res.data.categories }
          });
          setIsLoading(false);
        }
      } catch (err) {
        toast.error('Unable to get data');
        setIsLoading(false);
      }
    })();
  }, []);

  useScrollToTop();

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
                <li className="home-nav__items">
                  {myToken ? (
                    <button
                      type="button"
                      className="btn btn--contained-primary home-nav__get-started"
                      onClick={() => {
                        logoutUser();
                      }}>
                      Logout
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn--contained-primary home-nav__get-started">
                      <Link to="/login">Get Started</Link>
                    </button>
                  )}
                </li>
              </ul>
            </nav>
            <section className="home-hero grid">
              <div className="home-hero__content">
                <p>The No 1 Food Related Videos</p>
                <h1 className="home-hero__title">
                  Foodio Brings you the best food content ever, Join The Community!
                </h1>
                <p>
                  Foodio brings you the best curated resources about food, so that you don&apos;t
                  have to waste time searching about food videos. Join the exiciting and growing
                  community.
                </p>
                <div className="home-hero__actions flex">
                  {myToken ? (
                    <button
                      type="button"
                      className="btn btn--contained-primary"
                      style={{ backgroundColor: 'var(--brand)' }}>
                      <a href="#categories">View Categories</a>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn--contained-primary"
                      style={{ backgroundColor: 'var(--brand)' }}>
                      <Link to="/login">Get Started</Link>
                    </button>
                  )}
                  <button type="button" className="btn btn--text home-hero__explore">
                    <Link to="/explore">Explore</Link>
                  </button>
                </div>
              </div>
              <div className="home-hero__img-container">
                <img
                  src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1654433237/photo-1475090169767-40ed8d18f67d-removebg-preview_o5nlwl.png"
                  alt="food"
                />
              </div>
            </section>
          </div>
        </header>
        <main className="hm-pg__main home-main-pg">
          <div className="home-main-pg__wrapper">
            <h1 className="home-main-pg__title">
              Foodio Is Video Library For The Food Lovers! We Have Curated The Best Food Content For
              You!
            </h1>
            <p className="home-main-pg__description">
              Enjoy food here! Watch Videos, like videos, save them to watch later, you can always
              see your history and many more features coming.
            </p>
          </div>
        </main>
        <section className="home-page__categories hm-categories" id="categories">
          <div className="home-page__categories__wrapper">
            <h1>Featured Categories</h1>
            <section className="hm-categories__container flex">
              {isLoading ? null : (
                <>
                  {state.categoryData.map((item) => {
                    return (
                      <div className="hm-categories__item" key={item._id}>
                        <CategoryCard _id={item._id} categoryName={item.categoryName} />
                      </div>
                    );
                  })}
                </>
              )}
            </section>
          </div>
        </section>
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
              Foodio provides you the best food curated videos. Join the community and start
              exploring food content.
            </p>
            <p className="footer__copyright">Copyright 2022. All Rights Reserved</p>
            <ul className="footer__socials flex">
              <li className="footer__items">
                <a href="https://github.com/manish591">Github</a>
              </li>
              <li className="footer__items">
                <a href="https://twitter.com/manishdevrani77">Twitter</a>
              </li>
              <li className="footer__items">
                <a href="https://www.linkedin.com/in/manishdevrani77/">LinkedIn</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Home };
