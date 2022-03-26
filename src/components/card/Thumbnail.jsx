import React from "react";
import "./Thumbnail.css";

const Thumbnail = () => {
  return (
    <div className="thumbnail">
      <section className="thumbnail__image-container">
        <img
          src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="thumbnail__img"
        />
      </section>
      <section className="thumbnail__content th-content flex">
        <div className="th-content__profile">
          <div className="avatar avatar--large avatar--initial">
            <p>SK</p>
          </div>
        </div>
        <div className="th-content__description">
          <h3 className="thumbnail__title">My Thumbnail Title</h3>
          <p className="thumbnail__author">Manish Devrani</p>
          <span className="thumbnail__counts">12M views . 2 days ago</span>
        </div>
        <div className="th-content__actions">
          <span class="material-icons-outlined">more_vert</span>
        </div>
      </section>
    </div>
  );
};

export { Thumbnail };
