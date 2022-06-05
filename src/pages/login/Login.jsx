import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useAuth, useScrollToTop } from 'hooks';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loginErrorData, setLoginErrorData] = useState({
    emailError: '',
    passwordError: ''
  });

  const { loginUser } = useAuth();

  const handleUserLogin = (e) => {
    e.preventDefault();
    loginUser(loginData);
  };

  const handleValidateUser = (e) => {
    const { name, validationMessage } = e.target;
    const isValid = e.target.validity.valid;
    if (isValid) {
      setLoginErrorData({ ...loginErrorData, [`${name}Error`]: '' });
    } else {
      setLoginErrorData({ ...loginErrorData, [`${name}Error`]: validationMessage });
    }
  };

  useScrollToTop();

  return (
    <main className="login main-shadow">
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
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              onBlur={handleValidateUser}
              required
            />
            <p className="login-form__error error-state">{loginErrorData.emailError}</p>
          </section>
          <section className="password-container">
            <label htmlFor="password">Password</label>
            <section className="password-toggle">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                minLength="8"
                name="password"
                className="login__password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                onBlur={handleValidateUser}
                required
              />
              <button
                type="button"
                className="password-toggle__icon"
                onClick={() => {
                  setShowPassword((sp) => !sp);
                }}>
                {showPassword ? (
                  <span className="material-icons-outlined">visibility_off</span>
                ) : (
                  <span className="material-icons-outlined">visibility</span>
                )}
              </button>
            </section>
            <p className="login-form__error error-state">{loginErrorData.passwordError}</p>
          </section>
          <section className="additional-data">
            <section className="rememberMe-container">
              <input type="checkbox" id="rememberMe" className="login__remember-me" />
              <label htmlFor="rememberMe">Remember Me</label>
            </section>
            <button type="button" className="login__forgotPassword">
              Forgot password?
            </button>
          </section>
          <section className="submit-btn">
            <button type="submit" className="login__submit">
              Log In
            </button>
          </section>
        </form>
        <div className="login__footer">
          <p>Don&apos;t Have an account? </p>
          <button type="button" className="login__signup">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export { Login };
