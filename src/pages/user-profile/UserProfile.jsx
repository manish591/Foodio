import React from "react";
import "./UserProfile.css";

import { useAuthContext, useAuth } from "../../hooks";

const UserProfile = () => {
  const { currentUser } = useAuthContext();
  const { firstName, lastName, email } = currentUser;
  const { logoutUser } = useAuth();

  return (
    <div className="user-profile flex">
      <div className="user-profile__wrapper">
        <h1 className="user-profile__heading">Your Profile</h1>
        <ul className="user-profile__list grid">
          <li className="user-profile__item">
            <p>
              Name: {firstName} {lastName}
            </p>
          </li>
          <li className="user-profile__item">
            <p>Email: {email}</p>
          </li>
          <li className="user-profile__item user-profile--logout">
            <button
              className="btn btn--contained-primary"
              onClick={() => logoutUser()}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { UserProfile };
