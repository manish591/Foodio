import React from "react";
import { useAuthContext } from "../hooks";
import { Navigate } from "react-router-dom";

const RedirectRoute = ({ children }) => {
  const { myToken } = useAuthContext();

  return myToken ? <Navigate to="/explore" replace={true} /> : children;
};

export { RedirectRoute };
