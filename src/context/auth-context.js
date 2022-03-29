import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isUserLogedIn, setIsUserLogedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [myToken, setMyToken] = useState("");

  return (
    <AuthContext.Provider
      value={{
        isUserLogedIn,
        currentUser,
        myToken,
        setIsUserLogedIn,
        setCurrentUser,
        setMyToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
