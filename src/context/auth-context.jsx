import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isUserLogedIn, setIsUserLogedIn] = useState(JSON.parse(localStorage.getItem('isLogIn')));
  const [myToken, setMyToken] = useState(JSON.parse(localStorage.getItem('token')));
  const [currentUser, setCurrentUser] = useState('');

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isUserLogedIn,
        currentUser,
        myToken,
        setIsUserLogedIn,
        setCurrentUser,
        setMyToken
      }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { AuthContextProvider, AuthContext };
