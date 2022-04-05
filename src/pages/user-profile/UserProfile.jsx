import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="user-profile flex">
      <div className="user-profile__wrapper">
        <h1 className="user-profile__heading">Your Profile</h1>
        <ul className="user-profile__list grid">
          <li className="user-profile__item">
            <p>Name: Manish</p>
          </li>
          <li className="user-profile__item">
            <p>Email: manishdevrani777@gmai.com</p>
          </li>
          <li className="user-profile__item user-profile--logout">
            <button className="btn btn--contained-primary">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { UserProfile };
