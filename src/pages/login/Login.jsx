import React, { useState } from "react";
import "./Login.css";

import { Link } from "react-router-dom";
import { useAuth, useScrollToTop } from "../../hooks";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { loginUser } = useAuth();

  const handleUserLogin = (e) => {
    e.preventDefault();
    loginUser(loginData);
  };

  useScrollToTop();

  return (
    <main className="login">
      <div className="wrapper">
        <div className="login__header">
          <h1 className="login__title">Log In</h1>
          <p className="login__greeting">Welcome! Back</p>
        </div>
        <form className="login__form" onSubmit={handleUserLogin}>
          <section className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="login__email"
              autoComplete="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
          </section>
          <section className="password-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="current-password"
              className="login__password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
          </section>
          <section className="additional-data">
            <section className="rememberMe-container">
              <input
                type="checkbox"
                id="rememberMe"
                className="login__remember-me"
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </section>
            <button className="login__forgotPassword">Forgot password?</button>
          </section>
          <section className="submit-btn">
            <button type="submit" className="login__submit">
              Log In
            </button>
          </section>
        </form>
        <div className="login__footer">
          <p>Don't Have an account? </p>
          <button className="login__signup">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export { Login };
