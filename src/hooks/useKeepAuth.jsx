import React, { useEffect } from "react";
import { ACTION_TYPES } from "../reducer";
import { useAuthContext } from "./useAuthContext";
import { useStateContext } from "./useStateContext";

const useKeepAuth = () => {
  const {
    setMyToken,
    setIsUserLogedIn,
    setCurrentUser,
    isUserLogedIn,
    myToken,
    currentUser,
  } = useAuthContext();

  const { stateDispatch } = useStateContext();

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

  useEffect(() => {
    if (myToken) {
      stateDispatch({
        type: ACTION_TYPES.GET_WATCH_LATER_VIDEOS,
        payload: { watched: currentUser.watchlater },
      });
    }
  }, [myToken]);
};

export { useKeepAuth };
