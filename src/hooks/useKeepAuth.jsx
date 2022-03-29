import React, { useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

const useKeepAuth = () => {
  const {
    setMyToken,
    setIsUserLogedIn,
    setCurrentUser,
    isUserLogedIn,
    myToken,
    currentUser,
  } = useAuthContext();

  useEffect(() => {
    const currentUserValue = JSON.parse(localStorage.getItem("user"));
    const tokenValue = JSON.parse(localStorage.getItem("token"));
    const isUserLogedInValue = JSON.parse(localStorage.getItem("isLogIn"));

    if (
      currentUserValue !== undefined &&
      tokenValue !== undefined &&
      isUserLogedInValue !== undefined
    ) {
      setMyToken(tokenValue);
      setCurrentUser(currentUserValue);
      setIsUserLogedIn(isUserLogedInValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("token", JSON.stringify(myToken));
    localStorage.setItem("isLogIn", JSON.stringify(isUserLogedIn));
  }, [myToken, isUserLogedIn, currentUser]);
};

export { useKeepAuth };
