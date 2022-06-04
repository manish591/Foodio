import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { useAuth, useScrollToTop } from 'hooks';

const Signup = () => {
  const [userSignupData, setUserSignupData] = useState({
    firstname: '',
    lastname: 'dev',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { signupUser } = useAuth();

  const handleUserSignup = (e) => {
    e.preventDefault();
    if (userSignupData.password !== userSignupData.confirmPassword) return;
    signupUser(userSignupData);
  };

  useScrollToTop();

  return (
    <main className="signup">
      <div className="wrapper">
        <div className="signup__header">
          <h1 className="signup__title">Sign Up</h1>
          <p className="signup__greeting">To Continue, Sign Up</p>
        </div>
        <form className="signup__form" onSubmit={handleUserSignup}>
          <section className="name-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="signup__name"
              autoComplete="name"
              value={userSignupData.firstname}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  firstname: e.target.value
                })
              }
              required
            />
          </section>
          <section className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="signup__email"
              autoComplete="email"
              value={userSignupData.email}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  email: e.target.value
                })
              }
              required
            />
          </section>
          <section className="password-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="new-password"
              className="signup__password"
              value={userSignupData.password}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  password: e.target.value
                })
              }
              required
            />
          </section>
          <section className="password-container">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="new-password"
              className="signup__password"
              value={userSignupData.confirmPassword}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  confirmPassword: e.target.value
                })
              }
              required
            />
          </section>
          <section className="submit-btn">
            <button type="submit" className="signup__submit">
              Sign Up
            </button>
          </section>
        </form>
        <div className="signup__footer">
          <p>Already have an account?</p>
          <button type="button" className="signup__signup">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export { Signup };
